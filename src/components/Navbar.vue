<template>
    <div class="container">
        <nav class="columns navbar my-3">
            <a class="column item">Tum kategoriler</a>
            <a class="column item">Yeni Urunler</a>
            <a class="column item">Outlet</a>
            <a class="column item">Toptan Satis</a>
            <a class="column item">Iletisim</a>
            <a class="column item"></a>
        </nav>
    </div>
</template>

<script>
//import store from "@/store";

export default {
    name: "Navbar",
    components: {},
    props: {},
    data() {
        return {};
    },
    async created() {},
    methods: {},
    watch: {},
};
</script>

<style scoped>
.navbar {
    background-color: #018cd1;
}
.navbar .item {
    color: #fff;
    text-align: center;
    border-right: 1px solid #fff;
}
.navbar .item:hover {
    background-color: #3cbeff;
}
</style>
