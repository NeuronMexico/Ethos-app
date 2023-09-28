import { format } from 'date-fns';
import localeEs from 'date-fns/locale/es';

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
