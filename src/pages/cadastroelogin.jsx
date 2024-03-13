import React from 'react';

const Cadastro = () => {
  return (
    <div>
      <div>
        <h1>Cadastro</h1>

        <p>Entrar com o google</p>
        
        <form action="">
          <label htmlFor="Nome">Nome Completo</label><br />
          <input type="text" name="nome" id="nome" />
          <label htmlFor="">Email</label><br />
          <input type="text" name="email" id="email" />
          <label htmlFor="">Senha</label><br />
          <input type="password" name="senha" id="senha" />
          <label htmlFor="">CPF</label>
          <input type="number" name="cpf" id="cpf" />
          <label htmlFor="">Data de nascimento</label>
          <input type="date" name="data" id="data" />
        </form>
      </div>

      <div>
        
        <h1>Login</h1>
        <p>Entrar com o google</p>
        
        <form action="">
          <label htmlFor="">Email</label>
          <input type="text" />
          <label htmlFor="">Senha</label>
          <input type="password" name="" id="" />
          <button>Entrar</button>
        </form>
      </div>
    </div>
  )
}

export default Cadastro;
