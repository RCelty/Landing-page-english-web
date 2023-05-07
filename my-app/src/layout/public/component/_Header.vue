<template>
  <div>
    <div class="header-top d-flex justify-center">
      <div class="custom-container d-flex align-center full-width justify-center">
        <div>
          <img :src="require('@/assets/png/logo2.png')" alt="logo" />
        </div>
        <div class="contact-info ml-4">
          <div class="item">
            <span class="icon-holder">
              <v-icon class="call" />
            </span>
            <span class="d-inline ml-2 item-text">{{ hotline }}</span>
          </div>
          <div class="item ml-3">
            <span class="icon-holder">
              <v-icon class="mail" />
            </span>
            <span class="d-inline ml-2 item-text">{{ email }}</span>
          </div>
        </div>
        <div class="custom-search ml-auto mr-2">
          <text-field solo outlined flat hide-details placeholder="Tìm kiếm"></text-field>
        </div>
        <div class="button-group d-flex">
          <custom-button type-button="noOutline" btn-class="py-4 px-6" height="auto" block>Đăng nhập</custom-button>
          <custom-button type-button="primary" type="text" btn-class="py-4 px-6" height="auto" block
            class="ml-2 border-radius--small">Đăng ký</custom-button>
        </div>
      </div>
    </div>
    <div class="custom-navbar d-flex justify-center">
      <div class="custom-container d-flex align-center full-width justify-center">
        <v-row no-gutters>
          <v-col v-for="item in  NAVBAR_ITEMS " :key="item.title" cols="auto" class="custom-navbar-item">
            <drop-down-menu :items="item.children || []" open-on-hover>
              <template #activator="{ on, attrs }">
                <div v-on="on" v-bind="attrs" style="height: 3.5rem;" class="d-flex align-center"
                  :class="{ 'dropdown-arrow-append': item.children && item.children.length > 0 }">{{
                    item.title }}
                </div>
              </template>
            </drop-down-menu>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
<script>
import TextField from "@/component/base/TextField.vue";
import CustomButton from "@/component/base/CustomButton.vue";
import DropDownMenu from "@/component/base/DropDownMenu.vue";
//
import { mapGetters } from "vuex";
import { NAVBAR_ITEMS } from "@/constant/common"

export default {
  components: {
    TextField,
    CustomButton,
    DropDownMenu
  },
  data: () => ({
    NAVBAR_ITEMS
  }),
  computed: {
    ...mapGetters("general", {
      hotline: "getHotline",
      email: "getEmail"
    })
  }
}
</script>
<style lang="scss">
.header-top {
  .custom-search {
    .custom-textfield {
      .v-text-field {
        border-radius: 0.375rem !important;
      }
    }
  }
}


.menu-item:hover {
  .v-list-item__title {
    color: $primary;
  }
}
</style>
<style lang="scss" scoped>
::v-deep {
  .v-input.v-input--hide-details {
    border-radius: 0.375rem !important;
    background-color: $primary !important;
  }
}


.header-top {
  display: flex;
  height: 6.25rem;
  align-items: center;
  background-color: $white2;

  img {
    width: 8.3125rem;
  }

  .contact-info {
    .item {
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      padding: 0.5rem 1rem 0.5rem 0.5rem;
      background-color: $white1;
      border-radius: 3.4375rem;
      font-size: .75rem;

      .icon-holder {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        height: 1.75rem;
        width: 1.75rem;
        background-color: $gray1;
        color: $white1;
      }
    }

    .item:hover {
      .item-text {
        color: $primary;
      }
    }
  }

  .custom-search {
    max-width: 14rem;
  }
}

.custom-navbar {
  .custom-navbar-item {
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 3rem;
    }

    &:hover {
      color: $primary;

      .dropdown-arrow-append {
        color: $primary;
      }
    }
  }
}
</style>