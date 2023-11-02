import React from 'react';
import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Container, Header, MultipleTextButton, Text,
} from 'components';
import { MoreIcon } from 'assets/svg';
import Theme from 'theme';
import { formatDate, formatQuantity } from 'utils';

interface Props {
  onPressPayment: (type: string) => void;
  onPressAdd: () => void;
}

const ScheduledPaymentsScreen: React.FC<Props> = ({ onPressPayment, onPressAdd }) => {
  const { t } = useTranslation();

  return (
    <Container flex>
      <Header
        title={t('transactions:scheduledPayments')}
        rightIcon={<MoreIcon width={22} height={22} />}
        rightAction={onPressAdd}
      />
      <ScrollView
        style={{ flex: 1, marginTop: 4 }}
        contentContainerStyle={{ paddingHorizontal: Theme.Sizes.Padding, paddingTop: 28 }}
      >
        <Text
          text={formatDate(new Date(), 'MMMM dd, yyyy')}
          typography="subtitle"
          fontWeight="Semibold"
          textColor={Theme.Colors.GreatFalls}
          transform="capitalize"
        />
        <MultipleTextButton
          title="Pago a Mario Telles"
          label={t('transactions:singlePayment')}
          rightText={formatQuantity(2000)}
          borderColor={Theme.Colors.PlaceboBlue}
          borderRadius={24}
          marginTop={16}
          alignContent="space-between"
          onPress={() => onPressPayment('single')}
        />
        <MultipleTextButton
          title="Pago de TDC ** *334"
          label={t('transactions:directDebit')}
          rightText={formatQuantity(3957)}
          borderColor={Theme.Colors.PlaceboBlue}
          borderRadius={24}
          marginTop={16}
          alignContent="space-between"
          onPress={() => onPressPayment('direct-debit')}
        />
        <MultipleTextButton
          title="Netflix"
          label={t('transactions:recurringPayment')}
          rightText={formatQuantity(299)}
          borderColor={Theme.Colors.PlaceboBlue}
          borderRadius={24}
          marginTop={16}
          alignContent="space-between"
          onPress={() => onPressPayment('single')}
        />

        <Text
          text={formatDate(new Date(2023, 5, 23), 'MMMM dd, yyyy')}
          typography="subtitle"
          fontWeight="Semibold"
          textColor={Theme.Colors.GreatFalls}
          transform="capitalize"
          marginTop={16}
        />
        <MultipleTextButton
          title="Pago Mariana"
          label={t('transactions:singlePayment')}
          rightText={formatQuantity(974)}
          borderColor={Theme.Colors.PlaceboBlue}
          borderRadius={24}
          marginTop={16}
          alignContent="space-between"
          onPress={() => onPressPayment('single')}
        />
      </ScrollView>
    </Container>
  );
};

export default ScheduledPaymentsScreen;