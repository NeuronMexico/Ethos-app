import React, {
  ReactElement, useRef, useState,
} from 'react';
import {
  Image, Modal, StyleSheet,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  TUTORIAL_FIRST,
  TUTORIAL_SECOND,
  TUTORIAL_THIRD,
  TUTORIAL_FOURTH
} from 'assets/images';
import PagerView from 'react-native-pager-view';
import { DotPageIndicator, TouchableText } from 'components/molecules';
import Theme from '../../theme';
import { Container, SafeArea, Text } from '../atoms';

interface Props {
  visible: boolean;
  initialPage?: number;
  onDismiss: () => void;
}

interface StepProps {
  title: string;
  description?: string | ReactElement
  children: ReactElement;
}

const TUTORIAL_IMAGES = [
  TUTORIAL_FIRST,
  TUTORIAL_SECOND,
  TUTORIAL_THIRD,
  TUTORIAL_FOURTH,
];

const Tutorial: React.FC<Props> = (props: Props) => {
  const {
    visible, initialPage, onDismiss,
  } = props;

  const { skipButtonContainerStyle } = styles;
  const { t } = useTranslation();

  const pagerViewRef = useRef<PagerView>(null);
  const [index, setIndex] = useState<number>(initialPage || 0);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <SafeArea bottomSafeArea={false}>
        <Container style={skipButtonContainerStyle}>
          <TouchableText
            onPress={() => {
              setIndex(0);
              onDismiss();
            }}
            text={t(`global:${(index + 1) < TUTORIAL_IMAGES.length ? 'exit' : 'finalize'}`).toLocaleLowerCase()}
            textColor={Theme.Colors.DarkSoul}
          />
        </Container>
        <Container flex={5}>
          <PagerView
            ref={pagerViewRef}
            initialPage={initialPage || 0}
            onPageScroll={({ nativeEvent: { position } }) => setIndex(position)}
            style={{ flex: 1 }}
          >
            { Array(TUTORIAL_IMAGES.length).fill(null).map((_, i) => (
              <Container key={i.toString()}>
                <Step
                  title={t(`tutorial:screen${i + 1}Title`)}
                  description={t(`tutorial:screen${i + 1}Msg`)}
                >
                  <Image
                    source={TUTORIAL_IMAGES[i]}
                    style={{
                      width: 350,
                      height: 350,
                      backgroundColor: Theme.Colors.DarkSoul,
                      borderRadius: 1000,
                      margin: 'auto',
                    }}
                    resizeMode="contain"
                  />
                </Step>
              </Container>
            ))}
          </PagerView>
        </Container>
        <Container flex={1}>
          <DotPageIndicator currentStep={index + 1} totalSteps={TUTORIAL_IMAGES.length} />
        </Container>
      </SafeArea>
    </Modal>
  );
};

const Step: React.FC<StepProps> = (props: StepProps) => {
  const { title, description, children } = props;

  return (
    <Container center flex style={{ paddingHorizontal: 32, marginTop: 17 }}>
      <Container flex={1}>
        {children}
      </Container>
      <Container flex={1} style={{ marginTop: Theme.Sizes.Padding }}>
        <Text
          text={title}
          typography="subtitle"
          textAlign="left"
          fontSize={21}
          fontWeight="Medium"
          marginBottom={14}
          marginTop={29}
        />
        {typeof description === 'string' ? (
          <Text
            text={description}
            typography="title"
            textAlign="left"
            fontSize={16}
            fontWeight="Regular"
          />
        ) : description }
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  skipButtonContainerStyle: {
    marginTop: 16,
    marginRight: Theme.Sizes.Padding,
    alignItems: 'flex-end',
  },
});

export { Tutorial };
