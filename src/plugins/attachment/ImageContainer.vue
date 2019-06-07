<template>
  <div @click="selectImage(imgobj)" :class="selectedImage.obj.id === imgobj.id ? 'image attachment-image active' : 'attachment-image image'">
    <img :src="imageSrc">
  </div>
</template>
<script>
import loadingImage from './utils/loadingImage.js'
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ImageContainer',
  props: {
    imgobj: {

    },
    src: {
      required: true,
      type: String
    },
    placeholder: {
      required: false,
      default: () => loadingImage,
      type: String
    }
  },
  data: function () {
    return {
      imageSrc: this.placeholder
    }
  },
  computed: {
    ...mapGetters({
      selectedImage: 'attachment/data',
    }),
  },
  mounted: function () {
    const img = new Image()
    const _this = this
    img.onload = function () {
      _this.imageSrc = _this.src
    }
    img.src = this.src
  },
  methods: {
    selectImage(obj) {
      this.setAttachmentData({
        obj
      })
    },
    ...mapActions({
      setAttachmentData: 'attachment/setData',
    }),
  }
}
</script>
<style scoped>
.image {
  /* maintain a 1:1 aspect ratio */
  padding-top: 100%;
  position: relative;
}
.image img {
  /* contain x and y axes */
  max-width: 100%;
  max-height: 100%;
  /* center */
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
