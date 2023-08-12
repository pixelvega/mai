import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Layout from "../../layouts/Layout/Layout"
import Login from "../../views/Login/Login"
import PlantMessage from "../../views/PlantMessage/PlantMessage"
import Start from "../../views/Start/Start"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "",

        element: (
          <div>
            Hello world!<br></br>Let's start!
            <Start />
          </div>
        ),
      },
      {
        path: "send-message",
        element: <PlantMessage />,
      },
      {
        path: "list-of-messages",
        element: <div>{"Your list of messages :)"}</div>,
      },
      {
        path: "detail/:messageId",
        element: <div>Message detail</div>,
      },
    ],
  },
])

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router
