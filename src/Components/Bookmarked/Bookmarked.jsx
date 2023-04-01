import React from "react";
import "./Bookmarked.css";

const Bookmarked = (props) => {
    const {readTime} = props
    let totalTime = 0;
    if(readTime.length!==0){
        totalTime = readTime.reduce((total,num)=>total+num)
    }
  return <div className="Bookmarked">
    <h4>
        Spent time on read:{totalTime} min
    </h4>
    <div className="blog-bookmark">
        <h3>Bookmarked Blogs : {}</h3>

    </div>
  </div>;
};

export default Bookmarked;
