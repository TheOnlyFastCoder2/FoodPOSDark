

export interface IPizza {
  id: string
  img: string,
  name: string,
  description: string,
  price: number
}

export default [
  { 
    "id": `${Math.random()}`,
    "img": 'imgs/pizzes/Content-Images-1.png',
    "name":"Spicy seasoned seafood noodles",
    "description": "20 Bowls available",
    "price": 2.29
  },
  {
    "id": `${Math.random()}`,
    "img": 'imgs/pizzes/Content-Images-2.png',
    "name":"Salted Pasta with mushroom sauce",
    "description": "11 Bowls available",
    "price": 2.69
  },
  {
    "id": `${Math.random()}`,
    "img": 'imgs/pizzes/Content-Images-3.png',
    "name":"Beef dumpling in hot and sour soup",
    "description":  "16 Bowls available",
    "price": 2.99,
  },
  {
    "id": `${Math.random()}`,
    "img": 'imgs/pizzes/Content-Images-4.png',
    "name":"Healthy noodle with spinach leaf",
    "description": "22 Bowls available",
    "price": 3.29
  },
  {
    "id": `${Math.random()}`,
    "img": 'imgs/pizzes/Content-Images-5.png',
    "name":"Hot spicy fried rice with omelet",
    "description": "13 Bowls available",
    "price": 3.49
  },
  {
    "id": `${Math.random()}`,
    "img": 'imgs/pizzes/Content-Images-6.png',
    "name":"Spicy instant noodle with special omelette",
    "description":  "17 Bowls available",
    "price": 3.59
  },
  {
    "id": `${Math.random()}`,
    "img": 'imgs/pizzes/Content-Images-7.png',
    "name":"Healthy noodle with spinach leaf",
    "description":  "22 Bowls available",
    "price": 3.29
  },
  {
    "id": `${Math.random()}`,
    "img": 'imgs/pizzes/Content-Images-8.png',
    "name":"Hot spicy fried rice with omelet",
    "description":  "13 Bowls available",
    "price": 3.49
  },
  {
    "id": `${Math.random()}`,
    "img": 'imgs/pizzes/Content-Images-9.png',
    "name":"Spicy instant noodle with special omelette",
    "description":  "17 Bowls available",
    "price": 3.59
  },
] as IPizza[];
