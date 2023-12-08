import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Container, Text } from 'components';
import { useTranslation } from 'react-i18next';
import { PersonalDispositionIllustration } from 'assets/svg';
import Theme from 'theme';
import { BOTTOM_TAB_INSET } from 'utils';

interface Props {
  isCandidate: boolean;
  iWantToKnowMore: () => void;
}

const PersonalDispositionPage: React.FC<Props> = (props: Props) => {
  const {
    isCandidate,
    iWantToKnowMore,
  } = props;
  const { t } = useTranslation();
  const { container, illustrationContainer } = styles;

  return (
    <Container flex style={container}>
      <Container
        center
        middle
        style={illustrationContainer}
      >
        <PersonalDispositionIllustration />
        <Text
          text={t('personalDisposition:screenMessage')}
          textAlign="center"
          fontSize={17}
          marginTop={32}
        />
        <Text
          text={t(`personalDisposition:${isCandidate ? 'screenMessage' : 'screenMessage2'}`)}
          textAlign="center"
          fontSize={17}
          marginVertical={32}
        />
        {isCandidate && (<Button label={t('personalDisposition:iWantToKnowMore')} onPress={iWantToKnowMore} />)}
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Theme.Sizes.Padding,
    paddingTop: Theme.Sizes.MarginTop,
    paddingBottom: BOTTOM_TAB_INSET,
  },
  illustrationContainer: {
    marginTop: Theme.Sizes.MarginTop,
    paddingHorizontal: 26,
  },
});

export { PersonalDispositionPage };
