import createStore from 'redux-zero';

const initialState = {
    title : "Hackparty", 
    isbn : 9781784975159, 
    itunes: null,
    googleBooks: null,
}

const store = createStore(initialState);
export default store;

