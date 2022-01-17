import Head from "next/head"
import Link from "next/link"
import Error from "../../components/error"
import Loader from "../../components/loader"
import NoContent from "../../components/noContent"

export default function peliculas( {peliculas, error} ) {
    
    if (error) {
        return <Error />
    }

    if (!peliculas) {
        return (
            <Loader />
        )
    }

    if (peliculas.length === 0) {
        return (
            <NoContent />
        )
    }

    return (
        <>
            <Head>
                <title>Listado de Películas</title>
            </Head>
            <div className="flex flex-wrap justify-center mt-4 bg-slate-300 dark:bg-gray-700 gap-x-2 gap-y-2 p-3">
                {
                    peliculas && peliculas.map( c => (
                        <div key={c.id} className="flex justify-center w-64 hover:scale-105 transitio-all duration-500">
                            <div className="rounded-lg shadow-lg bg-white dark:bg-gray-600">
                                <Link href={`/films/${c.id}`}>
                                    <a>
                                        <img className="rounded-t-lg w-64 h-96" src={c.image} alt={c.title} title={c.title} />
                                    </a>
                                </Link>
                                <div className="p-2 text-center">
                                    <h5 className="text-gray-900 dark:text-gray-300 text-lg font-medium mb-2">{c.title}</h5>
                                    <span className="text-gray-900 dark:text-gray-300 text-base font-medium mb-2">({c.year})</span>
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
        const resp = await fetch(`${process.env.NEXT_APP_URL_APICASERA}films`,{ headers: {"Authorization" : `Bearer ${process.env.NEXT_APP_TOKEN_JWT_APICASERA}`} })
        const peliculas = await resp.json()

            return {
                props: {
                    peliculas: peliculas
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