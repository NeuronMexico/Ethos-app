import React from 'react';
import { PaymentCollectionForm, PaymentTransferForm } from './components';
import { ScheduledPaymentForm } from '../transactions/Payment/components';

enum ComponentTypes {
  PaymentPayToNewContact = 'PaymentPayToNewContact',
  PaymentPayToContact = 'PaymentPayToContact',
  PaymentCollectQR = 'PaymentCollectQR',
  PaymentCollectToContact = 'PaymentCollectToContact',
  PaymentCollectCash = 'PaymentCollectCash',
  PaymentTransfer = 'PaymentTransfer',
  none = 'none',
}

const ComponentEnum = {
  [ComponentTypes.PaymentPayToNewContact]: (
    onSubmit: () => void,
    edition: boolean,
    scheduled: boolean,
    enableSaveContact?: boolean,
  ) => (
    <ScheduledPaymentForm
      onSubmit={onSubmit}
      edition={edition}
      scheduled={scheduled}
      enableSaveContact={enableSaveContact}
    />
  ),
  [ComponentTypes.PaymentPayToContact]: (onSubmit: () => void, destinationAccount?: { account: string, bank: string }) => (
    <PaymentCollectionForm
      onSubmit={onSubmit}
      destinationAccount={destinationAccount}
      enableScheduleTransaction
    />
  ),
  [ComponentTypes.PaymentCollectQR]: (onSubmit: () => void) => (
    <PaymentCollectionForm enableScheduleTransaction onSubmit={onSubmit} />
  ),
  [ComponentTypes.PaymentCollectToContact]: (onSubmit: () => void) => (
    <PaymentCollectionForm enableScheduleTransaction onSubmit={onSubmit} />
  ),
  [ComponentTypes.PaymentCollectCash]: (onSubmit: () => void) => (
    <PaymentCollectionForm onSubmit={onSubmit} />
  ),
  [ComponentTypes.PaymentTransfer]: (onSubmit: () => void) => (
    <PaymentTransferForm onSubmit={onSubmit} />
  ),
};

export { ComponentTypes, ComponentEnum };
