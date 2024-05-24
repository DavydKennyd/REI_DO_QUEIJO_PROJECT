import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imagem1 from '../assets/queijocoalho-Photoroom.png-Photoroom.png';
import imagem2 from '../assets/BEFE-Photoroom.png-Photoroom.png';
import imagem3 from '../assets/pngtree-beef-beef-png-image_3234712-removebg-preview.png';
import imagem4 from '../assets/queijocoalho-Photoroom.png-Photoroom.png'; // Adicionei a importação da imagem4
import imagem5 from '../assets/queijo-manteiga-Photoroom.png-Photoroom.png';
import imagem6 from '../assets/queijo-gorgonzola-azul-isolado-no-fundo-branco_181303-2901-Photoroom.png-Photoroom.png';
import './style.css';

const Index = () => {
  const [notification, setNotification] = useState(false);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 2000);
  };

  const products = [
    {
      id: 1,
      name: "Queijo Coalho",
      price: 39.90,
      image: imagem1,
      description: "Vendido e entregue por: O REI DO QUEIJO"
    },
    {
      id: 2,
      name: "Carne Alcantra Bovina",
      price: 49.90,
      image: imagem2,
      description: "Vendido e entregue por: O REI DO QUEIJO"
    },
    {
      id: 3,
      name: "Bife a Milânesa (Carne Bovina)",
      price: 79.90,
      image: imagem3,
      description: "Vendido e entregue por: O REI DO QUEIJO | Em estoque"
    },
    {
      id: 4,
      name: "Queijo Coalho", // Corrigido para Queijo Coalho
      price: 39.90,
      image: imagem4, // Adicionei a imagem4
      description: "Vendido e entregue por: O REI DO QUEIJO"
    },
    {
      id: 5,
      name: "Queijo Manteiga",
      price: 60.00,
      image: imagem5,
      description: "Vendido e entregue por: O REI DO QUEIJO"
    },
    {
      id: 6,
      name: "Queijo Gorgonzola",
      price: 80.00,
      image: imagem6,
      description: "Vendido e entregue por: O REI DO QUEIJO"
    }
  ];

  return (
    <div>
      <header className="header-container">
        <div className="logo">REI DO QUEIJO</div>
        <div className="search-container">
          <form action="/pesquisar" method="get" className="search-form">
            <input type="text" id="search" name="q" placeholder="Pesquisar Produto" />
            <button type="submit">Pesquisar</button>
          </form>
        </div>
        <div className="login-container">
          <Link to="/carrinho"><button className="cart-button">Carrinho</button></Link>
          <Link to="/login"><button className="login-button">Login</button></Link>
        </div>
      </header>
      <div className="title">
        <h2>Produtos em Destaque</h2>
      </div>
      <div className="products-wrapper">
        {products.map(product => (
          <div key={product.id} className="products-container">
            <div className="product">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>R$ {product.price.toFixed(2)}/kg</p>
              </div>
              <div className="button-container">
                <button className="btn-buy">Comprar</button>
                <button className="btn-add-cart" onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {notification && (
        <div className="notification">
          Produto adicionado ao carrinho!
        </div>
      )}
      <footer>
        <p>&copy; 2024 Minha Loja. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Index;
