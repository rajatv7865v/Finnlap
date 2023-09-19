import Modal from 'react-modal';
// @ts-ignore

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
interface ModalTypes {
    closeModal: () => {} | void;
    isModalOpen: boolean;
    title?: string;
    icon?: any;
    modalClass?: string;
    headerClass?: string;
    titleStyle?: string;
}
export default function Index({
    closeModal,
    isModalOpen,
    title,
    icon,
    modalClass,
    headerClass,
    titleStyle
}: ModalTypes) {
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            className={`p-0 absolute rounded-xl outline-none shadow-xl w-4/5 md:w-fit  bg-white ${modalClass} overflow-y-auto overflow-x-auto`}
            overlayClassName='bg-darkBlue fixed top-0 right-0 left-0 bottom-0 bg-opacity-50'
        >
            <div
                id='modal-header'
                className={`border-b flex items-center border-outlineGray py-6 px-2 {headerClass}`}
            >
                <div>{icon}</div>
                <div className={`${titleStyle} font-medium text-base`}>{title}</div>
            </div>
        </Modal>
    );
}
