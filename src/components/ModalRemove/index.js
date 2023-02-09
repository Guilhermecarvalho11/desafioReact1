import { Button, Container, DivButton, DivModal, Title} from "./styled";


function ModalRemove(props){
    function modaldeleteItem(){
        props.onClose()
    }

    function removeImg(){
        alert("clicou")
    }

    function closedModal() {
        props.onClose();
      }

    return(
        <>
        {props.open && (
        <Container>
            <DivModal>
                <Title onClick={modaldeleteItem}>Deseja realmente deletar essa imagem?</Title>
                    <DivButton>
                        <Button variant='primary' onClick={removeImg}>SIM</Button>
                        <Button onClick={closedModal}>NÃO</Button>
                    </DivButton>
            </DivModal>
        </Container>
        )}
   
        </>
    )


}

export default ModalRemove;