import React, { useState } from 'react';
import Theme from 'theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Container } from 'components';
import { ButtonFieldEdit } from './ButtonFieldEdit';
import { EditProfileDataForm } from './EditProfileDataForm';

interface Props {
  onSubmit: () => void;
}

const ProfileEditForm: React.FC<Props> = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const [showFormEdit, setShowFormEdit] = useState('');

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

  const handlerShowForm = (typeForm: string) => {
    if (typeForm === showFormEdit) {
      setShowFormEdit('');
    }
    setShowFormEdit(typeForm);
    if (typeForm === 'address') {
      navigate('EditAddress');
      setShowFormEdit('');
    }
  };

  const handleUpdateData = (field: { type: string, value: string }) => {
    if (field.type === 'phone' || field.type === 'email') {
      navigate('ConfirmationCode', { type: field.type, value: field.value });
    }
    setShowFormEdit('');
  };

  return (
    <Container style={{ padding: Theme.Sizes.Padding }}>
      {fields.map((field, index) => (
        <React.Fragment key={index}>
          {!showFormEdit && (
            <ButtonFieldEdit
              label={field.label}
              value={field.value}
              onEditClick={() => handlerShowForm(field.type)}
            />
          )}
          {field.type !== 'address' && showFormEdit === field.type && (
            <EditProfileDataForm
              label={field.label}
              onSubmit={() => handleUpdateData(field)}
            />
          )}
        </React.Fragment>
      ))}
    </Container>
  );
};

export { ProfileEditForm };
