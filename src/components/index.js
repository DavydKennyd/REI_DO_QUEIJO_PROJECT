import React from 'react';
import { Link } from 'react-router-dom';
import imagem1 from '../assets/queijocoalho-Photoroom.png-Photoroom.png';
import imagem2 from '../assets/BEFE-Photoroom.png-Photoroom.png';
import imagem3 from '../assets/pngtree-beef-beef-png-image_3234712-removebg-preview.png';
import imagem4 from '../assets/queijocoalho-Photoroom.png-Photoroom.png';
import imagem5 from '../assets/queijo-manteiga-Photoroom.png-Photoroom.png';
import imagem6 from '../assets/queijo-gorgonzola-azul-isolado-no-fundo-branco_181303-2901-Photoroom.png-Photoroom.png';
import './style.css';

const Index = () => {
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
        <div className="products-container"> 
          <div className="product">
            <img src={imagem1} alt="produto 1" />
            <div className="product-info">
              <p>Queijo Coalho</p>
              <p>Vendido e entregue por: O REI DO QUEIJO</p>
              <p>R$ 39,90/kg</p>
            </div>
            <div className="button-container">
              <button className="btn-buy">Comprar</button>
              <button className="btn-add-cart">Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
        <div className="products-container"> 
          <div className="product">
            <img src={imagem2} alt="produto 2" />
            <div className="product-info">
              <p>Carne Alcantra Bovina</p>
              <p>Vendido e entregue por: O REI DO QUEIJO</p>
              <p>R$ 49,90/kg</p>
            </div>
            <div className="button-container">
              <button className="btn-buy">Comprar</button>
              <button className="btn-add-cart">Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
        <div className="products-container"> 
          <div className="product">
            <img src={imagem3} alt="produto 3" />
            <div className="product-info">
              <p>Bife a Milânesa (Carne Bovina)</p>
              <p>Vendido e entregue por: O REI DO QUEIJO | Em estoque</p>
              <p>R$ 79,90/kg</p>
            </div>
            <div className="button-container">
              <button className="btn-buy">Comprar</button>
              <button className="btn-add-cart">Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      </div>
      <div className="products-wrapper">
        <div className="products-container"> 
          <div className="product">
            <img src={imagem4} alt="produto 1" />
            <div className="product-info">
              <p>Queijo Coalho</p>
              <p>Vendido e entregue por: O REI DO QUEIJO</p>
              <p>R$ 39,90/kg</p>
            </div>
            <div className="button-container">
              <button className="btn-buy">Comprar</button>
              <button className="btn-add-cart">Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
        <div className="products-container"> 
          <div className="product">
            <img src={imagem5} alt="produto 2" />
            <div className="product-info">
              <p>Queijo Manteiga</p>
              <p>Vendido e entregue por: O REI DO QUEIJO</p>
              <p>R$ 60,00/kg</p>
            </div>
            <div className="button-container">
              <button className="btn-buy">Comprar</button>
              <button className="btn-add-cart">Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
        <div className="products-container"> 
          <div className="product">
            <img src={imagem6} alt="produto 3" />
            <div className="product-info">
              <p>Queijo Gorgonzola</p>
              <p>Vendido e entregue por: O REI DO QUEIJO</p>
              <p>R$ 80,00/Kg</p>
            </div>
            <div className="button-container">
              <button className="btn-buy">Comprar</button>
              <button className="btn-add-cart">Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>&copy; 2024 Minha Loja. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Index;
