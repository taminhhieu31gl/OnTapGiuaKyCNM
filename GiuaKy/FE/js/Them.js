$(function () {
    var IP = data.port;
    $("#submitForm").click(function(){
        create();
    })
    function create(){
        var URL = "http://"+IP+":5035/api/create";
        var json = {
            "id": $("#id").val(),
            "ten":$("#ten").val(),
            "donViTinh":$("#donViTinh").val(),
            "gia":$("#gia").val(),
            "thongSoKyThuat":$("#thongSoKyThuat").val()   
        }
        //POST JSON
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(json),
        })
        .then(function (response) {
            return response.json();
        })
        .then(function(json){
            alert("Thêm thành công");
            location.reload();
         
        })
        .catch(function (error) {
            console.log(error);
        });
    }
});