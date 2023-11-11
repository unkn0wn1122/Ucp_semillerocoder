import React from "react";
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { Dashboard } from "../components/Dashboard";
import { Login } from "../components/Login";
import { AdministrarUsuarios } from "../components/AdministrarUsuarios";
import { Certificados } from "../components/Certificados";
import { Competencias } from "../components/Competencias";
import { Ejercicios } from "../components/Ejercicios";
import { Equipos } from "../components/Equipos";
import { InscripcionCompetidores } from "../components/InscripcionCompetidores";
import { Plataformas } from "../components/Plataformas";
import { Principal } from "../components/Principal";
const Rutas = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/AdministrarUsuarios" element={<AdministrarUsuarios/>} />
      <Route path="/Certificados" element={<Certificados/>} />
      <Route path="/Competencias" element={<Competencias/>} />
      <Route path="/Ejercicios" element={<Ejercicios/>} />
      <Route path="/Equipos" element={<Equipos/>} />
      <Route path="/InscripcionCompetidores" element={<InscripcionCompetidores/>} />
      <Route path="/Plataformas" element={<Plataformas/>} />
      <Route path="/Principal" element={<Principal/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
