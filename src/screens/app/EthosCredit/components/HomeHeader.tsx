import { TicketIcon } from 'assets/svg';
import {
  Button, Container, ProfilePhoto, Text, Touchable,
} from 'components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import Theme from 'theme';

interface Props {
  onPressProfile?: () => void;
  onPressNotifications?: () => void;
}

const HomeHeader: React.FC<Props> = ({
  onPressProfile = () => {},
  onPressNotifications = () => {},
}: Props) => {
  const { t } = useTranslation();
  const { container } = styles;

  // TODO: Implementation
  // const { name, lastConnection } = useSelector((state: RootState) => state.session);

  return (
    <Container center row space="between" style={container}>
      <Touchable onPress={onPressProfile}>
        <ProfilePhoto size={40} />
      </Touchable>
      <Container center>
        <Text text={t('home:welcome', { name: 'John Smith' })} fontWeight="Bold" fontSize={17} />
        <Text
          text={t('home:lastConnection', { lastConnection: new Date().toISOString() })}
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
        icon={<TicketIcon />}
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
