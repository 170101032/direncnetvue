<template>
    <b-tabs>
        <b-tab-item label="Vitrin Urunleri">
            <div class="columns is-multiline">
                <div class="column is-3" v-for="(item, i) of items" :key="i">
                    <a class="">
                        <div class="columns is-multiline carditem">
                            <div class="column is-12">
                                <img :src="require('@/assets/products/' + item.img)" />
                            </div>
                            <div class="column is-12 cardbox">{{ item.title }}</div>
                            <div class="column is-12 cardprice">{{ item.price }} TL + KDVL</div>
                            <div class="column is-12 cardadd">Sepete Ekle</div>
                        </div>
                    </a>
                </div>
            </div>
        </b-tab-item>
    </b-tabs>
</template>

<script>
//import store from "@/store";

export default {
    name: "ShowcaseMain",
    components: {},
    props: {},
    data() {
        return {
            items: [
                {
                    title: "Anycubic 4 MAX Pro 3 D Printer / 3 D Yazıcı - Monteli - Beyaz Renk",
                    img: "printer.jpg",
                    price: "3.616,20",
                    link: "/productspecs",
                },
                {
                    title: "Arduino Uno Süper Başlangıç Seti",
                    img: "arduinoset.jpg",
                    price: "191,10",
                    link: "/product2specs",
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
                {
                    title: "RJ45 Metal 180 CRJ45 Metal 180 C",
                    img: "metal.jpg",
                    price: "2,88",
                    link: "/",
                },
                {
                    title: "5 V - 2 Kanal Solid State Röle Kartı(5 V 2 A)(Geliştirme Kartları yla Uyumlu)",
                    img: "rolekarti.jpg",
                    price: "26,46",
                    link: "/",
                },
                {
                    title: "China - 5 A 90 W 12 V DC Motor Hız Kontrol Kartı",
                    img: "kontrolkart.jpg",
                    price: "18,23",
                    link: "/",
                },
                {
                    title: "STM8S103F3P6 Geliştirme Kartı",
                    img: "gelistirmekarti.jpg",
                    price: "12,94",
                    link: "/",
                },
                {
                    title: "3 D Yazıcı Isıtıcı Levha - MK2A Reprap Ramps v1 .4",
                    img: "levha.jpg",
                    price: "52,33",
                    link: "/",
                },
                {
                    title: "UCE - DSO210 Osiloskop 2 Kanal - 2 MHz - 10 Msps - Kutulu",
                    img: "osikolskop.jpg",
                    price: "514,50",
                    link: "/",
                },
                {
                    title: "Vc - 921 Dijital Cep Tipi Multimetre - Tt - Technic",
                    img: "multimetre.jpg",
                    price: "67,62",
                    link: "/",
                },
                {
                    title: "ALDP112W Panasonic Röle 5 A 12 V 4 Pin",
                    img: "panasonic.jpg",
                    price: "3,00",
                    link: "/",
                },
                {
                    title: "40 Adet Dişi - Erkek Jumper Kablo 20 cm",
                    img: "jumper.jpg",
                    price: "2,35",
                    link: "/",
                },
                {
                    title: "CNY70 Transistör çıkışlı Yansıyan Işıkk Detektörü",
                    img: "reflective.jpg",
                    price: "2,29",
                    link: "/",
                },
                {
                    title: "3 Pin Düz Su Geçirmez Konnektör Takım",
                    img: "konnektor.jpg",
                    price: "4,12",
                    link: "/",
                },
                {
                    title: "Lora SX1278 433 Mhz Transceiver Modülü",
                    img: "transceiver.png",
                    price: "170,52",
                    link: "/",
                },
                {
                    title: "IRF510 N Kanal Power Mosfet TO - 220",
                    img: "fairchild.jpg",
                    price: "2,65",
                    link: "/",
                },
                {
                    title: "30 A 250 V LED ON - OFF Su Geçirmez Switch - Mavi",
                    img: "switch.jpg",
                    price: "8,82",
                    link: "/",
                },
                {
                    title: "Buzzer - Bilgisayar Anakartı Uyumlu",
                    img: "buzzer.jpg",
                    price: "1,18",
                    link: "/",
                },
                {
                    title: "Pickit3 Pic Programlama Kartı ve Dip çevirici Adaptör",
                    img: "microchip.jpg",
                    price: "85,26",
                    link: "/",
                },
                {
                    title: "Omron 1000 P / R Enkoder(E6BC2 CWZ6C)",
                    img: "ncoder.jpg",
                    price: "346,92",
                    link: "/",
                },
                {
                    title: "1 s LiPo Pil Kapasite Göstergesi",
                    img: "lipo.jpg",
                    price: "14,11",
                    link: "/",
                },
                {
                    title: "2 Pin 3.81mm 90° Erkek Geçmeli Yeşil Klemens",
                    img: "klemens.jpg",
                    price: "0,41",
                    link: "/",
                },
                {
                    title: "6 V 250 Rpm Motor ve Tekerlek Seti",
                    img: "motortekerlek.jpg",
                    price: "4,59",
                    link: "/",
                },
                {
                    title: "RTC Modül - DS1307RTC Modül - DS1307",
                    img: "rtcmodul.jpg",
                    price: "4,70",
                    link: "/",
                },
                {
                    title: "DC5V - 48 V LED Panel Mini Dijital Voltmetre - Beyaz",
                    img: "voltmetre.jpg",
                    price: "27,93",
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

<style scoped>
.carditem {
}
.carditem:hover {
    border: 1px solid blue;
}

.cardbox {
    background-color: #fafafa;
}
.cardprice {
    background-color: #fafafa;
}
.cardadd {
    background-color: #fafafa;
}
.carditem:hover .cardadd {
    color: #fff;
    background-color: blue;
}
</style>
