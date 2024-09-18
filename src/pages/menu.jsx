import React, { useState } from 'react';
import Header from '../components/header1';
import Footer from '../components/footer';

import schweppesTonic from '../assets/img/menu/schweppes-tonic.jpg';
import cleopatra from '../assets/img/menu/cleopatra.jfif';
import juice from '../assets/img/menu/juice.jpeg';
import caesar from '../assets/img/menu/caesar.jpg';
import beffy from '../assets/img/menu/beffy.jpg';
import mojito from '../assets/img/menu/mojito.jpg';
import nutSalad from '../assets/img/menu/nut-salad.jpg';
import burrataSalad from '../assets/img/menu/burrata-salad.jpg';
import juicy from '../assets/img/menu/juicy.jpg';
import Cus from '../components/custom';

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const menuItems = [
    { name: 'Schweppes Tonic', category: 'drinks', price: '5.0', image: schweppesTonic },
    { name: 'Cleopatra', category: 'specialty', price: '32.0', image: cleopatra },
    { name: 'Fresh Orange Juice', category: 'drinks', price: '7.0', image: juice },
    { name: 'Caesar Salad', category: 'salads', price: '24.0', image: caesar },
    { name: 'Beffy', category: 'specialty', price: '24.0', image: beffy },
    { name: 'Mojito', category: 'drinks', price: '8.0', image: mojito },
    { name: 'Nut Salad', category: 'salads', price: '25.0', image: nutSalad },
    { name: 'Burrata Salad', category: 'salads', price: '24.0', image: burrataSalad },
    { name: 'Juicy', category: 'specialty', price: '28.0', image: juicy },
  ];

  return (
    <>
      <div>
        <Header />
        <Cus />
        <section id="menu" className="menu section-bg">
          <div className="container max-width-container" data-aos="fade-up">
            <div className="section-title">
              <h2>Menu</h2>
              <p>Check Our Tasty Menu</p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="menu-flters">
                  <li
                    onClick={() => handleFilter('all')}
                    className={selectedCategory === 'all' ? 'filter-active' : ''}
                  >
                    All
                  </li>
                  <li
                    onClick={() => handleFilter('drinks')}
                    className={selectedCategory === 'drinks' ? 'filter-active' : ''}
                  >
                    Drinks
                  </li>
                  <li
                    onClick={() => handleFilter('salads')}
                    className={selectedCategory === 'salads' ? 'filter-active' : ''}
                  >
                    Salads
                  </li>
                  <li
                    onClick={() => handleFilter('specialty')}
                    className={selectedCategory === 'specialty' ? 'filter-active' : ''}
                  >
                    Specialty
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="row menu-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {menuItems
                .filter((item) => selectedCategory === 'all' || item.category === selectedCategory)
                .map((item, index) => (
                  <div key={index} className={`col-lg-6 menu-item filter-${item.category}`}>
                    <img src={item.image} className="menu-img" alt={item.name} />
                    <div className="menu-item-details">
                      <div className="menu-content">
                        <a href="#">{item.name}</a>
                        <span>{item.price} dt</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Menu;
