<template>
    <div class="columns is-multiline m-2">
        <div class="column is-12 breadcrumbs p-1">
            Anasayfa > Raspberry Pi > <span class="product-bold">Raspberry Pi Ana Kartlar</span>
        </div>
        <div class="column is-12">
            <div class="columns detail-border">
                <div class="column is-6">
                    <b-carousel :pause-info="false" :arrow-hover="false" :indicator-inside="false" iconSize="is-large">
                        <b-carousel-item v-for="(item, i) in details" :key="i">
                            <span class="image">
                                <b-image :src="require('@/assets/detail/' + item.img)"> </b-image>
                            </span>
                        </b-carousel-item>
                        <template slot="indicators" slot-scope="props">
                            <span class="al image">
                                <b-image :src="require('@/assets/detail/' + details[props.i].img)"> </b-image>
                            </span>
                        </template>
                    </b-carousel>
                </div>
                <div class="column is-6">
                    <div class="columns is-multiline detail-right">
                        <div class="column is-12 product-name p-3 pb-6">Raspberry Pi 4 4GB - Model B</div>
                        <div class="column is-12 product-bold left-border p-3">
                            Marka/Menşei: <a><span class="blu">Raspberry Pi</span></a>
                        </div>
                        <div class="column is-12 product-bold left-border p-3">Stok Kodu : 14655</div>
                        <div class="column is-12 left-border p-3">513,83 TL +KDV</div>
                        <div class="column is-12 product-price left-border p-3"><span class="blu">606,31 TL</span> KDV Dahil</div>
                        <div class="column is-12 left-border p-3">- 1 +</div>
                        <div class="column is-12 left-border p-3">Alisveris Listeme Ekle</div>
                        <div class="column is-12 p-3"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-12"></div>
        <div class="column is-12"></div>
    </div>
</template>

<script>
//import store from "@/store";

export default {
    name: "Product",
    components: {},
    props: {},
    data() {
        return {
            details: [
                { img: "rpi1.png", link: "" },
                { img: "rpi2.png", link: "" },
                { img: "rpi3.png", link: "" },
            ],
        };
    },
    async created() {},
    methods: {},
    watch: {},
};
</script>

<style>
.breadcrumbs {
    color: #018cd1;
    font-size: 17px;
    border-bottom: 1px solid #018cd1;
}
.detail-border {
    border: 1px solid #ececec;
}
.detail-right {
    background-color: #fafafa;
}
.product-name {
    line-height: 30px;
    font-size: 22px;
    color: #021e2c;
}
.product-bold {
    color: #162d33;
    font-weight: 700;
    font-size: 17px;
}
.product-price {
    font-size: 32px;
    font-weight: 700;
}
.blu {
    color: blue;
    font-weight: 700;
}
.left-border {
    border-left: 4px solid #018cd1;
    border-bottom: 1px solid white;
}
.al .image {
    max-width: 60px;
    border: 1px solid gray;
}
.carousel .carousel-indicator {
    justify-content: left !important;
}
.mdi-chevron-left,
.mdi-chevron-right {
}
</style>
