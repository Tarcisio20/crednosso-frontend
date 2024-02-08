type Props = {
    label : string;
}
export const ErrorComponent = ({ label } : Props) => {
    return (
        <div className="w-1/3 border-2 border-red-500 px-2 py-2 text-center text-red-600 rounded-md">
            {label}
        </div>
    )
}