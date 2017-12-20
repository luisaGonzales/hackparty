import store from '../Store/Store';
import firebase, {auth, database} from './Firebase.js';

export const saveIsbn = (isbn) => {
    store.setState({
        isbn : parseInt(isbn)
    });
    getBooks();
    console.log("arr", store.getState().arr.length);

}

export const search = () => {

    store.getState().arr.map((isbn) => {
        searchItunes(isbn);
        searchGoogleBooks(isbn);
    })
 
}

export async function searchItunes (searchIsbn) {
    let isbn = searchIsbn;
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
        console.log('Checkout this JSON! ', out);
    })
    .catch(
        firebase.database().ref('books/' + searchIsbn + '/itunes/').set("No disponible en iTunes")
    );;
    if(store.getState().itunes != null ){
        firebase.database().ref('books/' + searchIsbn + '/itunes/').set(responseItunes);
        console.log('price2', store.getState().itunes);
    }
}

export async function searchGoogleBooks (searchIsbn) {
    let isbn = searchIsbn;
    let url = `https://www.googleapis.com/books/v1/volumes?q=search+${isbn}`;
    let responseGoogle;
    await fetch(url)
    .then(res => res.json())
    .then((out) => {
        if (out.items) {
            responseGoogle = {
                price : out.items[0].saleInfo.listPrice.amount,
                img : out.items[0].volumeInfo.imageLinks.thumbnail,
                title : out.items[0].volumeInfo.title,
                author : out.items[0].volumeInfo.authors[0],
                description : out.items[0].searchInfo.textSnippet, 
                ituneUrl : out.items[0].saleInfo.buyLink, 
            }
        }
        console.log('Checkout this JSON! ', out);
    })
    .catch(
        firebase.database().ref('books/' + searchIsbn + '/google/').set("No disponible en Google")
    );
    if(store.getState().googleBooks != null ){
        firebase.database().ref('books/' + searchIsbn + '/google/').set(responseGoogle);
        console.log('pricegoogle', store.getState().googleBooks);
    }
}

export const getBooks = (searchIsbn) => {
    database.ref ('books/' + searchIsbn).once ('value').then ( res => {
        const getFullInfo = res.val(); 
        console.log ('full info ', getFullInfo);
        store.setState ({
          book: {
            itunes :  getFullInfo.itunes,
            google : getFullInfo.google,          
          }
        });
        console.log("storeBooks", store.getState().book);
    })
    .catch(
        search()
    );
}








