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
    }, [lang]);

    const switchLang = ln => {
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
            header: ['ABOUT US'],
            desc: [' is a wholesale company which provides professional makeup products from South Korea and Japan.'],
            spec: ['Our specialization is: '],
            list: ['Wholesale supply of cosmetic and cosmetology products',
                'OEM and ODM production',
                'Own brand of cosmetology products called ELOHA'
            ]
        },
        products: {
            header: ['PRODUCTS'],
            tabNames: {
                'cosmetology': 'COSMETOLOGY',
                'lifting': 'LIFTING THREAD',
                'cosmetics': 'COSMETICS',
                'other': 'OTHER PRODUCTS'
            },
            subTabNames: {
                'toxins': 'TOXINS',
                'fillers': 'FILLERS',
                'meso': 'MESO'
            }
        },
        contacts: {
            header: ['CONTACTS'],
            userName: ['YOUR NAME'],
            userEmail: ['YOUR EMAIL'],
            message: 'YOUR MESSAGE',
            send: 'SEND',
            emailError: 'Please enter a valid email address',
            nameError: 'The field supposed to have more than 1 character',
            textError: 'The field supposed to have more than 15 and less than 250 characters',
            messageHeader: 'Form Completed',
            messageSuccessContent: 'Message successfully sent!',
            messageFailContent: 'Unfortunately the message cannot be sent due to technical issues. We apologize for inconvenience :('

        },
        footer: {
            company: ['Export Company KoRuJa "Direct Korea/ Direct Japan"'],
            info: ['CONTACT INFO'],
            office: ['Head Office: '],
            mail: ['Email']
        },


        app: {
            language: 'en'
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
        products: {
            header: ['ПРОДУКЦИЯ'],
            tabNames: {
                'cosmetology': 'КОСМЕТОЛОГИЯ',
                'lifting': 'НИТЕВОЙ ЛИФТИНГ',
                'cosmetics': 'КОСМЕТИКА',
                'other': 'ДРУГИЕ ТОВАРЫ'
            },
            subTabNames: {
                'toxins': 'ТОКСИНЫ',
                'fillers': 'ФИЛЛЕРЫ',
                'meso': 'МЕЗОПРЕПАРАТЫ'
            }

        },
        contacts: {
            header: 'КОНТАКТЫ',
            userName: 'ВАШЕ ИМЯ',
            userEmail: 'ВАШ EMAIL',
            message: 'ВАШЕ СООБЩЕНИЕ',
            send: 'ОТПРАВИТЬ',
            emailError: 'Пожалуйста введите корректный email',
            nameError: 'Поле должно содержать больше чем 1 символ',
            textError: 'Поле должно содержать больше чем 15 и меньше чем 250 симоволов',
            messageHeader: 'Форма заполненя',
            messageSuccessContent: 'Сообщение успешно отправлено!',
            messageFailContent: 'К сожалению на сайте технические неполадки. Мы извиняемся за неудобство :('

        },
        footer: {
            company: ['Экспортная компания KoRuJa "Прямая Корея/Прямая Япония"'],
            info: ['КОНТАКТНАЯ ИНФОРМАЦИЯ'],
            office: ['Главный Офис: '],
            mail: ['Эл. почта'],


        },
        app: {
            language: 'ru'
        },
    },
};
