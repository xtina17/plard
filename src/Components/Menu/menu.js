import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getGenderAC} from "../../Redux/Actions/gender.action";
import useQuery from "../../../src/Hooks/useQuery"
import {useHistory} from "react-router-dom";
import style from "./menu.module.css";
import {AiOutlinePlus} from 'react-icons/ai'
import Modal from "../Global/Modal/modal";
import Input from "../Global/Input/input";
import UploadPhoto from "../uploadPhoto/upload-photo";
import {addCategoryAC} from "../../Redux/Actions/categories.action";
import cn from "classnames";

const Menu = () => {
    const dispatch = useDispatch()
    const genders = useSelector(state => state.genderReducer.genders);
    const categories = useSelector(state => state.categoriesReducer.categories);
    // const subCategories = useSelector(state => state.subCategoriesReducer.subCategories);

    const query = useQuery();
    const history = useHistory();

    const genderId = +query.get('gender') || 1
    const categoryQuery = +query.get('category') || 1
    const subCategoryQuery = +query.get('subCategory')


    const [isShowCategoryModal, setShowCategoryModal] = useState(false)

    const [photo, setPhoto] = useState(null);
    const [file, setFile] = useState(null)

    const [categoryText, setCategoryText] = useState('');


    const addNewCategory = () => {
        // if (categoryText === ""
        //   ){
        //     alert("nonono")
        // }else if (  file === null){
        //     alert("dfghjkl")
        // }else if ( photo === null){
        //     alert("dsfghjkl")
        // }
        // else {
        //     dispatch(addCategoryAC({id: Math.random(), genderId: genderId, img: photo, text: categoryText}))
        //     setShowCategoryModal(false)
        //     setCategoryText(" ")
        //     setPhoto(null)
        // }
        if(!(categoryText == " ") && !(file == null) && !( photo == null)){
            dispatch(addCategoryAC({id: Math.random(), genderId: genderId, img: photo, text: categoryText}))
            setShowCategoryModal(false)
            setCategoryText(" ")
            setPhoto(null)
        }
    }

    useEffect(()=>{
        console.log(categoryText,file,photo,"kugbjhkl")
    },[categoryText,file,photo])



    return (
        <div className={style.menu}>

            <div className={style.gender}>
                {/*&category=${s.category}*/}
                {
                    genders.map(s => {
                        return (
                            <div key={s.id} className={style.genderIcon}
                                 onClick={() => history.push(`/?gender=${s.id}`)}
                            >
                                <img src={genderId == s.id ? s.active : s.gender}/>
                            </div>

                            // style ={{color: genderId == s.id &&  "blue"}}
                        )
                    })
                }
            </div>
            <div className={style.category}>

                {
                    categories.map(p => {
                        return (
                            genderId == p.genderId &&

                            <div key={p.id}
                                 className={p.id == categoryQuery ? cn(style.active, style.categories) : style.categories}
                                 onClick={() => history.push(`/?gender=${genderId}&category=${p.id}`)}>
                                <div>
                                    <img src={p.img} className={style.catImg}/>
                                </div>
                                <div className={style.text}>
                                    <p className={style.textTwo}>{p.text}</p>
                                </div>

                            </div>

                        )
                    })
                }

                {isShowCategoryModal && <Modal cn="modal" close={() => setShowCategoryModal(false)}>
                    <div className={style.modalContent}>
                        <p>добавить категория</p>
                    </div>
                    <div className={style.genderIconModal}>
                        {
                            genders.map(s => {
                                return (
                                    <div className={style.modalInfos}
                                         onClick={() => history.push(`/?gender=${s.id}`)}
                                    >
                                        <div key={s.id} className={style.genderModal}>
                                            <img src={s.id == genderId ? s.active : s.gender}/>
                                            <p className={style.modalP}>{s.genderP}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={style.inputDiv}>
                        <Input placeholder="категория"
                               cn="categoryInp"
                               value={categoryText}
                               onChange={e => setCategoryText(e.target.value)}/>
                    </div>
                    <div>

                    </div>

                    <UploadPhoto
                        photo={photo}
                        setPhoto={setPhoto}
                        setFile={setFile}
                        styles={{height: "135px", margin: "18px 0 25px"}}
                        textStyles={{marginTop: "21px", fontSize: "16px"}}
                    />

                    <div>
                        <button className={style.buttonModal} onClick={addNewCategory}>добавить</button>
                    </div>
                </Modal>}
            </div>
            <div className={style.add} onClick={() => setShowCategoryModal(true)}>
                <AiOutlinePlus/>
            </div>
        </div>
    );
};

export default Menu;
