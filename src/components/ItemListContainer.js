import { useEffect, useState } from "react";
import ItemList from './ItemList'

const ItemListContainer = () =>{
  
  const [items, setItems] = useState([]);

  useEffect(() =>{
    getData().then(res => {
      setItems(res)
    })
  }, [])

  let getData = () => new Promise((resolve, reject) => {
    setTimeout(function(){
      let items = [
        {
          id: 1,
          title:"Anillo de Doran", 
          price: 400,
          description: "ÚNICA – BELICISTA: +2.5% de omnivampirismo",
          pictureUrl:'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfeb794f72ab86ce5/5fa1ef94fe49b57a83a1717c/1056_Mage_T1_DoransRing.png'
        },
        {
          id: 2,
          title:"Espada de Doran", 
          price: 450,
          description: "ÚNICA – ENFOQUE: Los ataques básicos infligen 5 de daño físico adicional al impacto contra súbditos.",
          pictureUrl:'https://senpai.gg/blog/wp-content/uploads/2020/11/1055_Marksman_T1_DoransBlade-1.png'
        },
        {
          id: 3,
          title:"Escudo de Doran", 
          price: 450,
          description: "ÚNICA – RESTAURACIÓN: Restaura 6 de vida cada 5 segundos.",
          pictureUrl:'https://wiki.runarcana.org/images/thumb/b/be/Doran%27s_Shield_item_Unused_HD.png/150px-Doran%27s_Shield_item_Unused_HD.png'
        },
      ]
      resolve(items)
    }, 2000);
  });
  


  return (
    <ItemList items={items}/>
  )
}

export default ItemListContainer