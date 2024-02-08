type Props = {
    label : string;
    color : string;
    disabled : boolean;
    onClick : () => void;
}

export const ButtonOptions = ({ label, color, disabled, onClick } : Props) => {
    return(
        <button disabled={disabled} onClick={onClick} className={` bg-${color}-500 hover:bg-${color}-600 px-2 py-1 rounded text-gray-900 font-semibold`}>{label}</button>
    )
}