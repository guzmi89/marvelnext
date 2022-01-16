import Head from "next/head"
import Link from "next/link"
import Error from "../../components/error"
import Loader from "../../components/loader"
import NoContent from "../../components/noContent"

export default function Comics( {comics, error} ) {
    
    if (error) {
        return <Error />
    }

    if (!comics) {
        return (
            <Loader />
        )
    }
    

    if (comics.length === 0) {
        return (
            <NoContent />
        )
    }

    return (
        <>
            <Head>
                <title>Listado de Comics</title>
            </Head>
            <div className="flex flex-wrap justify-center mt-4 bg-slate-300 dark:bg-gray-700 gap-x-2 gap-y-2 p-3">
                {
                    comics && comics.map( c => (
                        <div key = {c.id} className="flex justify-center hover:scale-105 transitio-all duration-500">
                            <div className="rounded-lg shadow-lg bg-white dark:bg-gray-600">
                                <img className="rounded-t-lg w-72 h-96" src={c.thumbnail.path+'.'+c.thumbnail.extension} alt={c.title} title={c.title} />
                                <div className="p-2 w-72">
                                    <a target="_blank" href={c.urls[0].url}><span className="text-gray-900 dark:text-gray-300 text-base font-medium mb-2">{c.title}</span></a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
        
    )
}

export async function getStaticProps() {
    
    try {
        const resp = await fetch("https://gateway.marvel.com/v1/public/comics?limit=48&ts=1&apikey=bd83974f8c0124c0b4006bb69fecc3b4&hash=6253d203f94171a77b3b7f026a16e3b7")
        const comics = await resp.json()

            return {
                props: {
                    comics: comics.data.results
                }
            }
    } catch (error) {
        return {
            props: {
                error : 'Error'
            }
        }
    }
   
}