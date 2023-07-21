var app = angular.module('myapp', ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '/myLayout/Body.html',
        })
        .when('/login', {
            templateUrl: '/myLayout/Login.html',
        })
        .when('/signup', {
            templateUrl: '/myLayout/SignUp.html',
        })
        .when('/contact', {
            templateUrl: '/myLayout/Contact.html',
        })
        .when('/card', {
            templateUrl: '/myLayout/Card.html',
        })
        .when('/product', {
            templateUrl: '/myLayout/Product.html',
        })
        .when('/shop', {
            templateUrl: '/myLayout/Shop.html',
        })
        .when('/like', {
            templateUrl: '/myLayout/Like.html',
        })
        .otherwise({
            redirectTo: '/home'
        })
});
app.controller('myctrl', function ($scope, $http, $rootScope) {
    $scope.products = [];
    $http.get("app.json").then(function (response) {
        $scope.products = response.data;
    });
    $rootScope.cart = [];
    $rootScope.like = [];
    $rootScope.ProductItem = [];

    $scope.add_item = function (item) {
        $rootScope.ProductItem.push(item);
    }
    $scope.keywords = "";
    $scope.delete_cart = function (item) {
        var index = $rootScope.cart.indexOf(item);
        $rootScope.cart.splice(index, 1);
    }
    $scope.delete_like = function (item) {
        var index = $rootScope.like.indexOf(item);
        $rootScope.like.splice(index, 1);
    }
    $scope.delete_item = function (item) {
        var index = $rootScope.like.indexOf(item);
        $rootScope.ProductItem.splice(index, 1);
    }



    // total item
    $scope.total = function () {
        var total = 0;
        angular.forEach($scope.cart, function (item) {
            total += item.qty * item.price;
        })
        return total;
    }
    // end of total item

    var findItemById = function (items, id) {
        return _.find(items, function (item) {
            return item.id === id;
        });
    };
    // add item
    $scope.add = function (item) {
        var found = findItemById($scope.cart, item.id);
        if (found) {
            found.qty += item.qty;
        }
        else {
            $rootScope.cart.push(item);
        }
    }
    // end of add item
    $scope.add_like = function (item) {
        var found = findItemById($scope.like, item.id);
        if (found) {
            found.qty += item.qty;
        }
        else {
            $rootScope.like.push(item);
        }
    }
    var pagesShown = 1;
    var pageSize = 8;
    $scope.productsLimit = function () {
        return pageSize * pagesShown;
    };
    $scope.hasMoreproductsToShow = function () {
        return pagesShown < ($scope.products.length / pageSize);
    };
    $scope.showMoreproducts = function () {
        pagesShown = pagesShown + 1;
    };

});

