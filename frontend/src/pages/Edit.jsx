import React from "react";
import PostForm from "../components/PostForm";
import { useRouteLoaderData } from "react-router-dom";

const Edit = () => {
  const post = useRouteLoaderData("post-detail");
  return (
    <>
      <PostForm
        oldPostData={post}
        header={"Edit Your Post Now"}
        btn={"Update Post"}
        method={"patch"}
      />
    </>
  );
};

export default Edit;
