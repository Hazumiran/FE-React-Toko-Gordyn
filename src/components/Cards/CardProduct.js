export default function CardGrid() {
    const cards = [
    {
        title: "The Coldest Sunset",
        imgSrc: "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-01.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        tags: ["#photography", "#travel", "#winter"],
    },
    {
        title: "Exploring the Mountains",
        imgSrc: "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-02.jpg",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tags: ["#nature", "#adventure", "#hiking"],
    },
    {
        title: "City Lights at Night",
        imgSrc: "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-03.jpg",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        tags: ["#cityscape", "#nightlife", "#travel"],
    },
    ];

    return (
    <div className="container mx-auto px-4">
        {/* Grid untuk memastikan 3 card sejajar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full min-h-screen">
        {cards.map((card, index) => (
            <div key={index} className="w-full rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full h-56 object-cover" src={card.imgSrc} alt={card.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{card.title}</div>
                <p className="text-gray-700 text-base">{card.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {card.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {tag}
                </span>
                ))}
            </div>
            </div>
        ))}
        </div>
    </div>
    );
}
  