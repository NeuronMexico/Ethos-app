import React from 'react';
import { CustomText } from 'components/atoms/CustomText';
import Theme from 'theme';
import { Input } from 'components/atoms';
import { Button } from 'components/molecules';
import { useTranslation } from 'react-i18next';
import { Container } from '../atoms/Container';

interface EditFormProps {
  label: string;
  onSubmit: () => void;
}

const EditProfileDataForm: React.FC<EditFormProps> = ({ label, onSubmit }) => {
  const { t } = useTranslation();
  const formattedLabel = label.toLowerCase();

  return (
    <Container
      style={{
        marginTop: 30,
      }}
    >
      <CustomText
        text={label}
        typography="subtitle"
        textColor={Theme.Colors.Carbon}
      />
      <Input
        onChangeText={undefined}
        value={undefined}
        placeholder={`${t('global:new')} ${formattedLabel}`}
      />
      {label !== 'Alias' && (
      <Input
        onChangeText={undefined}
        value={undefined}
        placeholder={`${t('global:confirm')} ${formattedLabel}`}
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
