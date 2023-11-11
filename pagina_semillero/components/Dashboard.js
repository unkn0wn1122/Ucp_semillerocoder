import React, { useState } from "react";
import "../estilos/dashboard.css";
import Logo from '../Images/Mountain.png';
export const Dashboard = () => {
  return (
    <>
    <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>navbar Uno</title>
        <link rel="stylesheet" href="dashboard.css" />
      </head>
      <body className="body-ds">
        <header className="header-ds">
          <div className="logo-ds">
            <img src={Logo} alt="Logo de la marca" />
          </div>
          <nav>
            <ul className="nav-links-ds">
              <a className="btn-ds" href="#">
                <button>Nombre</button>
              </a>
              <a className="btn-ds" href="#">
                <button>Principal</button>
              </a>
              <a className="btn-ds" href="#">
                <button>Ejercicios</button>
              </a>
              <a className="btn-ds" href="#">
                <button>Competencias</button>
              </a>
              <a className="btn-ds" href="#">
                <button>Equipos</button>
              </a>
              <a className="btn-ds" href="#">
                <button>Plataformas</button>
              </a>
              <a className="btn-ds" href="#">
                <button>Certificados</button>
              </a>
              <div class="search-bar">
              <input type="text" id="search-input" placeholder="Buscar..." />
            </div>

            </ul>
          </nav>
        </header>
      </body>
    </>
  );
}