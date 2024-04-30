import React from "react";
import PostForm from "../components/PostForm";
import uuid from "react-uuid";
import { redirect } from "react-router-dom";

const Create = () => {
  return (
    <>
      <PostForm />
    </>
  );
};

export default Create;

export const action = async ({ request, params }) => {
  const data = await request.formData();

  const postData = {
    id: uuid(),
    title: data.get("title"),
    description: data.get("description"),
    image: data.get("image"),
    date: data.get("date"),
  };
  console.log("Post data ------->", postData);
  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    redirect("/");
  } else {
    redirect("/");
    return;
  }
};
