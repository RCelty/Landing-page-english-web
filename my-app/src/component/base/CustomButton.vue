<template>
  <div class="custom-button">
    <v-btn depressed v-bind="$props" v-on="$listeners" :class="[bindClass, btnClass]">
      <template v-for="(slot, name) in $slots" :slot="name">
        <slot :name="name" />
      </template>
      <template v-for="(slot, name) in $scopedSlots" #[name]="item">
        <slot :name="name" v-bind="item" />
      </template>
    </v-btn>
  </div>
</template>
<script>
export default {
  props: {
    large: false,
    small: false,
    typeButton: "",
    disabled: false,
    height: null,
    maxHeight: null,
    minHeight: null,
    width: null,
    maxWidth: null,
    minWidth: null,
    btnClass: "",
    block: false,
    type: "button"
  },
  computed: {
    bindClass() {
      switch (this.typeButton) {
        case "primary":
          return "primary--button"
        case "secondary":
          return "secondary--button"
        case "noOutline":
          return "no-outline--button"
        default:
          return ""
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.primary--button {
  background-color: $primary !important;
  color: $white1 !important;
}

.secondary--button {
  background-color: $white1 !important;
  color: $primary !important;
  border-color: $primary !important;
}

.no-outline--button {
  background-color: $primaryLight !important;
  color: $primary !important;
}
</style>