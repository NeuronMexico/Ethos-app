import React from 'react';
import { TextStyle } from 'react-native';
import { useTranslation } from 'react-i18next';
import DeviceInfo from 'react-native-device-info';
import { CustomText } from 'components/atoms/CustomText';
import Theme from '../../theme';

interface Props {
  textAlign?: TextStyle['textAlign']
}

const AppVersion: React.FC<Props> = (props: Props) => {
  const { textAlign } = props;
  const { t } = useTranslation();

  return (
    <CustomText
      text={`${t('profile:version')}: ${DeviceInfo.getVersion()} (${DeviceInfo.getBuildNumber()})`}
      typography="title"
      fontSize={16}
      textAlign={textAlign}
      marginVertical={8}
      textColor={Theme.Colors.SpanishGray}
    />
  );
};

AppVersion.defaultProps = {
  textAlign: 'center',
};

export { AppVersion };
