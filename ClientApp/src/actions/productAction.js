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

export function GetBrands(selectedColors) {
  return fetch("../api/product/GetBrands", {
    body: JSON.stringify(selectedColors),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.text())
    .then((brands) => {
      return JSON.parse(brands);
    })
    .catch((error) => console.log(error));
}

export function GetColors(selectedBrands) {
  return fetch("../api/product/GetColors", {
    body: JSON.stringify(selectedBrands),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.text())
    .then((colors) => {
      return JSON.parse(colors);
    })
    .catch((error) => console.log(error));
}

export function SearchProduct(searchText) {
  return fetch("../api/product/SearchProduct/" + searchText, {
    method: "GET",
  })
    .then((res) => res.text())
    .then((products) => {
      return JSON.parse(products);
    })
    .catch((error) => console.log(error));
}

export function SearchProductWithFilters(colors, brands) {
  return fetch("../api/product/SearchProductWithFilter", {
    body: JSON.stringify({ColorFilters:colors,BrandFilters:brands}),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.text())
    .then((products) => {
      return JSON.parse(products);
    })
    .catch((error) => console.log(error));
}
