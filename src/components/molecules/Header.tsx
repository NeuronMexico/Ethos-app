import React, { ReactElement } from 'react';
import { ColorValue, StyleSheet } from 'react-native';
import {
  BackButton, Container, Text, Touchable,
} from 'components';
import Theme from 'theme';

interface Props {
  showBackButton?: boolean;
  backButtonBorderless?: boolean;
  title: string;
  rightIcon?: ReactElement;
  rightAction?: () => void;
  rightIconContainerBackgroundColor?: ColorValue;
  lidiaAvatar?: boolean;
  textColor?: ColorValue;
}

const Header: React.FC<Props> = ({
  showBackButton = true,
  backButtonBorderless,
  title,
  rightAction,
  rightIcon,
  rightIconContainerBackgroundColor = Theme.Colors.PlaceboBlue,
  textColor,
  lidiaAvatar,
}) => (
  // TODO: implement Lidia logic
  <Container row center height={40} style={{ paddingHorizontal: Theme.Sizes.Padding, marginTop: 4 }}>
    <Container width={40}>
      {showBackButton && <BackButton borderless={backButtonBorderless} color={textColor} />}
    </Container>
    <Container middle flex>
      <Text text={title} typography="header" textColor={textColor} />
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
