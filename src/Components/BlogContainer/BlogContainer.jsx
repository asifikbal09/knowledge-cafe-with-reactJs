import React, { useEffect, useState } from "react";
import "./BlogContainer.css";
import Blogs from "../Blogs/Blogs";

const BlogContainer = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="b-container">
      <div>
        {blogs.map((blog) => (
          <Blogs 
          blog={blog}
          key={blog.id}
          ></Blogs>
        ))}
      </div>
      <div>
        <h3>Spend time on reading</h3>
      </div>
    </div>
  );
};

export default BlogContainer;
