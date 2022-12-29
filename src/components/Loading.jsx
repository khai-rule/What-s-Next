import "tw-elements";

const Loading = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="600"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <div className="fixed inset-0 z-1 bg-pale-yellow bg-opacity-75 flex justify-center items-center z-50">
        <div
          class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
