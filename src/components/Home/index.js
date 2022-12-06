import React, { useEffect, useState } from "react";
import "../../style/search.css";
import lupa from "../../assets/lupa.svg";
import Like from "../../assets/like.svg";
import del from "../../assets/delete.svg";
import list from '../../searchList';
import logo from "../../assets/logo.png";
import views from "../../assets/views.svg";
import edit from "../../assets/edit.svg";
import Modal from '../Modal/index'

function Home() {

const [input, setInput] = useState("");
const [filterImg, setFilterImg] = useState(list);
const [isModalOpen, setIsModalOpen] = useState(false);

function handleSearch() {
  const filterImgToSave = list.filter((post) =>
    post.name.toLowerCase().includes(input.toLowerCase())
  );
  setFilterImg(filterImgToSave);
  setInput("");
}

function handleModal(){
  setIsModalOpen(!isModalOpen)


}

console.log(isModalOpen)

return (
  <div>
    <header className="header">
      <div className="headerContent">
        <img src={logo} />
        <div className="searchContainer">
          <img src={lupa} className="lupa" onClick={handleSearch} />
          <input
            className="search"
            placeholder="Buscar"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
        </div>
      </div>
    </header>

    <div className="container">
      {filterImg.map((lista) => {
        return (
          <div className="content" key={lista.id}>
            <div className="containerImgIcons">
              <div className="icons">
                <img src={edit} />
                <img src={del} />
              </div>
              <img className="img" src={lista.url} />
            </div>
            <div className="info">
              <h1>{lista.name}</h1>
              <div className="data">
                <div className="containerData">
                  <img className="like" src={Like} />
                  <strong>{lista.likes}mil</strong>
                </div>
                <div className="containerData">
                  <img className="views" src={views} />
                  <strong>{lista.views}mil</strong>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <button className="myButton" onClick={ handleModal}>
        +
      </button>
      <Modal
      open={isModalOpen} 
      
      />

    </div>
  </div>
);

}

export default Home;