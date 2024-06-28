import { useDispatch } from "react-redux";
import { addToCart } from "../feature/cart/cartSlice";
import { Button, Card } from "react-bootstrap";


export default function Item({ item }) {
  const dispatch = useDispatch()

  function addItem() {
    //item is payload for addToCart action creator
    return dispatch(addToCart(item))
  }

  return (
    <Card>
      <Card.Img
        variant="top"
        src={`https://picsum.photos/id/${item.id}/200`}
        alt={item.name}
        />

      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description}
          <br />
          Price: {item.price}
        </Card.Text>
        <Button variant="primary" onClick={addItem}>Add to Cart</Button>
      </Card.Body>  
    </Card>
  )
  
}