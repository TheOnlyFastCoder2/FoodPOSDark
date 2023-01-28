export interface IPizzaOfOrder {
  id: string
  img: string,
  name: string,
  quantity: number,
  description: string,
  price: number,
  totatPrice: number,
}



export interface InitialState {
  sumTotal: number
  orders: IPizzaOfOrder[];
}

export const initialState: InitialState  = {
  sumTotal: 0,
  orders: []
}


export default initialState;