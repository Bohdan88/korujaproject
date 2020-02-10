import Header from "../views/Components/Header";
import Products from "../views/Components/Products";
import About from "../views/Components/About";
import Contacts from "../views/Components/Contacts";

export const PRODUCTS_LINK = 'https://res.cloudinary.com/koruja/image/upload/v1581296383/products/';
export const CONTACTS_LINK = 'https://res.cloudinary.com/koruja/image/upload/v1581307515/koruja/assets/CONTACTS.jpg';
export const NAV_BAR = [
    {
        name: "ГЛАВНАЯ",
        path: "/",
        component: Header
    },
    {
        name: "О НАС",
        path: "/#about",
        component: About
    },
    {
        name: "ПРОДУКЦИЯ",
        path: "/#products",
        component: Products
    },
    {
        name: "КОНТАКТЫ",
        path: "/#contacts",
        component: Contacts
    },
];



export const LIST_DESCRIPTION = {
    'ru': ['Оптовые поставки косметических и косметологических товаров',
        'Производство OEM, ODM',
        'Собственный бренд косметологической продукции ELOHA'
    ]
};


export const PRODUCTS_TABS = {
    "cosmetics": {
        "toxins" : ["NABOTA_100UU", "INNOTOX_50U", "HUTOX_100U", "MEDITOXIN_100U", "BOTULAX_200U", "NEURONOX_100U", "BOTULAX_100"],
        "fillers": ["HYAFILIA_", "CELOSOME", "REPLENGEN", "NEURAMIS", "DERMALAX", "MELINE"]
    }
};
