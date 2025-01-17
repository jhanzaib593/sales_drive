import "./App.css";
import { ConfigProvider } from "antd";
import Layout from "./components/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Home from "./page/Home";
import Error from "./page/Error";
import Underconstruction from "./page/Error/underconstruction";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/underconstruction",
    element: <Underconstruction />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <div className="wappers">
      <ConfigProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ConfigProvider>
    </div>
  );
}

export default App;
