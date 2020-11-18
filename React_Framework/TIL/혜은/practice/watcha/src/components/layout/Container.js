import React from 'react'

// Q. Container안에 main과 서브가 나올 거라 children으로 처리하고 싶은데 생각했던 대로 안 되는 거 같습니다. ㅠㅠ
// A. 다음과 같이 작성한 후, Layout.js 컴포넌트에서 Main, Sub를 호출해 화면에 구현했습니다. 확인해보세요. ^ㅡ^

const Container = ({ children }) => <div className="container ">{children}</div>

export default Container
