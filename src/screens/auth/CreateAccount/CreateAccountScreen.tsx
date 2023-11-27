import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, OnboardAssistant } from 'components';

interface Props {
  prop?: string
}

const CreateAccountScreen: React.FC<Props> = (props: Props) => {
  const { prop } = props;

  return (
    <Container flex>
      <Header title="" ethosHeader />
      <OnboardAssistant
        messages={['Hola, mucho gusto', 'Soy tu asistente virtual', 'Vamos a comenzar']}
        title="Crea tu cuenta"
        description="Bienvenido a ethoscredito"
        onPress={() => {}}
      >
        <Container flex backgroundColor="transparent" />
      </OnboardAssistant>
    </Container>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
  },
});

export default CreateAccountScreen;
