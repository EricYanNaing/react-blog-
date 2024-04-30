import Main from "./layout/Main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts, { loader as postsLoader } from "./pages/Posts";
import Create, { action as createAction } from "./pages/Create";
import Details, { loader as detailsLoader } from "./pages/Details";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
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
          path: "/post-details/:id",
          element: <Details />,
          loader: detailsLoader,
        },
        {
          path: "/edit-post/:id",
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
