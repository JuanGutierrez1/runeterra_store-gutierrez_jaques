import { Box } from '@mui/material'
import Item from './Item'

const ItemList = ({items}) =>{
  return (
    <Box display="flex">
      {items.map(it => <Item key={it.title} item={it}/>)}
    </Box>
  )
}

export default ItemList