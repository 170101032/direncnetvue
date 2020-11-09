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
        <div class="column is-12">
            <div class="container">
                <div class="columns">
                    <div class="column is-3">
                        <Sidebar />
                    </div>
                    <div class="column is-9">
                        <ShowcaseMain />
                    </div>
                </div>
            </div>
        </div>
        <FooterTop class="column is-12" />
        <Footer class="column is-12" />
    </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import Carousel from "@/components/Carousel.vue";
import Sidebar from "@/components/Sidebar.vue";
import ShowcaseMain from "@/components/ShowcaseMain.vue";
import FooterTop from "@/components/FooterTop.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "Homepage",
    components: {
        Header,
        Navbar,
        Carousel,
        Sidebar,
        ShowcaseMain,
        FooterTop,
        Footer,
    },
};
</script>
