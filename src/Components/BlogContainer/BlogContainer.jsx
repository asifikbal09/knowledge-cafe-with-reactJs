import React, { useEffect, useState } from "react";
import "./BlogContainer.css";
import Blogs from "../Blogs/Blogs";
import Bookmarked from "../Bookmarked/Bookmarked";

const BlogContainer = () => {
  const [blogs, setBlogs] = useState([]);
  const [time, SetTime] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  let markBlog = [];

  const onRead = (blog) => {
    const newTime = [...time, blog.readTime];
    SetTime(newTime);
  };
  console.log(time)

  return (
    <div className="b-container">
      <div>
        {blogs.map((blog) => (
          <Blogs blog={blog} key={blog.id} onRead={onRead}></Blogs>
        ))}
      </div>
      <div>
        <Bookmarked readTime={time}></Bookmarked>
      </div>
    </div>
  );
};

export default BlogContainer;
