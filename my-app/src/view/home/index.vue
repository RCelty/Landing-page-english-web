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
                            <CardBanner :banner-img-src="require('@/assets/png/banner_gt1.jpg')"
                                text="Tiếng Anh là chuyện nhỏ" is-clickable />
                        </v-col>
                        <v-col lg="4" sm="12">
                            <CardBanner :banner-img-src="require('@/assets/png/banner_mhj1.jpg')" text="English For Future"
                                is-clickable />
                        </v-col>
                    </v-row>
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
</style>