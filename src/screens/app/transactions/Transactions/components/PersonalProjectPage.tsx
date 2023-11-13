import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button, Card, Container, FadeInImage, ProgressBar, Text,
} from 'components';
import { PersonalProjectIllustration } from 'assets/svg';
import { BOTTOM_TAB_INSET, formatQuantity } from 'utils';
import Theme from 'theme';
import { ScrollView, StyleSheet } from 'react-native';

interface Props {
  onPressContinue: () => void;
  onPressLearnMore: () => void;
  onPressPay: () => void;
}

const PERSONAL_PROJECT_SET = true;
const MOCK_IMAGE = 'https://soymotor.com/sites/default/files/2023-02/bmw-x6-2023-tres-soymotor.jpg';

const PersonalProjectPage: React.FC<Props> = ({ onPressContinue, onPressLearnMore, onPressPay }) => {
  const { t } = useTranslation();

  return (
    <ScrollView
      style={{ flex: 1, marginBottom: BOTTOM_TAB_INSET }}
      contentContainerStyle={{
        paddingHorizontal: Theme.Sizes.Padding,
        paddingBottom: BOTTOM_TAB_INSET,
        flexGrow: 1,
      }}
      bounces={false}
    >
      <Container
        flex
        middle={!PERSONAL_PROJECT_SET}
      >
        {!PERSONAL_PROJECT_SET ? (
          <>
            <PersonalProjectIllustration />
            <Text
              text={t('transactions:additionalCreditLine')}
              typography="header"
              fontWeight="Regular"
              textAlign="center"
              marginTop={16}
            />
            <Button
              label={t('global:continue')}
              onPress={onPressContinue}
              marginVertical={16}
            />
            <Button
              label={t('transactions:wantToLearnMore')}
              onPress={onPressLearnMore}
              backgroundColor={Theme.Colors.WhiteSmoke}
              textColor={Theme.Colors.DarkSoul}
            />
          </>
        ) : (
          <>
            <Card column center padding={16} style={{ paddingVertical: 32, marginTop: 32 }}>
              <FadeInImage source={{ uri: MOCK_IMAGE }} width={100} height={100} borderRadius={100} />
              <Text text={formatQuantity(22500)} fontSize={34} fontWeight="Bold" marginTop={16} />
              <Text text={t('transactions:totalToPay')} typography="caption" fontWeight="Medium" marginTop={8} />
              <Text text="Enganche Auto" typography="header" fontWeight="Bold" marginTop={16} />

              <Container width="100%">
                <ProgressBar progress={0.75} marginTop={16} marginBottom={8} unfilledColor={Theme.Colors.White} />

                <Container row space="between">
                  <Container>
                    <Text text={formatQuantity(18750)} typography="header" fontWeight="Bold" />
                    <Text>
                      <Text text={t('transactions:paid')} typography="caption" />
                      <Text text=" 5/6" typography="caption" fontWeight="Bold" />
                    </Text>
                  </Container>
                  <Container>
                    <Text text={formatQuantity(3750)} typography="header" fontWeight="Bold" textAlign="right" />
                    <Text text={t('transactions:pendingBalance')} typography="caption" textAlign="right" />
                  </Container>
                </Container>
              </Container>

              <Button label={t('global:pay')} onPress={onPressPay} marginTop={16} />
            </Card>
            <Text
              text={t('transactions:today')}
              typography="subtitle"
              fontWeight="Semibold"
              textColor={Theme.Colors.GreatFalls}
              marginTop={23}
              marginBottom={16}
            />
            <Container height={1} backgroundColor={Theme.Colors.PlaceboBlue} />
            <Container style={styles.transactionContainer}>
              <Container row space="between">
                <Text text={`${t('transactions:paid')} 5/6`} typography="subtitle" fontWeight="Semibold" />
                <Text text={formatQuantity(3750)} typography="subtitle" fontWeight="Bold" />
              </Container>
              <Text
                text={t('transactions:personalProjectPayment')}
                typography="caption"
                textColor={Theme.Colors.GreatFalls}
                marginTop={6}
              />
            </Container>
          </>
        )}
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  transactionContainer: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: Theme.Colors.PlaceboBlue,
  },
});

export { PersonalProjectPage };
