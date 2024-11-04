import React from 'react';
import { Modal, Header } from 'semantic-ui-react';

const HogDetails = ({ hog, onClose }) => {
  return (
    <Modal open={true} onClose={onClose}>
      <Header>{hog.name}</Header>
      <Modal.Content>
        <p><strong>Specialty:</strong> {hog.specialty}</p>
        <p><strong>Weight:</strong> {hog.weight}</p>
        <p><strong>Greased:</strong> {hog.greased ? 'Yes' : 'No'}</p>
        <p><strong>Highest Medal Achieved:</strong> {hog['highest medal achieved']}</p>
      </Modal.Content>
    </Modal>
  );
};

export default HogDetails;
