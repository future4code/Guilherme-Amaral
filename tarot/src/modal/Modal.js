import { ModalBackdrop, ModalContent, ModalFrame, ModalHeader } from "./styled"

export const Modal = ({children, onClose}) => {

    const onClickClose = (event) => {
        if (event.target.id === 'outside' || event.target.id === 'close-button') {
            onClose()
        }
    }

    return (
        <ModalBackdrop id="outside" onClick={onClickClose}>
            <ModalFrame>
                <ModalHeader>
                    <span id="close-button" onClick={onClickClose}>X</span>
                    <ModalContent>
                        {children}
                    </ModalContent>
                </ModalHeader>
            </ModalFrame>
        </ModalBackdrop>
    )
}

export default Modal 