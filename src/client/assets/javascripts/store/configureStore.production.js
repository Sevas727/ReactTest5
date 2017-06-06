import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
const enhancer = compose(
    applyMiddleware(thunk)
)(createStore);

export default function configureStore(initialState) {
  return enhancer(rootReducer, initialState);
}
