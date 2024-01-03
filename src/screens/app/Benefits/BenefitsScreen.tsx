import React, { useState } from 'react';
import {
  Card, Container, FadeInImage, Header, Input, Text,
} from 'components';
import { useTranslation } from 'react-i18next';
import { ChevronRightIcon, LensIcon, MessageDotsIcon } from 'assets/svg';
import Theme from 'theme';
import { StyleSheet } from 'react-native';
import { GIFT_IMG } from 'assets/images';

interface Props {
  prop?: string
}

const BenefitsScreen: React.FC<Props> = () => {
  const { t } = useTranslation();
  const { blueContainer, card } = styles;
  const [search, setSearch] = useState('');

  const rewardsCardContent = (
    <Container row center space="between">
      <Container style={{ width: '90%' }}>
        <Text text={t('benefits:rewards')} fontSize={20} />
        <Text text={t('benefits:currentBalance')} marginTop={14} marginBottom={4} />
        <Text
          text="$1,500.00 MXN"
          textColor={Theme.Colors.SpringBouquet}
          fontWeight="Bold"
          fontSize={19}
        />
        <Text
          text={t('benefits:validUntil')}
          textColor={Theme.Colors.Encore}
          fontSize={13}
          marginTop={8}
        />
      </Container>
      <ChevronRightIcon height={40} width={40} />
    </Container>
  );

  return (
    <Container>
      <Container style={blueContainer}>
        <Header
          title={t('benefits:title')}
          rightAction={() => {}}
          rightIcon={<MessageDotsIcon />}
          showBackButton={false}
        />
        <Container style={{ paddingHorizontal: Theme.Sizes.Padding, marginTop: 21 }}>
          <Card backgroundColor={Theme.Colors.White}>
            {rewardsCardContent}
          </Card>
          <Input
            value={search}
            onChangeText={setSearch}
            placeholder={t('expenses:search')}
            prefixIcon={<LensIcon width={20} height={20} />}
            marginTop={14}
            paddingVertical={16}
          />
          <Container style={card}>
            <Card backgroundColor={Theme.Colors.White} padding={20}>
              <Container row center space="between">
                <Container style={{ width: '78%' }}>
                  <Text text={t('benefits:refer')} fontSize={21} fontWeight="Bold" />
                  <Text text={t('benefits:win')} marginTop={14} marginBottom={4} />
                </Container>
                <FadeInImage source={GIFT_IMG} width={50} height={60} />
              </Container>
            </Card>
          </Container>
          <Container>
            <Text
              text={t('benefits:packages')}
              fontSize={21}
              typography="header"
              marginTop={32}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  blueContainer: {
    backgroundColor: Theme.Colors.PlaceboBlue,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingBottom: -50,
    zIndex: 1,
    height: 350,
  },
  card: {
    marginTop: 22,
    shadowColor: Theme.Colors.DarkSoul,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

export default BenefitsScreen;
