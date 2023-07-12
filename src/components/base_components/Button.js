
export default function Button({text, style}) {
    
    return (
        <>
            <button className={`py-2 px-3 lg:px-5 bg-[#FF8000] rounded-lg text-sm text-white ${style}`}>
                {text}
            </button>
        </>
    )

}