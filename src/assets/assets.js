// assets.js
import search from './search.svg';
import add from './add.svg';
import linked_in from './linked_in.svg';
import facebook from './facebook.svg';
import github from './github.svg'
import cross from './cross.svg'
import menu_1 from './menu_1.png';
import menu_2 from './menu_2.png';
import menu_3 from './menu_3.png';
import menu_4 from './menu_4.png';
import menu_5 from './menu_5.png';
import menu_6 from './menu_6.png';
import menu_7 from './menu_7.png';
import menu_8 from './menu_8.png';
import menu_9 from './menu_9.png';
import menu_10 from './menu_10.png';

import Ifood_1 from './Ifood_1.jpg';
import Ifood_2 from './Ifood_2.jpg';
import Ifood_3 from './Ifood_3.jpg';
import Ifood_4 from './Ifood_4.jpg';
import Ifood_5 from './Ifood_5.jpg';
import Ifood_6 from './Ifood_6.jpg';
import Bfood_1 from './Bfood_1.jpg';
import Bfood_2 from './Bfood_2.jpg';
import Bfood_3 from './Bfood_3.jpg';
import Bfood_4 from './Bfood_4.jpg';
import Vfood_1 from './Vfood_1.jpg';
import Vfood_2 from './Vfood_2.jpg';
import Vfood_3 from './Vfood_3.jpg';
import Vfood_4 from './Vfood_4.jpg';
import Vfood_5 from './Vfood_5.jpg';
import Vfood_6 from './Vfood_6.jpg';
import Nfood_1 from './Nfood_1.jpg';
import Nfood_2 from './Nfood_2.jpg';
import Nfood_3 from './Nfood_3.jpg';
import Nfood_4 from './Nfood_4.jpg';
import Sfood_1 from './Sfood_1.jpg';
import Sfood_2 from './Sfood_2.jpg';
import Sfood_3 from './Sfood_3.jpg';
import Sfood_4 from './Sfood_4.jpg';
import Cfood_1 from './Cfood_1.jpg';
import Cfood_2 from './Cfood_2.jpg';
import Cfood_3 from './Cfood_3.jpg';
import Cfood_4 from './Cfood_4.jpg';
import Ffood_1 from './Ffood_1.jpg';
import Ffood_2 from './Ffood_2.jpg';
import Ffood_3 from './Ffood_3.jpg';
import Ffood_4 from './Ffood_4.jpg';
import Pfood_1 from './Pfood_1.jpg';
import Pfood_2 from './Pfood_2.jpg';
import Pfood_3 from './Pfood_3.jpg';
import Pfood_4 from './Pfood_4.jpg';
import Jfood_1 from './Jfood_1.jpg';
import Jfood_2 from './Jfood_2.jpg';
import Jfood_3 from './Jfood_3.jpg';
import Jfood_4 from './Jfood_4.jpg';
import Dfood_1 from './Dfood_1.jpg';
import Dfood_2 from './Dfood_2.jpg';
import Dfood_3 from './Dfood_3.jpg';
import Dfood_4 from './Dfood_4.jpg';


import arrow_up from './arrow_up.svg'
import arrow_down from './arrow_down.svg'

export const assets = {
    search,
    add,
    arrow_down,
    arrow_up,
    linked_in,
    facebook,
    github,
    cross
}

export const menu_list = [
    {
        menu_name: "Indian",
        menu_image: menu_1
    },
    {
        menu_name: "Biryani",
        menu_image: menu_2
    },
    {
        menu_name: "VegCurry",
        menu_image: menu_3
    },
    {
        menu_name: "NonVeg",
        menu_image: menu_4
    },
    {
        menu_name: "Snacks",
        menu_image: menu_5
    },
    {
        menu_name: "Chinese",
        menu_image: menu_6
    },
    {
        menu_name: "French",
        menu_image: menu_7
    },
    {
        menu_name: "Pizza",
        menu_image: menu_8
    },
    {
        menu_name: "Juice",
        menu_image: menu_9
    },
    {
        menu_name: "Dessert",
        menu_image: menu_10
    }
];

export const food_list = {
    Indian: [
        {
            _id: "I1",
            name: "Idli",
            image: Ifood_1,
            description: "Soft, steamed rice cakes, typically served with chutney."
        }
    ],
    Biryani:[
        {
            _id: "B1",
            name: "Biryani",
            image: Bfood_1,
            description: "Fragrant rice dish with spiced chicken, saffron, and herbs." 
        }
    ],
    VegCurry: [
        {
            _id: "V1",
            name: "Sweet corn curry",
            image: Vfood_4,
            description: "Creamy, spiced dish with sweet corn, tomatoes, and coconut milk."
        }
    ],
    NonVeg:[
        {
            _id: "N1",
            name: "Egg curry",
            image: Nfood_1,
            description: "Spicy, creamy dish with eggs in a flavorful tomato gravy." 
        }
    ],
    Snacks:[
        {
            _id: "S1",
            name: "Mirch baji",
            image: Sfood_1,
            description: "Fried, spicy chili peppers coated in chickpea flour batter." 
        }
    ],
    Chinese: [
        {
            _id: "C1",
            name: "Prawns Pasta",
            image: Cfood_1,
            description: "A delightful dish with creamy sauce, mushrooms, prawns."
        }
    ],
    French:[
        {
            _id: "F1",
            name: "Bread omelette",
            image: Ffood_1,
            description: "French-inspired, savory dish with eggs, bread, herbs, and cheese." 
        }
    ],
    Pizza:[
        {
            _id: "P1",
            name: "Paneer pizza",
            image: Pfood_1,
            description: "Indian-style pizza topped with marinated paneer, vegetables, and cheese." 
        }
    ],
    Juice:[
        {
            _id: "J1",
            name: "Kiwi juice",
            image: Jfood_1,
            description: "Refreshing drink made from blended kiwis, sugar, and water." 
        }
    ],
    Dessert:[
        {
            _id: "D1",
            name: "Strawberry ice cream",
            image: Dfood_1,
            description: "Creamy frozen dessert with fresh strawberries, sugar, and cream." 
        }
    ],
};

/*
        {
            _id: "2",
            name: "Dosa",
            image: Ifood_2,
            description: "Crispy rice crepe filled with spicy potato filling."
        },
        {
            _id: "3",
            name: "Upma",
            image: Ifood_3,
            description: "Spices with ghee, semolina, vegetables, mustard seeds."
        },
        ,
        {
            _id: "6",
            name: "Chinese Noodles",
            image: Cfood_2,
            description: "Stir-fried with vegetables, soy sauce, garlic, and ginger."
        },
        {
            _id: "7",
            name: "Prawns Noodles",
            image: Cfood_3,
            description: "A delightful dish with creamy sauce, mushrooms, prawns."
        },
        {
            _id: "8",
            name: "Chicken Noodles",
            image: Cfood_4,
            description: "Stir-fried with chicken or shrimp, vegetables, soy sauce."
        }*/