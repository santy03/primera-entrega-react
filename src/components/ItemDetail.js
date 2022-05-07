import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>
        {
            item.image
            ? 
                <div>
                    <picture>
                        <img src={item.image[0]} />
                    </picture>
                    <div>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <spam>$ {item.cost}</spam>
                        <p>{item.stock} unidades en stock</p>
                    </div>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;