import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
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
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
        {
            path: "/",
            element: <Body />,
          },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
