import Image from "next/image"

export default function Footer() {
    return(
        <div className="flex flex-wrap justify-center mt-4 bg-slate-400 dark:bg-zinc-900 p-8">
            <div className="font-marvel flex flex-col w-96 items-center text-white">
                <a className="font-marvel inline mb-2 text-slate-800 hover:text-black dark:text-white dark:hover:text-gray-500 text-xl" href="">Sobre el creador</a>
                <a target="_blank" className="font-marvel inline mb-2 text-slate-800 hover:text-black dark:text-white dark:hover:text-gray-500 text-xl" href="https://www.marvel.com/" rel="noreferrer">Web Oficial</a>
                <a target="_blank" className="font-marvel inline mb-2 text-slate-800 hover:text-black dark:text-white dark:hover:text-gray-500 text-xl" href="https://github.com/guzmi89" rel="noreferrer">GitHub</a>
            </div>
            <div className="w-96 text-center text-white">
                <h3 className="font-marvel text-gray-800 dark:text-zinc-100 text-2xl">SÍGUENOS</h3>
                <div className="flex text center justify-center space-x-4">
                    <a target="_blank" title="twitter" href="http://twitter.com/marvel" rel="noreferrer"><svg className="hover:scale-125 h-6 w-6 text-gray-700 dark:text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a>
                    <a target="_blank" title="facebook" href="http://facebook.com/marvel" rel="noreferrer"><svg className="hover:scale-125 h-6 w-6 text-gray-700 dark:text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
                    <a target="_blank" title="instagram" href="http://instagram.com/marvel" rel="noreferrer"><svg className="hover:scale-125 h-6 w-6 text-gray-700 dark:text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>
                    <a target="_blank" title="youtube" href="http://youtube.com/marvel" rel="noreferrer"><svg className="hover:scale-125 h-6 w-6 text-gray-700 dark:text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg></a>
                </div>
            </div>
            <div className="w-96 text-right flex justify-center">
                <div><Image className="h-40 brightness-150 hover:brightness-100" src="/img/disneyplus.png" width="230" height="150" alt="Disney+" /></div>
            </div>
        </div>
    )
}