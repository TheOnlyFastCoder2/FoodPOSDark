import { PayloadAction } from "@reduxjs/toolkit";
import {InitialState,IPizzaOfOrder} from "./state";


function toFixed(number: number): number {
  return +number.toFixed(2)
}

export function setOrder (state: InitialState, {payload}: PayloadAction<IPizzaOfOrder>) {
  state.orders.push(payload);
  state.sumTotal = toFixed(state.sumTotal + payload.price) ;
}

export function removeOrder (state: InitialState, {payload: index}: PayloadAction<number>) {
  state.sumTotal =  toFixed(state.sumTotal-state.orders[index].totatPrice)
  state.orders.splice(index,1);
}

export function changeQuantityOfOrder (state: InitialState, {payload}: PayloadAction<{index:number,qty:IPizzaOfOrder["quantity"]}>) {
  const order = state.orders[payload.index];
  
  order.quantity = payload.qty;    
  const featureTotalPrice = toFixed(order.price * payload.qty);

  state.sumTotal = (
    featureTotalPrice > order.totatPrice
    ? toFixed(state.sumTotal-order.totatPrice+featureTotalPrice)
    : toFixed(state.sumTotal-order.price)
  )

  order.totatPrice = featureTotalPrice;
}