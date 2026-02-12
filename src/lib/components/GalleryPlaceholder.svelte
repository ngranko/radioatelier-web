<script lang="ts">
    interface Props {
        aspectRatio?: string;
        neonBorder?: boolean;
        class?: string;
    }

    let { aspectRatio = '4/3', neonBorder = false, class: className = '' }: Props = $props();
</script>

<div
    class="rounded-lg bg-white/[0.03] {neonBorder ? 'ring-1 ring-primary/30 shadow-[0_0_20px_rgba(0,156,166,0.08)]' : 'ring-1 ring-white/[0.06]'} {className}"
    style:aspect-ratio={aspectRatio}
></div>
