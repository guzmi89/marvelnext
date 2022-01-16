import Error from "./error"
import NoContent from "./noContent"

const BannerCharacters = ( {characters, error} ) => {
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
        <div className="flex flex-wrap justify-center mt-4 bg-slate-300 dark:bg-gray-700 gap-x-2 gap-y-2 p-3">
                {
                    characters && characters.map( c => (
                        <img key = {c.id} className="transition-all duration-500 hover:shadow-lg hover:shadow-white w-32 h-32 rounded-full hover:animate-pulse hover:brightness-125 hover:border-2 hover:-translate-y-5" title={c.name} src={c.thumbnail.path+'.'+c.thumbnail.extension} alt={c.name} />
                    ))
                }
            </div>    
    )
}

export default BannerCharacters
