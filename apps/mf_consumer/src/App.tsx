import "./App.css";
import Provider from "provider";

const App = () => {
  const user = {
    name: "Werliton Silva",
    email: "werlitoncarlos@gmail.com",
  };
  return (
    <div className="container">
      <nav>
        <p>MF Consumer</p>
      </nav>
      <div className="child-container">
        <Provider user={user} />
      </div>
    </div>
  );
};

export default App;
