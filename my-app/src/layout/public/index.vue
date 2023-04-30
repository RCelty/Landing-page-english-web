<template>
    <v-app>
        <div>Header</div>
        <div class="d-flex justify-center">
            <DropDownMenu :items="menu" open-on-hover style="width: fit-content;">
                <template #activator="{ on, attrs }">
                    <div v-on="on" v-bind="attrs">Menu</div>
                </template>
            </DropDownMenu>
        </div>
        <div>
            <router-view />
        </div>
    </v-app>
</template>
<script>
import DropDownMenu from '@/component/base/DropDownMenu.vue';

export default {
    components: {
        DropDownMenu
    },
    data: () => ({
        menu: [
            { title: "Link 1", routeName: "link1" },
            { title: "Link 2" },
            { title: "Link 3" }
        ]
    })
}
</script>