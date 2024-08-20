fetch("assets/json/product.json")
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
        let d = ``;
        for (let keys of data) {
            // console.log(keys.name)
            d += `<div class="col-lg-3 mt-3">
                <div class="card">
                    <img src="${keys.images}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${keys.name}</h5>
                        <p>${keys.price}</p>
                        <p>${keys.description}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>`
        }
        document.querySelector("#productData").innerHTML = d;

    })