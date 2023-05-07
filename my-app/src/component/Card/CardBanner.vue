<template>
  <div class="custom-card card-banner" :class="[{ 'cursor--pointer': isClickable }]">
    <img class="card-img" :src="bannerImgSrc" alt="card_banner" />
    <div class="card-img-overlay">
      <div class="card-lead">{{ text }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    bannerImgSrc: String,
    text: String,
    isClickable: Boolean
  }
}
</script>
<style lang="scss" scoped>
.custom-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
}

.card-banner {
  border: 0.25rem solid #fff;
  border-radius: 1.25rem;
  box-shadow: 0 0.25rem 1.875rem rgba(182, 51, 51, .2);

  &:hover {
    color: #222;
  }

  .card-img {
    width: 100%;
    border-radius: 1rem;
    vertical-align: middle;
  }

  .card-img-overlay {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 1.25rem 0.75rem;
    border-radius: 1rem;
    transition: all .2s ease-in-out;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    &:hover {
      background-color: rgba(34, 34, 34, .15)
    }
  }

  .card-lead {
    display: inline-block;
    max-width: 100%;
    padding: 0.5rem 1.25rem;
    border-radius: 50rem;
    background-color: #fff;
    color: #767676;
    font-size: .875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>