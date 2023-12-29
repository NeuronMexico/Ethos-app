import React, { useRef, useState } from 'react';
import { Linking, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import {
  CheckBox,
  Container, OptionButton, SafeArea, SheetContentProfilePhoto, Text,
  QRCode,
} from 'components';
import { ProfileStackParams, SOCIAL_LINKS, SocialMediaTypes } from 'utils';
import { ExportIcon } from 'assets/svg';
import Theme from 'theme';
import { useAlert, useBottomSheet } from 'context';
import ProfileScreen from './ProfileScreen';

const ProfileController: React.FC = () => {
  const { t } = useTranslation();

  const alert = useAlert();

  const { navigate } = useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  const containerRef = useRef<View>(null);

  const bottomSheet = useBottomSheet();
  const [dontShowAgain, setDontShowAgain] = useState<boolean>(false);

  const onPressLink = (type: SocialMediaTypes) => {
    Linking.openURL(SOCIAL_LINKS[type as keyof typeof SOCIAL_LINKS]).catch((error) => console.warn(error));
  };

  const onPressLogOut = () => {
    alert.show({
      title: t('profile:areYouSureToLogOut'),
      actions: [
        { label: t('global:cancel'), onPress: alert.hide, type: 'secondary' },
        { label: t('profile:logOut'), onPress: alert.hide, type: 'destructive-primary' },
      ],
    });
  };

  const renderDefaultComponent = (
    <Container
      ref={containerRef}
      middle
      center
      style={{ padding: 16 }}
    >
      <Container style={{ marginVertical: 16 }}>
        <QRCode
          value="erwerw"
        />
      </Container>
      <Text text="Mario Bárcenas López" typography="header" />
      <Text text="M515" marginBottom={16} />
      <OptionButton
        onPress={() => {}}
        width={55}
        height={55}
        borderRadius={15}
        backgroundColor={Theme.Colors.PlaceboBlue}
        marginHorizontal={5}
        label={t('global:share')}
        icon={<ExportIcon width={30} />}
      />
    </Container>
  );

  const onPressEditPhoto = () => {
    bottomSheet.show(<SheetContentProfilePhoto onPress={() => bottomSheet.hide()} />);
  };
  const bottomQR = () => bottomSheet.show(renderDefaultComponent);

  const onPressSensitiveInfoAlert = () => {
    alert.show({
      title: t('profile:sensitiveInformation'),
      message: t('profile:sensitiveInfoDescription'),
      extraInfoDown: (
        <Container row alignment="start">
          <CheckBox
            selected={dontShowAgain}
            onChange={setDontShowAgain}
          />
          <Text
            text={t('profile:dontShowAgain')}
            marginLeft={8}
            textColor={Theme.Colors.Carbon}
            fontWeight="Regular"
          />

        </Container>

      ),
      actions: [
        {
          label: t('global:continue'),
          onPress: () => {
            alert.hide();
            bottomQR();
          },
          type: 'primary',
        },
      ],
    });
  };

  return (
    <SafeArea>
      <ProfileScreen
        onPressLink={onPressLink}
        onPressCodeQR={onPressSensitiveInfoAlert}
        onPressEdit={() => navigate('ProfileEdit')}
        onPressBills={() => navigate('Bills')}
        onPressSecurityAndLegalNotices={() => navigate('Security')}
        onPressLogOut={onPressLogOut}
        onPressEditPhoto={onPressEditPhoto}
      />
    </SafeArea>
  );
};

export default ProfileController;
