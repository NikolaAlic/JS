import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export function PizzaCard({ name = "Standard Pizza", image, desc, price }) {
  return (
    <Card className="pizza-card shadow-sm bg-white rounded">
      <Card.Img variant="top" src={image} />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex mb-2 justify-content-between">
          <Card.Title className="mb-0 font-weight-bold">{name}</Card.Title>
          <Badge pill className="mb-1" variant="warning">
            £{price}
          </Badge>
        </div>
        <Card.Text className="text-secondary">{desc}</Card.Text>
        <Button className="mt-auto font-weight-bold" variant="success" block>
          Order Pizza
        </Button>
      </Card.Body>

    </Card>
  )
}

PizzaCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}

PizzaCard.defaultProps = {
  image: "No Image",
  desc: "Add description"
}
