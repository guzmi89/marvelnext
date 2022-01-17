import Link from "next/link";
import { useRef } from "react";
import {useTheme} from 'next-themes'
import Image from "next/image"

export default function Header(){

    const {theme, setTheme} = useTheme()

    const menu = useRef()
    const mostrar = () => {
        menu.current.classList.toggle('hidden')
    }
    const ocultar = () => {
        menu.current.classList.toggle('hidden')
    }

    return (
        <div className="dark:bg-gray-800 bg-slate-50">
            <div className="flex p-1 container mx-auto">
                <div className="flex-grow self-center">
                    <Link href="/">
                        <a ><Image className="h-12 w-36 sm:h-14 sm:w-45 hover:brightness-200 hover:animate-pulse" src="/img/logo.png" width="144" height="48" alt="logo" /></a>
                    </Link>
                </div>
                <ul className="sm:inline-flex self-center space-x-4 hidden">
                    <li className="font-marvel text-2xl text-gray-900 hover:text-black hover:decoration-black dark:text-gray-100 dark:hover:text-gray-400 dark:hover:decoration-sky-500 hover:underline hover:underline-offset-8 p-2">
                        <Link href='/films'> 
                            <a>Películas</a>
                        </Link>
                    </li>
                    <li className="font-marvel text-2xl text-gray-900 hover:text-black hover:decoration-black dark:text-gray-100 dark:hover:text-gray-400 dark:hover:decoration-sky-500 hover:underline hover:underline-offset-8 p-2">
                        <Link href='/comics'> 
                            <a>Comics</a>
                        </Link>
                    </li>
                    <li className="font-marvel text-2xl text-gray-900 hover:text-black hover:decoration-black dark:text-gray-100 dark:hover:text-gray-400 dark:hover:decoration-sky-500 hover:underline hover:underline-offset-8 p-2">
                        <Link href='/heroes'> 
                            <a>Héroes</a>
                        </Link>
                    </li>
                </ul>
                <div className="inline-flex self-center space-x-4 sm:ml-2 sm:pl-2 sm:border-l-2 sm:border-gray-500">
                    <span onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                        {theme === "light" ?
                        <svg id="lightIcon" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="fill-yellow-600/20 stroke-yellow-600"></path><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-yellow-500"></path></svg>
                        :
                        <svg id="darkIcon" viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path fillRule="evenodd" clipRule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" className="fill-sky-400/20"></path><path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-sky-500"></path><path fillRule="evenodd" clipRule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className="fill-sky-500"></path></svg>
                        }
                    </span>
                </div>
                <button onClick={mostrar} className="sm:hidden navbar-burger flex items-center text-black dark:text-gray-500 p-3">
                    <svg className="block h-7 w-7 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menú Móvil</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
                <div ref={menu} className="navbar-menu relative z-50 hidden">
                    <div className="navbar-backdrop fixed inset-0 dark:bg-gray-800 dark:opacity-25"></div>
                    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-slate-100 dark:bg-gray-800 border-r overflow-y-auto opacity-95">
                        <div className="flex items-center justify-end mb-8">
                            <button onClick={ocultar} className="navbar-close">
                                <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul>
                                <li onClick={ocultar} className="font-marvel text-2xl text-gray-900 hover:text-black hover:decoration-black dark:text-gray-100 dark:hover:text-gray-400 dark:hover:decoration-sky-500 hover:underline hover:underline-offset-8 p-2">
                                <Link href='/films'> 
                                    <a>Películas</a>
                                </Link>
                                </li>
                                <li onClick={ocultar} className="font-marvel text-2xl text-gray-900 hover:text-black hover:decoration-black dark:text-gray-100 dark:hover:text-gray-400 dark:hover:decoration-sky-500 hover:underline hover:underline-offset-8 p-2">
                                <Link href='/comics'> 
                                    <a>Comics</a>
                                </Link>
                                </li>
                                <li onClick={ocultar} className="font-marvel text-2xl text-gray-900 hover:text-black hover:decoration-black dark:text-gray-100 dark:hover:text-gray-400 dark:hover:decoration-sky-500 hover:underline hover:underline-offset-8 p-2">
                                <Link href='/heroes'> 
                                    <a>Héroes</a>
                                </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-center mt-8">
                            <Image className="w-1/4 grayscale" src="/img/logo.png" width="77" height="24" alt="logo" />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}