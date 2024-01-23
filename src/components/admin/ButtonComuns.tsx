type Props = {
    label : string;
    color : string;
    disabled? : boolean;
    onClick : ( ) => void;
}

export const ButtonComuns = ({ label, color, disabled, onClick } : Props ) => {
    return <div>
            <button disabled={disabled} onClick={onClick} className={`bg-${color}-500 houver:bg-${color}-700 px-3 py-2 font-bold outline-none rounded uppercase`} >
            {label}
            </button>
        </div>
}