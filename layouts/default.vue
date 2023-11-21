<template>
    <div class="font-light font-['Poppins']">
        <StructHead/>
        <slot/>
    </div>
</template>

<script setup>
    useHead({
        title: "Nuxt Tw Learn"
    })
</script>
