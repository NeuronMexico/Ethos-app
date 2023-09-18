import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'assets/svg';
import Theme from 'theme';
import { Touchable } from './Touchable';
import { Container } from './Container';

interface Props {
  onPress?: () => void;
  marginLeft?: number;
  marginTop?: number;
  disabled?: boolean;
}

const BackButton: React.FC<Props> = ({
  onPress,
  marginLeft,
  marginTop,
  disabled,
}: Props) => {
  const { goBack } = useNavigation();

  return (
    <Container row>
      <Touchable
        onPress={onPress || goBack}
        marginLeft={marginLeft}
        marginTop={marginTop}
        disabled={disabled}
        rounded
        hitSlop={15}
      >
        <Container style={styles.container}>
          <ChevronLeftIcon />
        </Container>
      </Touchable>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderWidth: 1,
    borderColor: Theme.Colors.DreamyCloud,
    borderRadius: 10,
  },
});

export { BackButton };
