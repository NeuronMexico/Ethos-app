import React from 'react';
import { ScrollView } from 'react-native';
import {
  BackButton,
  Container, ProfileEditForm
} from 'components';
import Theme from 'theme';
import { ProfileInterface } from 'reactRedux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FileType } from 'utils';

interface Props {
  onSubmit: (dataProfile: ProfileInterface, file: FileType | undefined) => void;
  setAnswers: (key: string, value: string) => void;
}

const ProfileEditScreen: React.FC<Props> = (props: Props) => {
  const { onSubmit, setAnswers } = props;

  const insets = useSafeAreaInsets();

  return (
    <Container flex useKeyboard>
      <Container style={{ paddingHorizontal: Theme.Sizes.Padding, marginTop: 30, marginBottom: 5 }}>
        <BackButton />
      </Container>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: insets.bottom }}
        bounces={false}
        showsHorizontalScrollIndicator={false}
      >
        <Container style={{ paddingHorizontal: Theme.Sizes.Heading }}>
          <ProfileEditForm setAnswer={setAnswers} onSubmit={onSubmit} />
        </Container>
      </ScrollView>
    </Container>
  );
};

export default ProfileEditScreen;
