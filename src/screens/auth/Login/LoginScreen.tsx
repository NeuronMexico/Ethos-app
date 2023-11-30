import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'components';
import Theme from 'theme';
import { EthosIcon } from 'assets/svg';
import LoginForm from './components/LoginForm';

interface Props {
  prop?: string
}

const LoginScreen: React.FC<Props> = (props: Props) => {
  const { prop } = props;
  const { container } = styles;

  return (
    <Container flex style={container}>
      <Container style={{ marginTop: Theme.Sizes.MarginTop }}>
        <EthosIcon />
      </Container>
      <LoginForm
        onPressForgotPassword={() => {}}
        onPressLogin={() => {}}
        onPressBiometricLogin={() => {}}
        onPressRegister={() => {}}
        onPressTerms={() => {}}
        onPressPrivacy={() => {}}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Theme.Sizes.Padding,
  },
});

export default LoginScreen;
