import { useEffect, useState } from "react";
import ItemList from '../components/ItemList'
import { useParams } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const ItemListContainer = () =>{
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let { id } = useParams();

	useEffect(() => {
    setIsLoading(true)
		const getItems = async () => {
      let q = null
      if(id){
        q = query(collection(db, 'items'), where("idcategory", "==", parseInt(id)));
      }else{
        q = query(collection(db, 'items'));
      }
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setItems(docs);
		};
		getItems();
		setTimeout(() => {
			setIsLoading(false);
		}, 300);
	}, [id]);

  return (
    <Box display="flex" justifyContent='center'>
      {isLoading ? (<CircularProgress sx={{m: 4}}/>) : (<ItemList items={items}/>)}
    </Box>
  )
}

export default ItemListContainer