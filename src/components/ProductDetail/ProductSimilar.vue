<template>
    <div class="columns is-multiline p-2">
        <div class="column is-12">
            <div class="columns">
                <div class="column is-2 p-2 showcase-title">
                    Benzer Urunler
                </div>
                <div class="column is-10 p-2" align="right">
                    <a @click="activeslide--"><img class="pl-2" src="@/assets/detail/slide_prev.png"></a>
                    <a @click="activeslide++"><img class="pl-2" src="@/assets/detail/slide_next.png"></a>
                </div>
            </div>

            <b-carousel-list v-model="activeslide" :data="items" :items-to-show="4" :arrow="false">
                <template slot="item" slot-scope="item">
                    <a class="">
                        <div class="columns is-multiline carditem">
                            <div class="column is-12">
                                <img :src="require('@/assets/products/' + item.img)" />
                            </div>
                            <div class="column is-12">
                                <div class="column is-12 cardbox">{{ item.title }}</div>
                                <div class="column is-12 cardprice">{{ item.price }} TL <span class="kdv"> + KDV</span></div>
                                <div class="column is-12 cardadd"><img src="@/assets/sidebar/plus_passive.png" />Sepete Ekle</div>
                            </div>
                        </div>
                    </a>
                </template>
            </b-carousel-list>
        </div>
    </div>
</template>

<script>
//import store from "@/store";

export default {
    name: "ProductSimilar",
    components: {},
    props: {},
    data() {
        return {
            activeslide:0,
            items: [
                {
                    title: "Anycubic 4 MAX Pro 3 D Printer / 3 D Yazıcı - Monteli - Beyaz Renk",
                    img: "printer.jpg",
                    price: "3.616,20",
                    link: "/productdetails",
                },
                {
                    title: "Arduino Uno Süper Başlangıç Seti",
                    img: "arduinoset.jpg",
                    price: "191,10",
                    link: "/productdetails",
                },
                {
                    title: "Esp8266 Seri Wifi Modül",
                    img: "wifimodul.jpg",
                    price: "11,05",
                    link: "/",
                },
                {
                    title: "Raspberry Pi 4 4 GB - Model B",
                    img: "raspbery.jpg",
                    price: "392,49",
                    link: "/",
                },
                {
                    title: "HC - SR04 Arduino Ultrasonik Mesafe Sensörü",
                    img: "sensor.jpg",
                    price: "4,59",
                    link: "/",
                },
                {
                    title: "2.8 Inch Nextion HMI Dokunmatik TFT Lcd Ekran - 4 MB Dahili Hafıza",
                    img: "hmi.jpg",
                    price: "117,01",
                    link: "/",
                },
                {
                    title: "ATMEGA328P - PU PDIP - 28 8 - Bit 20 MHz Mikrodenetleyici",
                    img: "mikrodenetleyici.jpg",
                    price: "12,64",
                    link: "/",
                },
                {
                    title: "CNC3018 5500 mW Lazerli CNC Makinesi - Tezgahı",
                    img: "tezgah.jpg",
                    price: "2.058,00",
                    link: "/",
                },
                {
                    title: "2 WD Robot Araba Kiti",
                    img: "robotaraba.jpg",
                    price: "21,17",
                    link: "/",
                },
                {
                    title: "852 D + Brushless Sıcak Hava ve Lehimleme istasyonu - Sunline",
                    img: "brushless.jpg",
                    price: "449,82",
                    link: "/",
                },
                {
                    title: "RPLIDAR A3M1 - 360 Derece Lazer Tarayıcı Geliştirme Seti",
                    img: "rplidar.jpg",
                    price: "4.116,00",
                    link: "/",
                },
                {
                    title: "HC06 Bluetooth ModülHC06 Bluetooth Modül",
                    img: "bluetooth.jpg",
                    price: "23,23",
                    link: "/",
                },
                {
                    title: "Raspberry Pi 4 Alüminyum Kasa Soğutucu",
                    img: "sogutucu.jpg",
                    price: "88,20",
                    link: "/",
                },
                {
                    title: "Tekli BreadboardTekli Breadboard",
                    img: "tekliboard.jpg",
                    price: "4,70",
                    link: "/",
                },
                {
                    title: "Arduino Uno R3 SMD CH340 Chip - Klon(USB Kablo Dahil)",
                    img: "arduino.jpg",
                    price: "17,93",
                    link: "/",
                },
                {
                    title: "YF - S201 - Su Akış Sensörü",
                    img: "basincsensor.jpg",
                    price: "27,93",
                    link: "/",
                },
                {
                    title: "RXN1502D 2 A / 0 - 15 V Ayarlı Güç Kaynağı - Power Supply - Adaptör",
                    img: "adaptor.jpg",
                    price: "158,76",
                    link: "/",
                },
                {
                    title: "LattePanda Windows 10 Lisanssız 2 G / 32 GB",
                    img: "lattepand.jpg",
                    price: "623,28",
                    link: "/",
                },
            ],
        };
    },
    async created() {},
    methods: {},
    watch: {},
};
</script>

<style>
.has-shadow {
    box-shadow: unset !important;
}
.showcase-title {
    color: #0aa2ee;
    font-size: 18px;
    text-align: center;
    border-bottom: 2px solid #0aa2ee;
}
.carditem {
    margin: 1px !important;
    text-align: center;
}
.carditem img {
    height: 220px;
    width: auto;
}
.carditem:hover {
    border: 1px solid #0aa2ee;
}
.cardbox {
    height: 57px;
    background-color: #fafafa;
    font-size: 16px;
    color: #021e2c;
    overflow: hidden;
    text-overflow: ellipsis;
}
.cardprice {
    height: 30px;
    background-color: #fafafa;
    font-size: 21px;
    color: #018cd1;
    font-weight: 700;
}
.kdv {
    font-size: 17px;
    font-weight: 700;
    color: #023650;
}
.cardadd {
    height: 35px;
    line-height: 35px;
    background-color: #fafafa;
    text-transform: uppercase;
    color: #0aa2ee;
    font-size: 16px;
    font-weight: 700;
    border-top: 2px solid #0aa2ee !important;
}
.cardadd img {
    margin-right: 2px;
    height: 16px;
    width: 16px;
    vertical-align: text-top;
}
.carditem:hover .cardadd {
    color: #fff;
    background-color: #0aa2ee;
}
</style>
