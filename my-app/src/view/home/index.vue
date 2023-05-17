<template>
  <div>
    <div class="section section-hero">
      <img :src="require('@/assets/png/banner_web2.jpg')" alt="section_banner" />
    </div>
    <div class="section section-1">
      <div class="d-flex justify-center">
        <div class="custom-container align-center full-width text-start font-weight--600">
          <p>Khám phá hệ thống các thương hiệu con</p>
          <v-row>
            <v-col lg="4" sm="12">
              <CardBanner :banner-img-src="require('@/assets/png/banner_to1.jpg')" text="TOEIC số 1 Việt Nam"
                is-clickable />
            </v-col>
            <v-col lg="4" sm="12">
              <CardBanner :banner-img-src="require('@/assets/png/banner_gt1.jpg')" text="Tiếng Anh là chuyện nhỏ"
                is-clickable />
            </v-col>
            <v-col lg="4" sm="12">
              <CardBanner :banner-img-src="require('@/assets/png/banner_mhj1.jpg')" text="English For Future"
                is-clickable />
            </v-col>
          </v-row>
          <hr class="custom-divider my-12" />
          <div class="section-bottom">
            <v-row class="mt-6 align-center">
              <v-col lg="6" sm="12">
                <div class="d-flex" style="min-height: 315px;">
                  <img :src="require('@/assets/png/hanhtrinh.jpg')" alt="thumbnail" class="border-radius--8px"
                    style="width: 100%;" />
                </div>
              </v-col>
              <v-col lg="6" sm="12">
                <h1 class="blue1--text mb-6 font-weight--700" style="font-size: 2rem">
                  MS HOA TOEIC - ĐÀO TẠO TOEIC
                  <br class="d-none d-inline" />
                  <span style="color: red;">SỐ 1</span>
                  VIỆT NAM
                </h1>
                <div>
                  <v-row no-gutters>
                    <v-col lg="4" md="4" sm="6" class="text-center">
                      <span class="font-size--h1 mb-1 number-1-plus primary--text d-inline">10</span>
                      <p class="font-weight--normal">Năm truyền cảm hứng</p>
                    </v-col>
                    <v-col lg="4" md="4" sm="6" class="text-center">
                      <span class="font-size--h1 mb-1 number-1-plus primary--text d-inline">300</span>
                      <p class="font-weight--normal">Giáo viên giỏi kiến thức giàu kĩ năng</p>
                    </v-col>
                    <v-col lg="4" md="4" sm="6" class="text-center">
                      <span class="font-size--h1 mb-1 number-1-plus primary--text d-inline">1.000.000</span>
                      <p class="font-weight--normal">Học viên đạt mục tiêu</p>
                    </v-col>
                    <v-col lg="4" md="4" sm="6" class="text-center">
                      <span class="font-size--h1 mb-1 number-1-plus primary--text d-inline">200</span>
                      <p class="font-weight--normal">Đối tác thường niên</p>
                    </v-col>
                    <v-col lg="4" md="4" sm="6" class="text-center">
                      <span class="font-size--h1 mb-1 number-1-plus primary--text d-inline">30</span>
                      <p class="font-weight--normal">Cơ sở trên toàn quốc</p>
                    </v-col>
                    <v-col lg="4" md="4" sm="6" class="text-center">
                      <span class="font-size--h1 mb-1 number-1-plus primary--text d-inline">100.000</span>
                      <p class="font-weight--normal">Học viên online năm châu</p>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardBanner from '@/component/Card/CardBanner.vue';

export default {
  components: {
    CardBanner
  }
}
</script>
<style lang="scss" scoped>
.section-hero {
  img {
    height: 42.5rem;
    object-fit: cover;
    max-width: 100%;
    width: 100%;
  }
}

.section-1 {
  margin-top: -10.25rem
}

hr {
  border: 0;
  height: 1px;
}
</style>