import { Card, CardActionArea, CardMedia, CardContent, Typography} from "@mui/material"

const ItemListContainer = ({items}) =>{
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="100px"
          height="100px"
          image={items.src}
          alt="producto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {items.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {items.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ItemListContainer