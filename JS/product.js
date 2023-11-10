var product = [
    {
        "name": "Hoa Lavender khô",
        "id": "1",
        "price": 120,
        "pic": "../ASSETS/img/Driedflower/h1.jpg",
        "type": 1
    },
    {
        "name": "Hoa hồng khô",
        "id": "1",
        "price": 150,
        "pic": "../ASSETS/img/Driedflower/h2.jpg",
        "type": 1
    },
    {
        "name": "Hoa sen khô<",
        "id": "1",
        "price": 95,
        "pic": "../ASSETS/img/Driedflower/h3.jpg",
        "type": 1
    },
    {
        "name": "Hoa cúc glixia khô",
        "id": "1",
        "price": 160,
        "pic": "../ASSETS/img/Driedflower/h4.jpg",
        "type": 1
    },
    {
        "name": "Hoa baby khô",
        "id": "1",
        "price": 135,
        "pic": "../ASSETS/img/Driedflower/h5.jpg",
        "type": 1
    },
    {
        "name": "Hoa bông gòn khô",
        "id": "1",
        "price": 50,
        "pic": "../ASSETS/img/Driedflower/h6.jpg",
        "type": 1
    }, {
        "name": "Hoa lúa mạch khô",
        "id": "1",
        "price": 70,
        "pic": "../ASSETS/img/Driedflower/h7.jpg",
        "type": 1
    }, {
        "name": "Hoa cúc nút áo khô",
        "id": "1",
        "price": 85,
        "pic": "../ASSETS/img/Driedflower/h8.jpg",
        "type": 1
    },
]
var res = "";
var res1 = "";
function showProduct(product) {
    let x = ``;
    var urlID = window.location.href;
    res1 = urlID.slice(-1);
    $.each(product, function (k, v) {
        x += `<div class="col-3">
                <div class="thumbnail">
                    <img src="${v.pic}" alt="" class="imgcrop">
                    <div class="card-body">
                        <h3>${v.name}</h3>
                        <p>${v.price}.000₫/100g</p>
                        <input type="button" class="btn btn-outline-danger" value="Mua ngay"></input>
                    </div>
                </div>
            </div>`;

    });

    $("#show-product").html(x);
}
showProduct(product);
