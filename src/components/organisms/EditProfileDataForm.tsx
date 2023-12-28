import React from 'react';
import { Input } from 'components/atoms';
import { Button } from 'components/molecules';
import { useTranslation } from 'react-i18next';
import { Container } from '../atoms/Container';

interface EditFormProps {
  label: string;
  type: string;
  onSubmit: () => void;
}

const EditProfileDataForm: React.FC<EditFormProps> = ({ label, type, onSubmit }) => {
  const { t } = useTranslation();
  const formattedLabel = label?.toLowerCase() || '';

  return (
    <Container
      style={{
        marginTop: 30,
      }}
    >
      <Input
        label={label || 'Alias'}
        onChangeText={undefined}
        value={undefined}
        maxLength={type === 'phone' ? 10 : 30}
        keyboardType={type === 'phone' ? 'phone-pad' : 'default'}
        placeholder={`${t('global:new')} ${formattedLabel}`}
      />
      {label !== 'Alias' && (
      <Input
        onChangeText={undefined}
        value={undefined}
        placeholder={`${t('global:confirm')} ${formattedLabel}`}
        maxLength={30}
      />
      )}
      <Button
        onPress={onSubmit}
        label={t('global:save')}
        marginTop={16}
      />
    </Container>
  );
};

export { EditProfileDataForm };
