<template>
    <div class="container">
        <div class="columns is-multiline cart p-4">
            <div class="column is-12 cart-title">
                Urun Sepetinize Eklendi
            </div>
            <div class="column is-12">
                <table class="column is-12 table-box">
                    <tr class="columns">
                        <th class="column is-1 table-box table-head p-2">Urun</th>
                        <th class="column is-4 table-box table-head p-2">Urun Adi</th>
                        <th class="column is-2 table-box table-head p-2">Miktar</th>
                        <th class="column is-2 table-box table-head p-2">Birim Fiyati</th>
                        <th class="column is-2 table-box table-head p-2">Toplam Tutar</th>
                        <th class="column is-1 table-box table-head p-2">Sil</th>
                    </tr>
                    <tr class="columns">
                        <td class="column is-1 table-box p-2"><img class="cart-img" src="@/assets/detail/rpi1.png" /></td>
                        <td class="column is-4 table-box table-head p-2"><span>Raspberry Pi 4 4GB - Model B</span></td>
                        <td class="column is-2 table-box p-2">
                            <div class="column is-12 table-box p-2 pb-4">
                                ADET:<br /><br />
                                <a @click="quantity > 1 ? quantity-- : 1" class="table-box p-2 px-3 mx-1">-</a>
                                {{ quantity }}
                                <a @click="quantity++" class="table-box p-2 px-3 mx-1">+</a>
                            </div>
                        </td>
                        <td class="column is-2 table-box p-2">502,99 TL + %18 KDV</td>
                        <td class="column is-2 table-box p-2">593,53 TL</td>
                        <td class="column is-1 table-box p-2">
                            <a class="cart-cross p-1"><img src="@/assets/cart/cross.png"/></a>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="column is-12" align="right">
                <div class="column is-4 table-box p-1" align="right"><b class="is-pulled-left px-2 table-head">Sepet Toplamı:</b> {{ 593.53 * quantity }} TL</div>
            </div>

            <div class="column is-12 border-top mt-3 p-2 pt-3">
                <a class="cart-button p-2" href="/">Alisverise Devam</a>
                <a class="cart-button p-2 is-pulled-right" href="/cart">Sepete Git</a>
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
.cart-img {
    width: 60px;
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
    color: #000;
    font-weight: 700;
}
.table-box {
    border: 1px solid #ececec;
}
</style>
