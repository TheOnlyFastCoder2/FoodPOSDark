import CardFood from "lib/components/CardFood";
import DropDown from 'lib/components/DropDown'
import prizzas, {IPizza} from "lib/pizzas";

export default function () {
  return (
    <div className="Dishes">
      <div className="Dishes_topBar">
        <h1>Choose Dishes</h1>
        <DropDown name="Dine In">
          <li>sdfsdfsdf</li>
        </DropDown>
      </div>
      <div className="container">
          {prizzas.map((pizza: IPizza, i) => {
            return (
              <CardFood 
                key={i}
                id = {pizza.id}
                img={pizza.img} 
                price={pizza.price}
                name={pizza.name}
                description= {pizza.description}
              />
            )
          })}
      </div>
    </div>
  )
}