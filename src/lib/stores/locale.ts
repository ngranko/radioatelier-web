import { writable } from 'svelte/store';

export type Locale = 'ru' | 'en';

export const locale = writable<Locale>('ru');
