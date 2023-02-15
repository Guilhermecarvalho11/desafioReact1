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



function ModalEdit(props) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  console.log('name',name)


  function closedModal() {
    props.onClose();
  }

 async function editImg(){
    try{
        await axios.put(`https://mentoria-api.vercel.app/api/images/${props.imgToEditId}`, {url:link, name:name})
        console.log('props',props.imgToEditId)
        window.location.reload();
     }catch(err){
        console.log('deu errado' + err)
      }
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
            <Text>Editar Imagem</Text>
            <Img src={closed} onClick={closedModal} />
            <ContainerInput>
              <InputNome placeholder="Nome" type="text" value={name} onChange={e => {setName(e.target.value)}}/>
              <Input placeholder="Url da imagem" type="text" value={link} onChange={e => {setLink(e.target.value)}}/>
              <Button onClick={editImg}>Enviar</Button>
            </ContainerInput>
          </ContainerModal>
          </ContainerInput>
        </Container>

      )}
    </>
  );
}

export default ModalEdit;
