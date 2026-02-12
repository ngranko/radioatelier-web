<script lang="ts">
    import { locale } from '$lib/stores/locale';

    function setLocale(lang: 'ru' | 'en') {
        locale.set(lang);
    }
</script>

<div class="fixed top-5 right-5 z-50 flex items-center gap-1 font-sans text-sm tracking-wider">
    <button
        class="px-2 py-1 transition-colors rounded {$locale === 'ru' ? 'text-primary' : 'text-white/40 hover:text-white/70'}"
        onclick={() => setLocale('ru')}
    >
        RU
    </button>
    <span class="text-white/40">/</span>
    <button
        class="px-2 py-1 transition-colors rounded {$locale === 'en' ? 'text-primary' : 'text-white/40 hover:text-white/70'}"
        onclick={() => setLocale('en')}
    >
        EN
    </button>
</div>
