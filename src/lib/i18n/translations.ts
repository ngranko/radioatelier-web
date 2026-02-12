import type { Locale } from '../stores/locale';

const translations = {
	tagline: {
		ru: 'Документируем незаметное наследие наших городов',
		en: 'Documenting the invisible heritage of our cities'
	},
	cta: {
		ru: 'Следите за находками',
		en: 'Follow our discoveries'
	},
	gallery_label: {
		ru: 'Из архива',
		en: 'From the archive'
	},
	manifesto_title: {
		ru: 'Каждый город — музей под открытым небом',
		en: 'Every city is an open-air museum'
	},
	manifesto_body: {
		ru: 'Старые вывески, неоновые огни, рукописные таблички и бытовые артефакты — это визуальная память наших улиц. Каждый день она тускнеет: знаки снимают, здания перекрашивают, эпохи стираются. Мы верим, что эти незаметные следы заслуживают внимания — не как ностальгия по прошлому, а как живая история настоящего.',
		en: 'Old signs, neon lights, hand-painted notices, and everyday artifacts — these form the visual memory of our streets. Every day it fades: signs come down, buildings get repainted, eras are erased. We believe these overlooked traces deserve attention — not as nostalgia for the past, but as the living history of the present.'
	},
	manifesto_closing: {
		ru: 'Мы сохраняем то, мимо чего проходят остальные',
		en: 'We preserve what everyone else walks past'
	}
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, locale: Locale): string {
	return translations[key][locale];
}
