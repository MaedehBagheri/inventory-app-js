import ProductView from "./product.js";
import CategoryView from "./category.js";

document.addEventListener("DOMContentLoaded", () => {
  // setApp => categories : OK
  CategoryView.setApp();
  ProductView.setApp();
  console.log(ProductView)
  console.log(CategoryView)
  // create categories options
  CategoryView.createCategoriesList();
  //
  ProductView.createProductsList(ProductView.products);
});