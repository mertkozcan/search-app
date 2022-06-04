export function GetAllProducts() {
    return fetch("../api/product", {
      method: "GET",
    })
      .then((res) => res.text())
      .then((products) => {
        return JSON.parse(products);
      })
      .catch((error) => console.log(error));
  }

  export function GetBrands() {
    return fetch("../api/product/GetBrands", {
      method: "GET",
    })
      .then((res) => res.text())
      .then((brands) => {
        return JSON.parse(brands);
      })
      .catch((error) => console.log(error));
  }