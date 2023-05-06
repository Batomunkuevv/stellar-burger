import modalOverlayStyles from './modal-overlay.module.css';

const ModalOverlay = ({ onClose }) => {
    return (
        <div onClick={onClose} className={`${modalOverlayStyles.modal__overlay}`}>
        </div>
    )
}

export default ModalOverlay;