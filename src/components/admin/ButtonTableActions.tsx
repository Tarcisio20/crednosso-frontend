type Props = {
    label : string;
    color : string;
    page : string;
    type : string;
    idElement : string;
    onclick : (idUser : string) => void;
}

export const ButtonTableActions = ({ label, color, page, type, idElement, onclick } : Props) => {
    return(
        <button onClick={onclick} className={`bg-${color}-500 hover:bg-${color}-700 text-sm px-2 py-1 rounded`} >{label}</button>
    )
}