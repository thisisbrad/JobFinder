import { createStore, compose, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
// import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';

// const config = {
//   key: 'main',
//   storage
// };

// const reducer = persistReducer(config, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// exports.configureStore = (initialState = {}) => {
export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

// return { store };
// };
