<template>
  <div class="custom-textfield">
    <v-text-field v-bind="$props" v-on="$listeners" dense :style="`${textFieldStyle}`">
      <template v-for="(slot, name) in $slots" :slot="name">
        <slot :name="name" />
      </template>
      <template v-for="(slot, name) in $scopedSlots" #[name]="item">
        <slot :name="name" v-bind="item" />
      </template>
    </v-text-field>
  </div>
</template>
<script>
export default {
  props: {
    solo: { type: Boolean, default: false },
    placeholder: String,
    outlined: false,
    flat: false,
    filled: false,
    height: null,
    hideDetails: false,
    rounded: false,
    textFieldStyle: ""
  }
}
</script>
<!-- <style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  appearance: none;
}

input[type='number'] {
  appearance: textfield;
}
</style> -->

<style lang="scss" scoped>
::v-deep {

  .v-text-field__slot {
    label {
      font-weight: normal;
      font-style: normal;
      font-size: 13px;
    }
  }

  .primary--text {
    caret-color: $gray1 !important;
    color: $black1 !important;
  }

  .v-text-field--outlined {
    fieldset {
      border-radius: 6px;
      border-color: rgba(34, 34, 34, 0.1);
    }

    .v-text-field__slot {
      min-height: 51px;
    }

    .v-label--active.v-label {
      top: 10px !important;
    }

    .v-label {
      top: 16px;
      left: 13px !important;
    }

    input {
      margin: 0 10px;
      background-color: transparent;
    }

    .v-input__append-inner {
      margin: 0;
      padding: 5px 10px;
      margin-top: 8px;
    }
  }

  .v-input--is-disabled .v-input__control .v-input__slot {

    .v-text-field__slot input {
      box-shadow: none;
      background-color: transparent;
    }
  }
}

input,
input:hover,
input:focus,
textarea,
textarea:hover,
textarea:focus,
select,
select:hover,
select:focus {
  box-shadow: 0 0 0 1000px #ffff inset;
}

.sort-icon {
  left: 4.22px;
  width: 10px;
  height: 7px;
  margin: 1px;
}
</style>