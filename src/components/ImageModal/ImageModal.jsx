import Modal from 'react-modal';

const ImageModal = ({ selectedImage, closeModal, modalIsOpen }) => {
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'transparent',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};
Modal.setAppElement('#root');

  return (

        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}>

        {selectedImage && (
          <div onClick={closeModal}>
            <img src={selectedImage.url} alt={selectedImage.alt} style={{ width: '100%' }} />
          </div>
        )}
      
          </Modal>

  )
}

export default ImageModal