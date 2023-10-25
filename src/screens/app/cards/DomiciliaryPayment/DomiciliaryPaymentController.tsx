import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch } from 'reactRedux';
import { Container, SafeArea, Text } from 'components';
import { useAlert } from 'context';
import { CardsGlobalStackParams } from 'utils';
import DomiciliaryPaymentScreen from './DomiciliaryPaymentScreen';

interface Props extends NativeStackScreenProps<CardsGlobalStackParams, 'DomiciliaryPayment'> {}

const DomiciliaryPaymentController: React.FC<Props> = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const alert = useAlert();

  const onSubmit = useCallback(() => {
    alert.show({
      title: t('cards:directDebitInProgress'),
      invoice: '58432',
      date: new Date(),
      checkmark: true,
      extraInfo: (
        <>
          <Text text={t('cards:minimumPayment')} typography="subtitle" textAlign="center" marginBottom={10} />
          <Container row width="100%">
            <Container flex crossAlignment="end" style={{ marginRight: 12 }}>
              <Text text={t('cards:originAccount')} typography="caption" fontWeight="Regular" />
              <Text text="***343" typography="header" fontWeight="Bold" marginTop={8} />
              <Text text={t('cards:bank')} typography="caption" fontWeight="Regular" marginTop={8} />
              <Text text="Santander" typography="header" fontWeight="Bold" marginTop={8} />
            </Container>
            <Container flex style={{ marginLeft: 12 }}>
              <Text text={t('cards:cardToBePaid')} typography="caption" fontWeight="Regular" />
              <Text text="***334" typography="header" fontWeight="Bold" marginTop={8} />
            </Container>
          </Container>
        </>
      ),
      actions: [{
        label: t('global:accept'),
        onPress: () => {
          alert.hide();
          navigation.goBack();
        },
        type: 'primary',
      }],
    });
  }, [alert, navigation, t]);

  return (
    <SafeArea>
      <DomiciliaryPaymentScreen onSubmit={onSubmit} edition={!!route.params?.edition} />
    </SafeArea>
  );
};

export default DomiciliaryPaymentController;
