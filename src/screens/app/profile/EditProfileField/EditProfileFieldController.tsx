import React from 'react';

import { SafeArea } from 'components/atoms/SafeArea';

import EditAddressScreen from './EditProfileFieldScreen';

const EditProfileFieldController: React.FC = () => {
  const onSubmit = async () => {};

  return (
    <SafeArea>
      <EditAddressScreen onSubmit={onSubmit} />
    </SafeArea>
  );
};

export default EditProfileFieldController;
