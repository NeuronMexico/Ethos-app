import { format } from 'date-fns';
import localeEs from 'date-fns/locale/es';
import i18n from 'i18n';
import { RefObject } from 'react';
import { Dimensions, View } from 'react-native';
import { validations } from 'utils';

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function formatDate(date: string | Date, dateFormat: string = 'MMMM dd, yyyy HH:mm:ss'): string {
  try {
    return format(new Date(date), dateFormat, { locale: localeEs });
  } catch (error) {
    console.warn(error);
    return '';
  }
}

export function formatQuantity(value: number): string {
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  if (value < 0) {
    return value.toLocaleString('es-MX', options);
  }
  return value.toLocaleString('es-MX', options);
}

export function calculateSnapPoints(containerRef: RefObject<View>): Promise<Array<string>> {
  return new Promise((resolve) => {
    const getMeasure = () => {
      containerRef.current?.measure((x, y, width, height) => {
        clearInterval(timer);
        const { height: SCREEN_HEIGHT } = Dimensions.get('window');
        const calculatedPercentage = ((height + 150) / SCREEN_HEIGHT) * 100;
        let roundedPercentage = Math.round(calculatedPercentage);
        if (roundedPercentage > 100) roundedPercentage = 100;

        resolve([`${roundedPercentage}%`]);
      });
    };

    const timer = setInterval(getMeasure, 10);
  });
}

export function isDigit(character: string): boolean {
  return /^\d$/.test(character);
}

export function capitalize(text: string): string {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function fieldValidation(field: string, value: string, errorSetter: Function): boolean {
  const validation = validations.required(value);
  if (validation.ok) {
    errorSetter('');
    return true;
  }

  errorSetter(i18n.t(`errors:${field}`));
  return false;
}

export function maskAccountNumber(accountNumber: string) {
  const { length } = accountNumber;

  if (length >= 8) {
    return `***${accountNumber.substring(length - 3)}`;
  }

  return accountNumber;
}
