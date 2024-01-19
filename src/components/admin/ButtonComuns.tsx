type Props = {
    label : string;
    color : string;
    onClick : (  ) => void;
}

export const ButtonComuns = ({ label, color, onClick } : Props ) => {
    return <button onClick={onClick} className={`bg-${color}-500 houver:bg-${color}-700 px-3 py-2 font-bold outline-none rounded uppercase`} >{label}</button>
}