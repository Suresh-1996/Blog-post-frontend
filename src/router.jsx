import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Post from "./components/Post.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: `post/:id`, element: <Post /> },
]);
