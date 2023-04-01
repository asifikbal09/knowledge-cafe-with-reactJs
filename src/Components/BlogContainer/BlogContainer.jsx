import React, { useEffect, useState } from "react";
import "./BlogContainer.css";
import Blogs from "../Blogs/Blogs";
import Bookmarked from "../Bookmarked/Bookmarked";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogContainer = () => {
  const [blogs, setBlogs] = useState([]);
  const [time, SetTime] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const onRead = (blog) => {
    const newTime = [...time, blog.readTime];
    SetTime(newTime);
  };
// toast function
const notify =()=>{
  toast.warn('🦄 You Have Already Bookmarked This Blog..', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}
  const bookmark = (blog) => {
    const { id } = blog;
    if (bookmarked !== 0) {
      const search = bookmarked.find((element) => element.id == id);
      if (search) {
        notify();
      } else {
        const newBookmarked = [...bookmarked, blog];
        setBookmarked(newBookmarked);
      }
    }
  };

  return (
    <div className="b-container">
      <div>
        {blogs.map((blog) => (
          <Blogs
            blog={blog}
            key={blog.id}
            onRead={onRead}
            bookmark={bookmark}
          ></Blogs>
        ))}
      </div>
      <div>
        <Bookmarked readTime={time} bookmarkBlog={bookmarked}></Bookmarked>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default BlogContainer;
