import Header from "../views/Components/Header";
import Products from "../views/Components/Products";
import About from "../views/Components/About";
import Contacts from "../views/Components/Contacts";

export const PRODUCTS_LINK = 'https://res.cloudinary.com/koruja/image/upload/v1581296383/products/';
export const CONTACTS_LINK = 'https://res.cloudinary.com/koruja/image/upload/v1581307515/koruja/assets/CONTACTS.jpg';
export const GB_FLAG_LINK = 'https://res.cloudinary.com/koruja/image/upload/v1581557031/koruja/assets/gb.png';
export const RU_FLAG_LINK = 'https://res.cloudinary.com/koruja/image/upload/v1581644536/koruja/assets/RU_p32pbt.png';

export const NAV_BAR = [
    {
        name: ["ГЛАВНАЯ", "HOME"],
        path: "/",
        component: Header
    },
    {
        name: ["О НАС", "ABOUT"],
        path: "/#about",
        component: About
    },
    {
        name: ["ПРОДУКЦИЯ", "PRODUCTS"],
        path: "/#products",
        component: Products
    },
    {
        name: ["КОНТАКТЫ", "CONTACTS"],
        path: "/#contacts",
        component: Contacts
    },
];


//
// export const LIST_DESCRIPTION = {
//     'ru': ['Оптовые поставки косметических и косметологических товаров',
//         'Производство OEM, ODM',
//         'Собственный бренд косметологической продукции ELOHA'
//     ]
// };


export const PRODUCTS_TABS = {
    "cosmetics": {
        "toxins" : ["NABOTA_100UU", "INNOTOX_50U", "HUTOX_100U", "MEDITOXIN_100U", "BOTULAX_200U", "NEURONOX_100U", "BOTULAX_100"],
        "fillers": ["HYAFILIA_", "CELOSOME", "REPLENGEN", "NEURAMIS", "DERMALAX", "MELINE"]
    }
};

export const FORM_CONTENT = {
    'ru': ['ВАШЕ ИМЯ', 'ВАШ EMAIL']
};
