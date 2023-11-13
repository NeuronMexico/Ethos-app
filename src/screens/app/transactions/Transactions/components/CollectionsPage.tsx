import React from 'react';
import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Container, DirectAccess, MultipleTextButton, Text,
} from 'components';
import Theme from 'theme';
import { BOTTOM_TAB_INSET, formatDate, formatQuantity } from 'utils';
import {
  CoDiIcon, EthosQRIcon, MoneyIcon, PeopleIcon,
} from 'assets/svg';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PaymentButton } from './PaymentButton';

interface Props {
  onPressScheduledCollections: () => void;
  onPressContactsCollection: () => void;
  onPressCoDiCollection: () => void;
  onPressCashCollection: () => void;
  onPressEthosQR: () => void;
}

const CollectionsPage: React.FC<Props> = ({
  onPressScheduledCollections,
  onPressContactsCollection,
  onPressCoDiCollection,
  onPressCashCollection,
  onPressEthosQR,
}) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        paddingHorizontal: Theme.Sizes.Padding,
        paddingTop: Theme.Sizes.MarginTop,
        paddingBottom: BOTTOM_TAB_INSET,
      }}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <DirectAccess
        label={t('transactions:scheduledCollections')}
        onPress={() => navigate('CobrosGlobalStack', { screen: 'CobrosProgramados' })}
        marginBottom={16}
      />
      <Container row space="between">
        <Text
          text={t('transactions:pendingCollection')}
          typography="subtitle"
          fontWeight="Semibold"
          textColor={Theme.Colors.GreatFalls}
        />
        <Text
          text={formatDate(new Date(), 'MMMM dd, yyyy')}
          typography="subtitle"
          fontWeight="Semibold"
          textColor={Theme.Colors.GreatFalls}
          transform="capitalize"
        />
      </Container>
      <MultipleTextButton
        onPress={() => navigate('CobrosGlobalStack', { screen: 'CobrosProgramados' })}
        title="Andrés Lara"
        rightText={formatQuantity(2500)}
        borderColor={Theme.Colors.PlaceboBlue}
        borderRadius={24}
        marginTop={16}
        alignContent="space-between"
        fontSize={Theme.Sizes.Body}
        fontWeight="Regular"
        rightFontWeight="Semibold"
      />

      <Container row style={{ marginTop: 32 }}>
        <Container flex style={{ marginRight: 8 }}>
          <PaymentButton
            label="QR ethoscrédito"
            icon={<EthosQRIcon />}
            onPress={
            () => navigate('PaymentStack', { screen: 'form', params: { title: 'Cobro QR ethoscrédito' } })
          }
          />
        </Container>
        <Container flex style={{ marginLeft: 8 }}>
          <PaymentButton
            label={t('transactions:toContacts')}
            icon={<PeopleIcon />}
            onPress={
            () => navigate('CobrosGlobalStack', { screen: 'CobrosContactos' })
          }
          />
        </Container>
      </Container>
      <Container row style={{ marginTop: 16 }}>
        <Container flex style={{ marginRight: 8 }}>
          <PaymentButton label={t('transactions:viaCODI')} icon={<CoDiIcon />} onPress={onPressCoDiCollection} />
        </Container>
        <Container flex style={{ marginLeft: 8 }}>
          <PaymentButton label={t('transactions:inCash')} icon={<MoneyIcon />} onPress={onPressCashCollection} />
        </Container>
      </Container>
    </ScrollView>
  );
};

export { CollectionsPage };
