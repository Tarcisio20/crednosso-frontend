type Props = {
    label : string;
    color : string;
    page : string;
    type : string;
    disabled?: boolean;
    idElement : string;
    onclick : (idUser : string) => void;
}

export const ButtonTableActions = ({ label, color, page, type, disabled, idElement, onclick } : Props) => {
    return(
        <button disabled={disabled} onClick={onclick} className={`bg-${color}-500 border-2 border-slate-400 hover:bg-${color}-700 text-sm px-2 py-1 rounded`} >{label}</button>
    )
}