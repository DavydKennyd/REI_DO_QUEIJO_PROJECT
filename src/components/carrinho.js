import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './carrinho.css';

const Carrinho = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    localStorage.setItem('cart', JSON.stringify(newCartItems));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div>
      <header>
        <div className="container-carrinho">
          <div className="user-info">
            <span>Bem-vindo,<strong>Nome do Usuário</strong>!</span>
          </div>
          <h1>Carrinho de Compras</h1>
          <nav>
            <Link to="/" className="btn-home">Ir para Página Inicial</Link>
            <button className="btn-sair">Sair</button>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>R$ {item.price.toFixed(2)}</td>
                  <td><button className="btn-remove" onClick={() => removeFromCart(index)}>Remover</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="subtotal">
            <span>Subtotal:</span>
            <span>R$ {calculateTotal()}</span>
          </div>
          <div className="checkout">
            <button className="btn-finalizar">Finalizar Compra</button>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Minha Loja. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Carrinho;
