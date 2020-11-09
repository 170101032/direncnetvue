<template>
    <div class="container">
        <div class="columns is-multiline cart p-4">
            <div class="column is-12">
                <table class="column is-12 table-box">
                    <tr class="columns">
                        <th class="column is-1 table-head table-bold p-2">Urun</th>
                        <th class="column is-4 table-head table-bold p-2">Urun Adi</th>
                        <th class="column is-2 table-head table-bold p-2">Miktar</th>
                        <th class="column is-2 table-head table-bold p-2">Birim Fiyati</th>
                        <th class="column is-2 table-head table-bold p-2">Toplam Tutar</th>
                        <th class="column is-1 table-head table-bold p-2">Sil</th>
                    </tr>
                    <tr class="columns">
                        <td class="column is-1 p-2"><img class="cart-img" src="@/assets/detail/rpi1.png" /></td>
                        <td class="column is-4 table-bold p-2"><span>Raspberry Pi 4 4GB - Model B</span></td>
                        <td class="column is-2 p-2">
                            <div class="column is-12 table-box p-4">
                                ADET:
                                <a @click="quantity > 1 ? quantity-- : 1" class="table-box p-2 px-3 ml-4 mr-1">-</a>
                                {{ quantity }}
                                <a @click="quantity++" class="table-box p-2 px-3 mx-1">+</a>
                            </div>
                        </td>
                        <td class="column is-2 table-bold p-2">502,99 TL + %18 KDV</td>
                        <td class="column is-2 p-2">593,53 TL</td>
                        <td class="column is-1 p-2">
                            <a class="cart-cross p-1"><img src="@/assets/cart/cross.png"/></a>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="column is-12" align="right">
                <div class="column is-12" align="left">
                    <div class="column is-8">
                        <a class="cart-link p-1 mr-1">Sepeti Guncelle</a>
                        <a class="cart-link p-1 mr-1">Sepeti Temizle</a>
                        <a class="cart-link p-1 mr-1">Alisverise Devam</a>
                        <a class="cart-link p-1 mr-1">Alisveris Listeme Ekle</a>
                    </div>
                </div>
                <div class="column is-4" align="right">
                    <table class="column is-12">
                        <tr class="columns">
                            <td class="column is-6 table-box p-1">Sepet Toplamı</td>
                            <td class="column is-6 table-box p-1">593,53 TL</td>
                        </tr>
                        <tr class="columns">
                            <td class="column is-6 table-box p-1">Genel Toplam</td>
                            <td class="column is-6 table-box p-1">593,53 TL</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import store from "@/store";

export default {
    name: "Cart",
    components: {},
    props: {},
    data() {
        return { quantity: 1 };
    },
    async created() {},
    methods: {},
    watch: {},
};
</script>

<style>
.cart {
    font-size: 13px;
    background-color: #fff;
}
.cart-title {
    font-size: 20px;
}
.cart-link{
    color:#fff;
    background-color: #012990;
}
.cart-link:hover{
    color: #fff;
    background-color: #3CBEFF;
}
.cart-img {
    width: 90px;
}
.cart-cross {
    background-color: #012990;
}
.cart-table td span {
    float: left;
    vertical-align: middle;
    line-height: 2;
}
.border-top {
    border-top: 1px solid #eee;
}
.cart-button {
    color: #fff;
    background-color: #5cb85c;
    border-radius: 3px;
    font-size: 14px;
    border: 0;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    cursor: pointer;
}
.table-head {
    background-color: #ececec;
}
.table-box {
    border: 1px solid #ececec;
}
.table-bold {
    font-weight: 700;
    color: #000;
}
</style>
