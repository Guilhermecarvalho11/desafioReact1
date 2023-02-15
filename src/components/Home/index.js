/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import "../../style/search.css";
import lupa from "../../assets/lupa.svg";
import Like from "../../assets/like.svg";
import del from "../../assets/delete.svg";
import list from "../../searchList";
import logo from "../../assets/logo.png";
import views from "../../assets/views.svg";
import edit from "../../assets/edit.svg";
import Modal from "../Modal/index";
import ModalRemove from "../ModalRemove";
import { useEffect } from "react";
import axios from "axios";
import ModalEdit from "../ModalEdit";

function Home() {
  const [input, setInput] = useState("");
  const [filterImg, setFilterImg] = useState(list);
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOPen] = useState(false)
  const [isModalEditOpen, setIsModalEditOpen] = useState(false)
  const [post, setPost] = useState([])
  const [imgToDelete, setImgToDelete] = useState();
  const [imgToEdit, setImgToEdit] = useState()

  console.log('post',post)

  function handleSearch() {
    const filterImgToSave = list.filter((post) =>
      post.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilterImg(filterImgToSave);
    setInput("");
  }

  function handleModal() {
    setIsModalAddOpen(!isModalAddOpen);
  }

  function handleEdit(id){
    setImgToEdit(id)
    setIsModalEditOpen(!isModalEditOpen);
  }

  function handleDelete(id){
    setImgToDelete(id)
    setIsModalDeleteOPen(!isModalDeleteOpen)
    console.log('setImg', setImgToDelete(id))

  } 

  useEffect(() => {

      axios.get('https://mentoria-api.vercel.app/api/images')
      .then((response) => {
          setPost(response.data)
      })
      .catch(() => {
        console.log('deu errado')
      })
  
  }, [])


  return (
    <>
      <header className="header">
        <div className="headerContent">
          <img src={logo} alt="logo" />
          <div className="searchContainer">
            <img src={lupa} className="lupa" onClick={handleSearch} alt=" icon search"/>
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
        {post.map((lista) => {
          return (
            <div className="content" key={lista._id}>
              <div className="containerImgIcons">
                <div className="icons">
                  <img src={edit} alt="button edit" onClick={() => handleEdit(lista._id)}/>
                  <img src={del} alt="button remove" onClick={() => handleDelete(lista._id)} />

                </div>
                <img className="img" src={lista.url}  alt={list.name}/>
              </div>
              <div className="info">
                <h1>{lista.name}</h1>
                <div className="data">
                  <div className="containerData">
                    <img className="like" src={Like} alt="like" />
                    <strong>{lista.likes}mil</strong>
                  </div>
                  <div className="containerData">
                    <img className="views" src={views} alt="icon viwes"/>
                    <strong>{lista.views}mil</strong>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <button className="myButton" onClick={handleModal}>
          +
        </button>
        <Modal
          open={isModalAddOpen}
          onClose={() => setIsModalAddOpen(false)}
          />

        <ModalRemove 
          open={isModalDeleteOpen}
          onClose={() => setIsModalDeleteOPen(false)}
          imgToDeleteId={imgToDelete}
          />

        <ModalEdit 
            open={isModalEditOpen}
            onClose={() => setIsModalEditOpen(false)}
            imgToEditId={imgToEdit}
          />
      </div>
    </>
  );
}

export default Home;
