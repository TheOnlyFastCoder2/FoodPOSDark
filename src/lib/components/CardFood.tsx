
import {IPizza} from "lib/pizzas"

import { useAppDispatch, useAppSelector} from "store/hooks";
import * as Orders from 'store/orders';

export default function (pizza: IPizza) {
  const dispatch = useAppDispatch();
  
  function setOrder() {
    dispatch(Orders.actions.setOrder({
      ...pizza,
      quantity: 1,
      totatPrice: pizza.price
    }))
  }
  
  return (
    <div className="CardFood" onClick={setOrder}>
      <div className="container">
        <div className="CardFood_picture">
          <img src={pizza.img} alt="" />
        </div>

        <div className="CardFood_info">
          <h3>{pizza.name}</h3>
          <h4>$ {pizza.price}</h4>
          <p>{pizza.description}</p>
        </div>
      </div>
    </div>
  )
}