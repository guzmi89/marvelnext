const Error = () => {
    return (
        <div className="flex flex-wrap justify-center mt-4 bg-slate-300 dark:bg-gray-700 p-5">
            <svg className="h-8 w-8 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="ml-2 font-marvel text-black text-2xl dark:text-white">Hubo un error al procesar la petición</span>
        </div>
    )
}
export default Error