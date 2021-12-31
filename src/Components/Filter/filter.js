import React, {useCallback, useEffect, useRef, useState} from 'react';
import style from './filter.module.css'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {IoMdArrowDropleft} from "@react-icons/all-files/io/IoMdArrowDropleft";
import {BiFilterAlt} from "@react-icons/all-files/bi/BiFilterAlt";
import {IoIosArrowForward} from "@react-icons/all-files/io/IoIosArrowForward";
import {useDispatch, useSelector} from "react-redux";
import productsReducer from "../../Redux/Reducers/products.reducer";
import {priceAC} from "../../Redux/Actions/products.action";
// import {priceAC, weightAC} from "../../Redux/Actions/item.actions";
import {useTranslation} from "react-i18next";

const Filter = ({filprice, setFilprice}) => {
    let token = localStorage.getItem('token');
    const {t} = useTranslation()

    //redux

    // const weight = useSelector(state => state.ItemReducer.weight)
    const price = useSelector(state => state.productsReducer.price)
    // const dispatch = useDispatch()

    //filter

    // Our States

    // const [filweight, setFilweight] = useState([500, 1000]);
    const [showFil ,setShowFil] = useState(false);
    const dispatch = useDispatch();

    // Changing State when volume increases/decreases
    // const rangeSelectorWeight = (event, newValue) => {
    //     setFilweight(newValue);
    // };
    const show = () => {
        setShowFil(!showFil);
    }


    // Changing State when volume increases/decreases
    const rangeSelector = (event, newValue) => {
        setFilprice(newValue);
    };
    //
    const setValu = (e) => {
        // dispatch(weightAC(filweight))
        dispatch(priceAC(filprice))
        // setShowModal(prev => !prev)
    }




    return (
        <div className={style.filterBox} >
            <div className={style.filDiv} style={{display: showFil &&  "none" }} onClick={show}>
                <div className={style.filIcon}><BiFilterAlt/></div>
                <div className={style.iconDivs}>
                    <div>
                        <p className={style.filP}>
                            <div className={style.p}>
                                <p>{t('f')}</p>
                                <p>{t('i')}</p>
                                <p>{t('l')}</p>
                                <p>{t('t')}</p>
                                <p>{t('t2')}</p>
                                <p>{t('e')}</p>
                                <p>{t('r')}</p>
                            </div>
                        </p>
                    </div>
                    <div className={style.iconBack} >
                        <IoIosArrowForward/>
                    </div>
                </div>
            </div>
            <div className={style.filterBodyB} style={{display: showFil &&  "flex"}} onClick={show}>
            <div className={style.filterBody} style={{display: showFil &&  "flex"}}>
                <div className={style.forFlex}>
                    <div className={style.arrow} onClick={show}>
                        <BiFilterAlt/>                    </div>
                    <div className={style.rangeSlider}>
                        <h3>фильтр </h3>
                    </div>
                    <div>
                        {/*<div className={style.rangeSlider}>*/}
                        {/*    <Typography id="range-slider" gutterBottom>*/}
                        {/*        вес золота*/}
                        {/*    </Typography>*/}
                        {/*</div>*/}
                        {/*<Slider*/}
                        {/*    onChange={rangeSelector}*/}
                        {/*    valueLabelDisplay="auto"*/}
                        {/*    min={0}*/}
                        {/*    max={10000}*/}
                        {/*/>*/}
                        {/*<div className={style.rangeSlider}>*/}
                        {/*    <Typography id="range-slider" gutterBottom>*/}
                        {/*        карат*/}
                        {/*    </Typography>*/}
                        {/*</div>*/}
                        {/*<Slider*/}
                        {/*    onChange={rangeSelector}*/}
                        {/*    valueLabelDisplay="auto"*/}
                        {/*    min={0}*/}
                        {/*    max={10000}*/}
                        {/*/>*/}
                        <div className={style.rangeSlider}>
                            <Typography id="range-slider" gutterBottom>
                                цена производства
                            </Typography>
                        </div>
                        <Slider
                            value={filprice}
                            onChange={rangeSelector}
                            valueLabelDisplay="auto"
                            min={0}
                            max={10000}
                        />
                        {
                            token &&  <div>
                            <div className={style.rangeSlider}>
                                <Typography id="range-slider" gutterBottom>
                                    цена
                                </Typography>
                            </div>
                            <Slider
                            onChange={rangeSelector}
                            valueLabelDisplay="auto"
                            min={0}
                            max={10000}
                            />
                            </div>
                        }
                        <div className={style.filVal}>
                            <div className={style.filValItm}> {filprice[0]}</div>
                            <div className={style.filValItm}>{filprice[1]}</div>
                        </div>
                    </div>
                    <div className={style.btnbtn}>
                        <button
                            onClick={setValu}
                            className={style.filBtn}
                        >фильтр
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Filter;