import { SafeArea } from 'components';
import React from 'react';
import { useDispatch } from 'reactRedux';
import PersonalInformationScreen from './PersonalInformationScreen';

const PersonalInformationController: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <SafeArea>
      <PersonalInformationScreen onSubmit={() => console.log()} />
    </SafeArea>
  );
};

export default PersonalInformationController;
