import IngredientsList from "./IngredientsList";

const itemsList = [
    "1 cup unsalted butter",
    "1 cup crunchy peanut butter",
    "1 cup brown sugar",
    "1 cup white sugar",
    "2 eggs",
    "2.5 cups all purpose flour",
    "1 teaspoon baking powder",
    "0.5 teaspoon salt"
];

function DemoComponent() {
    return(
        <div>
            <p>Hello World from Demo Component</p>
            <IngredientsList items={itemsList}/>
        </div>
    );
}

export default DemoComponent;