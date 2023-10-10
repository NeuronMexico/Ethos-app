import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Container, Text } from 'components';
import Theme from 'theme';
import { ClabeCard } from './ClabeCard';

const EXPIRATION_TIME = 5 * 60;

interface Props {
}

const DigitalCardBottomSheetContent: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();

  const [cvvTime, setCvvTime] = useState<string>('05:00');

  useEffect(() => {
    let remainingTime = EXPIRATION_TIME;
    const interval = setInterval(() => {
      if (remainingTime > 0) {
        remainingTime -= 1;
      }

      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;

      setCvvTime(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <ClabeCard clabe="8438 2849 3923 3334" />
      <Container middle>
        <Text text={t('cards:validUntil')} typography="caption" />
        <Text text="15/29" typography="header" fontWeight="Bold" marginTop={8} />
      </Container>

      <Container middle style={styles.cvvContainer}>
        <Text text="783" typography="header" textColor={Theme.Colors.Sambucus} />
      </Container>

      <Text
        text={t('cards:securityCodeDuration', { time: cvvTime })}
        fontSize={12}
        fontWeight="Regular"
        textAlign="center"
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  cvvContainer: {
    padding: 18,
    borderRadius: 100,
    backgroundColor: Theme.Colors.PlaceboBlue,
    marginTop: 16,
    marginBottom: 23,
  },
});

export { DigitalCardBottomSheetContent };
