import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { EyeIcon, EyeSlashIcon } from 'assets/svg';
import {
  Container, ProgressBar, Text, Touchable,
} from 'components';
import Theme from 'theme';
import { Animated, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';

interface Props {
  // TODO: Implementation
  product: any;
}

const TabSection: React.FC<Props> = ({ product }: Props) => {
  const { t } = useTranslation();

  const [isBlurred, setIsBlurred] = useState<boolean>(true);
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!isBlurred) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0.3,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBlurred]);

  return (
    <Container flex>
      <ProgressBar progress={0.5} />
      <Container flex row space="between" style={{ paddingTop: 16 }}>
        <Container flex={1.5} style={{ marginRight: 16 }}>
          <Animated.View style={{ opacity, alignSelf: 'flex-start' }}>
            <Text
              text={`$ ${product.info.usedBalance.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })}`}
              textColor={Theme.Colors.White}
              fontWeight="ExtraBold"
              fontSize={17}
            />
            {
              isBlurred
                ? (
                  <BlurView
                    style={[StyleSheet.absoluteFill, { borderRadius: 8 }]}
                    blurType="light"
                    blurAmount={3}
                    reducedTransparencyFallbackColor="white"
                  />
                )
                : null
            }
          </Animated.View>
          <Text
            text={
              product.type === 'card'
                ? t('tabProducts:balanceUsed')
                : t('tabProducts:paid', { current: 0, last: 6 })
            }
            textColor={Theme.Colors.White}
            fontWeight="Semibold"
            fontSize={13}
          />
        </Container>
        <Container flex style={{ marginRight: 16 }}>
          <Animated.View style={{ opacity, alignSelf: 'flex-start' }}>
            <Text
              text={`$ ${product.info.availableBalance.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })}`}
              textColor={Theme.Colors.White}
              fontWeight="ExtraBold"
              fontSize={17}
            />
            {
              isBlurred
                ? (
                  <BlurView
                    style={[StyleSheet.absoluteFill, { borderRadius: 8 }]}
                    blurType="light"
                    blurAmount={3}
                    reducedTransparencyFallbackColor="white"
                  />
                )
                : null
            }
          </Animated.View>
          <Text
            text={t('tabProducts:balanceAvailable')}
            textColor={Theme.Colors.White}
            fontWeight="Semibold"
            fontSize={13}
          />
        </Container>
        <Touchable onPress={() => setIsBlurred(!isBlurred)}>
          {
            isBlurred
              ? (<EyeSlashIcon color={Theme.Colors.White} />)
              : (<EyeIcon color={Theme.Colors.White} />)
          }
        </Touchable>
      </Container>
    </Container>
  );
};

export default TabSection;
