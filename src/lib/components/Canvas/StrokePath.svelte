<script lang="ts">
    import {getContext, onDestroy, onMount} from 'svelte';
    import type {CanvasContext} from '../../types/canvas';

    interface Props {
        path: string;
        color: string;
    }

    let { path, color }: Props = $props();

    let canvasContext = getContext('canvas') as CanvasContext;

    onMount(() => {
        canvasContext.addDrawFn(draw);
    });

    onDestroy(() => {
        canvasContext.removeDrawFn(draw);
    });

    function draw(ctx: CanvasRenderingContext2D) {
        const prevStyle = ctx.strokeStyle;

        ctx.strokeStyle = color;
        ctx.stroke(new Path2D(path));

        ctx.strokeStyle = prevStyle;
    }
</script>
