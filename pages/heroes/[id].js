import Head from "next/head"
import Error from "../../components/error"
import Loader from "../../components/loader"
import NoContent from "../../components/noContent"

const Character = ( {primero, error} ) => {

    if (error) {
        return <Error />
    }

    if (!primero) {
        return (
            <Loader />
        )
    }

    if (!primero) {
        return (
            <NoContent />
        )
    }

    return (
        <>
            <Head>
                <title>{primero.name}</title>
            </Head>
            <div className="m-4 w-full md:w-2/4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="px-4 py-2">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{primero.name}</h1>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{primero.description}</p>
                </div>

                <img className="object-cover w-full h-96 mt-2" src={primero.thumbnail.path+'.'+primero.thumbnail.extension} alt={primero.name} title={primero.name} />
            </div>
        </>
    )
}

export async function getStaticProps(context) {

    try {
        const { id } = context.params
        const resp = await fetch(`${process.env.NEXT_APP_URL_APIMARVEL}characters/${id}?ts=${process.env.NEXT_APP_TS_APIMARVEL}&apikey=${process.env.NEXT_APP_TOKEN_APIMARVEL}&hash=${process.env.NEXT_APP_HASH_APIMARVEL}`)
        const character = await resp.json()
        const primero = character.data.results[0]

        return {
            props: {
                primero: primero
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
    const resp = await fetch(`${process.env.NEXT_APP_URL_APIMARVEL}characters?series=22547&limit=48&ts=${process.env.NEXT_APP_TS_APIMARVEL}&apikey=${process.env.NEXT_APP_TOKEN_APIMARVEL}&hash=${process.env.NEXT_APP_HASH_APIMARVEL}`)
    const characters = await resp.json()

    const paths = characters.data.results.map((character) => {
        return {
            params: {
                id: `${character.id}`,
            }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export default Character

