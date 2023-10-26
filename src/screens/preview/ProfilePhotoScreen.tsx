import React from 'react';
import {
  Container, SafeArea, Text, ProfilePhoto,
} from 'components';
import Theme from 'theme';

const ProfilePhotoScreen: React.FC = () => (
  <SafeArea>
    <Text
      text="ProfilePhoto"
      typography="title"
      marginHorizontal={Theme.Sizes.Padding}
      marginTop={Theme.Sizes.MarginTop}
      textAlign="center"
      marginBottom={40}
    />
    <Container
      style={{
        paddingHorizontal: Theme.Sizes.Padding,
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: 30,
      }}
    >
      <ProfilePhoto size={60} />
      <ProfilePhoto size={80} />
      <ProfilePhoto size={100} withName />
      <ProfilePhoto size={100} withName editable />
    </Container>
  </SafeArea>
);

export default ProfilePhotoScreen;
