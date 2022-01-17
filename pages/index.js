import Head from "next/head"
import Image from "next/image"
import BannerCharacters from "../components/BannerCharacters"

export default function Home( {characters, error} ) {

    return(
        <>
            <Head>
                <title>Marvel Project</title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <div className="bg-gray-200 text-black mt-4 p-4 text-center font-marvel text-xl dark:bg-gray-600 dark:text-white italic">
                El universo Marvel es un mundo amplio plagado de superhéroes y creado por el difunto "Stan Lee"
            </div>
            <div className="flex flex-wrap container mx-auto justify-center mt-4">
                <div className="text-center w-full md:w-1/4">
                    <Image src="/img/stanlee.png" alt="Stan Lee" width="450" height="512"/>
                </div>
                <div className="text-center w-full md:w-3/4 pl-2 pr-2">
                    <p className="text-black dark:text-zinc-50 font-marvel text-xl">
                        Es principalmente conocido por haber creado personajes icónicos del mundo del cómic tales como Spider-Man, X-Men, Los 4 Fantásticos, Hulk, Iron Man, Thor, Daredevil, Doctor Strange, Black Panther, Ant-Man y Bruja Escarlata, entre otros muchos superhéroes, casi siempre acompañado de los dibujantes Steve Ditko y Jack Kirby. El trabajo de Stan Lee fue fundamental para expandir Marvel Comics, llevándola de una pequeña casa publicitaria a una gran corporación multimedia. Todavía hoy, los cómics de Marvel se distinguen por indicar siempre «Stan Lee presenta» en los rótulos de presentación. También tuvo un programa televisivo en History Channel en donde buscaba superhumanos «reales».
                    </p>
                </div>
            </div>
            <BannerCharacters characters={characters} error={error} />
            <div className="flex flex-wrap justify-center p-1 bg-gray-400 dark:bg-gray-800">
                <iframe className="w-full md:w-1/2 aspect-video rounded-2xl p-1" src="https://www.youtube.com/embed/ldMn-1iQzKE?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div className="w-full md:w-1/2 text-center p-4 font-marvel text-2xl text-black dark:text-slate-50 self-start align-middle">
                    <Image className="w-2/3 container mx-auto" src="/img/spiderman-no-way-home.png" width="700" height="272" alt="Logo" />
                    <p>
                        Por primera vez en la historia cinematográfica de Spider-Man, nuestro héroe, vecino y amigo es desenmascarado, y por tanto, ya no es capaz de separar su vida normal de los enormes riesgos que conlleva ser un superhéroe. Cuando pide ayuda al Doctor Strange, los riesgos pasan a ser aún más peligrosos, obligándole a descubrir lo que realmente significa ser él. Secuela de 'Spider-Man: Far From Home'.
                    </p>
                </div>

            </div>
        </>
    )
}

export async function getStaticProps() {

    try {
        const resp = await fetch(`${process.env.NEXT_APP_URL_APIMARVEL}characters?series=22547&limit=12&ts=1&apikey=${process.env.NEXT_APP_TOKEN_APIMARVEL}`)
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