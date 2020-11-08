<template>
    <section>
        <Header />
        <Navbar />
        <Carousel />
        <FooterTop />
        <Footer />
    </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import Carousel from "@/components/Carousel.vue";
import FooterTop from "@/components/FooterTop.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "Homepage",
    components: {
        Header,
        Navbar,
        Carousel,
        FooterTop,
        Footer,
    },
};
</script>
