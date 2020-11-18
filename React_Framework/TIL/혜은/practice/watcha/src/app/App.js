import React from "react";
import Layout from "components/layout/Layout";

const App = () => {
  // 추후 React Router를 사용해 경로(path)마다 페이지 컴포넌트를 연결해
  // 싱글 페이지 앱(SPA)으로 구성할 예정입니다.
  return (
    <>
      <Layout />
    </>
  );
};

export default App;
