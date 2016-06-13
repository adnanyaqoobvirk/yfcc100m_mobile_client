angular.module('yfcc100mApp.services', ['ngResource'])
.constant("baseURL", "http://172.16.1.203:3000/")
// .constant("baseURL", "https://localhost:3000/")
.factory('categoryFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        return $resource(baseURL + "api/categories/:id", {id:"@id"});

}])

.factory('imageFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        return $resource(baseURL + "api/images/:category/:limit", {category:"@category", limit: "@limit"});

}]);