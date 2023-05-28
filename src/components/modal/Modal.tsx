
import "./Modal.css";

type PropsModal = {
    className: any
    modalRef:any;
    close:any
}

export function Modal(props: PropsModal) {
    const { className, modalRef, close } = props;
    return (
        <div ref={modalRef} className={`${className} modal`}>
            <p>Meu modal!</p>
            <button className="" onClick={close}>Fechar</button>
        </div>
    )
}

