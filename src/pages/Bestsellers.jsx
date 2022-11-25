import { useNavigate } from "react-router-dom";
import BestsellersDisplay from "../components/BestsellersDisplay";

const Bestsellers = ( {bookInfo} ) => {

    const navigate = useNavigate()

    const getData = (data) => {bookInfo(data)}

    return (
        <div className="bg-pale-yellow">
            <button
                onClick={() => navigate(-1)}
                className="text-3xl
                text-left
                py-8
                ml-16
                ">Back
            </button>
            <BestsellersDisplay datas={getData} num={0} title={"Fiction"} />
            <BestsellersDisplay datas={getData} num={1} title={"Non-Fiction"}/>
            <BestsellersDisplay datas={getData} num={6} title={"Self-Help"}/>
         </div>
    );
}
 
export default Bestsellers;


