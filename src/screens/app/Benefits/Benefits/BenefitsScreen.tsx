import React, { useState } from 'react';
import {
  Card, Container, FadeInImage, Header, Input, Modal, Text, Touchable,
} from 'components';
import { useTranslation } from 'react-i18next';
import { ChevronRightIcon, LensIcon, MessageDotsIcon } from 'assets/svg';
import Theme from 'theme';
import { ScrollView, StyleSheet } from 'react-native';
import {
  FAMILY_IMG,
  OFF_IMG,
  BIKE_IMG,
  OLDER_PEOPLE_IMG,
  PETS_IMG,
  PREGNANT_IMG, GIFT_IMG,
} from 'assets/images';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
  onPressRewards: () => void;
  onPressRefer: () => void;
}

const BenefitsScreen: React.FC<Props> = ({
  onPressRewards = () => {},
  onPressRefer = () => {},
}: Props) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const { blueContainer, card } = styles;
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  const packages = [
    {
      title: t('benefits:package1'),
      img: FAMILY_IMG,
      description: t('benefits:package1Description'),
      benefits: [
        {
          title: t('benefits:benefitTitle1'),
          description: t('benefits:benefitDescription1'),
        },
        {
          title: t('benefits:benefitTitle2'),
          description: t('benefits:benefitDescription2'),
        },
        {
          title: t('benefits:benefitTitle3'),
          description: t('benefits:benefitDescription3'),
        },
        {
          title: t('benefits:benefitTitle4'),
          description: t('benefits:benefitDescription4'),
        },
        {
          title: t('benefits:benefitTitle5'),
          description: t('benefits:benefitDescription2'),
        },
        {
          title: t('benefits:benefitTitle6'),
          description: t('benefits:benefitDescription3'),
        },
        {
          title: t('benefits:benefitTitle7'),
          description: t('benefits:benefitDescription4'),
        },
      ],
    },
    {
      title: t('benefits:package2'),
      img: OFF_IMG,
      description: t('benefits:package1Description'),
      benefits: [
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
      ],
    },
    {
      title: t('benefits:package3'),
      img: PREGNANT_IMG,
      description: t('benefits:package1Description'),
      benefits: [
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
      ],
    },
    {
      title: t('benefits:package4'),
      img: PETS_IMG,
      description: t('benefits:package1Description'),
      benefits: [
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
      ],
    },
    {
      title: t('benefits:package5'),
      img: OLDER_PEOPLE_IMG,
      description: t('benefits:package1Description'),
      benefits: [
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
      ],
    },
    {
      title: t('benefits:package6'),
      img: BIKE_IMG,
      description: t('benefits:package1Description'),
      benefits: [
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
        {
          title: t('benefits:loremTitle'),
          description: t('benefits:loremDescription'),
        },
      ],
    },
  ];

  const rewardsCardContent = (
    <Touchable onPress={onPressRewards}>
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
    </Touchable>
  );

  const onPressPackage = (item: any) => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      navigate('HireBenefit', { benefit: item });
    }, 3000);
  };

  const modalContent = (
    <Container
      middle
      style={{
        flex: 1,
        paddingHorizontal: Theme.Sizes.Padding,
      }}
    >
      <Card backgroundColor={Theme.Colors.White} style={{ padding: 32 }}>
        <Text
          text={t('benefits:redirectMessage')}
          textAlign="center"
          fontWeight="Semibold"
        />
      </Card>
    </Container>
  );

  const packageItem = (item: any) => (
    <Touchable key={item.title} onPress={() => onPressPackage(item)}>
      <Container center width={110} style={{ display: 'flex', flexWrap: 'wrap', marginHorizontal: 6 }}>
        <Container
          circle
          center
          crossCenter
          style={{ alignContent: 'center', padding: 'auto' }}
          backgroundColor={Theme.Colors.PlaceboBlue}
          width={110}
          height={110}
        >
          <FadeInImage source={item.img} width={90} height={90} resizeMode="contain" style={{ margin: 'auto' }} />
        </Container>
        <Text
          text={item.title}
          textAlign="center"
          fontWeight="Semibold"
          marginTop={15}
        />
      </Container>
    </Touchable>
  );

  return (
    <Container flex>
      <Modal visible={showModal} animationType="fade">
        {modalContent}
      </Modal>
      <Container flex style={blueContainer}>
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
            <Card backgroundColor={Theme.Colors.White} padding={20} onPress={onPressRefer}>
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
              marginBottom={23}
            />
          </Container>
        </Container>
      </Container>
      <ScrollView
        horizontal
        contentContainerStyle={{ flexGrow: 1, alignSelf: 'center' }}
        showsHorizontalScrollIndicator={false}
      >
        <Container row>
          {packages.map((item) => (packageItem(item)))}
        </Container>
      </ScrollView>
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
