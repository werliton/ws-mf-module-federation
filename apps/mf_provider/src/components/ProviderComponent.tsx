import React from "react";
import "./ProviderComponent.css";

const Provider: React.FC = () => {
  return (
    <div className="container">
      <div className="icon-container">
        <img
          src="https://module-federation.io/svg.svg"
          alt="logo"
          className="logo-image"
        />
      </div>
      <h1 className="title">Hello Module Federation 2.0</h1>
      <p>Eu sou um módulo federado(compartilhado) {new Date().getFullYear()}</p>
      <p>Configurado com monorepo por:</p>
      <footer>
        <a href="https://github.com/werliton">@werlitonsilva</a>
      </footer>
    </div>
  );
};

export default Provider;
