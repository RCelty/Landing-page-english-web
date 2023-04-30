<template>
    <div>
        <v-menu v-bind="$props" offset-y>
            <template #activator="{ on, attrs }">
                <slot name="activator" :on="on" :attrs="attrs" />
            </template>
            <v-list>
                <v-list-item v-for="item in items" :key="item.title" @click="itemClickHandler(item)">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>
<script>
export default {
    props: {
        items: { type: Array, required: true },
        openOnHover: false,
        maxWidth: ""
    },
    methods: {
        itemClickHandler(item) {
            console.log(item);
            if (!item.routeName) return
            this.$router.push({ name: item.routeName })
        }
    }
}
</script>