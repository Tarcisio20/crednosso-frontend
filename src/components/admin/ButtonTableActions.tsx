type Props = {
    label : string;
    color : string;
    page : string;
    idElement : string;
    onclick : () => void;
}

export const ButtonTableActions = ({ label, color, page, idElement, onclick } : Props) => {
    return(
        <button onClick={onclick} className={`bg-${color}-500 hover:bg-${color}-700 text-sm px-2 py-1 rounded`} >{label}</button>
    )
}