fetch("https://fakestoreapi.com/products")
  .then(function (responses) {
    return responses.json();
  })
  .then(function (products) {
    for (let product of products) {
      const judulProduk = document.createElement("h1");
      judulProduk.classList.add("judul-produk");
      judulProduk.textContent = product.title;
      const container = document.querySelector(".container");
      container.appendChild(judulProduk);
    }
  });
