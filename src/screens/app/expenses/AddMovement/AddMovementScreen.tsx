import React, { useState } from 'react';
import {
  Button,
  Container, Header, Input, MultipleTextButton, Touchable,
} from 'components';
import { CustomText as Text } from 'components/atoms/CustomText';
import Theme from 'theme';
import { FilterIcon, LensIcon, MessageDotsIcon } from 'assets/svg';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet } from 'react-native';

interface Props {
  onSubmit: () => void;
}

const AddMovementScreen: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

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
            color: '#61CE80',
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
            color: '#F49A47',
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
            color: '#F49A47',
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
        title={t('ticketsAndInvoices:add')}
        rightAction={() => {}}
        rightIcon={<MessageDotsIcon />}
      />
      <ScrollView
        style={{ marginTop: 8 }}
        contentContainerStyle={{ paddingHorizontal: Theme.Sizes.Padding, paddingTop: 24 }}
      >
        <Container>
          <Input
            value={value}
            onChangeText={setValue}
            placeholder={t('expenses:search')}
            prefixIcon={<LensIcon width={20} height={20} />}
          />
          <Container row center style={{ justifyContent: 'space-between', marginTop: 16 }}>
            <Text text={t('ticketsAndInvoices:movements')} typography="header" />
            <Touchable onPress={() => {}}>
              <Container middle style={styles.rightButtonContainer} backgroundColor={Theme.Colors.PlaceboBlue}>
                <FilterIcon />
              </Container>
            </Touchable>
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
                    onPress={() => {}}
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
        </Container>
      </ScrollView>
      <Container style={{ paddingHorizontal: Theme.Sizes.Padding, marginTop: 110 }}>
        <Button onPress={onSubmit} label={t('global:save')} />
      </Container>
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

export default AddMovementScreen;
