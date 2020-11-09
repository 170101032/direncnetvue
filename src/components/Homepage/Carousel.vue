<template>
    <div class="container">
        <b-carousel :pause-info="false" :arrow-hover="false" :indicator="false" iconSize="is-large">
            <b-carousel-item v-for="(item, i) in carousels" :key="i">
                <b-image :src="require('@/assets/carousel/' + item.img)"> </b-image>
            </b-carousel-item>
        </b-carousel>
    </div>
</template>

<script>
//import store from "@/store";

export default {
    name: "Carousel",
    components: {},
    props: {},
    data() {
        return {
            carousels: [
                { img: "carousel1.png", link: "" },
                { img: "carousel2.png", link: "" },
                { img: "carousel3.png", link: "" },
                { img: "carousel4.png", link: "" },
                { img: "carousel5.png", link: "" },
                { img: "carousel6.png", link: "" },
            ],
        };
    },
    async created() {},
    methods: {},
    watch: {},
};
</script>

<style>
.carousel-arrow .icon {
    cursor: pointer;
    color: #fff !important;
    border: unset !important;
    border-radius: unset !important;
    background: rgba(128, 128, 128, 0.5) !important;
}
</style>
