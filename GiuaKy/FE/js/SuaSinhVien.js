$(document).ready(function(){
    var IP = data.port;
    updateSinhvien();
    selectSinhvien();
    function updateSinhvien(){
        $("#updateForm").click(function () {
            var URL = "http://"+IP+":5035/api/updateThongTinSinhVien";
            var json = {
                "id":$('#id').val(),
                "ma_sinhvien": $("#masinhvien").val(),
                "ten_sinhvien":$("#tensinhvien").val(),
                "namsinh":$("#namsinh").val(),
                "ma_lop":$("#malop").val()
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
                alert("Sửa thành công");
                location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });     
        });
    }
    function selectSinhvien(){
        $("table").on('click','.btnSelect',function(){
           var id = $(this).parent().siblings('.id').text();
           var maSV = $(this).parent().siblings('.maSV').text();
           var tenSV = $(this).parent().siblings('.tenSV').text();
           var maLop = $(this).parent().siblings('.maLop').text();
           var namSinh = $(this).parent().siblings('.namSinh').text();
           // alert(id + " " + maSV + " "+ tenSV + " " +maLop+" "+namSinh);
            
            $("#id").val(id);
            $("#masinhvien").val(maSV);
            $("#tensinhvien").val(tenSV);
            $("#malop").val(maLop);
            $("#namsinh").val(namSinh);
        });
    }
});