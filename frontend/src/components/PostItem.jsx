import React from "react";
import { Link } from "react-router-dom";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

const PostItem = ({ post }) => {
  const { id, title, description, date, image } = post;
  return (
    <>
      <section className="post">
        <Link to={`${id}`}>
          <img src={image} alt={title} />
        </Link>
        <Link to={`${id}`}>
          <p className="title">{title}</p>
        </Link>
        <p className="date">
          <CalendarDaysIcon className="clock-icon" />
          Post Date - {date}
        </p>
        <p>{description}</p>
        <hr />
      </section>
    </>
  );
};

export default PostItem;
