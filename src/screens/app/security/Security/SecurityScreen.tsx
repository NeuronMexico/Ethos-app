import { FileIcon, LockIcon } from 'assets/svg';
import {
  Container, Header, MultipleTextButton, SwitchField,
} from 'components';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Theme from 'theme';

interface Props {
  onChangePassword: () => void;
}

interface ButtonFieldProps {
  title: string;
  onPress: () => void;
  icon: React.ReactNode;
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

const SecurityScreen: React.FC<Props> = ({
  onChangePassword,
}) => {
  const { t } = useTranslation();
  const [biometricDataEnabled, setBiometricDataEnabled] = useState<boolean>(true);

  return (
    <Container style={{ marginHorizontal: Theme.Sizes.Padding }}>
      <Header title={t('security:title')} />
      <SwitchField
        label={t('security:biometricData')}
        active={biometricDataEnabled}
        onChange={setBiometricDataEnabled}
      />
      <ButtonField
        title={t('security:changePassword')}
        onPress={onChangePassword}
        icon={<LockIcon />}
      />
      <ButtonField
        title={t('security:termsAndConditions')}
        onPress={() => {}}
        icon={<FileIcon />}
      />
      <ButtonField
        title={t('security:noticeOfPrivacy')}
        onPress={() => {}}
        icon={<FileIcon />}
      />
    </Container>
  );
};

export default SecurityScreen;
