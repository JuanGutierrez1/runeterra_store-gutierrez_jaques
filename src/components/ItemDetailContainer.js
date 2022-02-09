import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";

const ItemDetailConatiner = () => {

  const [item, setItem] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  let { id } = useParams();

  useEffect(() =>{
    setIsLoading(true)
    getItem().then(res => {
      setIsLoading(false)
      setItem(res)
    })
  }, [])

  let getItem = () => new Promise((resolve, reject) => {
      setTimeout(function(){
        let items = [
          {
            id: 1,
            idcategory: 2,
            title:"Anillo de Doran", 
            price: 400,
            description: "ÚNICA – BELICISTA: +2.5% de omnivampirismo",
            pictureUrl:'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfeb794f72ab86ce5/5fa1ef94fe49b57a83a1717c/1056_Mage_T1_DoransRing.png'
          },
          {
            id: 2,
            idcategory: 3,
            title:"Espada de Doran", 
            price: 450,
            description: "ÚNICA – ENFOQUE: Los ataques básicos infligen 5 de daño físico adicional al impacto contra súbditos.",
            pictureUrl:'https://senpai.gg/blog/wp-content/uploads/2020/11/1055_Marksman_T1_DoransBlade-1.png'
          },
          {
            id: 3,
            idcategory: 1,
            title:"Escudo de Doran", 
            price: 450,
            description: "ÚNICA – RESTAURACIÓN: Restaura 6 de vida cada 5 segundos.",
            pictureUrl:'https://wiki.runarcana.org/images/thumb/b/be/Doran%27s_Shield_item_Unused_HD.png/150px-Doran%27s_Shield_item_Unused_HD.png'
          },
        ]
        resolve(items.filter(it => !id || it.id == parseInt(id))[0])
      }, 300);
    });

    return (
      <Box display="flex" justifyContent='center'>
        {isLoading ? (<CircularProgress sx={{m: 4}}/>) : (<ItemDetail item={item}/>)}
      </Box>
      
    )

  }

export default ItemDetailConatiner