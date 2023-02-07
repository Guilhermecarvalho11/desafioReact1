import { Button, DivModal} from "./styled";


function ModalRemove(props){
    function modaldeleteItem(){
        props.onClose()
    }

    function removeImg(){
        alert("clicou")
    }

    return(
        <>
        {props.open && (

        <DivModal>
            <h1 onClick={modaldeleteItem}>Deseja realmente deletar essa imagem?</h1>
            <div>
            <Button onClick={removeImg}>SIM</Button>
            <Button>NÃO</Button>
            </div>
        </DivModal>
        )}
        </>
    )


}

export default ModalRemove;