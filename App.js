import React from "react";
import ReactDOM from "react-dom/client";

/*
 * Header
 *  - logo
 *  - nav Item
 * Body
 * - search Input
 * - Restaurant Container
 *  - card
 *Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

// const Title = () => (
//   <h1 className="title" tabIndex="5">
//     JSX 👍
//   </h1>
// );
// const title = (
//     <h1 className="title" tabIndex="5">
//       JSX Element 👍
//     </h1>
//   );
// const number = 100;
// // const data = api.getData();
// //React Component
// const HeadingComponent = () => (
//   <div id="container">
//     <Title />
//     <h1 className="headingFunctional Component">
//       headingFunctional Component 🚀
//     </h1>
//   </div>
// );
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        ></img>
      </div>
      <div className="nav-Items">
        <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const resList =[  {
    "info": {
        "id": "74052",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/925b55f6-fc93-4a2f-ab94-814e80ff4d01_74052.jpg",
        "locality": "Kalawad Road",
        "areaName": "Rajya Chowk",
        "costForTwo": "₹600 for two",
        "cuisines": [
            "Pizzas"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "721",
        "avgRatingString": "4.3",
        "totalRatingsString": "12K+",
        "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 3.6,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "3.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-11 03:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                    "description": "Delivery!"
                },
                {
                    "imageId": "Rxawards/_CATEGORY-Pizza.png",
                    "description": "Delivery!"
                },
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                            }
                        },
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Pizza.png"
                            }
                        },
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹189"
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-2420ebca-9733-4cb4-aee7-f2771058989e"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/rajkot/pizza-hut-kalawad-road-rajya-chowk-rest74052",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
    "info": {
        "id": "518648",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/662bb58f-7b46-40e3-938a-6ca094b2677a_518648.JPG",
        "locality": "Crystal Mall",
        "areaName": "Kalawad Road",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Burgers",
            "American"
        ],
        "avgRating": 4.3,
        "parentId": "166",
        "avgRatingString": "4.3",
        "totalRatingsString": "12K+",
        "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 3.9,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "3.9 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-11 03:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹169"
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-2420ebca-9733-4cb4-aee7-f2771058989e"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/rajkot/burger-king-crystal-mall-kalawad-road-rest518648",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
    "info": {
        "id": "885517",
        "name": "Theobroma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/cea52dd6-75c5-4fe0-93a1-609f35affe05_885517.jpg",
        "locality": "Space Odyssey",
        "areaName": "Near KKV Hall, 150 ft ring road",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Bakery",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.7,
        "parentId": "1040",
        "avgRatingString": "4.7",
        "totalRatingsString": "126",
        "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 2.3,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.3 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-11 00:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-2420ebca-9733-4cb4-aee7-f2771058989e"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/rajkot/theobroma-space-odyssey-near-kkv-hall-150-ft-ring-road-rest885517",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
    "info": {
        "id": "834627",
        "name": "Dosa Corner",
        "cloudinaryImageId": "236152bfc9b3945b4a368e55fb3def62",
        "locality": "Jala Ram Nagar",
        "areaName": "Kalawad Road",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Chinese",
            "Snacks"
        ],
        "veg": true,
        "parentId": "1541",
        "avgRatingString": "--",
        "sla": {
            "deliveryTime": 37,
            "lastMileTravel": 5.5,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "5.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-10 23:59:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "2.3",
                "ratingCount": "3"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_EXTERNAL"
    },
    "analytics": {
        "context": "seo-data-2420ebca-9733-4cb4-aee7-f2771058989e"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/rajkot/dosa-corner-jala-ram-nagar-kalawad-road-rest834627",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
    "info": {
        "id": "85860",
        "name": "Sargam Food",
        "cloudinaryImageId": "bqgtntm79sjwhd5kdajl",
        "locality": "Kasturba Road",
        "areaName": "Kasturba Road",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Punjabi",
            "Chinese",
            "South Indian",
            "fastfood",
            "Pizzas",
            "Snacks"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "178390",
        "avgRatingString": "4.5",
        "totalRatingsString": "85K+",
        "sla": {
            "deliveryTime": 23,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-10 23:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png",
                    "description": "Delivery!"
                },
                {
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
                    "description": "Delivery!"
                },
                {
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
                    "description": "Delivery!"
                },
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png"
                            }
                        },
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png"
                            }
                        },
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
                            }
                        },
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-2420ebca-9733-4cb4-aee7-f2771058989e"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/rajkot/sargam-food-kasturba-road-rest85860",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
    "info": {
        "id": "746858",
        "name": "Sargam Kitchen",
        "cloudinaryImageId": "dfe4b0b74955f43ba780b1e0019168af",
        "locality": "Race Course Road",
        "areaName": "Kasturba Road",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Punjabi",
            "Chinese",
            "South Indian",
            "Burgers",
            "Pizzas",
            "Fast Food"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "442936",
        "avgRatingString": "4.5",
        "totalRatingsString": "1.6K+",
        "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-10 23:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-2420ebca-9733-4cb4-aee7-f2771058989e"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/rajkot/sargam-kitchen-race-course-road-kasturba-road-rest746858",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
    "info": {
        "id": "103384",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "vwpscdnalrg9yxi1yckp",
        "locality": "Tagore Road",
        "areaName": "Dr Yagnik Road",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "4961",
        "avgRatingString": "4.5",
        "totalRatingsString": "11K+",
        "sla": {
            "deliveryTime": 19,
            "lastMileTravel": 0.9,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "0.9 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-11 01:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                    "description": "Delivery!"
                },
                {
                    "imageId": "Rxawards/_CATEGORY-Pizza.png",
                    "description": "Delivery!"
                },
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                            }
                        },
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Pizza.png"
                            }
                        },
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹159"
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-2420ebca-9733-4cb4-aee7-f2771058989e"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/rajkot/la-pinoz-pizza-tagore-road-dr-yagnik-road-rest103384",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
    "info": {
        "id": "237666",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fedaee6f-c5e9-4f19-8188-93627e6d6776_237666.JPG",
        "locality": "Reliance Mall",
        "areaName": "150 Feet Ring Road",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "630",
        "avgRatingString": "4.4",
        "totalRatingsString": "15K+",
        "sla": {
            "deliveryTime": 18,
            "lastMileTravel": 2.5,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "2.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-11 01:45:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                    "description": "Delivery!"
                },
                {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                            }
                        },
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Burger.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹179"
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-2420ebca-9733-4cb4-aee7-f2771058989e"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/rajkot/mcdonalds-reliance-mall-150-feet-ring-road-rest237666",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}];
const RestaurantCard = (props)=>{
    console.log("props",props);
    const { resData } = props;
    console.log("props111",resData);

    const { name,cuisines,avgRating,cloudinaryImageId } = resData.info;
    return (
        <div className="rest-Card">
            <img className="rest-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}></img>
            <h3 className="rest-name">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}start</h4>
        </div>
    );
};
const Body = ()=>{
    return (
        <div className="body">
            <div className="search-bar">Search</div>
            <div className="restaurant-container">
                <RestaurantCard resData ={resList[1]}/>
               
               
                <RestaurantCard resData ={resList[2]}/>
                {
                    resList.map((restaurant,index)=>(
                     <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>   
                    ))
                }
            </div>
        </div>
    );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
