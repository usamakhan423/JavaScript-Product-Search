console.log('hello')
const search = () => {
    const searchBox = document.querySelector(".search").value.toUpperCase();
    const productList = document.querySelector(".products");
    const product = document.querySelectorAll(".product");
    const productName = productList.getElementsByTagName("h2");

    for(let i = 0; i<productName.length; i++) {
        let match = product[i].getElementsByTagName("h2")[0];

        if(match) {
            let textValue = match.textContent || match.innerHTML;

            if(textValue.toUpperCase().indexOf(searchBox) > -1) {
                product[i].style.display = '';
            }else {
                product[i].style.display = 'none';
            }
        }
    }
}

// const search = () => {
//     const searchBox = document.querySelector(".search").value;
//     const productList = document.querySelector(".products");
//     const product = document.querySelectorAll(".product");
//     const productPrice = productList.getElementsByTagName("h3");

//     for(let i = 0; i< productPrice.length; i++) {

//         let match = product[i].getElementsByTagName("h3")[0];

//         if(match) {
//             let priceValue = match.textContent || match.innerHTML;


//             if(priceValue.indexOf(searchBox) > -1) {
//                 product[i].style.display = '';
//             }else {
//                 product[i].style.display = 'none';
//             }
//         }
//     }
// }