import IconTrash from 'lib/icons/Trash';
import {IPizzaOfOrder} from "store/orders/state"
import React, { useEffect } from 'react';


import {useAppSelector, useAppDispatch} from "store/hooks";
import * as OrdersOfStore from 'store/orders';

export default function () {
  const state = useAppSelector(OrdersOfStore.getState);

  return (
    <div className="Orders">
      <h1>Orders #34562</h1>

      <ul className="Orders_nav">
        <li>Dine In</li>
        <li>To Go</li>
        <li>Delivery</li>
      </ul>

      <TableOfOrders>
        {state.orders.map((pizza, i) => {
          return  <Order pizza={pizza} index={i} key={i}/>
        })}
      </TableOfOrders>

      <div className="Orders_bill">
          <div>
            <span>Discount</span>
            <span>$ 0</span>
          </div>

          <div>
            <span>Sub total</span>
            <span>$ {state.sumTotal}</span>
          </div>
      </div>

      <button className="Orders_confirm">
        Continue to Payment
      </button>
    </div>
  ) 
}



function TableOfOrders ({children}: {children: React.ReactNode}) {
  return (
    <div className="Table">
      <div className="Table_heads">
        <span className="item">item</span>
        <span className="qty">qty</span>
        <span className="price">price</span>
      </div>
      <div className="Table_body">
          {children}
      </div>
    </div>
  )
}

function Order ({pizza, index}: {pizza:IPizzaOfOrder, index: number}) {
  const dispatch = useAppDispatch();

  function changeQuantityOfOrder({target}: React.ChangeEvent<HTMLInputElement>) {
    dispatch(OrdersOfStore.actions.changeQuantityOfOrder({
      index: index,
      qty:+target.value
    }))
  }

  function removeOrder() {
    dispatch(OrdersOfStore.actions.removeOrder(index))
  }

  return (
    <div className="Order">
      <div className="container grid">
        <div className="Order_info">
          <div className="Order_info_picture">
            <img src={pizza.img} alt="" />
          </div>
          <div className="Order_info_text">
            <h3>Spicy seasoned sea...</h3>
            <p>$ {pizza.price}</p>
          </div>
        </div>
        <div className="Order_qty">
          <input 
            min={1} 
            max={20} 
            type="number"
            onChange={changeQuantityOfOrder} 
            value={pizza.quantity}/>
        </div>
        <div className="Order_note">
          <input type="text" placeholder="Order Note..."/>
        </div>
      </div>

      <div className="container flex">
        <p className="Order_price">$ {pizza.totatPrice}</p>
        <button className="Order_remove" onClick={removeOrder}>
          <IconTrash/>
        </button>
      </div>
    </div>
  )
}


// return (
//   <div className="Order">
//     <div className="container">
//       <div className="Order_info">
//         <div className="Order_info_picture">
//           <img src={pizza.img} alt="" />
//         </div>
//         <div className="Order_info_text">
//           <h3>Spicy seasoned sea...</h3>
//           <p>$ {pizza.price}</p>
//         </div>
//       </div>
//       <div className="Order_qty">
//         <input 
//           min={1} 
//           max={20} 
//           type="number"
//           onChange={changeQuantityOfOrder} 
//           value={pizza.quantity}/>
//       </div>
//       <p className="Order_price">$ {pizza.totatPrice}</p>
//     </div>

//     <div className="container">
//       <div className="Order_note">
//         <input type="text" placeholder="Order Note..."/>
//       </div>
//       <button className="Order_remove" onClick={removeOrder}>
//         <IconTrash/>
//       </button>
//     </div>
//   </div>
// )