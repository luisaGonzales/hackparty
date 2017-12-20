import store from '../Store/Store';
import firebase, {auth, database} from './Firebase.js';

export const search = () => {
    searchItunes();
    searchGoogleBooks();
}

export async function searchItunes () {
    let isbn = store.getState().isbn;
    let url = `https://itunes.apple.com/lookup?isbn=${isbn}`;
    let responseItunes;
    await fetch(url)
    .then(res => res.json())
    .then((out) => {
        responseItunes = {
            price : out.results[0].price,
            img : out.results[0].artworkUrl100,
            title : out.results[0].trackCensoredName,
            author : out.results[0].artistName,
            description : out.results[0].description, 
            ituneUrl : out.results[0].trackViewUrl 
        }
        store.setState({
            itunes : responseItunes
        })
        console.log('Checkout this JSON! ', out);
    });
    if(store.getState().itunes != null ){
        firebase.database().ref('books/' + store.getState().isbn + '/itunes/').set(responseItunes);
        console.log('price2', store.getState().itunes);
    }
}

export async function searchGoogleBooks () {
    let isbn = store.getState().isbn;
    let url = `https://www.googleapis.com/books/v1/volumes?q=search+${isbn}`;
    let responseGoogle;
    await fetch(url)
    .then(res => res.json())
    .then((out) => {
        responseGoogle = {
            price : out.items[0].saleInfo.listPrice.amount,
            img : out.items[0].volumeInfo.imageLinks.thumbnail,
            title : out.items[0].volumeInfo.title,
            author : out.items[0].volumeInfo.authors[0],
            description : out.items[0].searchInfo.textSnippet, 
            ituneUrl : out.items[0].saleInfo.buyLink, 
        }
        store.setState({
            googleBooks : responseGoogle
        })
        console.log('Checkout this JSON! ', out);
    });
    if(store.getState().googleBooks != null ){
        firebase.database().ref('books/' + store.getState().isbn + '/google/').set(responseGoogle);
        console.log('pricegoogle', store.getState().googleBooks);
    }
}


