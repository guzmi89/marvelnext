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
            <div class="m-4 w-full md:w-2/4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div class="px-4 py-2">
                    <h1 class="text-3xl font-bold text-gray-800 dark:text-white">{primero.name}</h1>
                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{primero.description}</p>
                </div>

                <img class="object-cover w-full h-96 mt-2" src={primero.thumbnail.path+'.'+primero.thumbnail.extension} alt={primero.name} title={primero.name} />
            </div>
        </>
    )
}

export async function getStaticProps(context) {

    try {
        const { id } = context.params
        const resp = await fetch(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=bd83974f8c0124c0b4006bb69fecc3b4&hash=6253d203f94171a77b3b7f026a16e3b7`)
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
    return {
        paths: [
            { params: {id: "1011227"} },
            { params: {id: "1009165"} }
        ],
        fallback: true
    }
}

export default Character

