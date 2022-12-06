import { useState } from "react";
import {
  ContainerModal,
  Input,
  InputNome,
  Button,
  ContainerInput,
  Text,
  Img,
  Overlay,
} from "./styled";
import closed from "../../assets/closed.svg";

function Modal(props) {
  const [visibleModal, setVisibleModal] = useState(true);
  const openModal = props.open;

  if (openModal === false) {
    return null;
  }

  function closedModal() {
    setVisibleModal(!visibleModal);
    // props.onClose()

    console.log(visibleModal)
  }

  return (
    <>
      <ContainerModal>
        <Text>Inserir Nova Imagem</Text>
        <Img src={closed} onClick={closedModal} />
        <ContainerInput>
          <InputNome placeholder="Nome" type="text" />
          <Input placeholder="Url da imagem" type="text" />
          <Button>Enviar</Button>
        </ContainerInput>
      </ContainerModal>
    </>
  );
}

export default Modal;
