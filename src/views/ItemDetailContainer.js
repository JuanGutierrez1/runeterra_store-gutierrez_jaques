import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail"
import { useParams } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";
import { db } from '../firebase/firebaseConfig';
import { collection, query,	where,	getDocs,	documentId,} from 'firebase/firestore';


const ItemDetailConatiner = () => {    
    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    let { id } = useParams();
    
    useEffect(() => {
      const getItem = async () => {
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
      };
      getItem();
    }, [id]);
    
    return (
      <Box display="flex" justifyContent='center'>
        {isLoading ? (<CircularProgress sx={{m: 4}}/>) : (<ItemDetail item={item}/>)}
      </Box>
      
    )

  }

export default ItemDetailConatiner