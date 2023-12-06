import React, { useRef, useState } from 'react';
import { Text, TextStyle } from 'react-native';
import PagerView from 'react-native-pager-view';
import {
  Button, Container, DotIndicator, FadeInImage, SafeArea, TouchableText,
} from 'components';
import { ETHOS_CREDIT_LOGO } from 'assets/images';
import Theme from 'theme';
import { useTranslation } from 'react-i18next';
import { RightArrowIcon } from 'assets/svg';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface HighlightedText {
  text: string;
  highlightedWords: string[];
}

const InitialOnboardingPresentation = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const { t } = useTranslation();
  const pagerViewRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const totalPages = 3;
  const lastPage = currentPage + 1 === totalPages;

  const renderHighlightedText = (highlightedText: HighlightedText) => {
    const words = highlightedText?.text.split(' ');

    return (
      <Text style={{
        marginBottom: 100,
        color: '#2B2B2B',
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: 'bold' as TextStyle['fontWeight'],
      }}
      >
        {words && words.map((word, index) => {
          const isHighlighted = highlightedText?.highlightedWords.includes(word.toLowerCase());
          return (
            <Text
              key={index}
              style={{
                backgroundColor: isHighlighted ? '#BEEBCB' : 'transparent',
              }}
            >
              {word}
              {' '}
            </Text>
          );
        })}
      </Text>
    );
  };

  const sections: HighlightedText[] = [
    { text: t('onboarding:subtitle1'), highlightedWords: t('onboarding:highlighted1').split(' ') },
    { text: t('onboarding:subtitle2'), highlightedWords: t('onboarding:highlighted2').split(' ') },
    { text: t('onboarding:subtitle3'), highlightedWords: t('onboarding:highlighted3').split(' ') },
  ];

  return (
    <SafeArea bottomSafeArea={false}>
      <Container flex style={{ marginHorizontal: Theme.Sizes.Padding, marginTop: 13 }}>
        <Container row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <FadeInImage source={ETHOS_CREDIT_LOGO} width={84} height={13.5} />
          <TouchableText text={t('global:skip')} typography="header" fontSize={13} onPress={() => {}} />
        </Container>
        <Container flex={5}>
          <PagerView
            ref={pagerViewRef}
            initialPage={0}
            style={{ flex: 1 }}
            onPageScroll={({ nativeEvent: { position } }) => setCurrentPage(position)}
          >
            <Container style={{ justifyContent: 'flex-end' }}>
              {renderHighlightedText(sections[currentPage])}
              <Container row style={{ justifyContent: 'space-between', marginBottom: 53 }}>
                <DotIndicator totalDots={totalPages} currentIndex={currentPage} />
                {lastPage ? (
                  <Button
                    label={t('global:continue')}
                    onPress={() => navigate('Login')}
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
          </PagerView>
        </Container>
      </Container>
    </SafeArea>
  );
};

export { InitialOnboardingPresentation };
