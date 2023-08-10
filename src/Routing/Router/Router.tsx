import { createBrowserRouter, RouterProvider } from "react-router-dom"
import PlantMessage from "../../views/PlantMessage/PlantMessage"
import Start from "../../views/Start/Start"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <div>Login :D</div>,
  },
  {
    path: "/",
    element: (
      <div>
        Hello world!<br></br>Let's start!
        <Start />
      </div>
    ),
  },
  {
    path: "/send-message",
    element: <PlantMessage />,
  },
  {
    path: "/list-of-messages",
    element: <div>{"Your list of messages :)"}</div>,
  },
  {
    path: "/detail/:messageId",
    element: <div>Message detail</div>,
  },
])

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router
