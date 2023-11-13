import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text } from 'components';
import { useTranslation } from 'react-i18next';
import { MoneyIcon, PersonalDispositionIllustration, TransferIcon } from 'assets/svg';
import Theme from 'theme';
import { BOTTOM_TAB_INSET } from 'utils';
import { PaymentButton } from './PaymentButton';

interface Props {
  onPressTransfer?: () => void;
  onPressWithdraw?: () => void;
}

const PersonalDispositionPage: React.FC<Props> = (props: Props) => {
  const {
    onPressTransfer = () => {},
    onPressWithdraw = () => {},
  } = props;
  const { t } = useTranslation();
  const { container, illustrationContainer } = styles;

  return (
    <Container flex style={container}>
      <Container
        center
        middle
        style={illustrationContainer}
      >
        <PersonalDispositionIllustration />
        <Text
          text={t('personalDisposition:screenMessage')}
          textAlign="center"
          fontSize={17}
          marginVertical={32}
        />
      </Container>
      <Container row style={{ height: 120 }}>
        <Container flex style={{ marginRight: 8 }}>
          <PaymentButton label={t('personalDisposition:transfer')} icon={<TransferIcon />} onPress={onPressTransfer} />
        </Container>
        <Container flex style={{ marginLeft: 8 }}>
          <PaymentButton label={t('personalDisposition:noCardWithdrawal')} icon={<MoneyIcon />} onPress={onPressWithdraw} />
        </Container>
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Theme.Sizes.Padding,
    paddingTop: Theme.Sizes.MarginTop,
    paddingBottom: BOTTOM_TAB_INSET,
  },
  illustrationContainer: {
    marginTop: Theme.Sizes.MarginTop,
    paddingHorizontal: 26,
  },
});

export { PersonalDispositionPage };
