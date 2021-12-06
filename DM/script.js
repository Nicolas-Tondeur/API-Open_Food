var input = document.getElementById("add-ean");
var ean = input.value;

var bouton = document.getElementById("btn-search");
//var adresse = `https://world.openfoodfacts.org/api/v0/product/${ean}.json`;
var adresse = "https://world.openfoodfacts.org/api/v0/product/3274080005003.json"

//alert(adresse);


var ligne = ``;

//bouton.addEventListener("click", function() {

alert("click");

let getProduct = () => {
    return new Promise((resolve, reject) => {
        axios.get(adresse).then(datas => {

            let product = datas.data;
            let brands = product.brands;
            let generic_name = product.generic_name_fr;
            let product_name = product.product_name_fr;
            let id = product.id;
            let small_picture = product.image_small_url;
            let icone_picture = product.image_thumb_url;
            let picture = product.image_url;
            let grade_nutriscore = product.nutriscore_grade;
            let score_nutriscore = product.nutriscore_score;

            alert("marque : " + brands);

            ligne += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.image_url}</td>
                    <td>${product.brands}</td>
                    <td>${product.product_name_fr}</td>
                    <td>${product.nutriscore_grade}</td>
                </tr>
                `;
            //tbody.innerHTML = ligne;


        });

    });
};
//});
bouton.addEventListener("click", getProduct());
//getProduct();