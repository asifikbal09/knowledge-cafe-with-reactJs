import React from "react";
import "./Bookmarked.css";

const Bookmarked = (props) => {
  const { readTime, bookmarkBlog } = props;
  let totalTime = 0;
  if (readTime.length !== 0) {
    totalTime = readTime.reduce((total, num) => total + num);
  }



  return (
    <div className="bookmarked">
      <h4>Spent time on read: {totalTime} min</h4>
      <div className="blog-bookmark">
        <h3>Bookmarked Blogs : {bookmarkBlog.length}</h3>
        {
            bookmarkBlog.map(title => <div className="title">
                <h5>{title.title}</h5>
            </div>)
        }
      </div>
    </div>
  );
};

export default Bookmarked;
