import React, { useState, useEffect, useCallback, useContext } from "react";
import ProductItem from "../../components/Product/ProductItem";
import Category from "../../components/Category/Category";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductContext from "../../store/product-context";

let productsList: any[];
let category = "";

const ProductsPage = (props: any) => {
  const productCtx = useContext(ProductContext);

  const [list, setList] = useState<Array<any>>([]);

  const [categories, setCategories] = useState<Array<any>>([]);

  const getApiData = useCallback(async () => {
    const response = await fetch("https://fakestoreapi.com/products").then(
      (res) => res.json()
    );
    setList(convert(response));
    productsList = convert(response);
    addProductsHandler();
    passCategories();
  }, []);

  const addProductsHandler = () => {
    productsList.forEach(function (product) {
      productCtx.addItem({
        id: product.props.id,
        title: product.props.title,
        description: product.props.description,
        image: product.props.image,
        price: product.props.price,
        category: product.props.category,
      });
    });
  };

  const productItems = productCtx.items.map((item) => (
    <ProductItem
      id={item.id}
      title={item.title}
      category={item.category}
      image={item.image}
      price={item.price}
      description={item.description}
    />
  ));

  useEffect(() => {
    if (productItems.length === 0) {
      getApiData();
    } else {
      productsList = productItems;
      setList([productsList]);
      passCategories();
    }
  }, []);

  const convert = (arr: any[]): any[] => {
    let li = arr.map((p) => (
      <ProductItem
        id={p.id}
        title={p.title}
        image={p.image}
        description={p.description}
        price={p.price}
        category={p.category}
      />
    ));
    return li;
  };

  const filterByCategory = useCallback(
    (selectedCategory: string): any[] => {
      let filteredList: any[] = [];
      if (selectedCategory === "Category" || selectedCategory === "") {
        setList(productsList);
        return productsList;
      } else {
        productsList.forEach(function (product) {
          if (product.props.category === selectedCategory) {
            filteredList.push(product);
          }
        });
      }
      setList(filteredList);
      return filteredList;
    },
    [productsList]
  );

  const handleChangeCategory = (selectedCategory: string) => {
    category = selectedCategory;
    filterByCategory(selectedCategory);
  };

  const passCategories = () => {
    let allCategories: string[] = [];
    productsList.forEach(function (product) {
      if (!allCategories.includes(product.props.category)) {
        allCategories.push(product.props.category);
      }
    });
    setCategories(allCategories);
  };

  const filterBySearch = useCallback(
    (input: string) => {
      let matchedList: any[] = [];
      input = input.toLowerCase().trim();
      if (input === undefined) {
        alert("Nothing has been entered to search!");
      } else {
        filterByCategory(category).forEach(function (item) {
          let title: string = item.props.title;
          title = title.toLocaleLowerCase();
          let category: string = item.props.category;
          category = category.toLocaleLowerCase();
          if (title.includes(input) || category.includes(input)) {
            matchedList.push(item);
          }
        });
        if (matchedList.length !== 0) {
          setList(matchedList);
        } else {
          alert("Nothing found!");
        }
      }
    },
    [filterByCategory]
  );

  const handleSearch = (searchInput: string) => {
    filterBySearch(searchInput);
  };

  return (
    <div>
      <section className="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4 px-4 xl:py-0 xl:px-9 my-5">
        <div className="flex flex-wrap px-8 xl:px-3">
          <SearchBar handleSearch={handleSearch} />
          <Category
            categories={categories}
            handleChangeCategory={handleChangeCategory}
          />
        </div>
      </section>

      <section className="container mx-auto sm:px-8 max-w-full mx-auto sm:px-4 py-3 sm:px-12 pb-4">
        <div id="products" className="row flex flex-wrap">
          {list}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
