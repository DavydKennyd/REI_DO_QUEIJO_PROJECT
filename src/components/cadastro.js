import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './cadastro.css';

const Cadastro = () => {
  const navigate = useNavigate();

  const cadastrarUsuarios = (e) => {
    e.preventDefault();
    
    console.log('Usuário cadastrado com sucesso!');
    navigate('/login'); 
  };

  return (
    <div>
      <header className="header-container">
        <div className="logo">Rei do Queijo</div>
        <div className="search-container">
          <form action="/pesquisar" method="get" className="search-form">
            <input type="text" id="search" name="q" placeholder="Pesquisar Produto" />
            <button type="submit">Pesquisar</button>
          </form>
        </div>
        <div className="buttons-container">
          <Link to="/carrinho"><button className="cart-button">Carrinho</button></Link>
          <Link to="/login"><button className="login-button">Login</button></Link>
        </div>
      </header>
      <div className="cadastro-container">
        <h2>Cadastro</h2>
        <form onSubmit={cadastrarUsuarios}>
          <div className="campo">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="campo">
            <label htmlFor="username">Usuário:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="campo">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="campo">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="campo">
            <label htmlFor="confirm_password">Confirmar Senha:</label>
            <input type="password" id="confirm_password" name="confirm_password" required />
          </div>
          <div className="campo-checkbox">
            <input type="checkbox" id="termos" name="termos" required />
            <label htmlFor="termos">Aceito os termos e condições</label>
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
      <footer className='footer_home'>
        <p>&copy; 2024 Minha Loja. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Cadastro;
