import './App.css';
import Header from "./Components/Header/header";
import Menu from "./Components/Menu/menu";
import SubCategory from "./Components/subCategory/subCategory";
import Products from "./Components/products/products";
import Main from "./Components/Main/main";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import style from "./Components/Main/main.module.css";
import AppRouter from "./AppRouter/appRouter";

function App() {
    const products = useSelector(state => state.productsReducer.products);
    const [searchedAllProducts, setSearchedAllProducts] = useState(products);

    return (
        <div className="App">
            <Header searchedAllProducts={searchedAllProducts} setSearchedAllProducts={setSearchedAllProducts}/>
            {/*<Main/>*/}
            <AppRouter  setSearchedAllProducts={setSearchedAllProducts} searchedAllProducts={searchedAllProducts}/>
        </div>
    );
}

export default App;
