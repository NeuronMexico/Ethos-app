import i18n from 'i18n';
import { ShortcutType } from './types';
import { SHORTCUTS_ICONS } from './icons';

export const BOTTOM_TAB_INSET = 70;

// HERE WILL BE ADDED THE SHORTCUTS CATEGORIES AND THEIR RESPECTIVE SHORTCUTS
export const SHORTCUTS_CATEGORIES = {
  creditCards: [
    'payCard',
  ],
  payments: [
    'scheduledPayments',
    'collectContacts',
    'collectInCash',
    'ethosCreditQR',
  ],
  services: [
    'electricityAndGas',
    'water',
    'topUps',
    'entertainment',
    'governmentPayments',
    'tollsAndParkingMeters',
    'telecommunications',
    'catalogSales',
  ],
  ethosCreditBenefits: [
    'ethosPlusBenefits',
  ],
  lifestyleBenefits: [
    '2x1Cinema',
    'petBenefits',
  ],
};

export const SHORTCUTS_ARRAY: Array<{
  key: string,
  value: ShortcutType[]
}> = Object.keys(SHORTCUTS_CATEGORIES).map((key) => ({
  key,
  value: SHORTCUTS_CATEGORIES[key as keyof typeof SHORTCUTS_CATEGORIES].map(
    (value) => ({
      id: value,
      label: i18n.t(`shortcuts:${value}`),
      icon: SHORTCUTS_ICONS[value as keyof typeof SHORTCUTS_ICONS],
    }),
  ),
}));
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
  tikTok: 'https://www.tiktok.com/',
  x: 'https://twitter.com/',
  linkedIn: '',
};

export const PAYMENT_TYPES = [
  { label: i18n.t('transactions:singlePayment'), value: 'single-payment' },
  { label: i18n.t('transactions:recurringPayment'), value: 'recurring-payment' },
];
