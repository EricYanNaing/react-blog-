import React from "react";
import { Form } from "react-router-dom";

const PostForm = ({ header, btn, oldPostData }) => {
  return (
    <section className="form-section">
      <p>{header}</p>
      <Form method="post">
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
