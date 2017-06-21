class SanPham {
    constructor(name, image, price) {
        this.name = name;
        this.image = image;
        this.price = price;
    }
}

const arrSanPham = [
    new SanPham('Ripped Skinny Jeans', 'jeans1.jpg', '24.99'),
    new SanPham('Mega Ripped Jeans', 'jeans2.jpg', '24.99'),
    new SanPham('Washed Skinny Jeans', 'jeans3.jpg', '24.99'),
    new SanPham('Vintage Skinny Jeans', 'jeans4.jpg', '24.99'),
    new SanPham('Ripped Skinny Jeans', 'jeans1.jpg', '24.99'),
    new SanPham('Mega Ripped Jeans', 'jeans2.jpg', '24.99'),
    new SanPham('Washed Skinny Jeans', 'jeans3.jpg', '24.99'),
    new SanPham('Vintage Skinny Jeans', 'jeans4.jpg', '24.99')
];

module.exports = arrSanPham;
