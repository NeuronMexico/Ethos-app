import React, { useRef } from 'react';
import { Animated, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Container } from 'components/atoms/Container';
import { ProfilePhoto } from 'components/molecules/ProfilePhoto';
import { Button } from 'components/molecules/Button';
import {
  BlueAvatar, GrayAvatar, GreenAvatar, OrangeAvatar, RedAvatar, YellowAvatar,
} from 'assets/svg';
import Theme from 'theme';

const AVATARS = [
  YellowAvatar,
  BlueAvatar,
  RedAvatar,
  GreenAvatar,
  GrayAvatar,
  OrangeAvatar,
];

interface Props {
  onPress: (value: number) => void;
}

const SheetContentProfilePhoto: React.FC<Props> = ({
  onPress,
}: Props) => {
  const { t } = useTranslation();
  const offset = useRef(new Animated.Value(0)).current;

  const handleOnPress = () => {
    onPress(-1);
  };

  return (
    <Container>
      <ProfilePhoto size={80} bottomStyle={{ marginTop: 0 }} />
      <ScrollView
        style={{ flex: 1, padding: Theme.Sizes.Padding }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
      >
        <Container
          row
          center
          crossCenter
          style={{
            gap: 16, display: 'flex', flexWrap: 'wrap', padding: Theme.Sizes.Padding,
          }}
        >
          {AVATARS.map((SvgComponent, index) => (
            <SvgComponent key={index} width={110} height={110} />
          ))}
        </Container>
      </ScrollView>
      <Container flex alignment="end">
        <Button
          onPress={() => {}}
          label={t('profile:takeAPhoto')}
          backgroundColor={Theme.Colors.WhiteSmoke}
          textColor={Theme.Colors.DarkSoul}
          width="100%"
          marginTop={21}
        />
        <Button
          onPress={() => {}}
          label={t('profile:chooseImage')}
          backgroundColor={Theme.Colors.WhiteSmoke}
          textColor={Theme.Colors.DarkSoul}
          marginVertical={21}
          width="100%"
        />
        <Button label={t('global:save')} onPress={handleOnPress} />
      </Container>
    </Container>
  );
};

export { SheetContentProfilePhoto };
