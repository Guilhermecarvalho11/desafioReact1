import { useState } from "react";
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
  function closedModal() {
    props.onClose();
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
              <InputNome placeholder="Nome" type="text" />
              <Input placeholder="Url da imagem" type="text" />
              <Button>Enviar</Button>
            </ContainerInput>
          </ContainerModal>
          </ContainerInput>
        </Container>

      )}
    </>
  );
}

export default Modal;
