import store from '../Store/Store';

export const search = () => {
    searchItunes();
    searchGoogleBooks();
}

export async function searchItunes () {
    let isbn = store.getState().isbn;
    let url = `https://itunes.apple.com/lookup?isbn=${isbn}`;
    let responseItune;
    await fetch(url)
    .then(res => res.json())
    .then((out) => {
        responseItune = {
            price : out.results[0].price,
            img : out.results[0].artworkUrl100,
            title : out.results[0].trackCensoredName,
            author : out.results[0].artistName,
            description : out.results[0].description, 
            ituneUrl : out.results[0].trackViewUrl 
        }
        store.setState({
            itunes : responseItune
        })
        console.log('Checkout this JSON! ', out);
    });
    if(store.getState().itunes != null ){
        console.log('price2', store.getState().itunes);
    }
}

export async function searchGoogleBooks () {
    let isbn = store.getState().isbn;
    let url = `https://www.googleapis.com/books/v1/volumes?q=search+${isbn}`;
    let responseItune;
    await fetch(url)
    .then(res => res.json())
    .then((out) => {
        responseItune = {
            price : out.items[0].saleInfo.listPrice.amount,
            img : out.items[0].volumeInfo.imageLinks.thumbnail,
            title : out.items[0].volumeInfo.title,
            author : out.items[0].volumeInfo.authors[0],
            description : out.items[0].searchInfo.textSnippet, 
            ituneUrl : out.items[0].saleInfo.buyLink, 
        }
        store.setState({
            googleBooks : responseItune
        })
        console.log('Checkout this JSON! ', out);
    });
    if(store.getState().googleBooks != null ){
        console.log('pricegoogle', store.getState().googleBooks);
    }
}



// async function toJson(param) {
//     return fetch(param)
//     .then(res => res.json())
//     .then (res => {
//         return {
//             price : res.results[0].price,
//             img : res.results[0].artworkUrl100,
//             title : res.results[0].trackCensoredName,
//             author : res.results[0].artistName,
//             description : res.results[0].description, 
//             ituneUrl : res.results[0].trackViewUrl           
//         };
//     })
// }

// export async function search() {
//     let isbn = store.getState().isbn;
//     let url = `https://itunes.apple.com/lookup?isbn=${isbn}`;
//     const res = await fetch(url).then(result => result.json());
//     const list = await getBook(res.results);
//     store.setState({
//         items : list
//     })
// }

// function getBook(list) {
//   return Promise.all(list.map(planet => toJson(planet)))
// }

