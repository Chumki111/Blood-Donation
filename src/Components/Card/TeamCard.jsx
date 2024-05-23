

const TeamCard = ({ image, name, title }) => {
    return (
        <article className="relative  group">
            <img src={image} alt="Landscape" className="w-80 rounded-3xl" />
            <div className="absolute bottom-[-5rem] left-0 right-0 mx-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100  w-70 bg-white p-6 shadow-lg rounded-xl">
                <h2 className="text-xl text-center font-medium text-gray-900 mb-3 hover:text-red-500">{name}</h2>
                <h2 className="text-center text-sm mb-1">{title}</h2>

            </div>
        </article>
    )
}

export default TeamCard