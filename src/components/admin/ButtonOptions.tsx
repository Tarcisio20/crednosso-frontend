type Props = {
    label : string;
    color : string;
    onClick : () => void;
}

export const ButtonOptions = ({ label, color, onClick } : Props) => {
    return(
        <button onClick={onClick} className={`inline-block bg-${color}-500 hover:bg-${color}-600 px-2 py-1 rounded text-gray-900 font-semibold`}>{label}</button>
    )
}