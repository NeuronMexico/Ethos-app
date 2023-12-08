import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button, CheckBoxField, CircularSlider, Container, Header, Input, Picker, ProfilePhoto, Text,
} from 'components';
import Theme from 'theme';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

interface Props {
  onSubmit: () => void;
  onPressEditPhoto: () => void;
}

const PersonalProjectScreen: React.FC<Props> = ({
  onSubmit,
  onPressEditPhoto,
}: Props) => {
  const { t } = useTranslation();
  const [sliderValue, setSliderValue] = useState(0);
  const [name, setName] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [card, setCard] = useState<string>('');
  const [termsAndConditions, setTermsAndConditions] = useState(true);

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  const MONTH_OPTIONS = [
    { label: '1 meses', value: '1' },
    { label: '2 meses', value: '2' },
    { label: '3 meses', value: '3' },
    { label: '6 meses', value: '4' },
  ];

  const OPTIONS = [
    { label: 'En mi tarjeta de crédito ** *334 ', value: '1' },
    { label: 'En mi tarjeta de crédito ** *674 ', value: '2' },
    { label: 'En mi tarjeta de crédito ** *551 ', value: '3' },
    { label: 'En mi tarjeta de crédito ** *334 ', value: '4' },
  ];

  return (
    <Container flex>
      <Header title={t('personalProject:title')} showVirtualAssistantAction />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <Container>
          <Text
            text={t('personalProject:howMuchMoney')}
            textAlign="center"
            marginTop={40}
            marginBottom={16}
          />
          <Container style={{ alignItems: 'center' }}>
            <CircularSlider
              size={200}
              value={sliderValue}
              meterColor={Theme.Colors.SpringBouquet}
              onValueChange={handleSliderChange}
              steps={3}
              minimumValue={0}
              maximumValue={10}
            />
            <Container
              style={{
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                top: '50%',
                left: '50%',
                marginTop: -30,
                marginLeft: -30,
              }}
            >
              <ProfilePhoto size={60} editable onPress={onPressEditPhoto} />
            </Container>
          </Container>
          <Text
            text="$20,500.00"
            textAlign="center"
            marginTop={10}
            marginBottom={16}
            typography="title"
            fontSize={21}
          />
          <Input
            value={name}
            onChangeText={setName}
            label={t('personalProject:nameOfProjects')}
          />
          <Picker
            value={time}
            onValueChange={setTime}
            options={MONTH_OPTIONS}
            label={t('personalProject:manyPeriods')}
            borderless={false}
            borderRadius={24}
            placeholder=""
          />
          <Picker
            value={card}
            onValueChange={setCard}
            options={OPTIONS}
            label={t('personalProject:howDoYouWantToUse')}
            borderless={false}
            borderRadius={24}
            placeholder=""
          />
          <Container>
            <Container row space="between">
              <Text
                text={t('personalProject:commission')}
                textAlign="center"
                marginTop={16}
                marginBottom={8}
              />
              <Text
                text="$500.00"
                textAlign="center"
                marginTop={16}
                marginBottom={8}
              />
            </Container>
            <Container row space="between">
              <Text
                text={t('personalProject:total')}
                textAlign="center"
                marginBottom={8}
              />
              <Text
                text="$26,100.00"
                textAlign="center"
                marginBottom={8}
              />
            </Container>
            <Container row space="between">
              <Text
                text={t('personalProject:monthlyPayment')}
                textAlign="center"
                marginBottom={72}
                typography="title"
              />
              <Text
                text="$8,700.00"
                textAlign="center"
                marginBottom={72}
                typography="title"
              />
            </Container>
          </Container>
          <CheckBoxField
            label=""
            selected={termsAndConditions}
            onChange={setTermsAndConditions}
            customLabel={(
              <Text marginLeft={8}>
                <Text text={t('personalProject:accept')} fontSize={15} />
                <Text text={t('personalProject:termsAndConditions')} typography="header" fontSize={15} />
                <Text text={t('personalProject:termsAndConditions2')} fontSize={15} />
              </Text>
          )}
          />
          <Button label={t('global:continue')} onPress={onSubmit} marginTop={16} />
        </Container>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    overflow: 'hidden',
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
});

export default PersonalProjectScreen;
