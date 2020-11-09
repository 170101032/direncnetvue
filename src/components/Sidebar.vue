<template>
    <div class="columns is-multiline">
        <b-collapse class="column is-12" animation="slide" v-for="(category, i) of categories" :key="i" :open="isOpen == i" @open="isOpen = i">
            <div slot="trigger" slot-scope="props" :class="props.open ? 'catopen' : 'catclosed'">
                <img v-if="props.open" :src="require('@/assets/sidebar/plus_active.png')" />
                <img v-if="!props.open" :src="require('@/assets/sidebar/plus_passive.png')" />
                {{ category.title }}
            </div>
            <b-collapse class="column is-12 subcategory p-0" animation="slide" v-for="(subcategory, i2) of category.subcategories" :key="i2" :open="isOpen2 == i2" @open="isOpen2 = i2">
                <div slot="trigger" slot-scope="props">
                <img v-if="subcategory.items.length && props.open" :src="require('@/assets/sidebar/minus_active.png')" />
                <img v-if="subcategory.items.length && !props.open" :src="require('@/assets/sidebar/plus_active.png')" />
                <img v-if="!subcategory.items.length" :src="require('@/assets/sidebar/sub_arrow.png')" />
                    {{ subcategory.title }}
                </div>
                <div class="column is-12 item p-0 pl-4" v-for="(item, i3) of subcategory.items" :key="i3">
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
                    title: "Title 1",
                    subcategories: [
                        {
                            title: "subcategory title",
                            items: ["item1", "item2"],
                        },
                          {
                            title: "subcategory title2",
                            items: [],
                        },
                    ],
                },
                {
                    title: "Title 2",
                    subcategories: [
                        {
                            title: "subcategory title",
                            items: ["item1", "item2"],
                        },
                    ],
                },
                {
                    title: "Title 3",
                    subcategories: [
                        {
                            title: "subcategory title",
                            items: ["item1", "item2"],
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
    color: #fff;
    background-color: #0190d6;
    border-bottom: 1px solid #d8d8d8;
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
