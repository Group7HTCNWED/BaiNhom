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
        "name": "Hoa sen khô",
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
                        <a href="" class="btn btn-outline-danger" data-name="${v.name}" data-price="${v.price}" data-pic="${v.pic}">Mua ngay</a>
                        <input type="button"  value="Mua ngay"></input>
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
    let y = ``;
    let type = ``;
    var urlID = window.location.href;
    res1 = urlID.slice(-1);
    $.each(product, function (k, v) {
        if (v.id == res1) {
            switch (v.type) {
                case 1:
                    type = "Hoa Khô"
                    break;
                case 2:
                    type = "Hoa Giả"
                    break;
                case 3:
                    type = "Bình Hoa"
                    break;
                case 4:
                    type = "Giỏ Hoa"
                    break;
            }
            x += `<img src="${v.pic}" alt="" style="width: 730px; height: 480px;"
            class="img-rounded">`
            y += `<nav aria-label="breadcrumb ">
                    <ol class="breadcrumb ">
                        <li class="breadcrumb-item "><a href="#" class="text-decoration-none link-dark">Trang
                                chủ</a>
                        </li>
                        <li class="breadcrumb-item "><a href="#" class="text-decoration-none  link-dark">Sản phẩm</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">${type}</li>
                    </ol>
                </nav>
                <h1 class="p-3">${v.name}</h1>
                <div class="rate d-flex p-3">
                    <span class="rate " style="color: rgb(226, 226, 7);">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <span class="text-dark">11 đánh giá</span>
                    </span>
                </div>
                <div class="product-title p-3">
                    <h3><b>Giá</b></h3>
                    <h3>${v.price}.000₫/100g</h3>
                </div>
                <ul class="list-unstyled">
                    <li><i class="fa-solid fa-truck p-3"></i> Chuyển phát nhanh</li>
                    <li><i class="fa-solid fa-shield p-3"></i> Thanh toán an toàn</li>
                    <li><i class="fa-solid fa-heart p-3"></i> Hỗ trợ các nhà sản xuất hàng loạt nhỏ</li>
                    <li><i class="fa-solid fa-earth-americas p-3"></i> Có sẵn vận chuyển trên toàn thế giới</li>
                    <li><i class="fa-solid fa-circle p-3" style="color: green;"></i> Còn hàng, sẵn sàng để giao</li>
                </ul>
                <p class=" p-3">Đã bao gồm thuế. </p>
                <a href="" class="add" data-name="${v.name}" data-price="${v.price}" data-pic="${v.pic}"><button
                        class="btn btn-dark w-100 p-4 fs-3">Thêm vào giỏ hàng</button></a>`
        }
    });
    $("#image-detail-product").html(x);
    $("#detail-product").html(y);
}
showProductDetail(product);

var shoppingCart = (function () {
    cart = [];

    // Constructor
    function Item(name, price, count, img) {
        this.name = name;
        this.price = price;
        this.count = count;
        this.img = img;
    }

    // Save cart
    function saveCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    // Load cart
    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
        loadCart();
    }

    var obj = {};

    // Add to cart
    obj.addItemToCart = function (name, price, count, img) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count++;
                saveCart();
                return;
            }
        }
        var item = new Item(name, price, count, img);
        cart.push(item);
        saveCart();
    }
    // Set count from item
    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };
    // Remove item from cart
    obj.removeItemFromCart = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count--;
                if (cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    // Remove all items from cart
    obj.removeItemFromCartAll = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }

    // Clear cart
    obj.clearCart = function () {
        cart = [];
        saveCart();
    }

    // Count cart 
    obj.totalCount = function () {
        var totalCount = 0;
        for (var item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    // Total cart
    obj.totalCart = function () {
        var totalCart = 0;
        for (var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    }

    // List cart
    obj.listCart = function () {
        var cartCopy = [];
        for (i in cart) {
            item = cart[i];
            itemCopy = {};
            for (p in item) {
                itemCopy[p] = item[p];

            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }
    return obj;
})();


// *****************************************
// Triggers / Events
// ***************************************** 
// Add item
$('.add').click(function (event) {
    event.preventDefault();
    var img = $(this).data('img');
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1, img);
    displayCart();
});

// Clear items
$('.clear-cart').click(function () {
    var r = confirm("Are you sure?");
    if (r == true) {
        shoppingCart.clearCart();
        displayCart();
    }
    else
        return;
});

$('.clearOrder').click(function () {

    shoppingCart.clearCart();
    displayCart();

});

function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "Your cart is empty";
    for (var i in cartArray) {
        output += "<tr>"
            // + "<td>" + "<img style='width: 1.75rem; height: 2.5rem; display:block; margin: auto' src=img" + cartArray[i].pic + ".jpg alt='thumbnail'></td>"
            + "<td><b>" + cartArray[i].name + "</b></td>"
            + "<td><b>" + "$" + cartArray[i].price + "</b></td>"
            + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary p-0' data-name=" + cartArray[i].name + ">-</button>"
            + "<input type='number' min='1' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
            + "<button class='plus-item btn btn-primary input-group-addon p-0' data-name=" + cartArray[i].name + ">+</button></div></td>"
            + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + "><i class='fa fa-trash' aria-hidden='true'></i></button></td>"
            + " = "
            + "<td><b>" + "$" + cartArray[i].total + "</b></td>"
            + "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
    //adding shopping cart only display badge number when have at least one item
    if (shoppingCart.totalCount() == 0) {
        $('span.total-count').addClass('d-none');
    }
    else
        $('span.total-count').removeClass('d-none');
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function (event) {
    var name = $(this).data('name');
    var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
});

displayCart();


//Add to cart animation source code from code pen
$('.add').on('click', function () {
    var cart = $('.shopping-cart');
    var imgtodrag = $(this).parents('.card').find("img").eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
            .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
            .css({
                'opacity': '0.8',
                'position': 'absolute',
                'height': '125px',
                'width': '75px',
                'z-index': '100'
            })
            .appendTo($('body'))
            .animate({
                'top': cart.offset().top - 30,
                'left': cart.offset().left - 30,
                'width': '25px',
                'height': '50px'
            }, 400, 'easeInOutExpo');

        setTimeout(function () {
            cart.effect("shake", {
                times: 2
            }, 300);
        }, 500);

        imgclone.animate({
            'width': 0,
            'height': 0
        }, function () {
            $(this).detach()
        });
    }
});