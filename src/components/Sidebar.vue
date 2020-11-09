<template>
    <div class="columns is-multiline mt-2">
        <b-collapse class="column is-12 category" animation="slide" v-for="(category, i) of categories" :key="i" :open="isOpen == i" @open="isOpen = i">
            <div class="p-1" slot="trigger" slot-scope="props" :class="props.open ? 'catopen' : 'catclosed'">
                <img v-if="props.open" :src="require('@/assets/sidebar/minus_active.png')" />
                <img v-if="!props.open" :src="require('@/assets/sidebar/plus_passive.png')" />
                {{ category.title }}
            </div>
            <b-collapse class="column is-12 subcategory" animation="slide" v-for="(subcategory, i2) of category.subcategories" :key="i2" :open="isOpen2 == i2" @open="isOpen2 = i2">
                <div class="p-1" slot="trigger" slot-scope="props">
                    <img v-if="subcategory.items && props.open" :src="require('@/assets/sidebar/minus_active.png')" />
                    <img v-if="subcategory.items && !props.open" :src="require('@/assets/sidebar/plus_active.png')" />
                    <img v-if="!subcategory.items" :src="require('@/assets/sidebar/sub_arrow.png')" />
                    {{ subcategory.title }}
                </div>
                <div class="column is-12 item p-1 pl-4" v-for="(item, i3) of subcategory.items" :key="i3">
                    {{ item }}
                </div>
            </b-collapse>
        </b-collapse>
    </div>
</template>

<script>
//import store from "@/store";

