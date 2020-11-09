<template>
    <section class="columns is-multiline">
        <div class="column is-12">
            <Header />
        </div>
        <div class="column is-12">
            <Navbar />
        </div>
        <div class="column is-12">
            <Carousel />
        </div>
        <div class="column is-3">
            <Sidebar />
        </div>
        <div class="column is-9">
            dd
        </div>
        <FooterTop class="column is-12" />
        <Footer class="column is-12" />
    </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Carousel from "@/components/Carousel.vue";
import FooterTop from "@/components/FooterTop.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "Homepage",
    components: {
        Header,
        Navbar,
        Sidebar,
        Carousel,
        FooterTop,
        Footer,
    },
};
</script>
