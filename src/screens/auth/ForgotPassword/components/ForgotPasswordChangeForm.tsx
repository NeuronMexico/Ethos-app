import { Container, Text } from 'components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChangePasswordForm } from 'screens/app/security/ChangePassword/components/ChangePasswordForm';
import Theme from 'theme';

interface Props {
  onSubmit: () => void;
}

const ForgotPasswordChangeForm: React.FC<Props> = ({
  onSubmit,
}: Props) => {
  const { t } = useTranslation();

  return (
    <Container flex style={{ marginTop: Theme.Sizes.MarginTop, paddingHorizontal: Theme.Sizes.Padding }}>
      <Text text="Ingresa tu nueva contraseña" typography="header" fontSize={22} />
      <Text
        text="Asegúrate de anotarla en un lugar seguro"
        typography="caption"
        fontSize={14}
        marginTop={8}
        textColor={Theme.Colors.Encore}
      />
      <Container>
        <ChangePasswordForm onSubmit={onSubmit} buttonLabel={t('global:continue')} />
      </Container>
    </Container>
  );
};

export { ForgotPasswordChangeForm };
