let obj = [
    {
        serviceName: "Web Designign",
        servicePrice: "$40",
        images: "assets/images/w1.jpg",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        serviceName: "Graphic Designing",
        servicePrice: "$40",
        images: "assets/images/g1.webp",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        serviceName: "Software Development",
        servicePrice: "$40",
        images: "assets/images/s1.png",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        serviceName: "Search Engine Optimization",
        servicePrice: "$40",
        images: "assets/images/se1.png",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },

];
let rowData1 = ``;
let modalData = ``;
for (let dataObject in obj) {
    rowData1 += `<div class="col-lg-3 mt-3">
        <div class="card">
          <img src="${obj[dataObject].images}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${obj[dataObject].serviceName}</h5>
            <p class="card-text">${obj[dataObject].servicePrice}</p>
          
            <a href="#exampleModal${dataObject}" class="btn btn-primary" data-bs-toggle="modal">Quick View</a>
          </div>
        </div>
      </div>`
    modalData += ` <div class="modal fade" id="exampleModal${dataObject}" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${obj[dataObject].serviceName}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row justify-content-evenly">
            <div class="col-lg-4">
              <img src="${obj[dataObject].images}" class='img-fluid' alt="">
            </div>
            <div class="col-lg-4">
              <p class="card-text">${obj[dataObject].description}</p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>`
}
document.getElementById('rowData').innerHTML = rowData1;
document.getElementById('modalPrint').innerHTML = modalData