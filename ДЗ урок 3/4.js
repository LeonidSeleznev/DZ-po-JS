'use strict';

const products = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let productsWithPhotos = products.filter(item => 'photos' in item);

console.log(productsWithPhotos);

let productsSorted = productsWithPhotos.sort(function compare(item1, item2){
    return item1.price - item2.price;
};

console.log(productsSorted);