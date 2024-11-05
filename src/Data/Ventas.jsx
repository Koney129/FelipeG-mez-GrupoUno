export const products = [
  {
      id: 1,
      name: 'Mouse Gamer Rgb',
      price: 35000,
      description: '¿Eres Gamer? Pues aqui tienes un articulo para jugar a los juegos que te gustan gracias a este mouse Gamer.',
      category: 'Electrodomestico',
      stock: 14,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-M-9y066dAocZ6rOuSprJkGMnOT1MkO-4Q&s'
  },
  {
    id: 2,
    name: 'Teclado inamabrico Rbg e inalambrico',
    price: 53000,
    description: 'Para ser buen Gamer hay que tener un Buen teclado y que mejor que tener uno inalambrico como este',
    category: 'Electrodomestico',
    stock: 23,
    img: 'https://i.blogs.es/351af9/41tysnbsxzl._sl500_/original.webp'
},
{
  id: 3,
  name: 'Laptop',
  price: 650000,
  description: 'Laptop HP (15-fc0005la) Una laptop para tipo de trabajo y que mejor que portatil para que tengas todo listo el trabajo que tengas',
  category: 'Computadora portatil',
  stock: 10,
  img: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08484411.png'
},
{
  id: 4,
  name: 'Mouse',
  price: 23000,
  description: 'Un mouse Inalambrico y sin colores para que no te moleste en el trabajo o en tus rutinas',
  category: 'Mouse inalambrico',
  stock: 17,
  img: 'data:image/jpeg;base64,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'
},


]


export const getProducts = () =>{
  return new Promise((res) =>{
      setTimeout(() =>{
          res(products);
      }, 2000);
  })
}
