import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail"
import { useNavigate, useParams } from "react-router-dom";
import { CircularProgress, Box, Typography } from "@mui/material";
import { db } from '../firebase/firebaseConfig';
import { collection, query,	where,	getDocs,	documentId,} from 'firebase/firestore';


const ItemDetailConatiner = () => {    
    let navigate = useNavigate()
    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    let { id } = useParams();
    
    useEffect(() => {
      const getItem = async () => {
        setIsLoading(true)
        const q = query(
          collection(db, 'items'),
          where(documentId(), '==', id)
        );
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setItem(docs[0]);
        setIsLoading(false)
      };
      getItem();
    }, [id]);
    
    return (
      <Box display="flex" justifyContent='center'>
        {isLoading ? 
          (<CircularProgress sx={{m: 4}}/>) : 
          ( item ? 
            <ItemDetail item={item}/>:
            <Typography sx={{mt:4}} variant="h4">No se encontro el producto. <a onClick={() => navigate('/')} href="#">Volver al inicio</a></Typography>
          )}
      </Box>
      
    )

  }

export default ItemDetailConatiner