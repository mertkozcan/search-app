import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "../css/Main.css";
import Product from "./Product";
import { SearchProduct, GetAllProducts,SearchProductWithFilters } from "../actions/productAction";

function Main(props) {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (props.searchText && props.searchText.length > 1) {
      SearchProduct(props.searchText).then((products) => {
        setProducts(products);
        setPageCount(Math.floor(products.length / 12));
      });
    }
    else if ((props.colorFilters && props.colorFilters.length>0) || (props.brandFilters && props.brandFilters.length>0)) {
      SearchProductWithFilters(props.colorFilters,props.brandFilters).then((products) => {
        setProducts(products);
        setPageCount(Math.floor(products.length / 12));
      });
    }
    else {
      GetAllProducts().then((products) => {
        setProducts(products);
        setPageCount(Math.floor(products.length / 12));
      });
    }

  }, [props.searchText,props.colorFilters,props.brandFilters,props.order]);

  
  const GetPages = () => {
    var pages = [];

    if (pageCount == 1) return pages;

    for (let i = 1; i < pageCount; i++) {
      pages.push(<input type="button" value={i + 1} onClick={(event)=>handleClick(event)} />);
    }

    return pages;
  }

  const handleClick = (event) => {
    var value = event.target.value;
    
    if (value=="<") {
      setCurrentPage(currentPage==1 ? 1 : currentPage - 1)
    }
    else if (value == ">") {
      setCurrentPage(currentPage==pageCount ? pageCount : currentPage + 1)
    }
    else
    {    
      setCurrentPage(Number(event.target.value))
      }
  }

  const orderProducts = (products) => {
    switch (props.order) {
      case "PRICE_ASC":
        return products.sort(function(a, b) {
          return parseFloat((a.Price / 100) * a.DiscountPercentage) - parseFloat((b.Price / 100) * b.DiscountPercentage);
        });
      case "PRICE_DESC":
         return products.sort(function(a, b) {
          return parseFloat((b.Price / 100) * b.DiscountPercentage) - parseFloat((a.Price / 100) * a.DiscountPercentage);
        });
      case "NEW_ASC":
         return products.sort(function(a, b) {
         return new Date(b.DateAdded) - new Date(a.DateAdded);
        });
      case "NEW_DESC":
         return products.sort(function(a, b) {
         return new Date(a.DateAdded) - new Date(b.DateAdded);
        });
      default:
        return products;
    }
  }

  const indexOfLastTodo = currentPage * 12;
  const indexOfFirstTodo = indexOfLastTodo - 12;
  const currentProducts = products.slice(indexOfFirstTodo, indexOfLastTodo);

  const newProducts = orderProducts(currentProducts);

  return (
    <>
     <div className="main">
      {newProducts &&
        newProducts.length > 0 &&
        newProducts.map((product, id) => {
          return (
            <Product
              key={id}
              productItem={product}
            />
          );
        })}
        {newProducts.length % 4 ==1 ? <> <div/><div/><div/></> : newProducts.length % 4 ==2 ? <> <div/><div/></> : newProducts.length % 3 ==1 ? <> <div/></> : null}
        <div className="pagination">
          <input type="button" value={"<"} onClick={(event)=>handleClick(event)} />
          <input type="button" value={"1"} onClick={(event)=>handleClick(event)} />
          {GetPages()}
           <input type="button" value={">"} onClick={(event)=>handleClick(event)}/>
        </div>
    </div>
    </>
  );
}

Main.propTypes = {
  searchText: PropTypes.string,
  colorFilters: PropTypes.array,
  brandFilters: PropTypes.array,
  order:PropTypes.string
};

export default Main;
