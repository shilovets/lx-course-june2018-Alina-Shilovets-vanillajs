displaySideBar(Orders);
displayOrderFullInfo(Orders);
displayShippingAddress(Orders);
displayProducts(Orders);
/*var ordersNode = document.querySelector(".orders-list");
ordersNode.addEventListener("click", showDetail);
*/
function displaySideBar(Orders) {
    var ordersNode = document.querySelector(".orders-list");

    for (var i = 0; i < Orders.length; i++) {
        ordersNode.appendChild(createOrderList(Orders[i]));
    }

}

function createOrderList(order) {
    var orderList = document.createElement("div");
    orderList.className = "order";
    orderList.id = order.id;
    orderList.innerHTML = '<div class="order-info"><p>Order ' + order.id +
        '</p><p>' + order.OrderInfo.customer +
        '</p><p>Shipped: ' + order.OrderInfo.shippedAt +
        '</p></div><div class="order-status"><p>' + order.OrderInfo.createdAt +
        '</p><p class="status-intime">' + order.OrderInfo.status +
        '</p></div></div>';
    return orderList;
}
function displayOrderFullInfo(Orders) {
    var orderFullInfoNode = document.querySelector(".order-title");
    orderFullInfoNode.appendChild(createOrderFullInfo(Orders[1]))
}
function createOrderFullInfo(order) {
    var orderFullInfoNode = document.createElement("div");
    orderFullInfoNode.className = "order-full-info";
    orderFullInfoNode.innerHTML = '<div class="order-full-info-main"><p>Order ' + order.id +
        '</p><p>Customer: ' + order.OrderInfo.customer +
        '</p><p>Ordered: ' + order.OrderInfo.createdAt +
        '</p><p>Shipped: ' +order.OrderInfo.shippedAt +
        '</p></div><div class="order-full-info-coast"><p id="paragraph-coast">150 935, 13' +
        '</p><p id="paragraph-currency">EUR</p></div>';

    return orderFullInfoNode;
}

function displayShippingAddress(Orders) {
    var shippingAddressNode = document.querySelector(".shipping-address");
    shippingAddressNode.appendChild(createShippingAddress(Orders[1]))
}
function createShippingAddress(order) {
    var shippingAddressNode = document.createElement("form");
    shippingAddressNode.className = "shipping-address-info";
    shippingAddressNode.innerHTML = '<div class="shipping-address-info-label"><label>Name:' +
        '</label><label>Street:</label><label>ZIP Code / Ciry:' +
        '</label><label>Region:</label><label>Contry:</label></div>' +
        '<div class="shipping-address-info-input"><input type="text" id="name" value="' + order.ShipTo.name +
        '" readonly><input type="text" id="street" value="' + order.ShipTo.Address +
        '" readonly><input type="text" id="zipCode" value="' + order.ShipTo.ZIP +
        '" readonly><input type="text" id="region" value="' + order.ShipTo.Region +
        '" readonly><input type="text" id="country" value="' + order.ShipTo.Country +
        '" readonly></div>';
    return shippingAddressNode;
}

function displayProducts(Orders) {

    var productsNode = document.querySelector(".line-items-table");
    productsNode.appendChild(createProducts(Orders[1]))
}
function createProducts(order) {
    var quantityProductsNode = document.querySelector("#quantityProducts");
    quantityProductsNode.innerHTML = String(order.products.length);

    var productsNode = document.querySelector(".line-items-table");

    var codeHTML = "";

    for (var i = 0; i < order.products.length; i++) {
        codeHTML += '<tr><td><b>' + order.products[i].name + '<br></b>' + order.products[i].id +
            '</td><td><b>' + order.products[i].price + '&nbsp </b>' + order.products[i].currency +
            '</td><td>' + order.products[i].quantity +
            '</td><td><b>' + order.products[i].totalPrice + '&nbsp</b>'+ order.products[i].currency +
            '</td></tr>';

    }
    productsNode.innerHTML = codeHTML;
    return productsNode;
}
/*
function displayOrder(Orders) {
    displayOrderFullInfo(Orders);
    displayShippingAddress(Orders);
    displayProducts(Orders);
}
*/
/*
function showDetail(event) {

    table.onclick = function(event) {
        var target = event.target;

        var td = target.closest('td');
        if (!td) return; // клик вне <td>, не интересует

        // если клик на td, но вне этой таблицы (возможно при вложенных таблицах)
        // то не интересует
        if (!table.contains(td)) return;

        // нашли элемент, который нас интересует!
        highlight(td);
    }

}
 */






