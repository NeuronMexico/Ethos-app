import React, { ReactElement } from 'react';
import { ColorValue, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  BackButton, Container, Text, Touchable,
} from 'components';
import Theme from 'theme';
import { MessageDotsIcon } from 'assets/svg';

interface Props {
  showBackButton?: boolean;
  backButtonBorderless?: boolean;
  title: string;
  rightIcon?: ReactElement;
  rightAction?: () => void;
  backAction?: () => void;
  rightIconContainerBackgroundColor?: ColorValue;
  showVirtualAssistantAction?: boolean;
  textColor?: ColorValue;
}

const Header: React.FC<Props> = ({
  showBackButton = true,
  backButtonBorderless,
  title,
  rightAction,
  rightIcon,
  backAction,
  rightIconContainerBackgroundColor = Theme.Colors.PlaceboBlue,
  textColor,
  showVirtualAssistantAction = false,
}) => {
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <Container row center height={40} style={{ paddingHorizontal: Theme.Sizes.Padding, marginTop: 4 }}>
      <Container width={40}>
        {showBackButton && <BackButton onPress={backAction} borderless={backButtonBorderless} color={textColor} />}
      </Container>
      <Container middle flex>
        <Text text={title} typography="header" textColor={textColor} />
      </Container>
      <Container width={40}>
        {(rightIcon || showVirtualAssistantAction) && (
        <Touchable
          disabled={!rightAction && !showVirtualAssistantAction}
          onPress={() => {
            if (rightAction) rightAction();
            else if (showVirtualAssistantAction) {
              navigate('VirtualAssistant');
            }
          }}
        >
          <Container middle style={styles.rightButtonContainer} backgroundColor={rightIconContainerBackgroundColor}>
            {rightIcon || <MessageDotsIcon />}
          </Container>
        </Touchable>
        )}
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  rightButtonContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
});

export { Header };
