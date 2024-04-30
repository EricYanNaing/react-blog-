import React from "react";

const PostDetail = ({ post }) => {
  const { description, date, image, title } = post;
  return (
    <section className="details">
      <h3 className="detail-title">{title}</h3>
      <p className="date">Date - {date}</p>
      <img src={image} alt={title} />
      <p className="description">{description}</p>
    </section>
  );
};

export default PostDetail;
