import { Grid } from '@mui/material'
import Item from './Item'

const ItemList = ({items}) =>{
  return (
      <Grid sx={{mx: 14}} container spacing={2}>
      {items.map(it => (
        <Grid item xs={2} key={it.id}>
          <Item key={it.title} item={it}/>
        </Grid>
      ))}
      </Grid>
  )
}

export default ItemList