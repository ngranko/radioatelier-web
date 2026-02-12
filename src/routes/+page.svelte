<script lang="ts">
    import { onMount } from 'svelte';
    import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
    import Logo from '$lib/components/Logo.svelte';
    import GalleryPlaceholder from '$lib/components/GalleryPlaceholder.svelte';
    import SocialCTA from '$lib/components/SocialCTA.svelte';
    import Links from '$lib/components/Links.svelte';
    import { locale } from '$lib/stores/locale';
    import { t } from '$lib/i18n/translations';

    let taglineVisible = $state(false);

    onMount(() => {
        setTimeout(() => { taglineVisible = true; }, 2200);
    });

    const galleryTiles: { tall: boolean; neon: boolean }[] = [
        { tall: true,  neon: true },
        { tall: false, neon: false },
        { tall: false, neon: false },
        { tall: true,  neon: true },
        { tall: false, neon: false },
        { tall: false, neon: true },
        { tall: true,  neon: false },
        { tall: false, neon: false },
        { tall: false, neon: false },
        { tall: true,  neon: true },
    ];
</script>

<LanguageSwitcher />

<div class="w-full min-h-screen relative overflow-hidden">
    <div class="absolute rounded-full pointer-events-none blur-[120px] w-[600px] h-[500px] -top-[150px] left-1/2 -translate-x-1/2 bg-[radial-gradient(ellipse,_oklch(0.55_0.18_195/0.08)_0%,_transparent_70%)]"></div>
    <div class="absolute rounded-full pointer-events-none blur-[120px] w-[400px] h-[400px] top-[60%] -right-[100px] bg-[radial-gradient(circle,_rgba(252,187,61,0.04)_0%,_transparent_70%)]"></div>

    <section class="w-full min-h-screen flex flex-col items-center justify-center relative z-10">
        <Logo />
        <p
            class="mt-8 text-lg md:text-2xl text-white/50 font-sans text-center max-w-xl px-6 tracking-wide leading-relaxed transition-all duration-[1800ms] ease-out {taglineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}"
        >
            {t('tagline', $locale)}
        </p>
        <div class="mt-6 scale-75">
            <Links />
        </div>

        <div class="absolute bottom-10 left-1/2 -translate-x-1/2">
            <svg class="w-5 h-5 text-white/40 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
    </section>

    <section class="relative z-10 py-24 md:py-40">
        <div class="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none blur-[150px] bg-[radial-gradient(circle,_oklch(0.55_0.18_195/0.04)_0%,_transparent_70%)]"></div>
        <div class="relative max-w-3xl mx-auto px-8 text-center">
            <h2 class="text-2xl md:text-4xl lg:text-5xl text-white/80 font-sans leading-[1.25] tracking-wide mb-14 md:mb-20">
                {t('manifesto_title', $locale)}
            </h2>

            <div class="w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto mb-14 md:mb-20"></div>

            <p class="text-sm md:text-base text-white/70 font-sans leading-[1.9] tracking-wide max-w-xl mx-auto mb-14 md:mb-20">
                {t('manifesto_body', $locale)}
            </p>

            <p class="text-base md:text-lg text-accent/70 font-sans tracking-wide [text-shadow:0_0_40px_rgba(252,187,61,0.15)]">
                {t('manifesto_closing', $locale)}
            </p>
        </div>
    </section>

    <section class="relative z-10 py-16 md:py-24">
        <p class="text-xs tracking-[0.3em] uppercase text-primary/75 font-sans mb-6 px-6 md:px-10">
            {t('gallery_label', $locale)}
        </p>
        <div class="grid grid-rows-2 grid-cols-[240px_207px_240px_207px_240px_207px_240px] grid-flow-col gap-2.5 h-[320px] overflow-x-auto snap-x snap-proximity px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid-cols-[338px_291px_338px_291px_338px_291px_338px] md:gap-3.5 md:h-[450px] md:px-10">
            {#each galleryTiles as tile}
                <div class={tile.tall ? 'row-span-2 snap-start' : 'snap-start'}>
                    <GalleryPlaceholder neonBorder={tile.neon} aspectRatio={tile.tall ? '3/4' : '4/3'} class="w-full h-full" />
                </div>
            {/each}
        </div>
    </section>

    <section class="relative z-10 py-16 md:py-24 flex justify-center">
        <SocialCTA />
    </section>
</div>
