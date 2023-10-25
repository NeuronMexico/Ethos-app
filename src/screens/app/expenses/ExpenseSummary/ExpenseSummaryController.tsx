import React from 'react';
import {
  Button, Container, DownloadButtons, OptionButton, SafeArea,
} from 'components';
import { useBottomSheet } from 'context';
import { CustomText as Text } from 'components/atoms/CustomText';
import Theme from 'theme';
import { useTranslation } from 'react-i18next';
import { FileUploadIcon, ShieldIcon } from 'assets/svg';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ExpensesStackParams, TransactionType } from 'utils';
import ExpenseSummaryScreen from './ExpenseSummaryScreen';

const ExpenseSummaryController: React.FC = () => {
  const bottomSheet = useBottomSheet();
  const { navigate } = useNavigation<NativeStackNavigationProp<ExpensesStackParams>>();

  const { t } = useTranslation();

  const onPressDownload = () => {
    bottomSheet.show(<DownloadButtons />);
  };

  const onPressAssignTags = (item: TransactionType) => {
    bottomSheet.hide();
    navigate('AssignTags', { item });
  };

  const transactionDescription = (date: any, transaction: any) => (
    <Container center style={{ gap: 16 }}>
      <Text
        text={date}
        textColor={Theme.Colors.GreatFalls}
        fontWeight="Medium"
        marginTop={16}
      />
      <Text
        text={transaction.amount || ''}
        fontWeight="Bold"
        fontSize={34}
      />
      <Text
        text={transaction.nameDetail || ''}
        fontWeight="Bold"
        fontSize={17}
      />
      <Container row flex style={{ justifyContent: 'space-between', width: '60%' }}>
        <Container>
          <Text
            text={t('expenses:retirementAccount')}
            fontSize={13}
          />
          <Text
            text={transaction.cardLastDigits || ''}
            fontWeight="Bold"
            fontSize={17}
          />
        </Container>
        <Container>
          <Text
            text={t('expenses:state')}
            fontSize={13}
          />
          <Text
            text={transaction.status || ''}
            fontWeight="Bold"
            fontSize={17}
          />
        </Container>
      </Container>
      <Button
        label={transaction.type || t('expenses:assignTags')}
        onPress={() => onPressAssignTags(transaction)}
        marginBottom={10}
        marginRight={11}
        width={172}
        backgroundColor={transaction.type ? transaction.color : Theme.Colors.PlaceboBlue}
        textColor={Theme.Colors.DarkSoul}
      />
      <Container row flex style={{ justifyContent: 'space-between' }}>
        <Button
          label={t('expenses:uploadTicket')}
          onPress={() => {}}
          borderColor={Theme.Colors.PlaceboBlue}
          marginBottom={10}
          borderStyle
          icon={<FileUploadIcon />}
          colorless
          marginRight={11}
          width={172}
        />
        <Button
          label={t('expenses:uploadInvoice')}
          onPress={() => {}}
          borderColor={Theme.Colors.PlaceboBlue}
          marginBottom={10}
          borderStyle
          icon={<FileUploadIcon />}
          colorless
          width={172}
        />
      </Container>
      <OptionButton
        onPress={() => {}}
        icon={<ShieldIcon />}
      />
    </Container>
  );

  const onPressTransaction = (date: any, transaction: any) => {
    bottomSheet.show(transactionDescription(date, transaction));
  };

  return (
    <SafeArea>
      <ExpenseSummaryScreen
        onPressDownload={onPressDownload}
        onPressTransaction={onPressTransaction}
      />
    </SafeArea>
  );
};

export default ExpenseSummaryController;
