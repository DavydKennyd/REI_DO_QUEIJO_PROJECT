import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Removido Navigate e adicionado useNavigate
import './carrinho.css';

const Carrinho = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate(); // Utilizando useNavigate para obter a função de navegação

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

  const handleFinalizarCompra = () => {
    const userLoggedIn = false;

    if (!userLoggedIn) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        navigate('/login'); // Redirecionando para a tela de login usando useNavigate
      }, 2000);
    } else {
      alert("Você precisa fazer login para finalizar a compra!");
    }
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
            <button className="btn-finalizar" onClick={handleFinalizarCompra}>Finalizar Compra</button>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Minha Loja. Todos os direitos reservados.</p>
      </footer>
      {showMessage && (
        <div className="floating-message">
          <p>Para finalizar a compra, você precisa estar logado.</p>
        </div>
      )}
    </div>
  );
};

export default Carrinho;
