import AWS from "aws-sdk"
let awsConfig = {
    "region": "ap-southeast-1",
    "accessKeyId": "AKIAXTD2354P7MLUVCXX", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

export function them (req, res) {
    var input = {
        "id": req.body.id, "ten": req.body.ten, "donViTinh": req.body.donViTinh,
        "gia": req.body.gia, "thongSoKyThuat": req.body.thongSoKyThuat
    };
    var params = {
        TableName: "GiuaKyLK",
        Item:  input
    };
    docClient.put(params, function (err, data) {
        if (err) {
           return err;                
        } else {
            res.status(200).json({
                status: 200,
                message: "tạo thành công",
                data: input
            });                     
        }
    });
}

export const getDS = async (req, res) => {
    var params = {
        TableName: "GiuaKyLK"
    };
    await docClient.scan(params,async function (err, data) {
        if (err) {
            return data;
        }
        else {
            res.status(200).json({
                status: 200,
                message: "Danh sách",
                data:  data.Items
            });
        }
    })
}

export function xoa (req, res) {
    var params = {
        TableName: "GiuaKyLK",
        Key: {
            "id": req.body.id
        }
    };
    docClient.delete(params, function (err, data) {
        if (err) {
            console.log("users::delete::error - " + JSON.stringify(err, null, 2));
        } else {
            res.status(200).json({
                status: 200,
                message: "xoá thành công",
            }); 
        }
    });
}