export default {
    name: "Sidebar",
    components: {},
    props: {},
    data() {
        return {
            isOpen: -1,
            isOpen2: -1,
            categories: [
                {
                    title: "Mikrodenetleyiciler",
                    subcategories: [
                        {
                            title: "Microchip Pic Mikrodenetleyici",
                            items: [
                                "Pic12 Serisi Dip",
                                "Pic12 Serisi Smd",
                                "Pic16 Serisi Dip",
                                "Pic16 Serisi Smd",
                                "Pic18 Serisi Dip",
                                "Pic18 Serisi Smd",
                                "Pic24fj Serisi (16 Bit)",
                                "Pic32mx Serisi (32 Bit)",
                                "Dspic Serisi",
                                "Low Power Microcchips",
                                "Microchip Pic Mikrodenetleyici (Tumu)",
                            ],
                        },
                        {
                            title: "Atmel Mikrodenetleyici",
                            items: ["Atmega", "Atmega Smd", "Attiny", "Attiny Smd", "89 Serisi", "Atmel Mikrodenetleyici (Tumu)"],
                        },
                        {
                            title: "Stm Mikrodenetleyici",
                        },
                        {
                            title: "Diğer Mikrodenetleyiciler",
                            items: ["Texas Mikrodenetleyiciler", "Renesas Mikrodenetleyiciler", "Nxp Mikrodenetleyiciler", "Elan Mikrodenetleyiciler", "80 / 82 / 87 Mikrodenetleyiciler", "Diger Mikrodenetleyici (Tumu)"],
                        },
                        {
                            title: "Mikrodenetleyiciler (Tümü)",
                        },
                    ],
                },
                {
                    title: "Entegre",
                    subcategories: [
                        {
                            title: "ACS / AD / ADC / DAC / DG / DS Serisi",
                        },
                        {
                            title: "ENC / FT / HIP / INA / IR Serisi",
                        },
                        {
                            title: "L / LF / LM / LMD Serisi",
                        },
                        {
                            title: "MAX / MCP / OP / TC / TDA Serisi",
                        },
                        {
                            title: "TL / TLC / UC / UDN / ULN Serisi",
                        },
                        {
                            title: "TTL CMOS Serisi",
                        },
                        {
                            title: "Voltaj Regülatörleri",
                        },
                        {
                            title: "Optocoupler Serisi",
                        },
                        {
                            title: "EPROM / EEPROM Serisi",
                        },
                        {
                            title: "Diğer Entegreler",
                        },
                        {
                            title: "Entegre Soketleri",
                        },
                        {
                            title: "Entegre (Tümü)",
                        },
                    ],
                },
                {
                    title: "Yarı İletkenleler",
                    subcategories: [
                        {
                            title: "Transistör",
                        },
                        {
                            title: "Mosfet",
                        },
                        {
                            title: "IGBT",
                        },
                        {
                            title: "Triac / Tristör / Diyak",
                        },
                        {
                            title: "Yarı İletken Modüller",
                        },
                        {
                            title: "Yarı İletkenler (Tümü)",
                        },
                    ],
                },
                {
                    title: "Arduino",
                    subcategories: [
                        {
                            title: "Orjinal Arduino",
                        },
                        {
                            title: "Arduino Ana Board",
                        },
                        {
                            title: "Arduino Eğitim Setleri",
                        },
                        {
                            title: "Arduino Shield",
                        },
                        {
                            title: "Arduino Sensör ve Modüller",
                        },
                        {
                            title: "Arduino Röle Kartları",
                        },
                        {
                            title: "Arduino Gsm ve Gps",
                        },
                        {
                            title: "Arduino Kitap",
                        },
                        {
                            title: "Arduino Aksesuarları",
                        },
                        {
                            title: "Arduino Lilypad",
                        },
                        {
                            title: "Arduino Lcd Display",
                        },
                        {
                            title: "Arduino (Tümü)",
                        },
                    ],
                },
                {
                    title: "Raspberry pi",
                    subcategories: [
                        {
                            title: "Raspberry pi Ana Kartlar",
                        },
                        {
                            title: "Raspberry Pi Eğitim Setleri",
                        },
                        {
                            title: "Raspberry Pi Yan Ürünler",
                        },
                        {
                            title: "Raspberry Pi Lcd Ürünler",
                        },
                        {
                            title: "Raspberry Pi (Tümü)",
                        },
                    ],
                },
                {
                    title: "Geliştirme Kartları",
                    subcategories: [
                        {
                            title: "LattePanda",
                        },
                        {
                            title: "BeagleBone",
                        },
                        {
                            title: "ST Geliştirme Kartları",
                        },
                        {
                            title: "Orange Pi",
                        },
                        {
                            title: "Texas Geliştirme Kartları",
                        },
                        {
                            title: "Adafruit Geliştirme Kartları",
                        },
                        {
                            title: "BBC Micro:Bit",
                        },
                        {
                            title: "NVIDIA Geliştirme Kartları",
                        },
                        {
                            title: "Diğer Geliştime Kartları",
                        },
                        {
                            title: "Geliştirme Kartlarıyla Uyumlu Lcd Display",
                        },
                        {
                            title: "Geliştirme Kartları (Tümü)",
                        },
                    ],
                },
                {
                    title: "Lcd ve Display",
                    subcategories: [
                        {
                            title: "Nextion HMI Akıllı TFT LCD Display",
                        },
                        {
                            title: "Karakter Lcd Display",
                        },
                        {
                            title: "Grafik Lcd Display",
                        },
                        {
                            title: "Oled Lcd Display",
                        },
                        {
                            title: "Arduino Lcd Display",
                        },
                        {
                            title: "Raspberry Pi Lcd Display",
                        },
                        {
                            title: "7 Segment Display",
                        },
                        {
                            title: "Dot matrix Display",
                        },
                        {
                            title: "TFT / COG Lcd Display",
                        },
                        {
                            title: "Lcd ve Display (Tümü)",
                        },
                    ],
                },
                {
                    title: "Sensör",
                    subcategories: [
                        {
                            title: "Ağırlık Sensörleri",
                        },
                        {
                            title: "Akım Sensörleri",
                        },
                        {
                            title: "Alıcı ve Verici Sensörler",
                        },
                        {
                            title: "Basınç ve Kuvvet Sensörleri",
                        },
                        {
                            title: "Gaz Sensörleri",
                        },
                        {
                            title: "Hall Effect Sensörleri",
                        },
                        {
                            title: "Ldr Sensörler",
                        },
                        {
                            title: "Mesafe ve Hareket Sensörleri",
                        },
                        {
                            title: "Proximity Sensörler",
                        },
                        {
                            title: "Renk ve Işık Sensörleri",
                        },
                        {
                            title: "Mems ve Eğitim Sensörleri",
                        },
                        {
                            title: "Nem ve Sıcaklık Sensörleri",
                        },
                        {
                            title: "Su Sensörleri",
                        },
                        {
                            title: "Sharp Sensörler",
                        },
                        {
                            title: "MEdikal Sensörler",
                        },
                        {
                            title: "Ultrasonic Senörler",
                        },
                        {
                            title: "Lazer ve Lazerli Sensörler",
                        },
                        {
                            title: "pH Sensörler",
                        },
                        {
                            title: "Diğer Sensörler",
                        },
                        {
                            title: "Sensör (Tümü)",
                        },
                    ],
                },
                {
                    title: "Kablosuz Haberleşme",
                    subcategories: [
                        {
                            title: "Wifi Modül",
                        },
                        {
                            title: "LoRaWAN Modül",
                        },
                        {
                            title: "Bluetooth Modül",
                        },
                        {
                            title: "Gsm / Gps / Gprs",
                        },
                        {
                            title: "Rfid okuyucu ve Etiketler",
                        },
                        {
                            title: "Wireless Modül",
                        },
                        {
                            title: "Standart Rf Modül",
                        },
                        {
                            title: "Dorji Rf Modül",
                        },
                        {
                            title: "Akıllı Ev Sistemleri",
                        },
                        {
                            title: "Hazır Rf Alıcı ve Kumanda",
                        },
                        {
                            title: "Rf Anten",
                        },
                        {
                            title: "Sma Konnektör ve Kablolar",
                        },
                        {
                            title: "Xbee Modüller",
                        },
                        {
                            title: "Kablosuz Haberleşme (Tümü)",
                        },
                    ],
                },
                {
                    title: "3D Printer ve CNC",
                    subcategories: [
                        {
                            title: "3D Printer Çeşitleri",
                        },
                        {
                            title: "3D Printer Parçaları",
                        },
                        {
                            title: "3D Filament",
                        },
                        {
                            title: "CNC Tezgah",
                        },
                        {
                            title: "3D Printer ve CNC (Tümü)",
                        },
                    ],
                },
                {
                    title: "Motor ve Motor Sürücüler",
                    subcategories: [
                        {
                            title: "Motor Sürücü ve Kontrol Kartları",
                        },
                        {
                            title: "Reüktörlü Dc Motor",
                        },
                        {
                            title: "Step Motor",
                        },
                        {
                            title: "Dc Motor",
                        },
                        {
                            title: "Enkoderli Motor",
                        },
                        {
                            title: "Servo Motor",
                        },
                        {
                            title: "Linear Motor",
                        },
                        {
                            title: "Fırçasız Motor ve Sürücüler",
                        },
                        {
                            title: "Çekirdeksiz Motor",
                        },
                        {
                            title: "Titreşim Motoru",
                        },
                        {
                            title: "Solenoid / Sıvı ve hava pompaları",
                        },
                        {
                            title: "Motor Tutucular",
                        },
                        {
                            title: "Fan Çeşitleri",
                        },
                        {
                            title: "Motor ve Motor Sürücüler (Tümü)",
                        },
                    ],
                },
                {
                    title: "Direnç",
                    subcategories: [
                        {
                            title: "Smd Direnç",
                        },
                        {
                            title: "1/8W Direnç",
                        },
                        {
                            title: "1/4W Direnç",
                        },
                        {
                            title: "1/4W Metal Fİlm Direnç",
                        },
                        {
                            title: "1/2W Direnç",
                        },
                        {
                            title: "1W Direnç",
                        },
                        {
                            title: "2W Direnç",
                        },
                        {
                            title: "5W Direnç",
                        },
                        {
                            title: "11W Direnç",
                        },
                        {
                            title: "Alüminyum direnç -25W / 50W / 100W",
                        },
                        {
                            title: "Sıra Direnç",
                        },
                        {
                            title: "Drienç Paketi",
                        },
                        {
                            title: "Direnç (Tümü)",
                        },
                    ],
                },
                {
                    title: "Kondansatör",
                    subcategories: [
                        {
                            title: "UF Kondansatör",
                        },
                        {
                            title: "NF Kondansatör",
                        },
                        {
                            title: "PF Kondansatör",
                        },
                        {
                            title: "Tantal Kondansatör",
                        },
                        {
                            title: "Smd Kondasatör",
                        },
                        {
                            title: "Snubber Kondansatör",
                        },
                        {
                            title: "Kondansatör Paketi",
                        },
                        {
                            title: "Kondansatör (Tümü)",
                        },
                    ],
                },
                {
                    title: "Diyot",
                    subcategories: [
                        {
                            title: "Genel Amaçlı Diyot",
                        },
                        {
                            title: "Hızlı Diyotlar",
                        },
                        {
                            title: "Schottky Diyotlar",
                        },
                        {
                            title: "Köprü Diyot",
                        },
                        {
                            title: "Lazer Diyot",
                        },
                        {
                            title: "Metal Diyot",
                        },
                        {
                            title: "Zener Diyot",
                        },
                        {
                            title: "Transil Diyot",
                        },
                        {
                            title: "Diyot (Tümü)",
                        },
                    ],
                },
                {
                    title: "Röle",
                    subcategories: [
                        {
                            title: "Panasonic Röle",
                        },
                        {
                            title: "Tianbo Röle",
                        },
                        {
                            title: "Huike / Qianji Röle",
                        },
                        {
                            title: "Omron Röle",
                        },
                        {
                            title: "Finder Röle",
                        },
                        {
                            title: "Schrack Röle",
                        },
                        {
                            title: "Röle Kartları",
                        },
                        {
                            title: "Solid State Röle (Ssr Röle)",
                        },
                        {
                            title: "Amperli Röle",
                        },
                        {
                            title: "Slim Röleler",
                        },
                        {
                            title: "Reed Röle",
                        },
                        {
                            title: "Kombi Röleleri",
                        },
                        {
                            title: "Otomasyon Röleleri",
                        },
                        {
                            title: "Güvenlik Röleleri",
                        },
                        {
                            title: "Latching Güç Röleleri",
                        },
                        {
                            title: "Diğer Röleler",
                        },
                        {
                            title: "Röle Soketleri",
                        },
                        {
                            title: "Röle (Tümü)",
                        },
                    ],
                },
                {
                    title: "Plaket ve Breadboard",
                    subcategories: [
                        {
                            title: "Bakır Plaket",
                        },
                        {
                            title: "Delikli Plaket",
                        },
                        {
                            title: "Matkap ve Matkap Uçları",
                        },
                        {
                            title: "Breadboard",
                        },
                        {
                            title: "Pnp Kağıdı",
                        },
                        {
                            title: "Jumper Kablo",
                        },
                        {
                            title: "Baskı Devre Kalemi",
                        },
                        {
                            title: "Pcb / Dizgi Üretimi",
                        },
                        {
                            title: "Plaket ve Breadboard (Tümü)",
                        },
                    ],
                },
                {
                    title: "Led Ürünleri",
                    subcategories: [
                        {
                            title: "Smd Led",
                        },
                        {
                            title: "3mm Led",
                        },
                        {
                            title: "5mm Led",
                        },
                        {
                            title: "10mm Led",
                        },
                        {
                            title: "Mantar Led",
                        },
                        {
                            title: "Power Led",
                        },
                        {
                            title: "Rgb / Flux / Çift Renk Led",
                        },
                        {
                            title: "Sinyal Lambaları",
                        },
                        {
                            title: "Led Sürücü ve Kontrol Kartları",
                        },
                        {
                            title: "Led Yuvası / Led Distans",
                        },
                        {
                            title: "Diğer Led Ürünleri",
                        },
                        {
                            title: "Led Ürünleri",
                        },
                    ],
                },
                {
                    title: "Robotik Ürünler ve Eğitim Kitleri",
                    subcategories: [
                        {
                            title: "Robotik Kitleri",
                        },
                        {
                            title: "Eğitim Kitleri",
                        },
                        {
                            title: "Kodlama",
                        },
                        {
                            title: "Robotik Ekipmanlar",
                        },
                        {
                            title: "Robotik Sensörler",
                        },
                        {
                            title: "Robotik Tekerlek",
                        },
                        {
                            title: "Joystick",
                        },
                        {
                            title: "Jst Kablolar",
                        },
                        {
                            title: "Robotik Ürünler ve Eğitim Kitleri (Tümü)",
                        },
                    ],
                },
                {
                    title: "Programlama Kartları",
                    subcategories: [
                        {
                            title: "Microchip Programlayıcılar",
                        },
                        {
                            title: "Atmel Programlayıcılar",
                        },
                        {
                            title: "Ses Entegresi Programlama Cihazları",
                        },
                        {
                            title: "Diğer Programlayıcılar",
                        },
                        {
                            title: "Programlama Kartları",
                        },
                    ],
                },
                {
                    title: "Klemens",
                    subcategories: [
                        {
                            title: "Pcb Klemens",
                        },
                        {
                            title: "Geçmeli Klemens 3.50mm",
                        },
                        {
                            title: "Geçmeli Klemens 3.81mm",
                        },
                        {
                            title: "Geçmeli Klemens 5.08mm",
                        },
                        {
                            title: "Geçmeli Klemens 7.62mm",
                        },
                        {
                            title: "Kablo-Kablo Klemens",
                        },
                        {
                            title: "Bariyer Klemens",
                        },
                        {
                            title: "Yaylı Klemens",
                        },
                        {
                            title: "Buat Klemens",
                        },
                        {
                            title: "Klemens (Tümü)",
                        },
                    ],
                },
                {
                    title: "Buton ve Switch",
                    subcategories: [
                        {
                            title: "6x6 Tact Switch",
                        },
                        {
                            title: "12x12 Tact Switch",
                        },
                        {
                            title: "Smd Switch",
                        },
                        {
                            title: "Slide Switch",
                        },
                        {
                            title: "Push Button Switch",
                        },
                        {
                            title: "Plastik Yaylı Butonlar",
                        },
                        {
                            title: "Plastik Anahtar Butonlar",
                        },
                        {
                            title: "Metal ve Ledli Swtich",
                        },
                        {
                            title: "Toggle Swtich",
                        },
                        {
                            title: "Rocker Switch",
                        },
                        {
                            title: "Micro Switch",
                        },
                        {
                            title: "Dip Switch",
                        },
                        {
                            title: "Su Geçirmez Buton ve Anahtarlar",
                        },
                        {
                            title: "Diğer Buton ve Anahtarlar",
                        },
                        {
                            title: "Buton ve Switch (Tümü)",
                        },
                    ],
                },
                {
                    title: "Konnektör",
                    subcategories: [
                        {
                            title: "IDC Konnektör",
                        },
                        {
                            title: "Pin Header",
                        },
                        {
                            title: "Usb Konnektör",
                        },
                        {
                            title: "D-Sub Konnektör",
                        },
                        {
                            title: "Ethernet Konnektör",
                        },
                        {
                            title: "Power Konnektör",
                        },
                        {
                            title: "Sma Konnektör",
                        },
                        {
                            title: "Jst Konnektör",
                        },
                        {
                            title: "Su Geçirmez Konnektör",
                        },
                        {
                            title: "Sim Kart - SD Kart Yuvaları",
                        },
                        {
                            title: "Kablodan Kabloya Konnektör",
                        },
                        {
                            title: "Yüksük - Pabuç",
                        },
                        {
                            title: "Diğer Konnektörler",
                        },
                        {
                            title: "Konnektör (Tümü)",
                        },
                    ],
                },
                {
                    title: "Jak ve Fiş",
                    subcategories: [
                        {
                            title: "Born-Banana Jak ve Test Kabloları",
                        },
                        {
                            title: "Krokodil",
                        },
                        {
                            title: "Power Jak",
                        },
                        {
                            title: "Stereo - Mono Jak",
                        },
                        {
                            title: "Speakon Jak",
                        },
                        {
                            title: "Canon / XLR Jak",
                        },
                        {
                            title: "Mike Konnektör Fiş",
                        },
                        {
                            title: "Jak ve Fiş (Tümü)",
                        },
                    ],
                },
                {
                    title: "Pot,Trimpot ve Encoder",
                    subcategories: [
                        {
                            title: "Potansiyometreler",
                        },
                        {
                            title: "Trimpot",
                        },
                        {
                            title: "Komütör / Rotary Switch",
                        },
                        {
                            title: "Encoder",
                        },
                        {
                            title: "Pot,Trimpot ve Encoder (Tümü)",
                        },
                    ],
                },
                {
                    title: "Tunik ve Pcb Konnektörler",
                    subcategories: [
                        {
                            title: "Orjinal Tunik Konnektör",
                        },
                        {
                            title: "2.50mm Konnektör",
                        },
                        {
                            title: "2.54 Konnektör",
                        },
                        {
                            title: "3.96mm Konnektör",
                        },
                        {
                            title: "4.20 Konnektör",
                        },
                        {
                            title: "5.08 Konnektör",
                        },
                        {
                            title: "Konnektör Pimleri",
                        },
                        {
                            title: "Tunik ve Pcb Konnektörleri (Tümü)",
                        },
                    ],
                },
                {
                    title: "Ölçüm ve Test Aletleri",
                    subcategories: [
                        {
                            title: "Osiloskop",
                        },
                        {
                            title: "Dijital Multimetre",
                        },
                        {
                            title: "Bobin ve Kondansatör Ölçerler",
                        },
                        {
                            title: "Logic Analyzer",
                        },
                        {
                            title: "Voltmetre - Ampermetre",
                        },
                        {
                            title: "Isı ve Nem Ölçer",
                        },
                        {
                            title: "Frekansmetre",
                        },
                        {
                            title: "Fonksiyon Jeneratörü",
                        },
                        {
                            title: "Pensampermetre",
                        },
                        {
                            title: "Prob Çeşitleri",
                        },
                        {
                            title: "Diğer Ölçüm Aletleri",
                        },
                        {
                            title: "Ölçüm ve Test Aletleri (Tümü)",
                        },
                    ],
                },
                {
                    title: "Havya ve Ekipmanlar",
                    subcategories: [
                        {
                            title: "Kalem Havya",
                        },
                        {
                            title: "Isı Ayarlı Havya",
                        },
                        {
                            title: "İstasyonlu Havya",
                        },
                        {
                            title: "Vakumlu Havya",
                        },
                        {
                            title: "Lehimleme Ürülnleri",
                        },
                        {
                            title: "Havya Uçları",
                        },
                        {
                            title: "Yedek Havyalar",
                        },
                        {
                            title: "Lehim Pompası",
                        },
                        {
                            title: "Gazlı Havya",
                        },
                        {
                            title: "Tabanca Havya",
                        },
                        {
                            title: "Havya ve Lehimleme Ekipmanları",
                        },
                        {
                            title: "Havya ve Ekipmanlar (Tümü)",
                        },
                    ],
                },
                {
                    title: "El Aletleri",
                    subcategories: [
                        {
                            title: "Matkap ve Matkap Uçları",
                        },
                        {
                            title: "Yan Keski",
                        },
                        {
                            title: "Cımbız",
                        },
                        {
                            title: "Kargaburun",
                        },
                        {
                            title: "Pense",
                        },
                        {
                            title: "Tornavida",
                        },
                        {
                            title: "Silikon Tabancası",
                        },
                        {
                            title: "Büyüteç Lamba",
                        },
                        {
                            title: "Sıkma Pensesi",
                        },
                        {
                            title: "Kablo Soyucu",
                        },
                        {
                            title: "Bıçak ve Makas",
                        },
                        {
                            title: "Antistatik Ürünler",
                        },
                        {
                            title: "Diğer El Aletleri",
                        },
                        {
                            title: "El Aletleri (Tümü)",
                        },
                    ],
                },
                {
                    title: "Drone ve Multikopterler",
                    subcategories: [
                        {
                            title: "Hazır Drone",
                        },
                        {
                            title: "Drone Parçaları",
                        },
                        {
                            title: "Drone ve Multikopterler (Tümü)",
                        },
                    ],
                },
                {
                    title: "Elektronik Kart ve Modüller",
                    subcategories: [
                        {
                            title: "Usb Çevirici Modüller",
                        },
                        {
                            title: "Power Modüller",
                        },
                        {
                            title: "DC/DC - AC/DC Converter",
                        },
                        {
                            title: "Labview Modüller",
                        },
                        {
                            title: "RTC Gerçek Zaman Saati Modülleri",
                        },
                        {
                            title: "Ses ve Amfi Modülleri",
                        },
                        {
                            title: "Karışık Modüller",
                        },
                        {
                            title: "Elektronik Kart ve Modüller (Tümü)",
                        },
                    ],
                },
                {
                    title: "pil-Akü-Güneş Panelleri",
                    subcategories: [
                        {
                            title: "Li-po Pil",
                        },
                        {
                            title: "Pil",
                        },
                        {
                            title: "Akü",
                        },
                        {
                            title: "Pil Yuvası",
                        },
                        {
                            title: "Akü ve Pil Şarj Cihazları",
                        },
                        {
                            title: "Güneş Panelleri ve Rüzgar Türbini",
                        },
                        {
                            title: "Pil - Akü - Güneş Panlleri (Tümü)",
                        },
                    ],
                },
                {
                    title: "Bobin",
                    subcategories: [
                        {
                            title: "SMD Bobin",
                        },
                        {
                            title: "Direnç Tipi Bobin",
                        },
                        {
                            title: "Kondansatör Tipi Bobin",
                        },
                        {
                            title: "Amperli Bobin",
                        },
                        {
                            title: "Ferrit Bead",
                        },
                        {
                            title: "Ferrit",
                        },
                        {
                            title: "Bobin (Tümü)",
                        },
                    ],
                },
                {
                    title: "Kristal",
                    subcategories: [
                        {
                            title: "HC-49S Dip Kristal",
                        },
                        {
                            title: "SMD Kristal",
                        },
                        {
                            title: "GWX-26 Dip Kristal",
                        },
                        {
                            title: "Osilatör Kristal",
                        },
                        {
                            title: "Rezonatör Kristal",
                        },
                        {
                            title: "Filtre Kristal",
                        },
                        {
                            title: "Kristal (Tümü)",
                        },
                    ],
                },
                {
                    title: "Sigorta ve Yuvaları",
                    subcategories: [
                        {
                            title: "5x20mm Cam Sigorta",
                        },
                        {
                            title: "6x30mm Cam Sigorta",
                        },
                        {
                            title: "Direnç Tipi Sigorta",
                        },
                        {
                            title: "Kondansatör Tipi Sigorta",
                        },
                        {
                            title: "Smd Sigorta",
                        },
                        {
                            title: "Sigorta Yuvası",
                        },
                        {
                            title: "Sigorta ve Yuvaları (Tümü)",
                        },
                    ],
                },
                {
                    title: "Ptc ve Ntc Ürünleri",
                    subcategories: [
                        {
                            title: "Ptc",
                        },
                        {
                            title: "Ntc",
                        },
                        {
                            title: "Ptc ve Ntc Ürünleri (Tümü)",
                        },
                    ],
                },
                {
                    title: "Varistör",
                    subcategories: [
                        {
                            title: "Smd Varistör",
                        },
                        {
                            title: "7mm Varistör",
                        },
                        {
                            title: "10mm Varistör",
                        },
                        {
                            title: "14mm Varistör",
                        },
                        {
                            title: "20mm Varistör",
                        },
                        {
                            title: "Varistör (Tümü)",
                        },
                    ],
                },
                {
                    title: "Soğutucu ve İzolatörler",
                    subcategories: [
                        {
                            title: "Soğutucular",
                        },
                        {
                            title: "Peltier",
                        },
                        {
                            title: "İzolatörler",
                        },
                        {
                            title: "Soğutucu ve İzolatörler",
                        },
                    ],
                },
                {
                    title: "Distans ve Vida Somun",
                    subcategories: [
                        {
                            title: "Metal Distans M3",
                        },
                        {
                            title: "Plastik Distans M3",
                        },
                        {
                            title: "Tırnaklı Distanslar M4",
                        },
                        {
                            title: "Vida Somun",
                        },
                        {
                            title: "Distans ve Vida Somun (Tümü)",
                        },
                    ],
                },
                {
                    title: "Buzzer ve Tuş Takımı",
                    subcategories: [
                        {
                            title: "Buzzer",
                        },
                        {
                            title: "Tuş Takımı",
                        },
                        {
                            title: "Buzzer ve Tuş Takımı (Tümü)",
                        },
                    ],
                },
                {
                    title: "Adaptör ve Dönüştürücüler",
                    subcategories: [
                        {
                            title: "Priz Tipi Adaptör",
                        },
                        {
                            title: "Ayarlı Adaptör",
                        },
                        {
                            title: "Switch Mode Adaptör",
                        },
                        {
                            title: "DC/DC-AC/DC Converter",
                        },
                        {
                            title: "Inertör / Inverter",
                        },
                        {
                            title: "Adaptör ve Dönüştürücüler (Tümü)",
                        },
                    ],
                },
                {
                    title: "Kablo Çeşitleri",
                    subcategories: [
                        {
                            title: "Jumper Kablo",
                        },
                        {
                            title: "JST Kablo",
                        },
                        {
                            title: "Flat Kablo",
                        },
                        {
                            title: "Flex Kablo",
                        },
                        {
                            title: "Isı ile Daralan Makaron",
                        },
                        {
                            title: "Montaj Kablosu",
                        },
                        {
                            title: "Test Kabloları",
                        },
                        {
                            title: "Bitişik ve Blendajlı Kablo",
                        },
                        {
                            title: "Bilgisayar Kabloları",
                        },
                        {
                            title: "Flanşlı Kablo",
                        },
                        {
                            title: "Bnc Kablo",
                        },
                        {
                            title: "Hdmi Kablo / Hdmi Çevirici",
                        },
                        {
                            title: "Sma-Sma Kablo",
                        },
                        {
                            title: "Power Kablosu",
                        },
                        {
                            title: "Kablo Bağı",
                        },
                        {
                            title: "Fiberoptik Kablo",
                        },
                        {
                            title: "Kablo Soyucu",
                        },
                        {
                            title: "Sıkma Pensesi",
                        },
                        {
                            title: "Kablo Test Aleti",
                        },
                        {
                            title: "Kablo Çeşitleri",
                        },
                        {
                            title: "Kablo Çeşitleri (Tümü)",
                        },
                    ],
                },
                {
                    title: "Tafo ve Akım Transdüserler",
                    subcategories: [
                        {
                            title: "Kapalı Trafo",
                        },
                        {
                            title: "Açık Trafo",
                        },
                        {
                            title: "Hat ve Akım Trafosu",
                        },
                        {
                            title: "Akım Transdüserler",
                        },
                        {
                            title: "Trafo ve Akım Transdüserler (Tümü)",
                        },
                    ],
                },
                {
                    title: "Kutu Çeşitleri",
                    subcategories: [
                        {
                            title: "Plastik Kutu",
                        },
                        {
                            title: "Çekmeceli Kutu",
                        },
                        {
                            title: "Organizer Kutu",
                        },
                        {
                            title: "Kutu Çeşitleri (Tümü)",
                        },
                    ],
                },
                {
                    title: "Diğer Ürünler",
                    subcategories: [
                        {
                            title: "Kitap",
                        },
                        {
                            title: "Sprey",
                        },
                        {
                            title: "Mıknatıs",
                        },
                        {
                            title: "Bant Çeşitleri",
                        },
                        {
                            title: "Termostatlar",
                        },
                        {
                            title: "Filtre Çeşitleri",
                        },
                        {
                            title: "Diğer Ürünler (Tümü)",
                        },
                    ],
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
.category {
    cursor: pointer;
}
.catopen {
    color: #fff;
    background-color: #0190d6 !important;
    border-bottom: 1px solid #d8d8d8;
}

.catclosed {
    color: #000;
    background-color: #fff !important;
    border-bottom: 1px solid #d8d8d8;
}
.subcategory {
    color: #fff;
    background-color: #0aa2ee !important;
    border-bottom: 1px solid #d8d8d8;
}
.item {
    color: #fff;
    background-color: #3cbeff;
    border-bottom: 1px solid #d8d8d8;
}
</style>
