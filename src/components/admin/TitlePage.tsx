type Props = {
    title : string;
}

export const TitlePage = ({ title } : Props ) =>{
    return (
        <h3 className="text-center uppercase text-3xl border-b-4 border-gray-500 mb-2 px-7 pb-3" >{title}</h3>
    )
}