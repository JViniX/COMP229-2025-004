function IngredientsList({ items }) {

    console.log(items);
    return (
        <>
            <h1>Ingredients List</h1>
            <ul>
                {items.map((ingredient, i) => (
                    <li key={i}>{ ingredient }</li>
                ))}
            </ul>
        </>
    );
}

export default IngredientsList;