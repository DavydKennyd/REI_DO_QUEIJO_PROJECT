import React from 'react';
import './carrinho.css';

const Carrinho = () => {
  return (
    <div>
      <header>
        <div className="container-carrinho">
          <div className="user-info">
            <span>Bem-vindo,<strong>Nome do Usuário</strong>!</span>
          </div>
          <h1>Carrinho de Compras</h1>
          <nav>
            <a href="index.html" className="btn-home">Ir para Página Inicial</a>
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
                <th>Quantidade</th>
                <th>Total</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nome do Produto</td>
                <td>R$ 100,00</td>
                <td>1</td>
                <td>R$ 100,00</td>
                <td><button className="btn-remove">Remover</button></td>
              </tr>
            </tbody>
          </table>
          <div className="subtotal">
            <span>Subtotal:</span>
            <span>R$ 100,00</span>
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
