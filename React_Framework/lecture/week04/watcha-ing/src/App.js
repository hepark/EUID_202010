import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Home, SignIn, SignUp } from 'pages'

/* -------------------------------------------------------------------------- */
// [미션] React Router를 설치한 후, 경로에 맞는 컴포넌트를 설정해보세요.

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}
