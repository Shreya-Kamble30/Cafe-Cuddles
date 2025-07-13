import React from 'react';
import '../styles/main.css';
import HotBeverages from '../Imgs/HotBeverages.png';
import ColdBeverages from '../Imgs/ColdBeverages.png';
import Refreshment from '../Imgs/Refreshment.png';
import SpecialCombos from '../Imgs/SpecialCombos.png';
import Desserts from '../Imgs/Desserts.png';
import BurgerFries from '../Imgs/BurgerFries.png';

const Menu = () => {
    const menuItems = [
        { img: HotBeverages, title: "Hot Beverages", description: "Wide range of Steaming hot coffee to make you fresh and light." },
        { img: ColdBeverages, title: "Cold Beverages", description: "Creamy and frothy cold coffee to make you cool." },
        { img: Refreshment, title: "Refreshment", description: "Fruit and icy refreshing drink to make feel refresh." },
        { img: SpecialCombos, title: "Special Combos", description: "Your favorite eating and drinking combations." },
        { img: Desserts, title: "Dessert", description: "Satiate your palate and take you on a culinary treat." },
        { img: BurgerFries, title: "Burger & French Fries", description: "Quick bites to satisfy your small size hunger." },
    ];

    return (
        <section className="menu">
            <h1>Taste Our Best</h1>
            <p className="line"></p>
            <ul type="none" className="menu-items">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <img src={item.img} alt={item.title} />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Menu;
