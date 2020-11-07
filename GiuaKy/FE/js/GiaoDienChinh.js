$(document).ready(function() {
    var IP = data.port;
    $(function(){
        onload();
        var i = 0;
        function onload(){
            var urlTest1 = "http://"+IP+":5035/api/getDSSinhVien";
            var aPromise = fetch(urlTest1);
            aPromise
             .then(function(response){
                 if(!response.ok){
                    throw new Error("HTTP error, status = " + response.status);
                 }
                 var listSanPhamJSON = response.json();
                 return listSanPhamJSON;
             })
             .then(function(fileJSON){
                 console.log(fileJSON.data);
                 var n = fileJSON.length;
                $("table").append(
                    "<tr>"+
                        "<th> ID </th>"+
                        "<th> Mã sinh viên </th>"+
                        "<th> Tên Sinh Viên </th>"+
                        "<th> Mã Lớp  </th>"+
                        "<th> Năm Sinh </th>"+
                        "<th> Avatar </th>"+
                        "<th>  </th>"  +
                        "<th>  </th>"  +
                    "</tr>"
                ); 
                $.each(fileJSON.data,function(index,value){
                    $("table").append(
                        "<tr>"+
                            "<td class='id'>" +value.id+ "</td>"+
                            "<td class='maSV'>" +value.ma_sinhvien+ "</td>"+
                            "<td class='tenSV'>" +value.ten_sinhvien+ "</td>"+
                            "<td class='maLop'>" +value.ma_lop+ "</td>"+
                            "<td class='namSinh'>" +value.namsinh+ "</td>"+
                            "<td ><img src='"+value.avata+"' width ='120px' height= '120px' ></td>"+
                            "<td >"+ '<button id="xoa" name="'+value.id+'" class="btnDelete btn btn-danger " >Xoá</button>'+  "</td>"+
                            "<td >"+ '<button id="xoa" name="'+value.id+'" class="btnSelect btn btn-primary">Chọn</button>'+  "</td>"+
                        "</tr>" 
                    );
                    $("table").css({
                        'border': "2px solid black",
                    });
                 });
             }).catch(function (error) {
                console.log(error);
              });
                
        }
    });
 });


