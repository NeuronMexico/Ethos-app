import React, { useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import { CardsGlobalStackParams } from 'utils';
import AccountStatementScreen from './AccountStatementScreen';

interface Props extends NativeStackScreenProps<CardsGlobalStackParams, 'AccountStatement'> {}

const AccountStatementController: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const onSelectStatement = useCallback(async () => {
    navigation.navigate('PDFViewer');
  }, [navigation]);

  return (
    <SafeArea>
      <AccountStatementScreen onSelectStatement={onSelectStatement} />
    </SafeArea>
  );
};

export default AccountStatementController;
