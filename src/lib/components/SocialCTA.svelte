<script lang="ts">
    import Links from './Links.svelte';
    import { locale } from '$lib/stores/locale';
    import { t } from '$lib/i18n/translations';

    interface Props {
        class?: string;
    }

    let { class: className = '' }: Props = $props();
</script>

<div class="flex flex-col items-center {className}">
    <h2 class="text-xl md:text-2xl text-white/50 font-sans mb-6">{t('cta', $locale)}</h2>
    <Links />
</div>
