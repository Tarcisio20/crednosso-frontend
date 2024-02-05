type Props = {
    label : string;
    color : string;
    disabled? : boolean;
    onClick : ( ) => void;
}

export const ButtonComuns = ({ label, color, disabled, onClick } : Props ) => {
    const style = `bg-${color}-500  houver:bg-${color}-700 px-3 py-2 font-bold outline-none rounded uppercase`
    return <div>
            <button disabled={disabled} onClick={onClick} className={`bg-${color}-500 border-2 mx-2 border-slate-400  houver:bg-${color}-700 px-3 py-2 font-bold outline-none rounded uppercase`} >
            {label}
            </button>
        </div>
}