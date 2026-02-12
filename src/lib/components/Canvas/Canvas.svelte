<script lang="ts">
    import {onDestroy, onMount, setContext} from 'svelte';
    import type {AnimationFraming, AnimationPoint, DrawFn, Point} from '../../types/canvas';
    import type {Snippet} from 'svelte';

    interface Props {
        width: number;
        height: number;
        translate?: Point;
        animate?: boolean;
        duration?: number;
        class?: string;
        children?: Snippet;
    }

    let { width, height, translate = [0, 0], animate = false, duration = 0, class: className = '', children }: Props = $props();

    let canvasElement: HTMLCanvasElement;
    let fnsToDraw = [] as DrawFn[];
    let frameId: number;
    let animationStartTime: number;

    setContext('canvas', {
        addDrawFn: (fn: DrawFn) => {
            fnsToDraw.push(fn);
        },
        removeDrawFn: (fn: DrawFn) => {
            let index = fnsToDraw.indexOf(fn);
            if (index > -1) {
                fnsToDraw.splice(index, 1);
            }
        },
        getAnimatedValue: (animationFraming: AnimationFraming) => {
            let prevPoint: AnimationPoint = animationFraming[0];

            for (const element of animationFraming) {
                if (element.t > getCurrentAnimationTick()) {
                    break;
                }
                prevPoint = element;
            }

            return prevPoint.o;
        },
    });

    onMount(() => {
        let ctx = init();

        if (animate) {
            animationStartTime = Date.now();
            frameId = requestAnimationFrame(() => draw(ctx));
        } else {
            draw(ctx);
        }
    });

    onDestroy(() => {
        if (frameId) {
            cancelAnimationFrame(frameId)
        }
    })

    function init(): CanvasRenderingContext2D {
        const baseScale = getBaseScale();
        const canvasScale = getCanvasScale(baseScale);

        canvasElement.style.width = `${width * baseScale}px`;
        canvasElement.style.height = `${height * baseScale}px`;

        canvasElement.width = width * canvasScale;
        canvasElement.height = height * canvasScale;

        const ctx = canvasElement.getContext('2d') as CanvasRenderingContext2D;
        ctx.scale(canvasScale, canvasScale);
        ctx.translate(...translate);

        return ctx;
    }

    function getBaseScale(): number {
        const screenWidthScale = Math.min(width, window.innerWidth * 0.9) / width;
        const screenHeightScale = Math.min(height, window.innerHeight * 0.9) / height;

        return Math.min(screenWidthScale, screenHeightScale);
    }

    function getCanvasScale(baseScale: number): number {
        const dpr = window.devicePixelRatio || 1;
        return baseScale * dpr;
    }

    function draw(ctx: CanvasRenderingContext2D) {
        ctx.clearRect(-translate[0], -translate[1], width, height);
        fnsToDraw.forEach(fn => fn(ctx));

        if (animate) {
            if (isAnimationFinished()) {
                frameId = 0;
            } else {
                frameId = requestAnimationFrame(() => draw(ctx));
            }
        }
    }

    function getCurrentAnimationTick(): number {
        return Date.now() - animationStartTime;
    }

    function isAnimationFinished(): boolean {
        return getCurrentAnimationTick() > duration;
    }
</script>

<canvas class={className} bind:this={canvasElement}></canvas>
{@render children?.()}
