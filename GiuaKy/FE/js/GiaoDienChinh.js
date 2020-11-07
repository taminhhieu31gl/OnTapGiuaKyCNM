$(document).ready(function() {
    var IP = data.port;
    $(function(){
        onload();
        var i = 0;
        function onload(){
            var urlTest1 = "http://"+IP+":5035/api/get";
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
                        "<th> Tên </th>"+
                        "<th> Đơn Vị Tính  </th>"+
                        "<th> Giá </th>"+
                        "<th> Thông Số Kỹ Thuật </th>"+
                        "<th>  </th>"  +
                    "</tr>"
                ); 
                $.each(fileJSON.data,function(index,value){
                    $("table").append(
                        "<tr>"+
                            "<td class='id'>" +value.id+ "</td>"+
                            "<td class='ten'>" +value.ten+ "</td>"+
                            "<td class='donViTinh'>" +value.donViTinh+ "</td>"+
                            "<td class='gia'>" +value.gia+ "</td>"+
                            "<td class='thongSoKyThuat'>" +value.thongSoKyThuat+ "</td>"+
                            "<td >"+ '<button id="xoa" name="'+value.id+'" class="btnDelete btn btn-danger " >Xoá</button>'+  "</td>"+
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


