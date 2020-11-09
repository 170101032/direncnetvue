<template>
    <div class="columns is-multiline product-tab p-2">
        <div class="column is-12">
            <b-tabs>
                <b-tab-item label="Urun Ozellikleri">
                    Raspberry Pi 4 28nm tabanlı 1.5G Dört Çekirdekli CPU ve 4Gb DRR4 RAM içeren küçük bir DIY bilgisayardır. PC benzeri yetenekler elde etmek için Raspberry Pi 4, 4K Mikro HDMI, USB 3.0, BLE Bluetooth 5.0, çift-bantlı 2.4/5.0 GHz Wireless LAN, USB-C güç girişi ve PoE ile uyumlu True Gigabit Ethernet'e sahiptir.
                </b-tab-item>
                <b-tab-item label="Odeme Secenekleri"></b-tab-item>
                <b-tab-item label="Yorumlar(17)"><ProductComment /></b-tab-item>
                <b-tab-item label="Resimler"></b-tab-item>
            </b-tabs>
        </div>
    </div>
</template>

<script>
import ProductComment from "@/components/ProductDetail/ProductComment.vue";
//import store from "@/store";

export default {
    name: "ProductTab",
    components: {
        ProductComment,
    },
    props: {},
    data() {
        return {};
    },
    async created() {},
    methods: {},
    watch: {},
};
</script>

<style>
.product-tab .tabs li.is-active a {
    color: #0aa2ee !important;
    border-bottom: 2px solid #0aa2ee !important;
}
.product-tab .tabs li {
    line-height: 30px;
    font-size: 18px;
    color: #021e2c;
    font-weight: 300;
}
</style>
