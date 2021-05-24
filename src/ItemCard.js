const ItemCard = ({ item }) => {

	// const URL = "https://cdn.myanimelist.net/images/anime/5/17407.jpg?s=2bf24a22a339223dcadb1cdfc3307b61"
	let synopsis = item['synopsis']
	if (item['synopsis'].length > 250) {
		synopsis = item['synopsis'].substr(0, 250) + "..."
	}

	return (
		<div className="ItemCard bg-blue-400 rounded-lg p-6 grid grid-cols-4 gap-6">

			<img className="col-span-1" src={item['image_url']} alt="Image of the anime" />

			<div className="content col-span-3">
				<h3 className="text-2xl font-semibold">{item['title']}</h3>
				<p>Episodes : {item['episodes'] ?? "Not known"}</p>
				<p>{synopsis}</p>
			</div>
		</div>
	);
}

export default ItemCard;