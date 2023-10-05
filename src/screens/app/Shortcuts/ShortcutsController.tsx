import { SafeArea } from 'components';
import React from 'react';
import { useDispatch } from 'reactRedux';
import ShortcutsScreen from './ShortcutsScreen';

const ShortcutsController: React.FC = () => {
  const dispatch = useDispatch();

  const onPressShortcutAction = (id: string) => {
    console.log({ id });
  };

  return (
    <SafeArea>
      <ShortcutsScreen onPressShortcutAction={onPressShortcutAction} />
    </SafeArea>
  );
};

export default ShortcutsController;
