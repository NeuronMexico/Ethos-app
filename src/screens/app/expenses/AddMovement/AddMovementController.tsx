import React from 'react';
import { SafeArea } from 'components';
import { useNavigation } from '@react-navigation/native';
import AddMovementScreen from './AddMovementScreen';

const AddMovementController: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <SafeArea>
      <AddMovementScreen onSubmit={() => goBack()} />
    </SafeArea>
  );
};
export default AddMovementController;
