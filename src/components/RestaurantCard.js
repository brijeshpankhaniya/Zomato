import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props)=>{
    const { resData } = props;

    const { name,cuisines,avgRating,cloudinaryImageId } = resData.info;
    return (
        <div className="rest-Card">
            <img className="rest-logo" src={CDN_URL + cloudinaryImageId}></img>
            <h3 className="rest-name">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}start</h4>
        </div>
    );
};
export default RestaurantCard;