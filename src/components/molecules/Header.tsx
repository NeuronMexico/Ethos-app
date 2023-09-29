import React, { ReactElement } from 'react';
import { ColorValue, StyleSheet } from 'react-native';
import {
  BackButton, Container, Text, Touchable,
} from 'components';
import Theme from 'theme';

interface Props {
  showBackButton?: boolean;
  title: string;
  rightIcon?: ReactElement;
  rightAction?: () => void;
  rightIconContainerBackgroundColor?: ColorValue;
  lidiaAvatar?: boolean;
}

const Header: React.FC<Props> = ({
  showBackButton = true,
  title,
  rightAction,
  rightIcon,
  rightIconContainerBackgroundColor = Theme.Colors.PlaceboBlue,
  lidiaAvatar,
}) => (
  // TODO: implement Lidia logic
  <Container row center height={40} style={{ paddingHorizontal: Theme.Sizes.Padding, marginTop: 4 }}>
    <Container width={40}>
      {showBackButton && <BackButton />}
    </Container>
    <Container middle flex>
      <Text text={title} typography="header" />
    </Container>
    <Container width={40}>
      {rightIcon && (
      <Touchable disabled={!rightAction} onPress={() => rightAction?.()}>
        <Container middle style={styles.rightButtonContainer} backgroundColor={rightIconContainerBackgroundColor}>
          {rightIcon}
        </Container>
      </Touchable>
      )}
    </Container>
  </Container>
);

const styles = StyleSheet.create({
  rightButtonContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
});

export { Header };
