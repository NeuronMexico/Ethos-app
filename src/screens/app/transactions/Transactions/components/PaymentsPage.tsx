import React from 'react';
import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Container, DirectAccess, MultipleTextButton, ServiceButton, Text,
} from 'components';
import Theme from 'theme';
import { BOTTOM_TAB_INSET, formatDate, formatQuantity } from 'utils';
import {
  AmazonIcon, CFEIcon, DisneyIcon, HBOIcon, MoneyIcon, NetflixIcon, SpotifyIcon, TransferIcon,
} from 'assets/svg';
import { PaymentButton } from './PaymentButton';

interface Props {
  onPressScheduledPayments: () => void;
  onPressServices: () => void;
  onPressNewPayment: () => void;
  onPressWithdrawalNoCard: () => void;
}

const PaymentsPage: React.FC<Props> = ({
  onPressScheduledPayments,
  onPressServices,
  onPressWithdrawalNoCard,
  onPressNewPayment,
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
    >
      <DirectAccess label={t('transactions:scheduledPayments')} onPress={onPressScheduledPayments} marginBottom={16} />
      <Container row space="between">
        <Text
          text={t('transactions:nextPayment')}
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
        onPress={() => {}}
        title="Pago a Mario Telles"
        rightText={formatQuantity(-100)}
        borderColor={Theme.Colors.PlaceboBlue}
        borderRadius={24}
        marginTop={16}
        alignContent="space-between"
        fontSize={Theme.Sizes.Body}
        fontWeight="Regular"
        rightFontWeight="Semibold"
      />

      <DirectAccess label={t('transactions:forServices')} onPress={onPressServices} marginTop={32} marginBottom={18} />
      <Container row style={{ flexWrap: 'wrap', marginVertical: -9, marginHorizontal: -6 }}>
        <ServiceButton
          label="Netflix"
          icon={<NetflixIcon />}
          marginVertical={9}
          marginHorizontal={6}
          onPress={onPressServices}
        />
        <ServiceButton
          label="Spotify"
          icon={<SpotifyIcon />}
          marginVertical={9}
          marginHorizontal={6}
          onPress={onPressServices}
        />
        <ServiceButton
          label="Disney +"
          icon={<DisneyIcon />}
          marginVertical={9}
          marginHorizontal={6}
          onPress={onPressServices}
        />
        <ServiceButton
          label="CFE"
          icon={<CFEIcon />}
          marginVertical={9}
          marginHorizontal={6}
          onPress={onPressServices}
        />
        <ServiceButton
          label="Amazon"
          icon={<AmazonIcon />}
          marginVertical={9}
          marginHorizontal={6}
          onPress={onPressServices}
        />
        <ServiceButton
          label="HBO Max"
          icon={<HBOIcon />}
          marginVertical={9}
          marginHorizontal={6}
          onPress={onPressServices}
        />
      </Container>

      <Container row style={{ marginTop: 32 }}>
        <Container flex>
          <PaymentButton label={t('transactions:newPayment')} icon={<TransferIcon />} onPress={onPressNewPayment} />
        </Container>
        <Container flex style={{ marginLeft: 8 }}>
          <PaymentButton
            label={t('transactions:withdrawalWithoutCard')}
            icon={<MoneyIcon />}
            onPress={onPressWithdrawalNoCard}
          />
        </Container>
      </Container>
    </ScrollView>
  );
};

export { PaymentsPage };
