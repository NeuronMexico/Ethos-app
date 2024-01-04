import React, { useState } from 'react';
import {
  Button,
  Card, Container, Header, ImageLargeCarousel, Modal, MultipleTextButton, Text,
} from 'components';
import { useTranslation } from 'react-i18next';
import { ArrowUpIcon, ChevronDownIcon, MessageDotsIcon } from 'assets/svg';
import Theme from 'theme';
import Collapsible from 'react-native-collapsible';
import { ScrollView } from 'react-native';
import { BENEFIT_IMG } from 'assets/images';
import { useAlert } from 'context';

interface Props {
  benefit: any
}

const HireBenefitFlowScreen: React.FC<Props> = ({ benefit }) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [collapsedInfo, setCollapsedInfo] = useState<boolean>(true);
  const [isActive, setIsActive] = useState<boolean>(false);

  const alert = useAlert();

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
          text={t('benefits:redirectMessagePayment')}
          textAlign="center"
          fontWeight="Semibold"
        />
      </Card>
    </Container>
  );

  const includesPointsContent = (item: any) => (
    <Container
      key={item.title}
      style={{ paddingHorizontal: 36, borderRadius: 34, paddingVertical: 5 }}
    >
      <Container row center>
        <Container
          circle
          backgroundColor={Theme.Colors.DarkSoul}
          width={6}
          height={6}
        />
        <Text
          text={item?.title}
          fontSize={13}
          typography="header"
          marginLeft={10}
          textAlign="left"
        />
      </Container>
      <Text
        text={item?.description}
        fontSize={13}
        marginLeft={15}
        textAlign="left"
        marginTop={5}
        marginBottom={16}
      />
    </Container>
  );

  const onPress = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      alert.show({
        title: t('form:successfulPayment'),
        checkmark: true,
        invoice: '1234',
        date: new Date(),
        actions: [
          {
            label: t('global:accept'),
            onPress: () => {
              alert.hide();
              setIsActive(true);
            },
            type: 'primary',
          },
        ],
      });
    }, 3000);
  };

  return (
    <Container>
      <Modal visible={showModal} animationType="slide">
        {modalContent}
      </Modal>
      <Container>
        <Header
          title={t('benefits:title')}
          rightAction={() => {}}
          rightIcon={<MessageDotsIcon />}
        />
        <Container style={{ paddingHorizontal: Theme.Sizes.Padding, marginTop: 21 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
          >
            <Container style={{ marginBottom: 16 }}>
              <ImageLargeCarousel images={[
                BENEFIT_IMG,
                BENEFIT_IMG,
                BENEFIT_IMG,
              ]}
              />
            </Container>
            <Text
              text={t('benefits:offerByEthos')}
              fontSize={11}
            />
            <Container flex>
              <Text
                text={benefit?.title}
                fontWeight="Semibold"
                fontSize={20}
                marginTop={5}
              />
              <Text
                text={benefit?.description}
                marginTop={15}
                marginBottom={20}
              />
              <Container width="100%" height={1} backgroundColor={Theme.Colors.PlaceboBlue} />
              <Container style={{ marginVertical: 18 }}>
                <Container
                  backgroundColor={!collapsed
                    ? Theme.Colors.PlaceboBlue
                    : 'transparent'}
                  style={{ borderRadius: 24, paddingTop: 0 }}
                >
                  <MultipleTextButton
                    onPress={() => setCollapsed(!collapsed)}
                    title={t('benefits:whatIncludes')}
                    borderRadius={24}
                    fontWeight="Semibold"
                    backgroundColor={Theme.Colors.PlaceboBlue}
                    labelColor={Theme.Colors.DarkSoul}
                    rightIcon={(
                      <Container
                        center
                        style={{ backgroundColor: Theme.Colors.PlaceboBlue, borderRadius: 14, justifyContent: 'center' }}
                      >
                        {collapsed ? <ChevronDownIcon /> : <ArrowUpIcon /> }
                      </Container>
                    )}
                    alignContent="space-between"
                  />
                  <Collapsible collapsed={collapsed}>
                    {benefit.benefits.map((item: any) => (includesPointsContent(item)))}
                  </Collapsible>
                </Container>
              </Container>
              {true && (
              <Container style={{ marginVertical: 18 }}>
                <Container
                  backgroundColor={!collapsedInfo
                    ? Theme.Colors.PlaceboBlue
                    : 'transparent'}
                  style={{ borderRadius: 24, paddingTop: 0 }}
                >
                  <MultipleTextButton
                    onPress={() => setCollapsedInfo(!collapsedInfo)}
                    title={t('benefits:aboutMyPackage')}
                    borderRadius={24}
                    fontWeight="Semibold"
                    backgroundColor={Theme.Colors.PlaceboBlue}
                    labelColor={Theme.Colors.DarkSoul}
                    rightIcon={(
                      <Container
                        center
                        style={{ backgroundColor: Theme.Colors.PlaceboBlue, borderRadius: 14, justifyContent: 'center' }}
                      >
                        {collapsedInfo ? <ChevronDownIcon /> : <ArrowUpIcon /> }
                      </Container>
                    )}
                    alignContent="space-between"
                  />
                  <Collapsible collapsed={collapsedInfo}>
                    <Container row center style={{ paddingHorizontal: 36, borderRadius: 34, paddingVertical: 5 }}>
                      <Container
                        circle
                        backgroundColor={Theme.Colors.DarkSoul}
                        width={6}
                        height={6}
                      />
                      <Text
                        text={t('benefits:hideDate')}
                        fontSize={13}
                        marginLeft={10}
                        textAlign="left"
                      />
                    </Container>
                    <Container
                      row
                      center
                      style={{
                        paddingHorizontal: 36,
                        borderRadius: 34,
                        paddingTop: 5,
                        paddingBottom: 26,
                      }}
                    >
                      <Container
                        circle
                        backgroundColor={Theme.Colors.DarkSoul}
                        width={6}
                        height={6}
                      />
                      <Text
                        text={t('benefits:expiredDate')}
                        fontSize={13}
                        marginLeft={10}
                        textColor={Theme.Colors.HotCoral}
                        textAlign="left"
                      />
                    </Container>
                  </Collapsible>
                </Container>
              </Container>
              )}
              <Container
                height={1}
                backgroundColor={Theme.Colors.PlaceboBlue}
              />
              <Container row center space="between">
                <Text
                  text={t('benefits:annualCoverage')}
                  textColor={Theme.Colors.Black}
                  fontSize={13}
                  marginTop={19}
                />
                <Text
                  text="$150.00"
                  fontSize={22}
                  typography="header"
                  marginLeft={10}
                  textAlign="right"
                />
              </Container>
              {isActive && (
              <Text
                text={t('benefits:callTo')}
                textColor={Theme.Colors.Black}
                fontSize={14}
                marginTop={55}
              />
              )}
              <Button
                onPress={onPress}
                label={isActive
                  ? t('benefits:call')
                  : t('benefits:hire')}
                marginTop={55}
                marginBottom={230}
              />
            </Container>
          </ScrollView>
        </Container>
      </Container>
    </Container>
  );
};

export default HireBenefitFlowScreen;
