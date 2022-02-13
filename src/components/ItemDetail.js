import { Box, Grid, Typography } from "@mui/material"
import ItemCount from './ItemCount'
import { useState } from "react"

const ItemDetail = ({item}) => {
  const [cant, setCant] = useState(0)

  const onAdd = (value) =>{
    setCant(value)
  }

  return(
    <Box sx={{width: '50%', boxShadow: 3, m: 5}}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img src={item.pictureUrl} width={200}/> 
        </Grid>
        <Grid container item xs={8}>
          <Grid item xs={12}>
            <Typography variant="h4">
              {item.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {item.description}
          </Grid>
          <Grid item xs={12} sx={{display: 'flex', alignItems: 'center'}} >
            <Typography variant="h4" sx={{flexGrow: 1}}>
            ${item.price}
            </Typography>
            <ItemCount onAdd={onAdd} initial={1} stock={5}/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ItemDetail