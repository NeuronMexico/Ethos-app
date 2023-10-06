import React from 'react';
import Theme from 'theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Container } from 'components';
import { ButtonFieldEdit } from './ButtonFieldEdit';

interface Props {
  onSubmit: () => void;
}

const ProfileEditForm: React.FC<Props> = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  const fields = [
    {
      label: 'Alias',
      value: 'Mario Bárcenas',
      type: 'alias',
    },
    {
      label: 'Número celular',
      value: '123-456-7890',
      type: 'phone',
    },
    {
      label: 'Correo Electrónico',
      value: 'correo@example.com',
      type: 'email',
    },
    {
      label: 'Dirección',
      value: 'Villa de Magallanes #244 Villa Magna, 78231 San Luis Potosí, S.L.P.',
      type: 'address',
    },
  ];

  const handlerShowForm = (field: any) => {
    if (field.type === 'address') {
      navigate('EditAddress');
    } else {
      navigate('EditProfileField', { field });
    }
  };

  return (
    <Container style={{ padding: Theme.Sizes.Padding }}>
      {fields.map((field, index) => (
        <Container key={index}>
          <ButtonFieldEdit
            label={field.label}
            value={field.value}
            onEditClick={() => handlerShowForm(field)}
          />
        </Container>
      ))}
    </Container>
  );
};

export { ProfileEditForm };
