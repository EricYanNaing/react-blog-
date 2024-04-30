import React from "react";
import { useLoaderData } from "react-router-dom";
import PostDetail from "../components/PostDetail";

const Details = () => {
  const post = useLoaderData();
  console.log(post);
  return (
    <section>
      <PostDetail post={post} />
    </section>
  );
};

export default Details;

export const loader = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);

  if (!response.ok) {
  } else {
    const data = await response.json();
    return data.post;
  }
};