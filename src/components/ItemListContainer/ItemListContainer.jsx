import "./ItemListContainer.scss"

const ItemListContainer = ({saludo}) => {
    return (
        <div className="itemlistcontainer">
            <h2>{saludo}</h2>
        </div>
    )   
}

export default ItemListContainer