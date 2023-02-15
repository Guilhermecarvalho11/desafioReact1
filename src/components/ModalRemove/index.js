import { Button, Container, DivButton, DivModal, Title} from "./styled";
import axios from "axios";


function ModalRemove(props){
    function modaldeleteItem(){
        props.onClose()
    }

    function closedModal() {
        props.onClose();
      }

    async function removeImg(){
       try{
          await axios.delete(`https://mentoria-api.vercel.app/api/images/${props.imgToDeleteId}`)
          window.location.reload()
        }catch(err){
            console.log('deu errado', err)
        }

    }





    return(
        <>
        {props.open && (
        <Container>
            <DivModal>
                <Title onClick={modaldeleteItem}>Deseja realmente deletar essa imagem?</Title>
                    <DivButton>
                        <Button variant='primary' onClick={() => removeImg()}>SIM</Button>
                        <Button onClick={closedModal}>NÃO</Button>
                    </DivButton>
            </DivModal>
        </Container>
        )}
   
        </>
    )


}

export default ModalRemove;