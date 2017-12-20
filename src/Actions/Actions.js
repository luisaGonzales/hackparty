import store from '../Store/Store';

export const searchItunes = () => {
    let isbn = store.getState().isbn;
    let url = `https://itunes.apple.com/lookup?isbn=${isbn}`;
    fetch(url)
    .then(res => res.json())
    .then((out) => {
        console.log('Checkout this JSON! ', out);
    });
}