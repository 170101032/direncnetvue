<template>
    <div class="columns is-multiline">
        <div class="column is-12 headerTop">
            <div class="container">
                <div class="container">
                    <div class="columns">
                        <div class="column is-pulled-right">
                            <span class=""><a>Facebook Ile Baglan</a></span>
                            <span class=""><a>Uye Girisi</a></span>
                            <span class=""><a>Yeni Uyelik</a></span>
                            <span class=""><a>TR</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-12 header">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <img src="@/assets/logo.png" />
                    </div>
                    <div class="column">
                        <b-field position="is-centered">
                            <b-input placeholder="Aradiginiz urunun adini yaziniz." type="search" expanded></b-input>
                            <p class="control">
                                <b-button class="button">Ara</b-button>
                            </p>
                        </b-field>
                    </div>
                    <div class="column">
                        <b-field position="is-right">
                            <p class="control">
                                <b-button></b-button>
                            </p>
                            <p>
                                0 Urun/0,00TL
                            </p>
                        </b-field>
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

<style scoped>
.headerTop {
    background-color: #1eaef6;
}
.headerTop a {
    font-size: 13px;
    color: #fff;
}
.header {
    background-color: #0aa2ee;
}
</style>
