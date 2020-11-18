import React from "react";
import Main from "pages/Main";

// Q. Container안에 main과 서브가 나올 거라 children으로 처리하고 싶은데 생각했던 대로 안 되는 거 같습니다. ㅠㅠ

// const Container = ({ children }) => (
//   <div className="container ">{children}</div>
// );

const Container = () => (
  <div className="container ">
    <Main />
  </div>
);

export default Container;
