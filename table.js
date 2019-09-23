var order = {
    itemDetails : [],
    totalPrice: 0,
    address : {
        emailAddress: '',
        addressLine1: '',
        addressLine2: '',
        addressLine3: '',
        zipCode: '',
        phoneNumber: '',
    }
    
};

function myFun () {
    var id = document.getElementById('id').value;
    var code = document.getElementById('code').value;
    var quantity = document.getElementById('quantity').value;
    var unitPrice = document.getElementById('unitPrice').value;
    var totalPrice = parseInt(unitPrice) * parseInt(quantity);

    var itemDetail = {
        id,
        code,
        quantity,
        totalPrice,
        unitPrice,
    }
    order.itemDetails.push(itemDetail);

    var table = document.getElementById("stockMarketData");
    var tableRow = document.getElementsByTagName('tr');
    var row = table.insertRow(tableRow.length - 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = id;
    cell2.innerHTML = code;
    cell3.innerHTML = quantity;
    cell4.innerHTML = unitPrice;
    cell5.innerHTML = totalPrice;

    document.getElementById('code').value = "";
    document.getElementById('quantity').value = "";
    document.getElementById('unitPrice').value = '';
    var existingTotal = document.getElementById("tcost").innerHTML;
    var newTotalPrice = parseInt(existingTotal) + totalPrice;
    document.getElementById("tcost").innerHTML = newTotalPrice;
    order.totalPrice = newTotalPrice;
    document.getElementById('id').value = parseInt(id)+1;
}

function displayAddressDetailModal () {

var modal = document.getElementById("saveAddressModal");
modal.style.display = "block";
}

function closeAddressDetailModal () {
    var modal = document.getElementById("saveAddressModal");
    modal.style.display = "none";
}

// window.onclick = function(event) {
//     var modal = document.getElementById("saveAddressModal");
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }

function saveAddress() {
    order.address.emailAddress =  document.getElementById('inputEmail').value;
    order.address.addressLine1 =  document.getElementById('inputAddress1').value;
    order.address.addressLine2 =  document.getElementById('inputAddress2').value;
    order.address.addressLine3 =  document.getElementById('inputAddress3').value;
    order.address.zipCode =  document.getElementById('zipCode').value;
    order.address.phoneNumber =  document.getElementById('phoneNumber').value;

    var modal = document.getElementById("saveAddressModal");
    modal.style.display = "none";
}

function displayModal () {

    var modal = document.getElementById("viewInvoiceModal");
    modal.style.display = "block";

    var paraTag1 = document.createElement("p");
    paraTag1.innerHTML = order.address.emailAddress;
    document.getElementById("invoiceAddress").appendChild(paraTag1);

    var paraTag2 = document.createElement("p");
    paraTag2.innerHTML = order.address.addressLine1;
    document.getElementById("invoiceAddress").appendChild(paraTag2);
 
    var paraTag3 = document.createElement("p");
    paraTag3.innerHTML = order.address.addressLine2;
    document.getElementById("invoiceAddress").appendChild(paraTag3);

    var paraTag4 = document.createElement("p");
    paraTag4.innerHTML = order.address.addressLine3;
    document.getElementById("invoiceAddress").appendChild(paraTag4);

    var paraTag5 = document.createElement("p");
    paraTag5.innerHTML = order.address.zipCode;
    document.getElementById("invoiceAddress").appendChild(paraTag5);

    var paraTag6 = document.createElement("p");
    paraTag6.innerHTML = order.address.phoneNumber;
    document.getElementById("invoiceAddress").appendChild(paraTag6);

    var tableLength = order.itemDetails.length;

    for(var i = 0; i < tableLength; i++){
        var table = document.getElementById("invoiceDatatable");
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = order.itemDetails[i].id;
        cell2.innerHTML = order.itemDetails[i].code;
        cell3.innerHTML = order.itemDetails[i].quantity;
        cell4.innerHTML = order.itemDetails[i].unitPrice;
        cell5.innerHTML = order.itemDetails[i].totalPrice;
    }

    document.getElementById("totalItems").innerHTML = "The total number of items: " + order.itemDetails.length;
    document.getElementById("totalCost").innerHTML = "The total cost of all items: " + order.totalPrice;

    }
    
    function closeModal () {
        var modal = document.getElementById("viewInvoiceModal");
        modal.style.display = "none";
    }