type Props = {
    label : string;
}

export const NothingToShow = ({ label } : Props) => {
    return(
        <div className="text-center text-lg">Nenhum {label} a mostrar.</div>
    )
}