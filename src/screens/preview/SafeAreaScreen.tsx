import React from 'react';
import { Container, SafeArea } from 'components';

const SafeAreaScreen: React.FC = () => (
  <SafeArea
    backgroundColor="purple"
    barStyle="light"
    bottomBGColor="pink"
    topBGColor="black"
    // Hide top SafeArea
    // topSafeArea={false}

    // Hide bottom SafeArea
    // bottomSafeArea={false}

    // Set top SafeArea color and bottom SafeArea color
    // safeBGColor="red"

    // Hide status bar
    // hiddenStatusBar

    // Set android status bar color
    // statusBarColor="blue"
  >
    <Container flex />
  </SafeArea>
);

export default SafeAreaScreen;
