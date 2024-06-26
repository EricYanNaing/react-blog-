import Main from "./layout/Main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts, { loader as postsLoader } from "./pages/Posts";
import { action as createAction } from "./components/PostForm";
import { action as udpateAction } from "./components/PostForm";
import Create from "./pages/Create";
import Details, {
  action as deleteAction,
  loader as detailsLoader,
} from "./pages/Details";
import Error from "./components/Error";
import Edit from "./pages/Edit";
import Auth, { action as authAction } from "./pages/Auth";
import { logout as logoutAction } from "./pages/Logout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Posts />,
          loader: postsLoader,
        },
        {
          path: "create-post",
          element: <Create />,
          action: createAction,
        },
        {
          path: "/auth",
          element: <Auth />,
          action: authAction,
        },
        {
          path: ":id",
          id: "post-detail",
          loader: detailsLoader,
          children: [
            {
              index: true,
              element: <Details />,
              action: deleteAction,
            },
            {
              path: "edit-post",
              element: <Edit />,
              action: udpateAction,
            },
          ],
        },
        {
          path: "logout",
          action: logoutAction,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
