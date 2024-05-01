import React from "react";
import { Form, redirect } from "react-router-dom";
import uuid from "react-uuid";

const PostForm = ({ header, btn, oldPostData, method }) => {
  console.log(method);
  return (
    <section className="form-section">
      <p>{header}</p>
      <Form method={method}>
        <div>
          <label htmlFor="form-title">Title</label>
          <input
            type="text"
            id="form-title"
            name="title"
            required
            defaultValue={oldPostData ? oldPostData.title : ""}
          />
        </div>
        <div>
          <label htmlFor="form-img">Image URL</label>
          <input
            type="url"
            id="form-img"
            name="image"
            required
            defaultValue={oldPostData ? oldPostData.image : ""}
          />
        </div>
        <div>
          <label htmlFor="form-date">Date</label>
          <input
            type="date"
            id="form-date"
            name="date"
            required
            defaultValue={oldPostData ? oldPostData.date : ""}
          />
        </div>
        <div>
          <label htmlFor="form-description">Description</label>
          <textarea
            required
            defaultValue={oldPostData ? oldPostData.description : ""}
            cols="30"
            rows="5"
            id="form-description"
            name="description"
          />
        </div>
        <button className="btn">{btn}</button>
      </Form>
    </section>
  );
};

export default PostForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();

  const postData = {
    id: uuid(),
    title: data.get("title"),
    description: data.get("description"),
    image: data.get("image"),
    date: data.get("date"),
  };
  let url = "http://localhost:8080/posts";
  const method = request.method;

  if (method === "PATCH") {
    const id = params.id;
    url = `http://localhost:8080/posts/${id}`;
  }

  const response = await fetch(url, {
    method: method,
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
