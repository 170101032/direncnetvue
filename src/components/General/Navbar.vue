<template>
    <div class="columns is-multiline m-3">
        <div class="column is-12">
            <div class="container">
                <div class="columns navbarx">
                    <a class="column is-3 item p-2">Tum kategoriler</a>
                    <a class="column item p-2">Yeni Urunler</a>
                    <a class="column item p-2">Outlet</a>
                    <a class="column item p-2">Toptan Satis</a>
                    <a class="column item p-2">Iletisim</a>
                    <a class="column item p-2"></a>
                </div>
            </div>
        </div>
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
.navbarx {
    background-color: #018cd1;
}
.item{
    color: #fff;
    cursor:pointer;
    text-align: center;
    border-right: 1px solid #fff;
}
.item:hover {
    background-color: #3cbeff;
}
.item:last-child:hover{
    background-color: #018cd1;
}
.item:last-child{
    border-right: 0;
}
</style>
