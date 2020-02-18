var app = new Vue({
    el: '#app',
    data: {
        product: {
            title: 'Áo thun nam thể thao hàng  VNXK vải dày mịn - Vải Đốm',
            cost: 20000,
            trademark: 'abc',
            inventory: 2,
            discount: 10,
            img: [
                {name: 'đen', url: 'images/black.jpg', active: true},
                {name: 'đỏ', url: 'images/red.jpg', active: false},
                {name: 'xanh', url: 'images/blue.jpg', active: false}
            ]
        }
    }
})