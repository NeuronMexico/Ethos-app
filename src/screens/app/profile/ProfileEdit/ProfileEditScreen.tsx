import React from 'react';
import { ScrollView } from 'react-native';
import {
  Container,
  Header,
  ProfileEditForm,
  ProfilePhoto,
} from 'components';
import Theme from 'theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FileType } from 'utils';
import { useTranslation } from 'react-i18next';

interface Props {
  onSubmit: (dataProfile: {}, file: FileType | undefined) => void;
  setAnswers: (key: string, value: string) => void;
}

const ProfileEditScreen: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  const { onSubmit, setAnswers } = props;

  const insets = useSafeAreaInsets();

  return (
    <Container flex useKeyboard>
      <Container style={{ paddingHorizontal: Theme.Sizes.Padding, marginTop: 30, marginBottom: 5 }}>
        <Header title={t('profile:editTitle')} />
      </Container>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: insets.bottom }}
        bounces={false}
        showsHorizontalScrollIndicator={false}
      >
        <Container style={{ padding: Theme.Sizes.Padding }}>
          <ProfilePhoto size={90} withName />
          <ProfileEditForm setAnswer={setAnswers} onSubmit={onSubmit} />
        </Container>
      </ScrollView>
    </Container>
  );
};

export default ProfileEditScreen;
