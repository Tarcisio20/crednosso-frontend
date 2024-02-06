type Props = {
    isOpen : boolean;
    onClose : () => void;
}

export const ModalConfirmationPartial = ({isOpen, onClose} : Props) => {
    if(!isOpen) return null;
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
            <div className="relative p-8 bg-white rounded-lg w-96 text-black">
            <button className="absolute top-0 right-0 p-2 font-bold" onClick={onClose}>X</button>
            <div>
                <div>Cabeçalho</div>
                <div>Body</div>
            </div>
            </div>
        </div>
    )
}