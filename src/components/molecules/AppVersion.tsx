import React from 'react';
import { TextStyle } from 'react-native';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import DeviceInfo from 'react-native-device-info';
import { Touchable } from 'components/atoms';
import { CustomText } from 'components/atoms/CustomText';
import { useEasterEggAnimation } from 'context';
import Theme from '../../theme';

interface Props {
  textAlign?: TextStyle['textAlign']
}

const AppVersion: React.FC<Props> = (props: Props) => {
  const { textAlign } = props;

  const { t } = useTranslation();

  const easterEggAnimation = useEasterEggAnimation();

  return (
    <Touchable onPress={easterEggAnimation.show} effectEnable={false}>
      <CustomText
        text={`${t('profile:version')}: ${DeviceInfo.getVersion()} (${DeviceInfo.getBuildNumber()})`}
        typography="title"
        fontSize={16}
        textAlign={textAlign}
        marginVertical={8}
        textColor={Theme.Colors.SpanishGray}
      />
    </Touchable>
  );
};

AppVersion.defaultProps = {
  textAlign: 'center',
};

export { AppVersion };
