<template>
  <component
    :is="computedTag"
    v-bind="$attrs"
    class="button"
    v-on="$listeners"
    :class="[type, {
      'is-disabled': disabled,
      'is-rounded': rounded,
      'is-sharp': sharp,
    }]"
  >
    <span v-if="label">{{ label }}</span>
    <span v-else-if="$slots.default">
      <slot />
    </span>
  </component>
</template>

<script>
import config from '@/utils/config';

export default {
  name: 'NButton',
  inheritAttrs: false,

  props: {
    type: String,
    size: String,
    label: String,
    iconLeft: String,
    iconRight: String,

    loading: Boolean,
    hovered: Boolean,
    sharp: Boolean,
    rounded: Boolean,
    disabled: Boolean,

    tag: {
      type: String,
      default: 'button',
      validator: value => config.defaultTagLinks.indexOf(value) >= 0,
    }
  },

  computed: {
    computedTag() {
      const { disabled } = this.$attrs;

      if (disabled !== undefined && disabled !== false) {
        return 'button';
      }

      return this.tag;
    }
  }
}
</script>

<style lang="scss">
  .button {
    display: inline-flex;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
  }

  .is-submit {
    border-radius: 3px;
    background-color: #000;
    border: 1px solid #000;
    color: #fff;
    font-size: 14px;
    height: 40px;
    padding: 0 40px;
  }

  .is-action-tile {
    border-radius: none;
    border: 1px solid #e5e5e5;
    background: inherit;
    text-transform: uppercase;
  }
</style>