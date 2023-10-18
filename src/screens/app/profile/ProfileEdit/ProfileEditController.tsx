import React, { ReactNode, useRef, useState } from 'react';
import { SafeArea } from 'components/atoms/SafeArea';
import {
  BlueAvatar, GrayAvatar, GreenAvatar, OrangeAvatar, RedAvatar, YellowAvatar,
} from 'assets/svg';
import {
  BottomSheet, Button, Container, ProfilePhoto,
} from 'components';
import { Animated, ScrollView } from 'react-native';
import Theme from 'theme';
import { useTranslation } from 'react-i18next';
import ProfileEditScreen from './ProfileEditScreen';

const ProfileEditController: React.FC = () => {
  const { t } = useTranslation();
  const offset = useRef(new Animated.Value(0)).current;

  const [showChangePhotoModal, setShowChangePhotoModal] = useState<number>(-1);
  const [renderComponent, setRenderComponent] = useState<ReactNode>(null);
  const [changePhotoSnapPoints, setChangePhotoSnapPoints] = useState<Array<string | number>>(['80%']);

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
    setChangePhotoSnapPoints(['98%']);
    setShowChangePhotoModal(0);
    setRenderComponent(changeProfilePhoto);
  };
  return (
    <SafeArea>
      <ProfileEditScreen onSubmit={onSubmit} onPressEditPhoto={onPressEditPhoto} />
      <BottomSheet
        state={showChangePhotoModal}
        handleSheetChanges={setShowChangePhotoModal}
        snapPoints={changePhotoSnapPoints}
        enablePanDownToClose
      >
        {renderComponent}
      </BottomSheet>
    </SafeArea>
  );
};

export default ProfileEditController;
