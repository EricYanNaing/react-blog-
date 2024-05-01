import { CalendarDaysIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useSubmit } from "react-router-dom";

const PostDetail = ({ post }) => {
  const { description, date, image, title, id } = post;
  const submit = useSubmit();

  const deleteHandler = () => {
    const confirmStatus = window.confirm("Are you sure to delete ?");

    if (confirmStatus === true) {
      submit(null, { method: "DELETE" });
    }
  };
  return (
    <section className="details">
      <div className="detail-header">
        <div>
          <h3 className="detail-title">{title}</h3>
          <p className="date">
            <CalendarDaysIcon className="clock-icon" />
            {date}
          </p>
        </div>
        <Link to={"/"}>
          <ArrowLeftIcon className="arrowleft-icon" />
        </Link>
      </div>
      <img src={image} alt={title} />
      <p className="description">{description}</p>
      <div className="detail-footer">
        <Link to={"edit-post"}>
          <p className="btn sm">Edit</p>
        </Link>
        <p className="btn sm" onClick={deleteHandler}>
          Delete
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
