import React, {useEffect, useState} from 'react';
import Menu from "../Menu/menu";
import SubCategory from "../subCategory/subCategory";
import Products from "../products/products";
import style from "./main.module.css"
import Filter from "../Filter/filter";


const Main = ({searchedAllProducts, setSearchedAllProducts}) => {

    const [filprice, setFilprice] = useState([500, 10000])
    const [filtered, setFiltered] = useState([])

    useEffect(()=> {
        if (filprice.length){
            let arr = []
            searchedAllProducts.map(s => {
                if (s.price > filprice[0] && s.price < filprice[1]){
                    arr.push(s)
                }
            })
            setSearchedAllProducts(arr)
        }
    }, [filprice[0], filprice[1]])


    useEffect(() => {
        if (filtered.length) {
            console.log(searchedAllProducts)
        }
    }, [filtered.length])

    return (
        <div className={style.main}>
            <div className={style.mainBg}>
               <div className={style.margin}>
                   <Menu/>
                   <SubCategory/>
                   <Filter filprice={filprice} setFilprice={setFilprice}/>
                   <Products products searchedAllProducts={searchedAllProducts}/>
               </div>
            </div>
        </div>
    );
};

export default Main;