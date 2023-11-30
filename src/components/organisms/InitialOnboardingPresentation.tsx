import React, { useRef, useState } from 'react';
import { Animated } from 'react-native';
import PagerView from 'react-native-pager-view';
import {
  Button,
  Container, DotIndicator, FadeInImage, Text, TouchableText,
} from 'components';
import { ETHOS_CREDIT_LOGO } from 'assets/images';
import Theme from 'theme';
import { useTranslation } from 'react-i18next';
import { RightArrowIcon } from 'assets/svg';

interface HighlightedText {
  text: string;
  highlightedWords: string;
}

const InitialOnboardingPresentation = () => {
  const { t } = useTranslation();
  const pagerViewRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const totalPages = 3;
  const lastPage = currentPage + 1 === totalPages;

  const renderHighlightedText = (highlightedText: HighlightedText) => {
    const words = highlightedText?.text.split(' ');

    return (
      <Text typography="title" fontSize={30} marginBottom={100}>
        {words && words.map((word, index) => {
          const isHighlighted = highlightedText.highlightedWords.includes(word);
          return (
            <Container
              key={index}
              height={40}
              style={{
                backgroundColor: isHighlighted ? '#BEEBCB' : 'transparent',
                borderRadius: 3,
                paddingHorizontal: 5,
              }}
            >
              <Text
                key={index}
                typography="title"
                fontSize={31}
              >
                {word}
                {' '}
              </Text>
            </Container>
          );
        })}
      </Text>
    );
  };

  const sections: HighlightedText[] = [
    { text: t('onboarding:subtitle1'), highlightedWords: t('onboarding:highlighted1') },
    { text: t('onboarding:subtitle2'), highlightedWords: t('onboarding:highlighted2') },
    { text: t('onboarding:subtitle3'), highlightedWords: t('onboarding:highlighted3') },
  ];

  const section = (
    <Container style={{ justifyContent: 'flex-end' }}>
      {renderHighlightedText(sections[currentPage])}
      <Container row style={{ justifyContent: 'space-between', marginBottom: 53 }}>
        <DotIndicator totalDots={totalPages} currentIndex={currentPage} />
        {lastPage ? (
          <Button
            label={t('global:continue')}
            onPress={() => setCurrentPage(currentPage + 1)}
            width={132}
          />
        ) : (
          <Button
            onPress={() => setCurrentPage(currentPage + 1)}
            icon={<RightArrowIcon />}
            width={52}
            backgroundColor={Theme.Colors.DarkSoul}
          />
        )}
      </Container>
    </Container>
  );

  const nextPage = () => { setCurrentPage(0); };
  const handlePage = (position: number) => {
    if (lastPage) {
      nextPage();
    } else {
      setCurrentPage(position);
    }
  };

  return (
    <Container flex style={{ marginHorizontal: Theme.Sizes.Padding, marginTop: 13 }}>
      <Container row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <FadeInImage source={ETHOS_CREDIT_LOGO} width={84} height={13.5} />
        <TouchableText text={t('global:skip')} typography="header" fontSize={13} onPress={() => {}} />
      </Container>
      <Container flex>
        <Animated.View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <PagerView
            ref={pagerViewRef}
            style={{ flex: 1 }}
            onPageSelected={({ nativeEvent: { position } }) => handlePage(position)}
          >
            {section}
          </PagerView>
        </Animated.View>
      </Container>
    </Container>
  );
};

export { InitialOnboardingPresentation };
