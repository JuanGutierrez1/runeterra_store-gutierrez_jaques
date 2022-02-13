import { Card, CardActionArea, CardMedia, CardContent, Typography} from "@mui/material"
import { useNavigate } from "react-router-dom";

const ItemListContainer = ({item}) =>{
  let navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: 200 , m: 5, display:'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <CardActionArea onClick={() => navigate(`/item/${item.id}`)} sx={{flexGrow: 1, display:'flex', flexDirection: 'column'}}>
        <CardMedia
          component="img"
          width="100px"
          height="100px"
          image={item.pictureUrl}
          alt="producto"
        />
        <CardContent sx={{flexGrow: 1}}>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.price}
          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
  )
}

export default ItemListContainer