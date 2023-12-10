import React from 'react';
import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Container, DirectAccess, MultipleTextButton, Text,
} from 'components';
import Theme from 'theme';
import { BOTTOM_TAB_INSET, formatDate, formatQuantity } from 'utils';
import { EthosQRIcon, MoneyIcon, PeopleIcon } from 'assets/svg';
import { PaymentButton } from './PaymentButton';

interface Props {
  onPressScheduledCollections: () => void;
  onPressContactsCollection: () => void;
  onPressCashCollection: () => void;
  onPressEthosQR: () => void;
}

const CollectionsPage: React.FC<Props> = ({
  onPressScheduledCollections,
  onPressContactsCollection,
  onPressCashCollection,
  onPressEthosQR,
}) => {
  const { t } = useTranslation();

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
        onPress={onPressScheduledCollections}
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
        onPress={onPressScheduledCollections}
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

      <Text text={t('transactions:otherActions')} typography="header" marginVertical={32} />

      <Container row>
        <Container flex style={{ marginRight: 8 }}>
          <PaymentButton
            label={t('transactions:toContacts')}
            icon={<PeopleIcon />}
            onPress={onPressContactsCollection}
          />
        </Container>
        <Container flex style={{ marginLeft: 8 }}>
          <PaymentButton
            label={t('transactions:qrEthoscreditPayment')}
            icon={<EthosQRIcon />}
            onPress={onPressEthosQR}
          />
        </Container>
      </Container>
      <Container row style={{ marginTop: 16 }}>
        <Container flex style={{ marginRight: 8 }}>
          <PaymentButton label={t('transactions:inCash')} icon={<MoneyIcon />} onPress={onPressCashCollection} />
        </Container>
        <Container flex style={{ marginLeft: 8 }} />
      </Container>
    </ScrollView>
  );
};

export { CollectionsPage };
