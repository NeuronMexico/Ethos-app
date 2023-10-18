import React, { useMemo, useState } from 'react';
import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Container,
  Header,
  ProgressBar,
  Text,
  Touchable,
} from 'components';
import {
  CardDigitalIcon,
  CardPayIcon,
  DotsIcon,
  EyeIcon,
  EyeSlashIcon,
  FilterIcon,
  KeyIcon,
  LockClosedIcon,
  MessageDotsIcon,
  ShieldIcon,
} from 'assets/svg';
import Theme from 'theme';
import { formatDate, formatQuantity } from 'utils';
import { CardAction, TransactionCard } from './components';

const CARD_NUMBER = '8438 2849 3923 3334';

interface Props {
  onPressRequestCard: () => void;
  onPressActivateCard: () => void;
  onPressTurnOff: () => void;
  onPressPayCard: () => void;
  onPressDigitalCard: () => void;
  onPressPin: () => void;
  onPressSeeMore: () => void;
  onPressTransaction: () => void;
  onPressReportCard: () => void;
  onPressVirtualAssistance: () => void;
}

const CardScreen: React.FC<Props> = ({
  onPressRequestCard,
  onPressActivateCard,
  onPressTurnOff,
  onPressPayCard,
  onPressDigitalCard,
  onPressPin,
  onPressSeeMore,
  onPressTransaction,
  onPressReportCard,
  onPressVirtualAssistance,
}) => {
  const { t } = useTranslation();

  const [showCardNumber, setShowCardNumber] = useState<boolean>(false);

  const cardNumber = useMemo(() => {
    if (showCardNumber) return CARD_NUMBER;

    return `**** **** **** *${CARD_NUMBER.substring(CARD_NUMBER.length - 3)}`;
  }, [showCardNumber]);

  return (
    <Container flex>
      <Header
        title={t('cards:card')}
        rightIcon={<MessageDotsIcon width={22} height={22} />}
        rightAction={onPressVirtualAssistance}
      />
      <ScrollView
        style={{ marginTop: 8 }}
        contentContainerStyle={{ paddingHorizontal: Theme.Sizes.Padding, paddingTop: 24 }}
      >
        <Container row center>
          <Text text={cardNumber} typography="header" marginRight={8} />
          <Touchable onPress={() => setShowCardNumber(!showCardNumber)} rounded hitSlop={15}>
            {showCardNumber ? <EyeSlashIcon width={22} height={22} /> : <EyeIcon width={22} height={22} />}
          </Touchable>
        </Container>

        <ProgressBar progress={0.3} marginVertical={16} />

        <Container row space="between">
          <Container>
            <Text text={formatQuantity(3957)} typography="header" fontWeight="Bold" />
            <Text text={t('cards:usedBalance')} typography="caption" />
          </Container>
          <Container>
            <Text text={formatQuantity(66043)} typography="header" fontWeight="Bold" textAlign="right" />
            <Text text={t('cards:availableBalance')} typography="caption" textAlign="right" />
          </Container>
        </Container>

        <Container row style={{ marginTop: 24 }}>
          <Container flex={1.5} style={{ marginRight: 4 }}>
            <Text text={formatQuantity(3957)} typography="caption" fontWeight="Bold" />
            <Text text={t('cards:paymentNoInterest')} typography="caption" fontWeight="Regular" marginTop={8} />
          </Container>
          <Container flex={1.5} style={{ marginHorizontal: 4 }}>
            <Text
              text={formatDate(new Date(), 'MMMM d, yyyy')}
              typography="caption"
              fontWeight="Bold"
              transform="capitalize"
            />
            <Text text={t('cards:paymentDueDate')} typography="caption" fontWeight="Regular" marginTop={8} />
          </Container>
          <Container flex style={{ marginLeft: 4 }}>
            <Text text={formatQuantity(875)} typography="caption" fontWeight="Bold" />
            <Text text={t('cards:minimumPayment')} typography="caption" fontWeight="Regular" marginTop={8} />
          </Container>
        </Container>

        <ScrollView horizontal style={{ marginTop: 32, marginHorizontal: -20 }} showsHorizontalScrollIndicator={false}>
          <CardAction
            label={t('cards:turnOffCard')}
            icon={<LockClosedIcon color={Theme.Colors.DarkSoul} />}
            width={55}
            onPress={onPressTurnOff}
          />
          <CardAction
            label={t('cards:payCard')}
            icon={<CardPayIcon />}
            width={50}
            onPress={onPressPayCard}
          />
          <CardAction
            label={t('cards:digitalCard')}
            icon={<CardDigitalIcon />}
            width={50}
            onPress={onPressDigitalCard}
          />
          <CardAction
            label={t('cards:pin')}
            icon={<KeyIcon />}
            onPress={onPressPin}
          />
          <CardAction
            label={t('cards:reportCard')}
            icon={<ShieldIcon />}
            width={61}
            onPress={onPressReportCard}
          />
          <CardAction
            label={t('cards:seeMore')}
            icon={<DotsIcon />}
            onPress={onPressSeeMore}
          />
        </ScrollView>

        <Button
          label={t('cards:requestPhysicalCard')}
          marginVertical={32}
          onPress={onPressRequestCard}
        />

        <Button
          label={t('cards:activatePhysicalCard')}
          marginVertical={32}
          onPress={onPressActivateCard}
        />

        <Container row center space="between">
          <Text text={t('cards:transactions')} typography="header" />
          <Button
            onPress={() => {}}
            width={40}
            height={40}
            borderRadius={14}
            backgroundColor={Theme.Colors.PlaceboBlue}
            icon={<FilterIcon />}
          />
        </Container>

        <Text
          text={t('cards:today')}
          typography="subtitle"
          fontWeight="Semibold"
          textColor={Theme.Colors.GreatFalls}
          marginTop={16}
        />

        <TransactionCard
          title="Pago de tarjeta de crédito"
          description="Pago TDC"
          value={-100}
          category=""
          onPress={onPressTransaction}
        />
        <TransactionCard
          title="Pago de tarjeta de crédito"
          description="Pago TDC"
          value={2500}
          category=""
          onPress={onPressTransaction}
        />
      </ScrollView>
    </Container>
  );
};

export default CardScreen;
