import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"

const ItemDetailConatiner = () => {

  const [item, setItem] = useState({})

  useEffect(() =>{
    getItem().then(res => {
      setItem(res)
    })
  }, [])

  let getItem = () => new Promise((resolve, reject) => {
      setTimeout(function(){
        let item = {
          id: 1,
          title:"Anillo de Doran", 
          price: 400,
          description: "ÚNICA – ENFOQUE: Los ataques básicos infligen 5 de daño físico adicional al impacto contra súbditos. ÚNICA – SIFÓN: Matar a un súbdito restaura 6 de maná, si no puedes ganar maná, restaura 3 de vida en su lugar.",
          pictureUrl:'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfeb794f72ab86ce5/5fa1ef94fe49b57a83a1717c/1056_Mage_T1_DoransRing.png'
        }
        resolve(item)
      }, 2000);
    });

    return (
      <ItemDetail item={item}/>
    )

  }

export default ItemDetailConatiner