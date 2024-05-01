import React from "react";
import PostForm from "../components/PostForm";

const Create = () => {
  return (
    <>
      <PostForm header={"Create Your Post Now"} btn={"Post"} method={"post"} />
    </>
  );
};

export default Create;
