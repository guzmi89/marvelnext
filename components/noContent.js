const NoContent = () => {
    return (
        <div className="flex flex-wrap justify-center mt-4 bg-slate-300 dark:bg-gray-700 p-5">
            <svg className="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="9" y1="10" x2="9.01" y2="10" />  <line x1="15" y1="10" x2="15.01" y2="10" />  <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />
            </svg>
            <span className="ml-2 font-marvel text-black text-2xl dark:text-white">No hay contenido que mostrar</span>
        </div>
    )
}

export default NoContent