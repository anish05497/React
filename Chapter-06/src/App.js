import React, { Children, Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer  from "./components/Footer";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Instamart from "./components/Instamart";

const Instamart = lazy(()=>import('./components/Instamart'))

const AppLayout = () => {
  const [user, setUser] = useState({
    name:"Anish",
    email:"26anish1998@gmail.com"
  })

  return (
    <UserContext.Provider value={{
      user: user,
      setUser: user
    }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurants/:id",
        element: <RestaurantMenu/>
      },
      {
        path:"/instamart",
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <Instamart/>
        </Suspense>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
