import React from 'react';
import { SafeArea } from 'components';
import AddMovementScreen from './AddMovementScreen';

const AddMovementController: React.FC = () => (
  <SafeArea>
    <AddMovementScreen onSubmit={() => {}} />
  </SafeArea>
);

export default AddMovementController;
