import React from 'react';
import './App.css'; 
function App() {
  return (
    <div className="app-container">
      <h1> My Self </h1>
      <ul>
        <li><strong>Nombre:</strong> Erick Nuñez </li>
        <li><strong>Dirección:</strong> Av. Cardenal de la Torre </li>
        <li><strong>Teléfono:</strong> 0979248634 </li>
        <li><strong>Correo:</strong> erick.nunez02@epn.edu.ec </li>
        <li><strong>Github:</strong> @Erick-Nu </li>
      </ul>

      <h2>Completed Studies</h2>
      <ol>
        <li><strong>Escuela:</strong> "Ciudad de Cuenca"  </li>
        <li><strong>Aprobada:</strong> True  </li>
        <li><strong>Colegio:</strong> "Simon Bolivar" -- Bachillerato Tecnico </li>
        <li><strong>Aprobada:</strong> True  </li>
        <li><strong>Universidad:</strong> "Escuela Politecnica Nacional" -- Tecnologia en Desarrollo De Software </li>
      </ol>

      <h2>Tools Used</h2>
      <ul>
        <li>Visual Studio Code</li>
        <li>Git</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>

      <h2> Favorite sports </h2>
      <div className="gallery">
        <div className="gallery-item">
          <img src="soccer.png" alt="soccer" />
          <p> SOCCERBALL </p>
        </div>
        <div className="gallery-item">
          <img src="volleyball.png" alt="volleyball" />
          <p> VOLLEYBALL </p>
        </div>
        <div className="gallery-item">
          <img src="basketball.png" alt="basketball" />
          <p>BASKETBALL </p>
        </div>
      </div>
    </div>
  );
}

export default App;
