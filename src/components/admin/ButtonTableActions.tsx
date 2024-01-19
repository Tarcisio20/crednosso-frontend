type Props = {
    label : string;
    color : string;
    onclick : () => void;
}

export const ButtonTableActions = ({ label, color, onclick } : Props) => {
    return(
        <button onClick={onclick} className={`bg-${color}-500 hover:bg-${color}-700 text-sm`} >{label}</button>
    )
}