<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size || width"
    :height="size || height"
    viewBox="0 0 64 64"
    :aria-labelledby="name"
    role="presentation"
  >
    <title
      :id="name"
      lang="en"
    >{{ name }} icon</title>
    <g :fill="iconColor">
      <component :is="getIcon" />
    </g>
  </svg>
</template>

<script>
import get from 'lodash/get';

import icons from '@/components/icons';

export default {
  props: {
    name: {
      type: String,
      default: 'box',
    },

    width: {
      type: [Number, String],
      default: 24,
    },

    height: {
      type: [Number, String],
      default: 24,
    },

    iconColor: {
      type: String,
      default: 'currentColor',
    },

    size: {
      type: [Number, String],
      default: '24',
    },
  },

  computed: {
    getIcon() {
      const nodeText = get(this.$slots.default, '[0].text', '').trim();

      let iconComponentName;

      if (nodeText && nodeText[0] === '$') {
        iconComponentName = `${nodeText[1].toUpperCase()}${nodeText.slice(2)}`;
      } else {
        iconComponentName = `${this.name[0].toUpperCase()}${this.name.slice(1)}`;
      }

      return icons[`${iconComponentName}Icon`];
    },
  },
};
</script>
