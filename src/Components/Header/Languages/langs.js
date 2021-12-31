import React, {useState} from 'react';
import style from "./langs.module.css"
import ru from '../../Images/ru.png'
import en from '../../Images/en.png'
import am from '../../Images/am.png'
import i18next from "i18next";
import cookies from 'js-cookie';

const Langs = () => {
    const languages = [
        {id: 1, lang: "en", image: en},
        {id: 2, lang: "am", image: am},
        {id: 3, lang: "ru", image: ru},
    ]
    const currentLang = cookies.get('i18next');
    const [activeLang, setActiveLang] = useState(currentLang);

    const selectLanguages = (lang) => {
        i18next.changeLanguage(lang)
        setActiveLang(lang)
    }
    return (
        <div>
            <div className={style.languagesCol}>
                {
                    languages.map(item => {
                        return (
                            <div
                                key={item.id}
                                onClick={() => selectLanguages(item.lang, item.id)}
                                className={item.lang === activeLang ? style.activeFlag : style.language}
                            >
                                <img src={item.image} alt="img"  className={style.flag}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Langs;