import store from '../Store/Store';

export const searchItunes = () => {
    let isbn = store.getState().isbn;
    let url = `https://itunes.apple.com/lookup?isbn=${isbn}`;
    fetch(url)
    .then(res => res.json())
    .then((out) => {
        store.setState({
            price : out.results[0].price
        });
        console.log('Checkout this JSON! ', out);
        console.log('price', store.getState().price);
    });
    if(store.getState().price != null ){
        console.log('price2', store.getState().price);
    }
    
}