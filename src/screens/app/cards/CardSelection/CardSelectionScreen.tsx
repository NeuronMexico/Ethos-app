import React, {
  useCallback, useMemo, useRef, useState,
} from 'react';
import {
  Button, Container, DotIndicator, Header, Text, Touchable,
} from 'components';
import { useTranslation } from 'react-i18next';
import Theme from 'theme';
import { FlipIcon } from 'assets/svg';
import { formatQuantity } from 'utils';
import {
  FlatList, NativeScrollEvent, NativeSyntheticEvent,
} from 'react-native';
import { AnimatedCard } from './components';

const CARD_OPTIONS = [
  {
    id: '1',
    includesName: true,
    cardCost: 250,
    shippingCost: 0,
    deliveryTime: 10,
  },
  {
    id: '2',
    includesName: false,
    cardCost: 0,
    shippingCost: 0,
    deliveryTime: 1,
  },
];

interface Props {
  onPressContinue: () => void;
}

const CardSelectionScreen: React.FC<Props> = ({ onPressContinue }) => {
  const { t } = useTranslation();

  const itemWidthRef = useRef<number>(0);

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [flipCard, setFlipCard] = useState<Array<boolean>>([true, true]);

  const selectedCard = useMemo(() => CARD_OPTIONS[selectedIndex], [selectedIndex]);

  const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const ind = event.nativeEvent.contentOffset.x / itemWidthRef.current;
    const roundIndex = Math.round(ind);
    setSelectedIndex(roundIndex);
  }, []);

  const onFlipCard = useCallback((index = selectedIndex) => {
    const auxFlip = [...flipCard];
    auxFlip[index] = !auxFlip[index];
    setFlipCard(auxFlip);
  }, [flipCard, selectedIndex]);

  return (
    <Container flex>
      <Header title={t('cards:selectLayout')} backButtonBorderless />
      <Container flex style={{ marginTop: Theme.Sizes.MarginTop }}>
        <Text
          text={selectedCard.includesName ? t('cards:customBlue') : t('cards:plainBlue')}
          textAlign="center"
          typography="header"
          marginBottom={32}
        />
        <Container center>
          <FlatList
            data={CARD_OPTIONS}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginHorizontal: -9, marginBottom: 32, paddingHorizontal: Theme.Sizes.Padding }}
            onScroll={onScroll}
            renderItem={({ item: { includesName }, index }) => (
              <Container onLayout={({ nativeEvent: { layout } }) => { itemWidthRef.current = layout.width; }}>
                <AnimatedCard flip={flipCard[index]} includesName={includesName} onPressCard={() => onFlipCard(index)} />
              </Container>
            )}
          />
          <DotIndicator
            totalDots={2}
            currentIndex={selectedIndex}
            inactiveColor={Theme.Colors.White}
          />
          <Touchable
            hitSlop={10}
            onPress={() => onFlipCard()}
            marginTop={32}
          >
            <FlipIcon />
          </Touchable>
        </Container>
        <Container flex style={{ paddingHorizontal: Theme.Sizes.Padding }}>
          <Container flex alignment="end">
            <Container row>
              <Container flex>
                <Text text={t('cards:cardCost')} typography="subtitle" fontWeight="Medium" />
              </Container>
              <Text
                text={formatQuantity(selectedCard.cardCost)}
                typography="subtitle"
                fontWeight="Semibold"
              />
            </Container>
            <Container row>
              <Container flex>
                <Text text={t('cards:shippingCost')} typography="subtitle" fontWeight="Medium" />
              </Container>
              <Text
                text={formatQuantity(selectedCard.shippingCost)}
                typography="subtitle"
                fontWeight="Semibold"
              />
            </Container>

            <Container row style={{ marginTop: 16 }}>
              <Container flex>
                <Text text={t('cards:total')} fontSize={22} fontWeight="Semibold" />
              </Container>
              <Text
                text={formatQuantity(selectedCard.cardCost + selectedCard.shippingCost)}
                fontSize={22}
                fontWeight="Semibold"
              />
            </Container>

            <Text
              text={t(`cards:deliveryTime${selectedCard.deliveryTime}BusinessDays`)}
              typography="subtitle"
              fontWeight="Medium"
              textAlign="center"
              marginTop={16}
            />

            <Button label={t('global:continue')} marginVertical={16} onPress={onPressContinue} />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default CardSelectionScreen;
