var product = [
    {
        "name": "Hoa Lavender khô",
        "id": "1",
        "price": 120,
        "pic": "../ASSETS/img/Driedflower/h1.jpg",
        "type": 1,
        "description": "abc"
    },
    {
        "name": "Hoa hồng khô",
        "id": "2",
        "price": 150,
        "pic": "../ASSETS/img/Driedflower/h2.jpg",
        "type": 1,
        "description": "abc"
    },
    {
        "name": "Hoa sen khô<",
        "id": "3",
        "price": 95,
        "pic": "../ASSETS/img/Driedflower/h3.jpg",
        "type": 1,
        "description": "abc"
    },
    {
        "name": "Hoa cúc glixia khô",
        "id": "4",
        "price": 160,
        "pic": "../ASSETS/img/Driedflower/h4.jpg",
        "type": 1,
        "description": "abc"
    },
    {
        "name": "Hoa baby khô",
        "id": "5",
        "price": 135,
        "pic": "../ASSETS/img/Driedflower/h5.jpg",
        "type": 1,
        "description": "abc"
    },
    {
        "name": "Hoa bông gòn khô",
        "id": "6",
        "price": 50,
        "pic": "../ASSETS/img/Driedflower/h6.jpg",
        "type": 2,
        "description": "abc"
    }, {
        "name": "Hoa lúa mạch khô",
        "id": "7",
        "price": 70,
        "pic": "../ASSETS/img/Driedflower/h7.jpg",
        "type": 2,
        "description": "abc"
    }, {
        "name": "Hoa cúc nút áo khô",
        "id": "8",
        "price": 85,
        "pic": "../ASSETS/img/Driedflower/h8.jpg",
        "type": 2,
        "description": "abc"
    },
]

var res = "";
var res1 = "";

function showProduct(product) {
    let x = ``;
    let title = ``;
    var urlID = window.location.href;
    res1 = urlID.slice(-1);
    $.each(product, function (k, v) {
        switch (res1) {
            case "1":
                title = `Hoa Khô Trang Trí `;
                break;
            case "2":
                title = `Hoa Giả Trang Trí `;
                break;
            case "3":
                title = `Chậu Hoa Trang Trí `;
                break;
            case "4":
                title = `Bình Hoa Trang Trí `;
                break;
            case "5":
                title = `Giỏ Hoa Trang Trí `;
                break;
        }
        if (res1 == v.type) {
            x += `
            <div class="col-3">
            <a href="detail.html?name=${v.id}">
                <div class="thumbnail">
                    <img src="${v.pic}" alt="" class="imgcrop">
                    <div class="card-body">
                        <h3>${v.name}</h3>
                        <p>${v.price}.000₫/100g</p>
                        <input type="button" class="btn btn-outline-danger" value="Mua ngay"></input>
                    </div>
                </div>
                </a>
            </div>`
                ;
        }
    });
    $("#title").html(title);
    $("#show-product").html(x);
}

showProduct(product);

function searchProduct() {
    let x = ``;
    let title = ``;
    var input, filter;
    input = document.getElementById("keyword");
    filter = input.value.toUpperCase();
    $.each(product, function (k, v) {
        if (filter == "") {
            title = `Tất cả sản phẩm`;
        }
        else {
            title = "Sản phẩm liên quan tới " + input.value
        }


        if (v.name.toUpperCase().includes(filter)) {
            x += `
            <div class="col-3">
            <a href="detail.html?name=${v.id}">
                <div class="thumbnail">
                    <img src="${v.pic}" alt="" class="imgcrop">
                    <div class="card-body">
                        <h3>${v.name}</h3>
                        <p>${v.price}.000₫/100g</p>
                        <input type="button" class="btn btn-outline-danger" value="Mua ngay"></input>
                    </div>
                </div> 
                </a>
            </div>`;
        }
    });
    $("#title").html(title);
    $("#show-product").html(x);
}

function showProductDetail(product) {
    let x = ``;
    var urlID = window.location.href;
    res1 = urlID.slice(-1);
    $.each(product, function (k, v) {
        if (v.id == res1) {
            x += `<div class="row">
            <div class="col-5"><img src="${v.pic}" alt="" class="imgcrop" width="100%">
            </div>
            <div class="col-7">
                <div class="product-name">${v.name}</div>
                <div class="rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                </div>
                <div class="price">
                ${v.price}.000₫/100g
                </div>
                <div class="add-to-cart">
                    <div class="quantity">Số lượng: 1</div>
                    <div class="row">
                        <div class="col-6"><a href="">Thêm vào giỏ hàng</a></div>
                        <div class="col-6"><a href="">Mua ngay</a></div>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="description">
            <div class="title">Thông tin sản phẩm</div>
            <div class="product-content">
                ${v.description}
            </div>
        </div>`;
        }
    });
    $("#detail").html(x);
}
showProductDetail(product);