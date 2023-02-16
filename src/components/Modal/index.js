import { useState } from "react";
import axios from "axios";
import {
  ContainerModal,
  Input,
  InputNome,
  Button,
  ContainerInput,
  Container,
  Text,
  Img
} from "./styled";
import closed from "../../assets/closed.svg";



function Modal(props) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const URL ='https://mentoria-api.vercel.app/api/images';


  function closedModal() {
    props.onClose();
  }

 async function PostAdd(){

     await axios.post(URL, {url:link, name:name})
      .then((response) => {
        console.log('deu certo')
      })
      .catch((err) => {
        console.log('deu errado' + err)
      })
      setName('');
      setLink('');
      window.location.reload()
  }


  return (
    <>
      {props.open && (
      <Container>
        <ContainerInput>
          <ContainerModal>
            <Text>Inserir Nova Imagem</Text>
            <Img src={closed} onClick={closedModal} />
            <ContainerInput>
              <InputNome placeholder="Nome" type="text" value={name} onChange={e => {setName(e.target.value)}}/>
              <Input placeholder="Url da imagem" type="text" value={link} onChange={e => {setLink(e.target.value)}}/>
              <Button onClick={PostAdd}>Enviar</Button>
            </ContainerInput>
          </ContainerModal>
          </ContainerInput>
        </Container>

      )}
    </>
  );
}

export default Modal;


