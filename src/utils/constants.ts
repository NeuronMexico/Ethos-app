import i18n from 'i18n';
import { ShortcutType } from './types';
import { SHORTCUTS_ICONS } from './icons';

export const BOTTOM_TAB_INSET = 70;

// HERE WILL BE ADDED THE SHORTCUTS CATEGORIES AND THEIR RESPECTIVE SHORTCUTS
export const SHORTCUTS_CATEGORIES = {
  creditCards: [
    'personalDisposition',
    'payCard',
  ],
  payments: [
    'scheduledPayments',
    'ethosCreditQR',
    'collectContacts',
    'collectViaCODI',
    'collectInCash',
  ],
  personalProject: ['personalProject'],
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
    'ethosProBenefits',
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
