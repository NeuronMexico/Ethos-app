import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Container,
  FadeInImage,
  Modal,
  SafeArea,
  Text,
} from 'components';
import Theme from 'theme';
import { ETHOS_CREDIT_CARDS, ETHOS_CREDIT_LOGO } from 'assets/images';

interface Props {
  visible: boolean;
  title: string;
  message: string;
  amount: string;
  onPressBack: () => void;
}

const CongratulationsModal: React.FC<Props> = ({
  visible,
  title,
  message,
  amount,
  onPressBack,
}) => {
  const { t } = useTranslation();

  return (
    <Modal visible={visible} animationType="slide">
      <SafeArea>
        <Container style={{
          paddingHorizontal: Theme.Sizes.Padding,
          paddingTop: Theme.Sizes.MarginTop,
        }}
        >
          <ScrollView
            contentContainerStyle={{
              alignItems: 'center',
              flexGrow: 1,
            }}
            showsVerticalScrollIndicator={false}
            bounces={false}
          >
            <FadeInImage source={ETHOS_CREDIT_LOGO} width={84} height={13.5} style={styles.ethosCreditLogo} />
            <Text
              text={title}
              typography="title"
              fontWeight="Bold"
              marginBottom={16}
              marginTop={40}
              fontSize={32}

            />
            <Text text={message} marginBottom={25} />
            <FadeInImage source={ETHOS_CREDIT_CARDS} width={450} height={400} />
            <Text text={t('onboarding:approvedAmount')} fontWeight="Bold" />
            <Container style={{
              backgroundColor: '#BEEBCB', borderRadius: 5, marginTop: 16, marginBottom: 50,
            }}
            >
              <Text
                text={amount}
                typography="header"
                fontWeight="Bold"
                fontSize={34}
              />
            </Container>
            <Container flex alignment="end" center width="100%">
              <Button
                label={t('global:accept')}
                onPress={onPressBack}
                marginVertical={16}
              />
            </Container>
          </ScrollView>
        </Container>
      </SafeArea>
    </Modal>
  );
};

const styles = StyleSheet.create({
  rightButtonContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  ethosCreditLogo: {
    position: 'absolute',
    right: Theme.Sizes.Padding,
  },
});
export { CongratulationsModal };
