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
        const resp = await fetch(`${process.env.NEXT_APP_URL_APIMARVEL}characters?series=22547&limit=48&ts=${process.env.NEXT_APP_TS_APIMARVEL}&apikey=${process.env.NEXT_APP_TOKEN_APIMARVEL}&hash=${process.env.NEXT_APP_HASH_APIMARVEL}`)
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