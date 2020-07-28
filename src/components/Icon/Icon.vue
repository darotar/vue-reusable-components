<template>
  <span class="icon" :class="[size]">
     <i
      v-if="!useIconComponent"
      :class="[newPack, newIcon, newCustomSize, customClass]"
    />
    <component
      v-else
      :is="useIconComponent"
      :icon="[newPack, newIcon]"
      :size="newCustomSize"
      :class="[customClass]"
    />

  </span>
</template>

<script>
import config from '@/utils/config';

export default {
  name: 'NIcon',

  props: {
    type: [String, Object],
    size: String,
    icon: String,
    component: String,
  },

  computed: {
    useIconComponent() {
      return this.component || config.defaultIconComponent
    }
  }
}
</script>