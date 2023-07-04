import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { IMG_CDN_URL } from "../config";

// const RestaurantCard = ({name,cuisines,maxDeliveryTime,cloudinaryImageId}) => {
//     return(
//     <div className='card'>
//         <img src={IMG_CDN_URL + cloudinaryImageId} />
//         <h2>{name}</h2>
//         <h3>{cuisines.join(', ')}</h3>
//         <h4>{maxDeliveryTime} minutes</h4>
//     </div>
//     );
// }

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  area,
  cuisines,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  
  const {user} = useContext(UserContext);

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="ratings">
        <p>
          <strong>{name}</strong>
        </p>
      </div>
      <small>{cuisines.join(", ")}</small> <br /> <br />
      <p
        style={{
          margin: "0",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <small style={avgRating > 3 ? { color: "green" } : { color: "red" }}>
          {avgRating}
        </small>
        <small>{lastMileTravelString}</small> <small>{costForTwoString}</small>
      </p>
    </div>
  );
};

export default RestaurantCard;
