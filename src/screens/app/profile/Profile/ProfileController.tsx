import React, { useRef } from 'react';
import {
  Image, Linking, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import {
  Container, OptionButton, SafeArea, Text,
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

  // eslint-disable-next-line max-len
  const QRCode = 'https://s3-alpha-sig.figma.com/img/3829/b9bb/752ea3d4e7992b768766805b4a6c4534?Expires=1696809600&Signature=H4u7WkSz9IJBtAZiHoasN1NDj-fTii2EmSZNRn5vZYI5LXhahSn04cp-59u34xmxwB8zB-VH4NYpfLBLSPd4wRq0vg2zSMOKfgY9xM5xuwkh~SmzQiATIhMw0PkhoSbkknkpRQf1cOtsh8qX2ieSlyvZn~O6IZX3moBZqp1pbq2aZ0HcpgVdw4sw~~hGZfLFttjwCZ6ak8SqftGu2jfx29mR7CN0DMph0R3CNQZ2wPegPxSafdAHTD-cmKjTWcxEAdJLOs~-snQ-jj2l-UvjVGfaiyseP-kjBn4fKOCkX~SyJd2lRsSn27V2-fvKWxeTIx0Pi8mr-cpUJZTzLfqw5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

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
      <Image
        source={{ uri: QRCode }}
        style={{
          width: 230,
          height: 230,
          marginBottom: 16,
        }}
        resizeMode="contain"
      />
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

  return (
    <SafeArea>
      <ProfileScreen
        onPressLink={onPressLink}
        onPressCodeQR={() => bottomSheet.show(renderDefaultComponent)}
        onPressEdit={() => navigate('ProfileEdit')}
        onPressBills={() => navigate('Bills')}
        onPressSecurityAndLegalNotices={() => navigate('Security')}
        onPressLogOut={onPressLogOut}
      />
    </SafeArea>
  );
};

export default ProfileController;
