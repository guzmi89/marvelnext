import Head from "next/head"
import Link from "next/link"
import Error from "../../components/error"
import Loader from "../../components/loader"
import NoContent from "../../components/noContent"

export default function Heroes( {characters, error} ) {
    
    if (error) {
        return <Error />
    }

    if (!characters) {
        return (
            <Loader />
        )
    }

    if (characters.length === 0) {
        return (
            <NoContent />
        )
    }

    return (
        <>
            <Head>
                <title>Listado de SuperHéroes</title>
            </Head>
            <div className="flex flex-wrap justify-center mt-4 bg-slate-300 dark:bg-gray-700 gap-x-2 gap-y-2 p-3">
                {
                    characters && characters.map( c => (
                        <div key = {c.id} className="flex justify-center hover:scale-105 transition-all duration-500">
                            <div className="rounded-lg shadow-lg bg-white dark:bg-gray-600">
                                <Link href={`/heroes/${c.id}`}>
                                    <a>
                                        <img className="rounded-t-lg w-80 h-80" src={c.thumbnail.path+'.'+c.thumbnail.extension} alt={c.name} title={c.name} />
                                    </a>
                                </Link>
                                <div className="p-2">
                                    <h5 className="text-gray-900 dark:text-gray-300 text-xl font-medium mb-2">{c.name}</h5>
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
        const resp = await fetch("https://gateway.marvel.com/v1/public/characters?series=22547&limit=48&ts=1&apikey=bd83974f8c0124c0b4006bb69fecc3b4&hash=6253d203f94171a77b3b7f026a16e3b7")
        const characters = await resp.json()

            return {
                props: {
                    characters: characters.data.results
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