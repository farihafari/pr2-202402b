let obj = [
    {
        serviceName: "Web Designign",
        servicePrice: "$40",
        images: "assets/images/w1.jpg",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        serviceName: "Graphic Designing",
        servicePrice: "$60",
        images: "assets/images/g1.webp",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        serviceName: "Software Development",
        servicePrice: "$70",
        images: "assets/images/s1.png",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        serviceName: "Search Engine Optimization",
        servicePrice: "$70",
        images: "assets/images/se1.png",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        serviceName: "Software Testing",
        servicePrice: "$80",
        images: "assets/images/i2.jpg",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
];
let nullVariable = ``;
// document.write(obj.serviceName + " " + obj.servicePrice)
// for (let i = 0; i < obj.length; i++) {
//     document.write(i)
// }
let count = 0;
for (let keys in obj) {
    count = count + 1;
    nullVariable += `  <tr>
                 <th scope="row">${count}</th>
                <td>`+ obj[keys].serviceName + `</td>
                <td>${obj[keys].servicePrice}</td>
                <td>${obj[keys].description}</td>
                <td><img src="${obj[keys].images}" width='150'/></td>
            </tr>
`
}
document.querySelector("#tableData").innerHTML = nullVariable;
// FOR CARD
