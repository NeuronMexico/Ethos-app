/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ChevronRightIcon,
  ExportIcon, FilterIcon,
} from 'assets/svg';
import {
  Container, Touchable,
} from 'components';
import { CustomText as Text } from 'components/atoms/CustomText';
import Theme from 'theme';
import { StyleSheet } from 'react-native';
import { CustomPicker } from 'components/atoms/CustomPicker';
import { CustomDateTimePicker } from 'components/atoms/CustomDateTimePicker';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PieChart } from 'react-native-chart-kit';

interface Props {
  product: any;
}
interface CategoryItemProps {
  item: any
}

const CategoryItem = ({ item }: CategoryItemProps) => (
  <Container row center>
    <Container width={21} height={21} backgroundColor={item.color} style={{ borderRadius: 4 }} />
    <Container style={{ marginLeft: 8 }}>
      <Text text={item?.category} textColor={Theme.Colors.DarkSoul} typography="body" fontWeight="Medium" />
      <Text
        text={item?.total}
        marginTop={4}
        textColor={Theme.Colors.Carbon}
        typography="subtitle"
        fontWeight="Regular"
      />
    </Container>
  </Container>
);

const TabExpensesSection: React.FC<Props> = ({ product }: Props) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const [showFilter, setShowFilter] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [fromDate, setFromDate] = useState(new Date());
  const [untilDate, setUntilDate] = useState(new Date());

  const data = [
    { name: 'Orange', population: 50, color: Theme.Colors.DarkSoul },
    { name: 'Green', population: 16, color: Theme.Colors.Wistful },
    { name: 'Blue', population: 16, color: Theme.Colors.BossaNovaBlue },
    { name: 'Purple', population: 17, color: Theme.Colors.SpaceCadet },
  ];

  const filterCard = () => {
    const today = new Date();
    const currentMonth = today.getMonth() + 1;

    const monthNames = [
      t('months:1'),
      t('months:2'),
      t('months:3'),
      t('months:4'),
      t('months:5'),
      t('months:6'),
      t('months:7'),
      t('months:8'),
      t('months:9'),
      t('months:10'),
      t('months:11'),
      t('months:12'),
    ];

    const monthOptions = [];

    monthOptions.push({
      label: monthNames[currentMonth - 1],
      value: currentMonth.toString(),
    });

    for (let i = 1; i < currentMonth; i++) {
      const monthValue = i.toString();
      const monthLabel = monthNames[i - 1];
      monthOptions.push({ label: monthLabel, value: monthValue });
    }

    return (
      <Container
        style={styles.filterContainer}
        backgroundColor="transparent"
      >
        <Text text={t('expenses:filter')} typography="header" fontSize={17} />
        <Container>
          <Text text={t('expenses:month')} typography="body" textColor={Theme.Colors.Carbon} />
          <CustomPicker
            placeholder="Select a month"
            value={selectedMonth}
            onValueChange={(value) => setSelectedMonth(value)}
            options={monthOptions}
            marginTop={0}
          />
        </Container>
        <Container row center style={{ justifyContent: 'space-between' }}>
          <Container>
            <Text text={t('expenses:from')} typography="body" textColor={Theme.Colors.Carbon} />
            <CustomDateTimePicker
              width={155}
              placeholder=""
              value={fromDate}
              onValueChange={(value) => setFromDate(value)}
              marginTop={0}
            />
          </Container>
          <Container>
            <Text text={t('expenses:until')} typography="body" textColor={Theme.Colors.Carbon} />
            <CustomDateTimePicker
              width={155}
              placeholder=""
              value={untilDate}
              onValueChange={(value) => setUntilDate(value)}
              marginTop={0}
            />
          </Container>
        </Container>
      </Container>
    );
  };

  return (
    <Container>
      <Container row center style={{ justifyContent: 'space-between' }}>
        <Text text={t('expenses:currentMonth')} typography="header" />
        <Container row style={{ justifyContent: 'space-around', gap: 16 }}>
          <Touchable onPress={() => {}}>
            <Container middle style={styles.rightButtonContainer} backgroundColor={Theme.Colors.PlaceboBlue}>
              <ExportIcon />
            </Container>
          </Touchable>
          <Touchable onPress={() => setShowFilter(!showFilter)}>
            <Container middle style={styles.rightButtonContainer} backgroundColor={Theme.Colors.PlaceboBlue}>
              <FilterIcon />
            </Container>
          </Touchable>
        </Container>
      </Container>
      <Container>
        <Container center style={{ marginTop: 26, marginBottom: 22 }}>
          {showFilter ? filterCard() : (
            <PieChart
              data={data}
              width={220}
              height={211}
              chartConfig={{
                backgroundGradientFrom: '#1E2923',
                backgroundGradientTo: '#08130D',
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              accessor="population"
              backgroundColor="transparent"
              hasLegend={false}
              paddingLeft="50"
            />
          )}
        </Container>
        <Touchable onPress={() => navigate('ExpensesSummary')}>
          <Container row center style={{ justifyContent: 'space-between', marginVertical: 32 }}>
            <Container row>
              <Text text={t('expenses:total')} typography="header" />
              <ChevronRightIcon />
            </Container>
            <Text text={product.total} typography="header" />
          </Container>
        </Touchable>
        {product.categories?.length > 0 ? (
          <Container
            row
            style={{
              display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'space-between',
            }}
          >
            {product.categories.map((category: any, index: number) => (
              <CategoryItem key={index} item={category} />
            ))}

          </Container>
        ) : (
          <Text
            text={t('expenses:notCategorized')}
            textAlign="center"
            marginTop={64}
            typography="body"
          />
        )}
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    gap: 16,
    width: '100%',
    paddingVertical: Theme.Sizes.Padding,
    marginBottom: 0,
    paddingHorizontal: Theme.Sizes.Padding,
    backgroundColor: Theme.Colors.White,
    borderRadius: 24,
    shadowColor: Theme.Colors.Carbon,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 8,
  },
  rightButtonContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
});

export { TabExpensesSection };
