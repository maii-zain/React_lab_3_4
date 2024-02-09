import { createStore, combineReducers } from 'redux';
import favoritesReducer from './reducers/favorites';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  
});

const store = createStore(rootReducer);

export default store;
