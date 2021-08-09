function add_product() {
    var description = document.getElementById("form_descrption");
    var quantity = document.getElementById("form_quantity");
    var price = document.getElementById("form_price");

    var dates = document.getElementById("description_table");

    var subtotal = Number(quantity.value) * Number(price.value); 

    dates=innerHTML = dates.innerHTML +"<tr>"+
                                        "<td>"+ description.value+ "</td>"+
                                        "<td>"+quantity.value+"</td>"+
                                        "<td>"+price.value+"</td>"+
                                        "<td name='subtotal'>"+subtotal.value+"</td>"+
                                        "</tr>";
calculate_total();

}

function calculate_total() {

    var subtotals = document.getElementById('subtotal');
    var total = document.getElementById('total');

    var sum = 0;

    for (var i =0; i <subtotals.length; i++) {
        sum= sum + Number(subtotals[i].innerText)
    }

    total.innerText = "$"+sum;
}