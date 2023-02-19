import Loading from "../components/Loading";
import LoadingFailed from "../components/LoadingFailed";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import capitaliseFirstLetter from "../utilities/capitaliseFirstLetter";
import BookInfoModal from "../components/BookInfoModal";
import ReactTooltip from "react-tooltip";

const GenresAll = ({ addShelf, shelf, removeFromShelf }) => {
  const [genresDisplay, setGenresDisplay] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [bookModal, setBookModal] = useState([]);

  const API_KEY = import.meta.env.VITE_API_KEY;

  //! Save Icons
  const bookmarkIconOutline = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  );
  const bookmarkIconSolid = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
    </svg>
  );

  //! Open Pop up
  const handleClick = (title, img, description, amazon, author) => {
    setBookModal([title, img, description, amazon, author]);
    setIsOpen(true);
  };

  //! Add/remove items to/fro bookshelf
  const handleShelf = (title, img, description, amazon, author) => {
    // Find the index of item in shelf (if any)
    const getIndex = () => {
      for (let item of shelf) {
        if (item[0] === title) {
          let i = shelf.indexOf(item);
          console.log("index", i);
          return i;
        } else {
          continue;
        }
      }
    };
    //! If item is in shelf, remove it, otherwise add it to shelf
    shelf.some((ele) => ele[0] === title)
      ? removeFromShelf(getIndex())
      : addShelf([title, img, description, amazon, author]);
  };

  //! Add to arr, remove if it already exist
  const handleSelect = (gen) => {
    if (genresDisplay.includes(gen)) {
      const titles = genresDisplay.filter((title) => title !== gen);
      setGenresDisplay(titles);
    } else {
      setGenresDisplay([gen, ...genresDisplay]);
    }
  };

  //! Fetch Data: Bestsellers in different categories (about 10-15 books)
  const { data, status } = useFetch(
    `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${API_KEY}`
  );

  if (status === "loading") return <Loading />;
  if (status === "error") return <LoadingFailed />;

  //! Display Books on the right column
  const displayBooks = (num) => {
    const display = data?.results?.lists[num]?.books.map((item) => {
      const img = item?.book_image;
      const title = item?.title;
      const author = item?.author;
      const description = item?.description;
      const amazon = item?.amazon_product_url;
      return (
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="flex-shrink-0 w-1/6 xl:w-1/5 h-fit m-4 lg:w-1/3 md:w-1/3"
        >
          <img
            onClick={() => handleClick(title, img, description, amazon, author)}
            key={title}
            src={img}
            className="cursor-pointer -z-10 hover:opacity-50 hover:z-0 transition duration-300 ease-in-out"
          />
          <h3
            onClick={() => handleClick(title, img, description, amazon, author)}
            className="py-2 cursor-pointer xl:text-xl text-2xl"
          >
            {capitaliseFirstLetter(title)}
          </h3>
          <h4 className="hover:opacity-50 cursor-pointer transition duration-300 ease-in-out">
            {author}
          </h4>
          <p className="py-2">{description}</p>
          <button
            data-tip={
              shelf.some((title) => title[0] === item?.title)
                ? "Remove from Bookshelf"
                : "Add to Bookshelf"
            }
            className="hover:opacity-50 transition duration-300 ease-in-out py-2"
            onClick={() => handleShelf(title, img, description, amazon, author)}
          >
            {shelf.some((title) => title[0] === item?.title)
              ? bookmarkIconSolid
              : bookmarkIconOutline}
          </button>
          <ReactTooltip
            className="!bg-fgreen !rounded-none !ml-6"
            arrowColor="!fgreen"
            place="right"
          />
        </div>
      );
    });
    return display;
  };

  //! Display left column of genres
  const displayGenres = () => {
    return (
      <div
        data-aos="fade-right"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        className="w-96 sticky top-16 -z-1"
      >
        <h3 className="flex ml-16 md:ml-4 pt-8 pb-4">Select Genres</h3>
        {data?.results?.lists?.map((item) => {
          // Get Index of the arr in data
          let index = "";
          if (item.display_name === item.display_name) {
            const i = data?.results?.lists?.indexOf(item);
            index = i;
          }
          return (
            <ul className="flex ml-16 md:ml-4">
              <li
                key={item.display_name}
                onClick={() => {
                  handleSelect(index);
                }}
                className={
                  genresDisplay.includes(index)
                    ? "cursor-pointer hover:opacity-80 transition duration-300 ease-in-out py-1"
                    : "opacity-40 cursor-pointer hover:opacity-80 transition duration-300 ease-in-out py-1"
                }
              >
                {item.display_name}
              </li>
            </ul>
          );
        })}
      </div>
    );
  };

  //! Get numbers of total books
  let i = null;
  const numOfBooks = () => {
    genresDisplay.map((item) => {
      i += displayBooks(item).length;
    });
    return i;
  };

  return (
    <>
      <BookInfoModal
        open={isOpen}
        bookModal={bookModal}
        onClose={() => setIsOpen(false)}
        shelf={shelf}
        addShelf={addShelf}
        removeFromShelf={removeFromShelf}
      ></BookInfoModal>

      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        className="my-24 flex justify-center"
      >
        <h1 className="md:mb-8 md:text-5xl">Browse Books</h1>
        <p className="font-sans-serif">{numOfBooks()}</p>
      </div>

      <div className="m-auto flex md:block">
        <div className="">{displayGenres()}</div>
        <div className=" pt-16 flex flex-wrap justify-left md:justify-center">
          {genresDisplay.map((item) => {
            return displayBooks(item);
          })}
        </div>
      </div>
    </>
  );
};

export default GenresAll;
