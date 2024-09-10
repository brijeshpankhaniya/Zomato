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
const RestaurantCard = ()=>{
    return (
        <div className="rest-Card">
            <img className="rest-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/662bb58f-7b46-40e3-938a-6ca094b2677a_518648.JPG"></img>
            <h3 className="rest-name">Megna Foods</h3>
            <h4>burger, pizza</h4>
            <h4>4.4 start</h4>
        </div>
    );
};
const Body = ()=>{
    return (
        <div className="body">
            <div className="search-bar">Search</div>
            <div className="restaurant-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
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
