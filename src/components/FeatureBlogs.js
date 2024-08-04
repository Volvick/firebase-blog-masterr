import React from "react";
import { useNavigate } from "react-router-dom";

const FeatureBlogs = ({ blogs, title }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="blog-heading text-start pt-3 py-2 mb-4">{title}</div>
      {blogs?.map((item) => (
        <div
          className="row pb-3"
          key={item.id}
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/detail/${item.id}`)}
        >
          <div className="col-5 align-self-center">
            <img
              src="https://i.pinimg.com/originals/30/6f/d0/306fd0fb64f67ff40f81d8e37f8bf674.png"
              alt={item.title}
              className="most-popular-img"
            />
          </div>
          <div className="col-7 padding">
            <div className="text-start most-popular-font">{item.title}</div>
            <div className="text-start most-popular-font-meta">
              {item.timestamp.toDate().toDateString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureBlogs;
