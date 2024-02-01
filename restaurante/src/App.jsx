import { useState } from "react";
import Restaurante from "./assets/Restaurante.webp";
import './App.css'
import { Navegacao } from './Navegacao.jsx'
import { ItemCardapio } from './ItemCardapio.jsx'
import { pratosPrincipais, bebidas, sobremesas } from "./cardapio.js";

function App() {
  const paginasMenu = [pratosPrincipais,bebidas,sobremesas];
  const [paginaSelecionada, atualizarPagina] = useState(0);

  return (
    <>
      <h1>Restaurante</h1>
      <img src={Restaurante} alt="" className="capa"/>
      <Navegacao atualizarPagina={atualizarPagina}/>
      <div className="menu">
        {
          paginasMenu[paginaSelecionada].map(prato => <ItemCardapio nome={prato.nome} preco={prato.preco} descricao={prato.descricao} imagem={prato.imagem}/>)
        }
      </div>
    </>
  )
}

export default App
