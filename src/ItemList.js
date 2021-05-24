import ItemCard from './ItemCard'

const ItemList = ({ items, title }) => {

	return (
		<div className="space-y-4 max-w-lg mx-auto">
			<h1 className="text-xl text-center  font-medium">{title}</h1>
			{
				items.map((item) => {
					return (
						<ItemCard key={item['mal_id']} item={item} />
					)
				})
			}
		</div>
	);
}

export default ItemList;