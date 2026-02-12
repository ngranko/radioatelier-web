<script lang="ts">
    let innerWidth = $state(0);

    let rawIconWidth = $derived(innerWidth / 8);
    let iconWidth = $derived(Math.max(Math.min(rawIconWidth, 80), 40));
</script>

<svelte:window bind:innerWidth />

<div class="flex justify-between items-start" style:width="{iconWidth * 4}px">
    <a href="https://instagram.com/radio__atelier/" class="opacity-40 hover:opacity-70 transition-opacity" target="_blank">
        <img class="invert" style:width="{iconWidth}px" style:height="{iconWidth}px" src="/instagram_icon.svg" alt="instagram" />
    </a>
    <a href="https://t.me/radioatelier" class="opacity-40 hover:opacity-70 transition-opacity" target="_blank">
        <img class="invert" style:width="{iconWidth * 1.05}px" style:height="{iconWidth * 1.05}px" src="/telegram_icon.svg" alt="telegram" />
    </a>
</div>
