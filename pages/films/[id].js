import Head from "next/head"
import Error from "../../components/error"
import Loader from "../../components/loader"
import NoContent from "../../components/noContent"

const Film = ( {film, error} ) => {
    if (error) {
        return <Error />
    }

    if (!film) {
        return (
            <Loader />
        )
    }

    return (
        <>
            <Head>
                <title>{film.title}</title>
            </Head>
            <div className="m-4 flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-7xl rounded-lg bg-slate-300 dark:bg-gray-700 shadow-lg">
                    <img className="w-full h-96 md:h-auto object-cover md:w-96 rounded-t-lg md:rounded-none md:rounded-l-lg" src={film.image} alt={film.title} />
                    <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 dark:text-gray-300 text-xl font-medium mb-2">{film.title} ({film.year})</h5>
                    <p className="text-gray-900 dark:text-gray-300 text-base mb-4">{film.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps(context) {

    try {
        const { id } = context.params
        const resp = await fetch(`${process.env.NEXT_APP_URL_APICASERA}film/${id}`,{ headers: {"Authorization" : `Bearer ${process.env.NEXT_APP_TOKEN_JWT_APICASERA}`} })
        const film = await resp.json()

        return {
            props: {
                film: film[0]
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

export async function getStaticPaths() {
    const resp = await fetch(`${process.env.NEXT_APP_URL_APICASERA}films`,{ headers: {"Authorization" : `Bearer ${process.env.NEXT_APP_TOKEN_JWT_APICASERA}`} })
    const peliculas = await resp.json()

    const paths = peliculas.map((film) => {
        return {
            params: {
                id: `${film.id}`,
            }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export default Film
