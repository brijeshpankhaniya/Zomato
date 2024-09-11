import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
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
