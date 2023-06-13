import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

{
    /*
    Header
        Logo
        Nav Items
    Body
        Search
        Restaurant List
        Restaurant Cards
            Image
            Food Name
            Restaurant's Name
            Rating or Something
    
    Footer 
        Links 
        Copyright
    */

}






const AppLayout = () => {
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    );
}

const Title = () => {
    return (
        <a href='/'>
            <img src='https://www.logoground.com/uploads9/dv9y2020204462020-10-114363777LG%20Fire%20Winged%20Chili.jpg' alt='Logo'
            style={{
                width: "100px",
                height: "100%"
            }} />
        </a>
    )
}



const Header = () => {
    return(
        <div className='header'>
            <Title/>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}


const restaurantList = [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "82141",
        "name": "Rahil Restaurant",
        "uuid": "3a52b148-14bc-470b-a7dc-1987d90430dd",
        "city": "77",
        "area": "Sigra",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "kfjx9w9fu3ujeo3oxobb",
        "cuisines": [
          "North Indian",
          "Chinese",
          "South Indian",
          "Thalis",
          "Snacks",
          "Continental",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 45,
        "minDeliveryTime": 45,
        "maxDeliveryTime": 45,
        "slaString": "45 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "rahil-restaurant-sigra-sigra",
          "city": "varanasi"
        },
        "cityState": "77",
        "address": "D-53/118-R, Rathyatra Crossing, Rathyatra, Sigra, Varanasi",
        "locality": "Gurubagh Road",
        "parentId": 164627,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6973736~p=1~eid=00000188-b304-5069-001c-03e2005a0127",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "82141",
          "deliveryTime": 45,
          "minDeliveryTime": 45,
          "maxDeliveryTime": 45,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "286795",
        "name": "TanSam",
        "uuid": "377b80a4-bf80-4ab4-8fc1-36d6f4b484bc",
        "city": "77",
        "area": "Lahartara",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "cmmekwd2czppdot89sia",
        "cuisines": [
          "Bakery"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 44,
        "minDeliveryTime": 44,
        "maxDeliveryTime": 44,
        "slaString": "44 MINS",
        "lastMileTravel": 0.4000000059604645,
        "slugs": {
          "restaurant": "tansam-sigra-sigra",
          "city": "varanasi"
        },
        "cityState": "77",
        "address": "D 65/462, Lahartara, Varanasi, - 221002",
        "locality": "Lahartara Road",
        "parentId": 201054,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.4 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "286795",
          "deliveryTime": 44,
          "minDeliveryTime": 44,
          "maxDeliveryTime": 44,
          "lastMileTravel": 0.4000000059604645,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 20,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "399781",
        "name": "Vasundhara Hot Tawa",
        "uuid": "855314a3-bc4d-4efb-b090-e735648dd469",
        "city": "77",
        "area": "Sigra",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "bpmr9xk5nehshlxrpyew",
        "cuisines": [
          "Chinese",
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 45,
        "minDeliveryTime": 45,
        "maxDeliveryTime": 45,
        "slaString": "45 MINS",
        "lastMileTravel": 0.6000000238418579,
        "slugs": {
          "restaurant": "vasundhara-hot-tawa-sigra-sigra-2",
          "city": "varanasi"
        },
        "cityState": "77",
        "address": "Mid of bangla no 6 - 7 LAHARTARA , Lahartara, Back side of homi bhabha cancer hospital, Varanasi, Uttar Pradesh, 221002",
        "locality": "",
        "parentId": 221666,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "399781",
          "deliveryTime": 45,
          "minDeliveryTime": 45,
          "maxDeliveryTime": 45,
          "lastMileTravel": 0.6000000238418579,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
]

const burgerKing = {
    name: "Burger King",
    image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    cuisines : ["Burger", "American"],
    rating: "4.2"
}

const RestaurantCard = (props) => {
    console.log(props);
    // <div className='card'>
    //         <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf'/>
    //         <h2>Burger King</h2>
    //         <h3>Burger, American</h3>
    //         <h4>4.5 stars</h4>
    //     </div>
    return(
    <div className='card'>
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ props.restaurant.data?.cloudinaryImageId} />
        <h2>{props.restaurant.data?.name}</h2>
        <h3>{props.restaurant.data?.cuisines.join(', ')}</h3>
        <h4>{props.restaurant.data?.maxDeliveryTime} minutes</h4>
    </div>
    );
}

const Body = () => {
    return (
        // <div className='restaurant-list'>
        //     <RestaurantCard restaurant={restaurantList[0]}/>
        //     <RestaurantCard restaurant={restaurantList[1]}/>
        //     <RestaurantCard restaurant={restaurantList[2]}/>
        // </div>
        // Another method
        <div className='restaurant-list'>
            {restaurantList.map((restaurant) => {
                return <RestaurantCard restaurant={restaurant} key={restaurant.data.id}/>
            })}
        </div>
    )
}

const Footer = () => {
    return (
        <>
        <h3>Footer</h3>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);