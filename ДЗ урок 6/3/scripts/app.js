'use strict';

let cartButtons = document.querySelectorAll('.toBasketBtn');

cartButtons.forEach(function (buttons) {
    buttons.addEventListener('click', function (event) {
        let id = event.srcElement.dataset.id;
        let price = event.srcElement.dataset.price;
        let name = event.srcElement.dataset.name;
        basket.addProduct({
            id: id,
            price: price,
            name: name
        })
    });
});

let basket = {
    products: {},

    addProduct(product) {
        this.addProductToObject(product);
        this.addProductInBasket(product);
        this.addTotalSum();
        this.addRemoveBtns();
    },

    addProductToObject(product) {
        if (this.products[product.id] == undefined) {
            this.products[product.id] = {
                price: product.price,
                name: product.name,
                count: 1,
            }
        } else {
            this.products[product.id].count++;
        }
    },

    addProductInBasket(product) {
        let productExist = document.querySelector(`.productCount[data-id="${product.id}"]`);
        if (productExist) {
            productExist.textContent++;
            return;
        }

        let productRow = `
        <tr>
            <th scope = row>${product.id}</th>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td class="productCount" data-id="${product.id}">1</td>
            <td><i class="fas fa-trash-alt productRemoveBtn" data-id="${product.id}"></i></td>
        </tr>`;

        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML('beforeend', productRow);
    },

    addTotalSum() {
        document.querySelector('.total').textContent = this.getTotalSum();
    },

    getTotalSum() {
        let sum = 0;
        for (let key in this.products) {
            sum += this.products[key].price * this.products[key].count;
        }
        return sum;
    },

    addRemoveBtnsListeners() {
        let btns = document.querySelectorAll('.productRemoveBtn');
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', this.removeProductListener);
        }
    },

    removeProductListener(event) {
        basket.removeProduct(event);
        basket.renderTotalSum();
    },

    removeProduct(event) {
        let id = event.srcElement.dataset.id;
        this.removeProductFromObject(id);
        this.removeProductFromBasket(id);
    },

    removeProductFromBasket(id) {
        let countTd = document.querySelector(`.productCount[data-id="${id}"]`);
        if (countTd.textContent == 1) {
            countTd.parentNode.remove();
        } else {
            countTd.textContent--;
        }
    },

    removeProductFromObject(id) {
        if (this.products[id].count == 1) {
            delete this.products[id];
        } else {
            this.products[id].count--;
        }
    }
}