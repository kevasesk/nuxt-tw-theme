<template>
    <div class="flex text-white flex-wrap content-center">
        <span>English</span>
        <span>USD</span>
        <img :src="WishlistIcon"/>
        <img :src="AccountIcon"/>
        <img :src="CardIcon"/>
    </div>
</template>
<script setup>
import WishlistIcon from '~/assets/images/wishlist.svg';
import AccountIcon from '~/assets/images/account.svg';
import CardIcon from '~/assets/images/card.svg';
</script>
