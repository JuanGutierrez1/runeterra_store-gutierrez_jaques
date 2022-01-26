import { Card } from "react-bootstrap"

const ItemListContainer = ({items}) =>{
  debugger
  return (
    <Card style={{width: '10rem'}}>
      <Card.Img variant="top" src={items.src}/>
      <Card.Body>
        <Card.Title>
          {items.title}
        </Card.Title>
        <Card.Text>
          {items.text}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ItemListContainer