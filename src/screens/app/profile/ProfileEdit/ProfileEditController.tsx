import React from 'react';
import { SafeArea } from 'components/atoms/SafeArea';
import {
  SheetContentProfilePhoto,
} from 'components';
import { useBottomSheet } from 'context';
import ProfileEditScreen from './ProfileEditScreen';

const ProfileEditController: React.FC = () => {
  const bottomSheet = useBottomSheet();

  const onSubmit = async () => {};

  const AVATARS = [
    YellowAvatar,
    BlueAvatar,
    RedAvatar,
    GreenAvatar,
    GrayAvatar,
    OrangeAvatar,
  ];

  const changeProfilePhoto = (
    <Container>
      <Container middle>
        <ProfilePhoto size={80} />
      </Container>
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
        <Button label={t('global:save')} onPress={() => { setShowChangePhotoModal(-1); }} />
      </Container>
    </Container>
  );

  const onPressEditPhoto = () => {
    bottomSheet.show(<SheetContentProfilePhoto onPress={() => bottomSheet.hide()} />);
  };

  return (
    <SafeArea>
      <ProfileEditScreen onSubmit={onSubmit} onPressEditPhoto={onPressEditPhoto} />
    </SafeArea>
  );
};

export default ProfileEditController;
