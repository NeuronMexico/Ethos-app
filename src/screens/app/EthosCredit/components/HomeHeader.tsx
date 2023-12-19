import { BellMarkedIcon, MessageDotsIcon } from 'assets/svg';
import {
  Button, Container, ProfilePhoto, Text, Touchable,
} from 'components';
import { format } from 'date-fns';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import Theme from 'theme';

interface Props {
  onPressProfile?: () => void;
  onPressNotifications?: () => void;
  onPressAssistant?: () => void;
}

const HomeHeader: React.FC<Props> = ({
  onPressProfile = () => {},
  onPressNotifications = () => {},
  onPressAssistant = () => {},
}: Props) => {
  const { t } = useTranslation();
  const { container } = styles;

  // TODO: Implementation
  // const { name, lastConnection } = useSelector((state: RootState) => state.session);

  return (
    <Container center row space="between" style={container}>
      <Touchable onPress={onPressProfile}>
        <ProfilePhoto size={40} bottomStyle={{ marginTop: 0 }} />
      </Touchable>
      <Container flex style={{ marginLeft: 8 }}>
        <Text
          text={t('home:welcome', { name: 'John Smith' })}
          textAlign="left"
          fontWeight="Bold"
          fontSize={17}
        />
        <Text
          text={t('home:lastConnection', { lastConnection: format(new Date(), 'dd-MM-yyyy hh:ii:ss') })}
          textAlign="left"
          fontWeight="Semibold"
          fontSize={11}
        />
      </Container>
      <Button
        onPress={onPressNotifications}
        width={38}
        height={38}
        borderRadius={10}
        backgroundColor={Theme.Colors.PlaceboBlue}
        icon={<BellMarkedIcon />}
        colorless
        marginRight={8}
      />
      <Button
        onPress={onPressAssistant}
        width={38}
        height={38}
        borderRadius={10}
        backgroundColor={Theme.Colors.PlaceboBlue}
        icon={<MessageDotsIcon />}
        colorless
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Theme.Sizes.Padding,
  },
});

export default HomeHeader;
