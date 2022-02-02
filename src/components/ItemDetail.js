import { Box, Grid, Typography, Button } from "@mui/material"

const ItemDetail = ({item}) => {
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
            <Button variant="contained" sx={{m:1}}>Comprar</Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ItemDetail