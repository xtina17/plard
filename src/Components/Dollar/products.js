import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import useQuery from "../../Hooks/useQuery";
import {useHistory} from "react-router-dom";
import productsReducer from "../../Redux/Reducers/products.reducer";
import style from "./products.module.css"
import Filter from "../Filter/filter";
import {AiOutlinePlus} from "react-icons/ai";

import Input from "../Global/Input/input";
import UploadPhoto from "../uploadPhoto/upload-photo";
import {addCategoryAC} from "../../Redux/Actions/categories.action";
import {addProductAC} from "../../Redux/Actions/products.action";
import Modal from "../Global/Modal/modal";
import {AiOutlineZoomIn} from "@react-icons/all-files/ai/AiOutlineZoomIn";

const Products = ({searchedAllProducts}) => {
    const genders = useSelector(state => state.genderReducer.genders);
    const category = useSelector(state => state.categoriesReducer.categories);
    const subCategories = useSelector(state => state.subCategoriesReducer.subCategories);
    const products = useSelector(state => state.productsReducer.products)
    const filPrice = useSelector(state => state.productsReducer.price)

    const [filteredProduct, setFilteredProducts] = useState([])
    const [isShowCategoryModal, setShowCategoryModal] = useState(false)

    const [photo, setPhoto] = useState(null);
    const [file, setFile] = useState(null)
    const [productText, setProductText] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCode, setProductCode] = useState('');
    const dispatch = useDispatch()
    const query = useQuery();
    const history = useHistory();

    const genderId = +query.get('gender') || 1
    const categoryQuery = +query.get('category') || 1
    const subCategoryQuery = +query.get('subCategory') || 1
    const productQuery = +query.get('product') || 1


    const [dataProduct, setDataProduct] = useState(null)
    const [dataProductCat, setDataProductCat] = useState(null)
    const [dataProductSubCat, setDataProductSubCat] = useState(null)
    const [dataGender, setDataGender] = useState(null)

    useEffect(() => {
        let p = null
        searchedAllProducts.forEach(item => {
            if (item.id === productQuery){
                p = item
            }
        })
        setDataProduct(p)
    }, [searchedAllProducts, productQuery])
    useEffect(() => {
        let s = null
        category.forEach(item => {
            if (item.id === productQuery){
                s = item
            }
        })
        setDataProductCat(s)
    }, [category, productQuery])
    useEffect(() => {
        let x = null
        subCategories.forEach(item => {
            if (item.id === productQuery){
                x = item
            }
        })
        setDataProductSubCat(x)
    }, [subCategories, productQuery])
    useEffect(() => {
        let y = null
        genders.forEach(item => {
            if (item.id === productQuery){
                y = item
            }
        })
        setDataGender(y)
    }, [genders, productQuery])





    useEffect(() => {
        console.log(dataProduct)
    }, [dataProduct,productQuery])
    useEffect(() => {
        console.log(dataProductCat)
    }, [dataProductCat,productQuery])
    useEffect(() => {
        console.log(dataProductSubCat)
    }, [dataProductSubCat,productQuery])
    useEffect(() => {
        console.log(dataGender)
    }, [dataGender,productQuery])

    const addNewProduct = () => {
        dispatch(addProductAC({id: Math.random(), subCategoryId:subCategoryQuery, img: photo , price:productPrice, code:productCode}))
        console.log(products)
    }

    return (

        <div className={style.products} >
            {
                searchedAllProducts.map(p => {
                    return (
                       p.subCategoryId === subCategoryQuery && <div key={p.id} onClick={() => setShowCategoryModal(true)} className={style.product} >
                           <img src={p.productImg} className={style.image}/>
                           <div className={style.infos}>
                               <div> {p.price}</div>
                               <div>{p.code} </div>
                               <div onClick={() => {
                                   history.push(`/?gender=${genderId}&category=${categoryQuery}&subCategory=${subCategoryQuery}&product=${p.id}`)
                                   setShowCategoryModal(true)
                               }}> <AiOutlineZoomIn/> </div>
                           </div>
                        </div>
                    )
                })
            }
            {
                isShowCategoryModal &&
                <Modal cn="modalThree" close={() => setShowCategoryModal(false)}>
                    <div className={style.gend}>
                        <div className={style.gendIcon}>
                            <img src={dataGender.gender}/><p>{dataGender.genderP} | 11.02.2021 </p>
                        </div>
                        <div className={style.bordIcons}> </div>
                    </div>
                    <div className={style.two}>
                        <div className={style.mods}>
                            <img src={dataProduct.productImg} className={style.images}/>
                        </div>
                        <div className={style.mods2}>
                            <div className={style.bord2}>
                                <div>
                                    <img src={dataProductCat.img} className={style.catImg}/>
                                    <div className={style.bordDiv}>
                                        <span>{dataProductCat.text}</span>
                                        <span className={style.pp}>{dataProductSubCat.subCategory}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.bords}>
                                <div className={style.bord}>
                                    <div>
                                        <p>{dataProduct.price}</p>
                                    </div>
                                </div>
                                <div className={style.bord}>
                                    <div>
                                        <p>цена</p>
                                        <p className={style.sty}>{dataProduct.code}$</p>
                                    </div>
                                </div>
                                <div className={style.bord3}>
                                    <div>
                                        <p>цена производства</p>
                                        <p>{dataProduct.code}$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            }
        </div>
    );
};

export default Products;