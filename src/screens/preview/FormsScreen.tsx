/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, Header } from 'components';
import React from 'react';
import { ScrollView } from 'react-native';
import {
  PaymentCollectCashForm,
  PaymentCollectQRForm,
  PaymentCollectScheduledForm,
  PaymentCollectToContactForm,
  PaymentFastCollectForm,
} from 'screens/app/Payment/components';
import Theme from 'theme';

const FormsScreen = () => (
  <Container flex style={{ backgroundColor: Theme.Colors.White }}>
    <Header title="Forms" />
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        flexGrow: 1,
        paddingTop: Theme.Sizes.MarginTop,
        paddingHorizontal: Theme.Sizes.Padding,
      }}
    >
      {/* <PaymentCollectQRForm onSubmit={() => {}} /> */}
      {/* <PaymentCollectScheduledForm onSubmit={() => {}} /> */}
      {/* <PaymentCollectToContactForm onSubmit={() => {}} /> */}
      {/* <PaymentFastCollectForm onSubmit={() => {}} /> */}
      <PaymentCollectCashForm onSubmit={() => { }} onPressEstablishments={() => {}} />
    </ScrollView>
  </Container>
);

export default FormsScreen;
