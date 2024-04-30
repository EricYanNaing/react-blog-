import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  const { id, title, description, date, image } = post;
  return (
    <>
      <section className="post">
        <Link to={`/post-details/${id}`}>
          <img src={image} alt={title} />
        </Link>
        <Link>
          <p className="title">{title}</p>
        </Link>
        <p className="date">Post Date - {date}</p>
        <p>{description}</p>
        <hr />
      </section>
    </>
  );
};

export default PostItem;
