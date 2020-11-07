$(function () {
    //Lay tong so luong san pham
    var totalPage;
    getTotalPage();
    function getTotalPage() {
        var URLListProduct = "http://localhost:8080/api/sanpham/list";

        var aPromise = fetch(URLListProduct);

        aPromise
        .then(function (response) {
            if(!response.ok){
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json();
        })
        .then(function (fileJSON){
            totalPage = fileJSON.length;
            console.log(totalPage);
        })
        .catch(function (error){
            console.log(error);
        })
    }
});