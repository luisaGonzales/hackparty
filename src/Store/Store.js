import createStore from 'redux-zero';

const initialState = {
    title : "Hackparty", 
    isbn : 9781786812872
}

const store = createStore(initialState);
export default store;