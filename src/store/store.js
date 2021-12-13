import { createStore } from 'redux';
// import { composeWithDevTools} from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

// import { setLocalStorage } from '../utils/localStorage';

import rootReducer from './reducers';

const store = createStore(rootReducer);
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// store.subscribe(() => {
//     setLocalStorage('store', store.getState().favouriteReducer)
// });

export default store;
