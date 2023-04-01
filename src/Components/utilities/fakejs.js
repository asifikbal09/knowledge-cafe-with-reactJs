const addToDb = id => {
    let bookmarked = getShoppingCart();
    if (!quantity) {
        bookmarked[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        bookmarked[id] = newQuantity;
    }
    localStorage.setItem('bookmark', JSON.stringify(bookmarked));
}


const getShoppingCart = () => {
    let bookmarked = {};
    const storedBlog = localStorage.getItem('bookmark');
    if (storedBlog) {
        bookmarked = JSON.parse(storedBlog);
    }
    return bookmarked;
}