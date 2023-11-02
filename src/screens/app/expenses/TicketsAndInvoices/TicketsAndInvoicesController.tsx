import React from 'react';
import {
  Button,
  Container,
  SafeArea,
} from 'components';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ExpensesStackParams, TransactionType } from 'utils';
import { CustomText as Text } from 'components/atoms/CustomText';
import { useBottomSheet } from 'context';
import { useTranslation } from 'react-i18next';
import Theme from 'theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import TicketsAndInvoicesScreen from './TicketsAndInvoicesScreen';

interface RouteParams {
  item: TransactionType
}
const TicketsAndInvoicesController: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, RouteParams>>>();
  const { item } = route.params;
  const bottomSheet = useBottomSheet();
  const { t } = useTranslation();
  const { navigate } = useNavigation<NativeStackNavigationProp<ExpensesStackParams>>();

  const uploadTicket = () => (
    <Container>
      <Text
        text={t('ticketsAndInvoices:uploadTicket')}
        fontWeight="Bold"
      />
      <Button
        label={t('ticketsAndInvoices:attachFile')}
        onPress={() => {}}
        borderColor={Theme.Colors.PlaceboBlue}
        marginBottom={10}
        borderStyle
        colorless
        marginRight={11}
        marginVertical={16}
      />
      <Button
        label={t('global:save')}
        onPress={() => bottomSheet.hide()}
        borderColor={Theme.Colors.PlaceboBlue}
        marginBottom={10}
        marginRight={11}
        marginVertical={8}
      />
    </Container>
  );

  const onPressUploadFile = () => {
    bottomSheet.show(uploadTicket());
  };

  const onPressMovement = () => {
    navigate('AddMovement');
  };

  return (
    <SafeArea>
      <TicketsAndInvoicesScreen
        item={item}
        onPressUploadFile={onPressUploadFile}
        onPressMovement={onPressMovement}
      />
    </SafeArea>
  );
};

export default TicketsAndInvoicesController;
