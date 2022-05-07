import Item from "./Item";

const ItemList = ({ items }) => {
	  //console.log("ItemList",items)
    return (
        <div>
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} title={item.name} price={item.cost} pictureUrl={item.image[0]} stock={item.stock} />)
            : <p>Cargando...</p>
        }
        </div>
    );
}

export default ItemList;
