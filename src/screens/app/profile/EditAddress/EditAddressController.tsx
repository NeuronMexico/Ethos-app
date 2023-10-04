import React from 'react';

import { SafeArea } from 'components/atoms/SafeArea';

import EditAddressScreen from './EditAddressScreen';

const EditAddressController: React.FC = () => {
  const onSubmit = async () => {};

  return (
    <SafeArea>
      <EditAddressScreen />
    </SafeArea>
  );
};

export default EditAddressController;
