<template>
    <div class="bg-black flex justify-center">
        <div class="w-container h-[70px] flex flex-wrap justify-between items-end">
            <div class="relative">
                <input type="text" name="search" class="w-[277px] h-11 rounded-full text-gray-4 px-6" placeholder="Search"/>
                <div class="absolute right-4 top-4">
                    <img :src="SearchIcon" width="12" height="12"/>
                </div>
            </div>

            <img :src="LogoIcon" />
            <StructHeadControlls/>
        </div>
    </div>
</template>
<script setup lang="ts">
    import LogoIcon from '~/assets/images/logo.svg';
    import SearchIcon from '~/assets/images/search_icon.svg';
</script>
