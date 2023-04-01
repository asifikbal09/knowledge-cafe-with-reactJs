import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div>
      <h1>Some Important Question</h1>
      <div className="all-question">
        <div>
            <h3>Props V/S State</h3>
            <p><h4>Ans:</h4> Props and state is very useful feature in React. They both provide details about item. But they are used differently. Let's know about what difference in props and state. Props is immutable. We cannot change any data in the props. But state is mutable. We can easily change any data in state. Props is used for send data one component to another component. State is used to render dynamic change</p>
        </div>
        <div>
            <h3>How does useState work?</h3>
            <p><h4>Ans:</h4> useState is the function. Eat give us 2 things one is kind of variable another is setter function. When we set any value in useState React store the value globally into react and give us an array. Every time when we set data in useState it reander the</p>
        </div>
        <div>
            <h3>Purpose of useEffect Other than fetching data? </h3>
            <p><h4>Ans:</h4> useEffect is a very useful hook in react. When we need to fetch data we use useEffect. useEffect can avoid the side effect. we can use more  then one useEffect hook in the component. it is asynchronous. It run on every render.we set dependency. When dependency is change useEffect start than.</p>
        </div>
        <div>
            <h3>How dose React work?</h3>
            <p><h4>Ans:</h4> React is a library of  javascript. It is used to create modular user interfaces. React have virtual. In the react when we write the DOM elements. React convert in to virtual DOM. Basically a DOM tree representation in JavaScript. the reason it is javascript so it is very fast.</p>
        </div>
      </div>
    </div>
  );
};

export default Question;
