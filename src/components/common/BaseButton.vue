<template>
    <button :class="[
        'inline-flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-xl transition-all',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
        variant === 'primary'
            ? 'bg-green-700 hover:bg-green-500 text-white shadow-sm'
            : variant === 'secondary'
                ? 'bg-white hover:bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300'
                : 'bg-purple-700 hover:bg-purple-500 text-white shadow-sm',
        disabled && 'opacity-50 cursor-not-allowed',
    ]" :disabled="disabled">
        <slot />
    </button>
</template>

<script setup lang="ts">
interface Props {
    variant?: 'primary' | 'secondary' | 'danger'
    disabled?: boolean
}

withDefaults(defineProps<Props>(), {
    variant: 'primary',
    disabled: false,
})
</script>