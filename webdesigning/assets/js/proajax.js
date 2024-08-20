$(document).ready(function () {
    $.ajax({
        url: "assets/json/product.json",
        type: "get",
        success: function (data) {
            // console.log(data);
            let x = ``;
            $.each(data, function (index, values) {
                // console.log(values)
                x += `<div class="col-lg-3 mt-3">
                <div class="card">
                    <img src="${values.images}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${values.name}</h5>
                        <p>${values.price}</p>
                        <p>${values.description}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>`
            })
            $("#dataRow").html(x);
        }
    })
})