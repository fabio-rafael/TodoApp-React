import React from "react";
import PageHeader from "../template/pageHeader";
import "./about.css";

export default (props) => (
  <div>
    <PageHeader name="Sobre"></PageHeader>
    <div className="About">
      <h2 style={{ fontSize: "24px", textDecoration: "underline" }}>
        Funcionalidades da Aplicação (Frontend - React):
      </h2>

      <h2>Listagem de Tarefas:</h2>
      <p>
        A aplicação exibe uma lista de tarefas, com informações como descrição e
        status (concluída ou pendente).
      </p>

      <h3>Adição de Tarefas:</h3>
      <p>
        O usuário pode adicionar novas tarefas, inserindo uma descrição e
        clicando em um botão de adição.
      </p>

      <h3>Remoção de Tarefas:</h3>
      <p>
        É possível excluir uma tarefa da lista, clicando em um botão de remoção
        associado a cada tarefa.
      </p>

      <h3>Marcação de Tarefas como Concluídas/Pendentes:</h3>
      <p>
        As tarefas podem ser marcadas como concluídas ou pendentes. Há botões
        específicos para cada ação.
      </p>

      <h3>Filtragem e Busca:</h3>
      <p>
        Existe um campo de busca que permite filtrar as tarefas com base em uma
        descrição específica.
      </p>

      <h3>Limpeza da Busca:</h3>
      <p>
        Um botão de limpar permite resetar a busca e exibir todas as tarefas
        novamente.
      </p>

      <h2>Tecnologias Utilizadas no Frontend (React):</h2>

      <ul>
        <li>
          <strong>React:</strong> A biblioteca React foi utilizada para
          construir a interface de usuário da aplicação.
        </li>
        <li>
          <strong>Axios:</strong> A biblioteca Axios é utilizada para fazer
          requisições HTTP para o backend.
        </li>
      </ul>

      <h2 style={{ fontSize: "24px", textDecoration: "underline" }}>
        Funcionalidades do Backend (Node.js, Express, MongoDB):
      </h2>

      <ul>
        <li>
          <strong>CRUD (Create, Read, Update, Delete):</strong> O backend
          oferece operações CRUD para manipulação das tarefas (criação, leitura,
          atualização e exclusão).
        </li>
        <li>
          <strong>Express:</strong> O framework Express foi utilizado para
          construir a aplicação web e gerenciar as rotas e requisições HTTP.
        </li>
        <li>
          <strong>MongoDB:</strong> O MongoDB é o banco de dados NoSQL utilizado
          para armazenar as informações das tarefas.
        </li>
        <li>
          <strong>Mongoose:</strong> O Mongoose , uma biblioteca ODM (Object
          Data Modeling) para MongoDB, utilizada para simplificar a interação
          com o banco de dados.
        </li>
        <li>
          <strong>Node-Restful:</strong> O pacote Node-Restful é utilizado para
          simplificar a criação de APIs RESTful no Node.js.
        </li>
      </ul>
    </div>
  </div>
);
