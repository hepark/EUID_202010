import { element, arrayOf } from 'prop-types'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

/* -------------------------------------------------------------------------- */

const middleware = [thunk]

/* -------------------------------------------------------------------------- */

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export const StoreProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

// 속성 검사
StoreProvider.propTypes = {
  children: arrayOf(element),
}
