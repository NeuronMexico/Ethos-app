import React from 'react';
import {
  Container, Header, MultipleTextButton, Touchable,
} from 'components';
import { CustomText as Text } from 'components/atoms/CustomText';
import Theme from 'theme';
import { ExportIcon, MessageDotsIcon } from 'assets/svg';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet } from 'react-native';

interface Props {
  onPressDownload: () => void;
  onPressTransaction: (date: any, transaction: any) => void;
}

const ExpenseSummaryScreen: React.FC<Props> = ({ onPressDownload, onPressTransaction }) => {
  const { t } = useTranslation();
  const mockData = {
    total: '$5,186.00',
    transactions: [
      {
        date: 'Hoy',
        info: [
          {
            title: 'Pago de tarjeta de crédito',
            amount: '-$100.00',
            description: 'Pago TDC',
            color: Theme.Colors.DarkSoul,
            bank: 'Santander',
            status: 'Autorizado',
            name: 'Ayush Lagun',
            concept: 'Pago Viaje',
            cardLastDigits: '**234',
          },
          {
            title: 'Pago de tarjeta de crédito',
            amount: '$2,500.00',
            description: 'Compra',
            color: Theme.Colors.PlaceboBlue,
            bank: 'Santander',
            status: 'Autorizado',
            name: 'Ayush Lagun',
            concept: 'Pago Viaje',
            cardLastDigits: '**234',
            type: 'Alimentos y bebidas',
          },
        ],
      },
      {
        date: 'Julio 15, 2023',
        info: [
          {
            title: 'Starbucks',
            amount: '$250.00',
            description: 'Compra',
            color: Theme.Colors.BossaNovaBlue,
            bank: 'Santander',
            status: 'Autorizado',
            name: 'Ayush Lagun',
            concept: 'Pago Viaje',
            cardLastDigits: '**234',
          },
        ],
      },
      {
        date: 'Julio 13, 2023',
        info: [
          {
            title: 'Cinépolis',
            amount: '$100.00',
            description: 'Compra',
            color: Theme.Colors.PrussianBlue,
            bank: 'Santander',
            status: 'Autorizado',
            name: 'Ayush Lagun',
            concept: 'Pago Viaje',
            cardLastDigits: '**234',
          },
          {
            title: 'Pago de tarjeta de crédito',
            amount: '-$100.00',
            description: 'Pago TDC',
            color: Theme.Colors.SpaceCadet,
            bank: 'Santander',
            status: 'Autorizado',
            name: 'Ayush Lagun',
            concept: 'Pago Viaje',
            cardLastDigits: '**234',
          },
          {
            title: 'Starbucks',
            amount: '-$100.00',
            description: 'Compra digital',
            color: Theme.Colors.BlueBuzz,
            bank: 'Santander',
            status: 'Autorizado',
            name: 'Ayush Lagun',
            concept: 'Pago Viaje',
            cardLastDigits: '**234',
          },
        ],
      },
    ],
  };

  return (
    <Container>
      <Header
        title={t('expenses:totalSpends')}
        rightAction={() => {}}
        rightIcon={<MessageDotsIcon />}
      />
      <ScrollView
        style={{ marginTop: 8 }}
        contentContainerStyle={{ paddingHorizontal: Theme.Sizes.Padding, paddingTop: 24 }}
      >
        <Container row center style={{ justifyContent: 'space-between' }}>
          <Text text={t('expenses:currentMonth')} typography="header" />
          <Container row center style={{ justifyContent: 'space-around', gap: 16 }}>
            <Text text={mockData.total} typography="header" />
            <Touchable onPress={() => onPressDownload()}>
              <Container middle style={styles.rightButtonContainer} backgroundColor={Theme.Colors.PlaceboBlue}>
                <ExportIcon />
              </Container>
            </Touchable>
          </Container>
        </Container>
        {mockData.transactions.map((transaction, index) => (
          <Container key={index}>
            <Text
              text={transaction.date}
              textColor={Theme.Colors.GreatFalls}
              marginVertical={16}
              typography="header"
            />
            {transaction.info.map((item, itemIndex) => (
              <Container
                key={itemIndex}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#EDF3FF',
                }}
              >
                <MultipleTextButton
                  key={itemIndex}
                  onPress={() => onPressTransaction(transaction.date, item)}
                  title={item.title}
                  label={item.description}
                  rightText={item.amount}
                  rightTextColor={item.description === 'Pago TDC' ? Theme.Colors.SpringBouquet : ''}
                  barColor={item.color}
                  marginBottom={20}
                  alignContent="space-between"
                />
              </Container>
            ))}
          </Container>
        ))}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    gap: 16,
    width: '100%',
    paddingVertical: Theme.Sizes.Padding,
    marginBottom: 0,
    paddingHorizontal: Theme.Sizes.Padding,
    backgroundColor: Theme.Colors.White,
    borderRadius: 24,
    shadowColor: Theme.Colors.Carbon,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 8,
  },
  rightButtonContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
});

export default ExpenseSummaryScreen;
