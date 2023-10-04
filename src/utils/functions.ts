import { format } from 'date-fns';
import localeEs from 'date-fns/locale/es';
import { RefObject } from 'react';
import { Dimensions, View } from 'react-native';

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
        const roundedPercentage = Math.round(calculatedPercentage);
        resolve([`${roundedPercentage}%`]);
      });
    };

    const timer = setInterval(getMeasure, 10);
  });
}
