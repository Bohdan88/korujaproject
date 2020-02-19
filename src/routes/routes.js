import Header from "../view/Components/Header";
import About from "../view/Components/About";
import Products from "../view/Components/Products";
import Contacts from "../view/Components/Contacts";

const routes = [
    {
        name: ["ГЛАВНАЯ", "HOME"],
        path: "/korujaproject/#home",
        icon: "home",
        component: Header
    },
    {
        name: ["О НАС", "ABOUT US"],
        path: "/korujaproject/#about",
        icon: "bolt",
        component: About
    },
    {
        name: ["ПРОДУКЦИЯ", "PRODUCTS"],
        path: "/korujaproject/#products",
        icon: "info",
        component: Products
    },
    {
        name: ["КОНТАКТЫ", "CONTACTS"],
        path: "/korujaproject/#contacts",
        icon: "phone",
        component: Contacts
    },
];

export default routes;
