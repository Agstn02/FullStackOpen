
const Modal = ({message}) => {
    return(
        message 
            ? <div className="modal">{message}</div>
            : null
    )
}

export default Modal