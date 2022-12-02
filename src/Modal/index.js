import './styled'

function Modal(props) {
    const openModal = props.open
   console.log(openModal) 

    return(
        <div className='containerModal'>
            <h1>Modal</h1>
            <input type='text' />
            <input type='text' />
            <button>Enviar</button>
        </div>

    )
}

export default Modal;