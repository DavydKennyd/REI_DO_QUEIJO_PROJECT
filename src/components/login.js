import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    
    const user = users.find(user => user.username === username && user.id.toString() === password);
    if (user) {
      
      navigate('/carrinho');
    } else {
      // Credenciais inválidas, você pode exibir uma mensagem de erro ou tomar outra ação
      alert('Credenciais inválidas');
    }
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
      <div className="login-center-container">
        <div className="login-container">
          <h2>Login</h2>
          <form id="login-form" onSubmit={handleLoginSubmit}>
            <input type="text" id="username" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" id="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Entrar</button>
          </form>
          <Link to="/cadastro"><button className="signup-link">Cadastre-se</button></Link>
        </div>
      </div>
      <footer className='footer_home'>
        <p>&copy; 2024 Minha Loja. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Login;
