<template>
    <div class="columns is-multiline comments">
        <div class="column is-12 page-title py-2 mb-2">Bu ürün için toplam 17 yorum yapılmıştır. <b>Yorum Yaz</b></div>
        <div class="column is-12 ">
            <div class="columns is-multiline">
                <div class="column is-12 comment" v-for="(comment, i) of comments" :key="i">
                    <div class="columns">
                        <div class="column is-3 comment-left my-3">
                            <div class="column is-12">
                                <b>{{ comment.name }}</b>
                            </div>
                            <div class="column is-12">
                                {{ comment.date }}
                            </div>
                            <div class="column is-12 mt-2"><img class="pr-2" src="@/assets/detail/likeIcon.png" />Evet: {{ comment.yes }} <img class="px-2" src="@/assets/detail/dislikeIcon.png" /> Hayir: {{ comment.no }}</div>
                            <div class="column is-12 my-2">
                                Yorumu onayliyor musunuz?
                            </div>
                            <div class="column is-12">
                                <a class="yes">EVET</a>
                                <a class="no ml-3">HAYIR</a>
                            </div>
                        </div>
                        <div class="column is-9 p-2">
                            <div class="column is-12"><img src="@/assets/detail/starsFull.png" /></div>
                            <div class="column is-12 pl-4">
                                <b>{{ comment.title }}</b>
                            </div>
                            <div class="column is-12 pl-4">{{ comment.text }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import store from "@/store";

export default {
    name: "ProductComment",
    components: {},
    props: {},
    data() {
        return {
            comments: [
                {
                    yes: 10,
                    no: 5,
                    name: "Direnc.net",
                    date: "2020-11-09",
                    title: "Urun",
                    text: "Merhaba , Ürünlerle ilgili bu tip ayrıntılı bilgi almak isterseniz destek@direnc.net adresine mail atabilirsiniz .Teknik ekibimiz sizlere gün içerisinde dönüş sağlayacaktır. İyi Çalışmalar",
                },
                {
                    yes: 2,
                    no: 0,
                    name: "Emre Düzgün",
                    date: "2020-11-09",
                    title: "Mukemmel",
                    text: "Ürünü tam set olarak sitede göremedim. ispanyada tam set hali kart 4gb 2 hdmi kablo adaptör kutu fan bakır soğutma 32gbsd kart ayrıca usb den çalışması için sd dönüştürücü tornavida ve başlangıç kitabı. 680tl. sizde bu şekilde bir ürün olmayacak mı full set.",
                },
                {
                    yes: 10,
                    no: 5,
                    name: "Direnc.net",
                    date: "2020-11-09",
                    title: "Urun",
                    text: "Merhaba , Ürünlerle ilgili bu tip ayrıntılı bilgi almak isterseniz destek@direnc.net adresine mail atabilirsiniz .Teknik ekibimiz sizlere gün içerisinde dönüş sağlayacaktır. İyi Çalışmalar",
                },
                {
                    yes: 2,
                    no: 0,
                    name: "Emre Düzgün",
                    date: "2020-11-09",
                    title: "Mukemmel",
                    text: "Ürünü tam set olarak sitede göremedim. ispanyada tam set hali kart 4gb 2 hdmi kablo adaptör kutu fan bakır soğutma 32gbsd kart ayrıca usb den çalışması için sd dönüştürücü tornavida ve başlangıç kitabı. 680tl. sizde bu şekilde bir ürün olmayacak mı full set.",
                },
                {
                    yes: 10,
                    no: 5,
                    name: "Direnc.net",
                    date: "2020-11-09",
                    title: "Urun",
                    text: "Merhaba , Ürünlerle ilgili bu tip ayrıntılı bilgi almak isterseniz destek@direnc.net adresine mail atabilirsiniz .Teknik ekibimiz sizlere gün içerisinde dönüş sağlayacaktır. İyi Çalışmalar",
                },
                {
                    yes: 2,
                    no: 0,
                    name: "Emre Düzgün",
                    date: "2020-11-09",
                    title: "Mukemmel",
                    text: "Ürünü tam set olarak sitede göremedim. ispanyada tam set hali kart 4gb 2 hdmi kablo adaptör kutu fan bakır soğutma 32gbsd kart ayrıca usb den çalışması için sd dönüştürücü tornavida ve başlangıç kitabı. 680tl. sizde bu şekilde bir ürün olmayacak mı full set.",
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
.page-title {
    border-bottom: 1px solid #ececec;
}
.comments {
    font-size: 13px;
    color:black
}
.comment {
    border-bottom: 1px solid #ececec;
}
.comment-left {
    border-right: 1px solid #ececec;
}
.comment-left img{
    vertical-align: middle;
}
.yes {
    color: #fff;
    background-color: #5cb85c;
    border-radius: 3px;
    float: left;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    border: 0;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    cursor: pointer;
}
.no {
    color: #fff;
    background-color: #d9534f;
    border-radius: 3px;
    float: left;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    border: 0;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    cursor: pointer;
}
</style>
