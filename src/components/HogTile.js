import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

const HogTile = ({ hog, onClick, onHide }) => {
  return (
    <Card>
      <Image src={hog.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{hog.name}</Card.Header>
        <Button onClick={() => onClick(hog)}>Details</Button>
        <Button onClick={() => onHide(hog.name)}>Hide</Button>
      </Card.Content>
    </Card>
  );
};

export default HogTile;
