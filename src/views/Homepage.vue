<template>
    <section>
        <Header />
        <Navbar />
        <Carousel />
    </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import Carousel from "@/components/Carousel.vue";

export default {
    name: "Homepage",
    components: {
        Header,
        Navbar,
        Carousel,
    },
};
</script>
