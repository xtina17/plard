import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import useQuery from "../../Hooks/useQuery";
import {useHistory} from "react-router-dom";
import style from "./subCategories.module.css";
import cn from "classnames"
import {AiOutlinePlus} from "react-icons/ai";
import {addCategoryAC} from "../../Redux/Actions/categories.action";
import Modal from "../Global/Modal/modal";
import Input from "../Global/Input/input";
import UploadPhoto from "../uploadPhoto/upload-photo";
import {addSubCategoryAC} from "../../Redux/Actions/subcategory.action";

const SubCategory = () => {
    const subCategories = useSelector(state => state.subCategoriesReducer.subCategories);
    const [isShowCategoryModal, setShowCategoryModal] = useState(false)
    const [subCategoryText, setSubCategoryText] = useState(' ');
    const dispatch = useDispatch()

    const query = useQuery();
    const history = useHistory();

    const genderId = +query.get('gender') || 1
    const categoryQuery = +query.get('category') || 1
    const subCategoryQuery = +query.get('subCategory')


    const addNewSubCategory = () => {
        if(subCategoryText != " "){
        dispatch(addSubCategoryAC({id: Math.random(), subCategory: subCategoryText, categoryId : categoryQuery}))
        setSubCategoryText(" ")
        setShowCategoryModal(false)
        }
    }

    useEffect(()=>{
        console.log(subCategoryText)
    },[subCategoryText])
    return (
        <div className={style.subs}>
            <div>
                <div className={style.subCategoriesWithBorder}>
                    {
                        subCategories.map(({id, subCategory, categoryId})=>{
                            return (
                                categoryId === categoryQuery &&
                                <div
                                    key={id}
                                    className={style.subCategories}
                                    onClick={() => history.push(`/?gender=${genderId}&category=${categoryQuery}&subCategory=${id}`)}
                                >
                                  <p className={style.pSub}>  {subCategory}</p>
                                    <div className={id === subCategoryQuery ? cn(style.subCategoriesBorder,style.activeSubCategoriesBorder) : cn(style.subCategoriesBorder)}/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={style.subBorder}/>
            </div>
            {
                categoryQuery !== 0 &&  <div className={style.plus} onClick={() => setShowCategoryModal(true)}>
                <AiOutlinePlus />
            </div>
            }
            {
                isShowCategoryModal &&
                <Modal cn="modalTwo" close={() => setShowCategoryModal(false)}>
                    <div className={style.modalContent}>
                        <p>добавить категория</p>
                    </div>
                    <div className={style.inputDiv}>
                        <Input type="text" placeholder="категория" cn="categoryInp" value={subCategoryText} onChange={e => setSubCategoryText(e.target.value)}/>
                    </div>

                    <div>
                        <button className={style.buttonModal} onClick={addNewSubCategory}>добавить</button>
                    </div>
                </Modal>
            }
        </div>
    );
};

export default SubCategory;