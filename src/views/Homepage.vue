<template>
    <section>
        <Header />
        <Navbar />
    </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";

export default {
    name: "Homepage",
    components: {
        Header,
        Navbar,
    },
};
</script>
