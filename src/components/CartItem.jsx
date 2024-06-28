import { Button, ButtonGroup, Card, Col, Row } from "react-bootstrap";
import { decrementItem, deleteItem, incrementItem } from "../feature/cart/cartSlice";
import { useDispatch } from "react-redux";

export default function CartItem({ item }) {
  const dispatch=useDispatch()
  return (
    <Card className="mb-2">
      <Card.Body>
        <Row>
          <Col xs={4} md={2}>
            <Card.Img variant="top"
              src={`https://picsum.photos/id/${item.id}/200`}
            alt={item.name}
            />
          </Col>

          <Col xs={8} md={6}>
            <Card.Title>{item.amount} x {item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Col>

          <Col>
            <ButtonGroup aria-label="Basic example">
            <Button onClick={()=>dispatch(decrementItem(item.id))}>-</Button>
            <Button>{item.amount}</Button>
            <Button onClick={()=>dispatch(incrementItem(item.id))}>+</Button>
            </ButtonGroup>
          <Button onClick={()=>dispatch(deleteItem(item.id))}>Delete</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}