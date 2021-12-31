import React, {useState} from 'react';
import style from "./search.module.css"
import Input from "../../Global/Input/input";
import Logo from "./Logo/logo";
import {useSelector} from "react-redux";

const Search = ({searchedAllProducts, setSearchedAllProducts}) => {
    const products = useSelector(state => state.productsReducer.products);
    const [search, setSearch] = useState('')
    return (
        <div className={style.search}>
            <Input type="text" cn="input" placeholder="search with code" value={search}
                   onChange={ e => {
                       const searchedProducts = products.filter(p => {
                           return p.code.toLowerCase().includes(e.target.value.toLowerCase())
                       })
                       setSearchedAllProducts(searchedProducts)
                       setSearch(e.target.value)
                   }
                   }
            />
            <Logo />
        </div>
    );
};

export default Search;