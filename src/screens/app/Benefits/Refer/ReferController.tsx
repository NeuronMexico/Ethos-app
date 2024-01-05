import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeArea } from 'components';
import ReferScreen from './ReferScreen';

const ReferController: React.FC = () => {
  const { t } = useTranslation();

  const onPressAction = (id: string): void => {
    console.log({ id });
  };

  return (
    <SafeArea>
      <ReferScreen onPressAction={onPressAction} />
    </SafeArea>
  );
};

export default ReferController;
