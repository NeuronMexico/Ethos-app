import React from 'react';
import { ScrollView } from 'react-native';
import {
  Button,
  Container, Header, MultipleTextButton, ProfilePhoto, Touchable,
} from 'components';
import Theme from 'theme';
import { useTranslation } from 'react-i18next';
import {
  EditIcon,
  FacebookIcon, FileShiedIcon, InstagramIcon, LinkedInIcon, MessageDotsIcon, ScanIcon, TicketIcon, TikTokIcon, XTwitterIcon,
} from 'assets/svg';
import { SocialMediaTypes } from 'utils';
import { AppVersion } from 'components/molecules/AppVersion';

interface ButtonFieldProps {
  title: string;
  onPress: () => void;
  icon: React.ReactNode;
}

interface Props {
  onPressCodeQR: () => void;
  onPressEdit: () => void;
  onPressBills: () => void;
  onPressSecurityAndLegalNotices: () => void;
  onPressLink: (type: SocialMediaTypes) => void;
  onPressLogOut: () => void;
  onPressEditPhoto: () => void;
}

const ButtonField = ({
  title,
  onPress,
  icon,
}: ButtonFieldProps) => (
  <MultipleTextButton
    onPress={onPress}
    title={title}
    borderRadius={24}
    borderColor={Theme.Colors.PlaceboBlue}
    labelColor={Theme.Colors.DarkSoul}
    marginTop={16}
    icon={(
      <Container
        center
        width={40}
        height={40}
        style={{ backgroundColor: Theme.Colors.PlaceboBlue, borderRadius: 14, justifyContent: 'center' }}
      >
        {icon}
      </Container>
    )}
    alignContent="flex-start"
  />
);

const ProfileScreen: React.FC<Props> = ({
  onPressCodeQR,
  onPressLink,
  onPressEdit,
  onPressBills,
  onPressSecurityAndLegalNotices,
  onPressLogOut,
  onPressEditPhoto
}) => {
  const { t } = useTranslation();

  return (
    <Container flex>
      <Header
        title={t('profile:titleStack')}
        rightIcon={(
          <Container
            width={38}
            height={38}
            center
            style={{ justifyContent: 'center' }}
          >
            <MessageDotsIcon />
          </Container>
        )}
      />
      <ScrollView
        style={{ flex: 1, marginTop: 8 }}
        contentContainerStyle={{ flexGrow: 1, paddingTop: 16, paddingHorizontal: Theme.Sizes.Padding }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <Container flex center style={{ marginVertical: 15, marginTop: 50 }}>
          <ProfilePhoto size={90} withName withId editable onPress={onPressEditPhoto} />
          <Container width="100%" style={{ marginVertical: 25, flex: 1 }}>
            <ButtonField title={t('profile:codeQR')} onPress={onPressCodeQR} icon={<ScanIcon />} />
            <ButtonField title={t('profile:editData')} onPress={onPressEdit} icon={<EditIcon />} />
            <ButtonField
              title={t('profile:securityAndLegalNotices')}
              onPress={onPressSecurityAndLegalNotices}
              icon={<FileShiedIcon />}
            />
            <ButtonField title={t('profile:bills')} onPress={onPressBills} icon={<TicketIcon />} />
          </Container>
          <Container center width="100%">
            <Container
              width="60%"
              row
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Touchable onPress={() => onPressLink('facebook')}>
                <FacebookIcon />
              </Touchable>
              <Touchable onPress={() => onPressLink('instagram')}>
                <InstagramIcon />
              </Touchable>
              <Touchable onPress={() => onPressLink('tikTok')}>
                <TikTokIcon />
              </Touchable>
              <Touchable onPress={() => onPressLink('x')}>
                <XTwitterIcon />
              </Touchable>
              <Touchable onPress={() => onPressLink('linkedIn')}>
                <LinkedInIcon />
              </Touchable>
            </Container>
            <Button
              onPress={onPressLogOut}
              label={t('profile:logOut')}
              backgroundColor={Theme.Colors.WhiteSmoke}
              textColor={Theme.Colors.DarkSoul}
              marginVertical={17}
              width="100%"
            />
            <Container alignment="end">
              <AppVersion />
            </Container>
          </Container>
        </Container>
      </ScrollView>
    </Container>
  );
};

export default ProfileScreen;
