<template>
    <div class="columns is-multiline">
        <div class="column is-12 header-top">
            <div class="container">
                <div class="container">
                    <div class="columns">
                        <div class="column p-1" align="right">
                            <a class="pl-4"><img class="pr-2" src="@/assets/header/fb.png" />Facebook Ile Baglan</a>
                            <a class="pl-4"><img class="pr-2" src="@/assets/header/log_in.png" />Uye Girisi</a>
                            <a class="pl-4"><img class="pr-2" src="@/assets/header/register.png" />Yeni Uyelik</a>
                            <a class="pl-4"><img class="pr-2" src="@/assets/header/tr.png" />TR</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-12 header p-5">
            <div class="container">
                <div class="columns pt-2">
                    <div class="column">
                        <img src="@/assets/header/logo.png" />
                    </div>
                    <div class="column">
                        <b-field class="search" position="is-centered">
                            <input type="text" placeholder="Aradiginiz urunun adini yaziniz." />
                            <button><img src="@/assets/header/search_ico.png" /></button>
                        </b-field>
                    </div>
                    <div class="column" align="right">
                        <a class="cart" href="/">
                            <b-field position="is-right">
                                <button><img src="@/assets/header/basket.png" /></button>
                                <input class="cart-text" placeholder="0 Urun/0,00 TL" disabled />
                            </b-field>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import store from "@/store";

export default {
    name: "Header",
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

<style>
.header-top {
    background-color: #1eaef6;
}
.header-top a {
    font-size: 13px;
    color: #fff;
}
.header-top a:hover {
    font-size: 13px;
    color: #fff;
}
.header {
    background-color: #0aa2ee;
}
.search input {
    width: 100%;
    border: none;
    outline: none;
    color: #fff;
    font-size: 14px;
    background: #018cd1;
    box-sizing: border-box;
    padding: 10px 40px 10px 20px;
    font-family: "Roboto Condensed";
}
.search input::placeholder {
    color: #fff !important;
}
.search button {
    width: 40px;
    cursor: pointer;
    border: none !important;
    outline: none !important;
    background: #fff !important;
}

.cart button {
    cursor: pointer;
    outline: none !important;
    border: none !important;
    background: #fff !important;
}
.cart input {
    width:33%;
    border: none;
    color: #fff;
    outline: none;
    font-size: 14px;
    cursor: pointer;
    font-weight: 700;
    background: #018cd1;
    padding: 10px 20px 10px 20px;
    font-family: "Roboto Condensed";
}
.cart input::placeholder {
    color: #fff !important;
}
</style>
