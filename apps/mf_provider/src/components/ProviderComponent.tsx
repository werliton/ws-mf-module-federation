import React from "react";
import "./ProviderComponent.css";

interface ProviderProps {
  user: {
    name: string;
    email: string;
  };
}

const Provider: React.FC<ProviderProps> = ({ user }) => {
  if (!user) return null;
  return (
    <main>
      <div className="container-provider">
        <div className="icon-container">
          <img
            src="https://module-federation.io/svg.svg"
            alt="logo"
            className="logo-image"
          />
        </div>
        <h1 className="title">MF Provider</h1>
        {user && (
          <section>
            <p>
              Dados do usuário <b>(recebidos pelo MF CONSUMER)</b>
            </p>
            <ul>
              <li>{user.name}</li>
              <li>{user.email}</li>
            </ul>
          </section>
        )}
      </div>
      <footer>
        <p>
          Configurado com monorepo por:{" "}
          <a href="https://github.com/werliton">@werlitonsilva</a>
        </p>
      </footer>
    </main>
  );
};

export default Provider;
