import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, FadeInImage } from 'components';
import Theme from 'theme';
import { ETHOS_CREDIT_LOGO } from 'assets/images';
import LoginForm from './components/LoginForm';

interface Props {
  onPressLogin?: () => void;
  onPressRegister?: () => void;
}

const LoginScreen: React.FC<Props> = (props: Props) => {
  const {
    onPressLogin = () => {},
    onPressRegister = () => {},
  } = props;
  const { container } = styles;

  return (
    <Container flex style={container}>
      <Container style={{ marginTop: Theme.Sizes.MarginTop, justifyContent: 'flex-start' }}>
        <FadeInImage source={ETHOS_CREDIT_LOGO} width={84} height={13.5} />
      </Container>
      <LoginForm
        onPressForgotPassword={() => {}}
        onPressLogin={onPressLogin}
        onPressBiometricLogin={() => {}}
        onPressRegister={onPressRegister}
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
