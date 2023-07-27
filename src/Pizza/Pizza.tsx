import React, { useState } from "react";

export default function Pizza():JSX.Element{
    const [ingredients, setIngredients] = useState<string[]>([]);
    const addIngredient = (ingredient: string) => {
        setIngredients([...ingredients, ingredient]);
      };
      return (
        <div>
          <h2>Lets make a PIZZA!!!</h2>
          <div>
          <button onClick={() => addIngredient("Ketchup")}>Add ketchup</button>
            <button onClick={() => addIngredient("Tomato")}>Add tomato</button>
            <button onClick={() => addIngredient("Olives")}>Add olives</button>
            <button onClick={() => addIngredient("Mozzarella")}>Add mozzarella</button>
            <button onClick={() => addIngredient("Mushroom")}>Add mushrooms</button>
            <button onClick={() => addIngredient("Anchovies")}>Add anchovies</button>
            <button onClick={() => addIngredient("Sausage")}>Add sausage</button>
            <button onClick={() => addIngredient("Bacon")}>Add bacon</button>
          </div>
          <div>
            <h3>Composition:</h3>
            <ul>
              {ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      );

}