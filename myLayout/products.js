var app1 = angular.module('myapp1', []);
app1.controller('myctrl1', function ($scope) {
    $scope.products = [
        {
            "brand": "Apple",
            "name": "iPhone 14 Pro Max 128GB",
            "price": 34990000,
            "sale": 31990000,
            "chip": "Apple A16 Bionic",
            "screen": 6.7,
            "ram": null,
            "rom": 128
        },
        {
            "brand": "Apple",
            "name": "iPhone 13 128GB",
            "price": 24990000,
            "sale": 19490000,
            "chip": "Apple A15 Bionic",
            "screen": 6.1,
            "ram": 4,
            "rom": 128
        },
        {
            "brand": "Apple",
            "name": "iPhone 12 64GB",
            "price": 19999000,
            "sale": 15499000,
            "chip": "Apple A14 Bionic",
            "screen": 6.1,
            "ram": 4,
            "rom": 64
        },
        {
            "brand": "Xiaomi",
            "name": "Xiaomi 12 8GB - 256GB",
            "price": 19990000,
            "sale": 13190000,
            "chip": "Snapdragon 8 Gen 1",
            "screen": 6.28,
            "ram": 8,
            "rom": 256
        },
        {
            "brand": "Xiaomi",
            "name": "Xiaomi Redmi 10 2022 4GB-128GB",
            "price": 4290000,
            "sale": 3790000,
            "chip": "MediaTek Helio G88",
            "screen": 6.5,
            "ram": 4,
            "rom": 128
        },
        {
            "brand": "Xiaomi",
            "name": "Xiaomi Redmi 9A 2GB-32GB",
            "price": 2490000,
            "sale": 2090000,
            "chip": "Helio G25",
            "screen": 6.53,
            "ram": 2,
            "rom": 32
        },
        {
            "brand": "Samsung",
            "name": "Samsung Galaxy Z Fold4 5G 256GB",
            "price": 40990000,
            "sale": 37990000,
            "chip": "Snapdragon 8+ Gen 1",
            "screen": 7.6,
            "ram": 12,
            "rom": 256
        },
        {
            "brand": "Samsung",
            "name": "Samsung Galaxy S22 Ultra 5G 128GB",
            "price": 30990000,
            "sale": 23990000,
            "chip": "Snapdragon 8 Gen 1",
            "screen": 6.8,
            "ram": 8,
            "rom": 128
        },
        {
            "brand": "Samsung",
            "name": "Samsung Galaxy A23",
            "price": 5690000,
            "sale": 5590000,
            "chip": "Snapdragon 680",
            "screen": 6.6,
            "ram": 4,
            "rom": 128
        },
        {
            "brand": "Samsung",
            "name": "Samsung Galaxy Z Flip4 5G 128GB",
            "price": 23990000,
            "sale": 20990000,
            "chip": "Snapdragon 8+ Gen 1",
            "screen": 6.7,
            "ram": 8,
            "rom": 128
        },
        {
            "brand": "Nokia",
            "name": "Nokia C20 2GB - 32GB",
            "price": 2290000,
            "sale": 2290000,
            "chip": "Spreadtrum SC9863A",
            "screen": 6.5,
            "ram": 2,
            "rom": 32
        },
        {
            "brand": "Nokia",
            "name": "Nokia G21 6GB-128GB",
            "price": 4590000,
            "sale": 3890000,
            "chip": "Unisoc T606",
            "screen": 6.5,
            "ram": 6,
            "rom": 128
        },
        {
            "brand": "Nokia",
            "name": "Nokia 5710 XpressAudio",
            "price": 1790000,
            "sale": 1790000,
            "chip": "Unisoc T107",
            "screen": 2.4,
            "ram": null,
            "rom": 0.125
        },
        {
            "brand": "Asus",
            "name": "Asus ROG 6 BATMAN 12GB-256GB",
            "price": 27990000,
            "sale": 26990000,
            "chip": "Snapdragon 8+ Gen 1",
            "screen": 6.78,
            "ram": 12,
            "rom": 256
        }
    ]
});