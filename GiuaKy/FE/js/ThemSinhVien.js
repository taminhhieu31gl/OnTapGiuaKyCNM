$(function () {
    var IP = data.port;
    $("#submitForm").click(function(){
        uploadImage();
    })

    function uploadImage(){
         $("#submitForm").click(function(){
            var URLUploadFile = "http://"+IP+":5035/api/uploadFile";
            const input = document.getElementById("file-input");
            const photoData = new FormData();
            photoData.append('file',input.files[0]);
            console.log(input.files[0]);
            console.log(photoData);
            if(input.files[0]==null){
                alert('Chưa Chọn File Hình.');
                return;
            }
            const fileName = input.files[0].name;
            
            if(!['image/jpeg', 'image/gif', 'image/png', 'image/jpg'].includes(input.files[0].type)) {
                alert('Only images are allowed.');
                return;
            }
            if(input.files[0].size > 2 * 1024 * 1024) {
                alert('File must be less than 2MB.');
                return;
            }
            fetch(URLUploadFile, {
                method: "POST",
                body: photoData
            })
            .then(function (response) {
                return response.json(); 
            })
            .then(function (result) {
                console.log("Success: ", result.data);
                themSinhVien(result.data);
             })
            .catch(function (error) {
                console.log(error);
            });
        });
     }
    function themSinhVien(fileName){
        var URL = "http://"+IP+":5035/api/themSinhVien";
        //uploadImage();
        var json = {
            "id": $("#id").val(),
            "ten_sinhvien":$("#tensinhvien").val(),
            "ma_sinhvien":$("#masinhvien").val(),
            "namsinh":$("#namsinh").val(),
            "ma_lop":$("#malop").val(),
            "avata":fileName            
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