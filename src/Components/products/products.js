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
import {AiOutlineArrowLeft} from "@react-icons/all-files/ai/AiOutlineArrowLeft";
import {AiOutlineClose} from "@react-icons/all-files/ai/AiOutlineClose";
import {AiOutlineMore} from "@react-icons/all-files/ai/AiOutlineMore";
import {AiOutlinePoweroff} from "@react-icons/all-files/ai/AiOutlinePoweroff";
import {AiOutlinePrinter} from "@react-icons/all-files/ai/AiOutlinePrinter";
import {TextField} from "@material-ui/core";
import DatePickers from "../Global/Data/data";
import ColorTextFields from "../Global/Inp/inp";

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
    const subCategoryQuery = +query.get('subCategory')
    const productQuery = +query.get('product')


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
            if (item.id === categoryQuery){
                s = item
            }
        })
        setDataProductCat(s)
    }, [category, productQuery])
    useEffect(() => {
        let x = null
        subCategories.forEach(item => {
            if (item.id === subCategoryQuery){
                x = item
            }
        })
        setDataProductSubCat(x)
    }, [subCategories, productQuery])
    useEffect(() => {
        let y = null
        genders.forEach(item => {
            if (item.id === genderId){
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
                        p.subCategoryId === subCategoryQuery && <div key={p.id}  className={style.product} onClick={() => {
                            history.push(`/?gender=${genderId}&category=${categoryQuery}&subCategory=${subCategoryQuery}&product=${p.id}`)
                            setShowCategoryModal(true)
                        }}>
                            <img src={p.productImg} className={style.image}/>
                            <div className={style.infos}>
                                <div> {p.price}</div>
                                <div>{p.code} </div>
                                {/*<div> <AiOutlineZoomIn/> </div>*/}
                            </div>
                        </div>
                    )
                })
            }
            {/*{*/}
            {/*    isShowCategoryModal &&*/}
            {/*    <Modal cn="modalThree" close={() => setShowCategoryModal(false)}>*/}
            {/*        <div className={style.gend}>*/}
            {/*            <div className={style.gendIcon}>*/}
            {/*              <AiOutlineArrowLeft className={style.iconOne}/> <img src={dataGender.gender}/><p>{dataGender.genderP} | 11.02.2021 </p>*/}
            {/*            </div>*/}
            {/*            <div className={style.bordIcons}>*/}
            {/*                <AiOutlineMore/>*/}
            {/*                <AiOutlinePoweroff className={style.red}/>*/}
            {/*                <AiOutlinePrinter/>*/}
            {/*                <AiOutlineClose onClick={()=>setShowCategoryModal(false)}/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={style.two}>*/}
            {/*            <div className={style.mods}>*/}
            {/*                <img src={dataProduct.productImg} className={style.images}/>*/}
            {/*                <div className={style.onePart2}>*/}

            {/*                </div>*/}
            {/*                <div className={style.twoPart2}>*/}
            {/*                    <img src={dataProductCat.img} className={style.catImg}/>*/}
            {/*                    <img src={dataProductCat.img} className={style.catImg}/>*/}
            {/*                    <img src={dataProductCat.img} className={style.catImg}/>*/}
            {/*                    <img src={dataProductCat.img} className={style.catImg}/>*/}

            {/*                </div>*/}
            {/*                <div className={style.threePart2}>*/}
            {/*                    <DatePickers/>*/}
            {/*                </div>*/}
            {/*                <div className={style.threePart2}>*/}
            {/*                    <ColorTextFields/>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className={style.mods2}>*/}
            {/*                <div className={style.bord2}>*/}
            {/*                    <div>*/}
            {/*                        <img src={dataProductCat.img} className={style.catImg}/>*/}
            {/*                        <div className={style.bordDiv}>*/}
            {/*                            <span>{dataProductCat.text}</span>*/}
            {/*                            <span className={style.pp}>{dataProductSubCat.subCategory}</span>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className={style.bords}>*/}
            {/*                    <div className={style.bord}>*/}
            {/*                        <div>*/}
            {/*                            <p>{dataProduct.price}</p>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className={style.bord}>*/}
            {/*                        <div>*/}
            {/*                            <p>цена</p>*/}
            {/*                            <p className={style.sty}>{dataProduct.code}$</p>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className={style.bord3}>*/}
            {/*                        <div>*/}
            {/*                            <p>цена производства</p>*/}
            {/*                            <p>{dataProduct.code}$</p>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className={style.onePart}>*/}
            {/*                    <caption>золото </caption>*/}
            {/*                    <table border={1} className={style.t1}>*/}
            {/*                        <tr>*/}
            {/*                            <th scope="col">ЦВЕТ И проб</th>*/}
            {/*                            <th scope="col"> нач. вес</th>*/}
            {/*                            <th scope="col">вес</th>*/}
            {/*                            <th scope="col">цена</th>*/}
            {/*                        </tr>*/}
            {/*                        <tr>*/}
            {/*                            <td>585</td>*/}
            {/*                            <td>30</td>*/}
            {/*                            <td>30</td>*/}
            {/*                            <td> </td>*/}
            {/*                        </tr>*/}
            {/*                    </table>*/}
            {/*                </div>*/}
            {/*                <div className={style.twoPart}>*/}
            {/*                    <caption>работa  </caption>*/}
            {/*                    <table border={1} className={style.t1}>*/}
            {/*                        <tr>*/}
            {/*                            <th scope="col">работa </th>*/}
            {/*                            <th scope="col">KОЛИЧЕСТВО </th>*/}
            {/*                            <th scope="col">цена </th>*/}
            {/*                            <th scope="col">СУММА</th>*/}
            {/*                        </tr>*/}
            {/*                        <tr>*/}
            {/*                            <td>gdvfvgcdfb</td>*/}
            {/*                            <td>5</td>*/}
            {/*                            <td>4000$</td>*/}
            {/*                            <td>4000$ </td>*/}
            {/*                        </tr>*/}
            {/*                    </table>*/}
            {/*                </div>*/}
            {/*                <div className={style.threePart}>*/}
            {/*                    <caption>камни  </caption>*/}
            {/*                    <table border={1} className={style.t1}>*/}
            {/*                        <tr>*/}
            {/*                            <th scope="col">качества </th>*/}
            {/*                            <th scope="col">карат </th>*/}
            {/*                            <th scope="col">диаметр </th>*/}
            {/*                            <th scope="col">цена </th>*/}
            {/*                            <th scope="col">gta</th>*/}
            {/*                        </tr>*/}
            {/*                        <tr>*/}
            {/*                            <td>Хороший</td>*/}
            {/*                            <td>0.228</td>*/}
            {/*                            <td>25-35 mm</td>*/}
            {/*                            <td>5000</td>*/}
            {/*                            <td>2181413544</td>*/}
            {/*                        </tr>*/}
            {/*                    </table>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </Modal>*/}
            {/*}*/}
        </div>
    );
};

export default Products;