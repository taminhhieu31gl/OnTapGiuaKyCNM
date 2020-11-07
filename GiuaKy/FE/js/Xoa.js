$(document).ready(function(){
    var IP = data.port;
    removeProduct();
    function removeProduct(){
        $("table").on('click','.btnDelete',function(){
            // get the current row
            var r = confirm("Xác nhận xóa");
            if (r == true) {
                var currentRow=$(this).closest("tr"); 
            
                var col1=currentRow.find("td:eq(0)").text(); 
                var URL = "http://"+IP+":5035/api/delete";
                var json = {
                    "id":col1
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
                .then(function (data) {
                    location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                });
              
            } else {
            
            }
       });
    }
});


