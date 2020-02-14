import React, {useState, useEffect} from 'react';

const LangContext = React.createContext({
    lang: '',
    currentLangData: {},
    switchLang: () => {
    },
});

export default LangContext;

export const LangProvider = (props) => {
    const [lang, setLang] = useState(window.localStorage.getItem('appUILang') || window.navigator.language);

    useEffect(() => {
        const selectedLang = window.localStorage.getItem('appUILang');

        if (selectedLang) {
            setLang(selectedLang);
        }
    }, [lang])

    const switchLang = (ln) => {
        setLang(ln);
        window.localStorage.setItem('appUILang', ln);
    };

    return (
        <LangContext.Provider value={{
            lang,
            switchLang,
            currentLangData: langData[lang]
        }}>
            {props.children}
        </LangContext.Provider>
    );
};

const langData = {
    'en-US': {
        about: {
            header: ['ABOUT'],
            desc: [' is a wholesale company which provides professional makeup products from South Korea and Japan.'],
            spec: ['Our specialization is: '],
            list: ['Wholesale supply of cosmetic and cosmetology products',
                'OEM and ODM production',
                'Own brand of cosmetology products called ELOHA'
            ]
        },
        app: {
            h1: 'Select Language'
        },
    },
    'ru-RU': {
        about: {
            header: ['О НАС'],
            desc: [' оптовая экспортная компания профессиональной косметики и  косметологичкеских препаратов из Ю.Кореи и Японии.'],
            spec: ['Наша специализация: '],
            list: ['Оптовые поставки косметических и косметологических товаров',
                'Производство OEM, ODM',
                'Собственный бренд косметологической продукции ELOHA'
            ]
        },
        app: {
            h1: 'Изменить язык'
        },
    },
}
