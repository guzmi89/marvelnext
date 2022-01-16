import Image from "next/image"

const error500 = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-4 bg-slate-300 dark:bg-gray-700 p-5">
            <Image className="" src="/img/captain-america.png" width="400" height="400" alt="Error 404" />
            <h2 className="font-marvel text-4xl text-black dark:text-white">500</h2>
            <span className="text-center ml-2 font-marvel text-black text-2xl dark:text-white">Error en la torre de los vengadores</span>
        </div>
    )
}

export default error500