import React, { useRef, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import {
  Button,
  Container, Header, RadioButtonField, Text,
} from 'components';
import Theme from 'theme';
import { formatDate, formatQuantity } from 'utils';

const MOCK_DATA = [
  {
    id: 'op1',
    months: 3,
    monthlyPayment: 2328,
    total: 7729.5,
  },
  {
    id: 'op2',
    months: 6,
    monthlyPayment: 1164,
    total: 7551,
  },
  {
    id: 'op3',
    months: 9,
    monthlyPayment: 904.37,
    total: 8139.33,
  },
  {
    id: 'op4',
    months: 12,
    monthlyPayment: 709.06,
    total: 8508.72,
  },
];

interface Props {
  onSubmit: (data: typeof MOCK_DATA[0]) => void
}

const DeferPurchasesScreen: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const { goBack } = useNavigation();

  const pagerViewRef = useRef<PagerView>(null);
  const currentIndexRef = useRef<number>(0);

  const [selectedOption, setSelectedOption] = useState<typeof MOCK_DATA[0]>();

  return (
    <Container flex>
      <Header
        title={t('cards:deferPurchases')}
        showVirtualAssistantAction
        backAction={() => {
          if (currentIndexRef.current > 0) pagerViewRef.current?.setPage(currentIndexRef.current - 1);
          else goBack();
        }}
      />
      <PagerView
        ref={pagerViewRef}
        style={{ flex: 1 }}
        scrollEnabled={false}
        onPageSelected={({ nativeEvent: { position } }) => {
          currentIndexRef.current = position;
        }}
      >
        <Container flex>
          <Text
            text={t('cards:payYourWayAndPace')}
            marginTop={32}
            typography="header"
            marginHorizontal={Theme.Sizes.Padding}
          />
          <Text
            text={t('cards:selectFromParticipatingPurchases')}
            marginTop={16}
            marginBottom={23}
            typography="subtitle"
            marginHorizontal={Theme.Sizes.Padding}
          />
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingHorizontal: Theme.Sizes.Padding, flexGrow: 1 }}
            ListFooterComponentStyle={{ flexGrow: 1 }}
            data={[0]}
            renderItem={() => (
              <Container>
                <Text
                  text={formatDate(new Date(), 'MMMM dd, yyyy')}
                  transform="capitalize"
                  typography="subtitle"
                  fontWeight="Semibold"
                  textColor={Theme.Colors.GreatFalls}
                  marginBottom={16}
                />
                <Container style={[styles.borderStyle, { borderBottomWidth: 1 }]}>
                  <RadioButtonField
                    label="VIVA AEROBUS CIB"
                    selected
                    onChange={() => {}}
                    caption={t('cards:purchase')}
                    value={formatQuantity(6982.7)}
                    centerRadio
                    captionSize={13}
                    captionFontWeight="Medium"
                    captionTextColor={Theme.Colors.GreatFalls}
                    marginVertical={16}
                  />
                </Container>
              </Container>
            )}
            ListFooterComponent={(
              <Container style={{ flexGrow: 1 }} alignment="end" center>
                <Text text={t('cards:totalAmountToDefer')} typography="header" fontWeight="Regular" />
                <Text text={formatQuantity(6982.7)} typography="header" fontWeight="Bold" />
              </Container>
            )}
          />
          <Container style={{ paddingHorizontal: Theme.Sizes.Padding }}>
            <Button
              label={t('global:continue')}
              onPress={() => pagerViewRef.current?.setPage(1)}
              marginBottom={16}
              marginTop={60}
            />
          </Container>
        </Container>
        <Container flex>
          <Text
            text={t('cards:defermentMonths')}
            marginTop={32}
            marginBottom={16}
            typography="header"
            marginHorizontal={Theme.Sizes.Padding}
          />
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingHorizontal: Theme.Sizes.Padding, flexGrow: 1 }}
            ListFooterComponentStyle={{ flexGrow: 1 }}
            data={MOCK_DATA}
            renderItem={({ item, index }) => (
              <Container style={[styles.borderStyle, { borderBottomWidth: index === MOCK_DATA.length - 1 ? 1 : 0 }]}>
                <RadioButtonField
                  label={t('cards:monthlyInstallmentsOf', { months: item.months })}
                  selected={selectedOption?.id === item.id}
                  onChange={() => setSelectedOption(item)}
                  caption={t('cards:totalToPay')}
                  value={formatQuantity(item.monthlyPayment)}
                  captionValue={formatQuantity(item.total)}
                  centerRadio
                  captionSize={13}
                  captionFontWeight="Medium"
                  captionTextColor={Theme.Colors.GreatFalls}
                  marginVertical={16}
                />
              </Container>
            )}
            ListFooterComponent={(
              <Container style={{ flexGrow: 1 }} alignment="end" center>
                <Text text={t('cards:interestRate')} typography="header" fontWeight="Regular" />
                <Text text="32%" typography="header" fontWeight="Bold" />
              </Container>
            )}
          />
          <Container style={{ paddingHorizontal: Theme.Sizes.Padding }}>
            <Button
              label={t('global:continue')}
              onPress={() => onSubmit(selectedOption!)}
              marginBottom={16}
              marginTop={60}
              disabled={!selectedOption}
            />
          </Container>
        </Container>
      </PagerView>
    </Container>
  );
};

const styles = StyleSheet.create({
  borderStyle: {
    borderTopWidth: 1,
    borderColor: Theme.Colors.PlaceboBlue,
  },
});

export default DeferPurchasesScreen;
