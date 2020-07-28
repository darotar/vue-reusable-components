<template>
  <component
    :is="computedTag"
    v-bind="$attrs"
    class="button"
    :class="[type, {
      'is-disabled': disabled,
      'is-rounded': rounded,
      'is-active': active,
      'is-primary': primary,
      'is-secondary': secondary
    }]"
    :style="buttonStyle"
    v-on="!disabled && getListeners"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <n-icon v-if="iconLeft" :name="iconLeft" :size="getIconSize" />
    <slot name="iconLeft" />

    <span v-if="label">{{ label }}</span>
    <slot v-else-if="$slots.default" />

    <n-icon
      v-if="iconRight"
      :name="iconRight"
      :size="getIconSize"
    />
    <slot name="iconRight" />
  </component>
</template>

<script>
import config from '@/utils/config';

export default {
  name: 'NButton',
  inheritAttrs: false,

  props: {
    type: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    iconLeft: {
      type: String,
      default: '',
    },
    iconRight: {
      type: String,
      default: '',
    },
    iconSize: {
      type: String,
      default: '20',
    },
    width: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },

    onClick: {
      type: Function,
      default: () => {},
    },

    loading: Boolean,
    rounded: Boolean,
    disabled: Boolean,
    active: Boolean,
    secondary: Boolean,
    primary: Boolean,

    tag: {
      type: String,
      default: 'button',
      validator: value => config.defaultTagLinks.indexOf(value) >= 0,
    },
  },

  data() {
    return {
      hover: false,
      buttonStyle: {
        width: `${this.width}px`,
        height: `${this.height}px`,
        'justify-content': this.iconLeft || this.iconRight ? 'space-between' : 'center',
      },
    };
  },

  computed: {
    computedTag() {
      const { disabled } = this.$attrs;

      if (disabled !== undefined && disabled !== false) {
        return 'button';
      }

      return this.tag;
    },

    isHover() {
      return !this.disabled ? (this.hover ? this.$colors.white : this.$colors.primaryBlack) : 'currentColor';
    },

    getIconSize() {
      return this.type === 'is-action-text' ? '12' : this.iconSize;
    },

    getListeners() {
      return { ...this.$listeners, click: this.$listeners.click || this.onClick };
    },
  },
};
</script>

<style lang="scss">
  .is-active {
    background-color: var(--n-primary);
    color: var(--n-white);
    border-color: var(--n-primary);
    font-weight: bold;
  }

  .button {
    font-family: HelveticaNeueRegular, sans-serif;
    display: inline-flex;
    white-space: nowrap;
    align-items: center;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    user-select: none;
    font-size: 10px;
  }

  .is-submit {
    @extend .is-active;

    border-radius: 3px;
    color: var(--n-white);
    height: 40px;
    padding: 0 40px;
  }

  .is-disabled {
    box-shadow: none;
    opacity: 0.4;
    cursor: not-allowed;
  }

  .is-rounded {
    border-radius: 20px;
  }

  .is-secondary {
    border: 1px solid var(--n-primary);
    color: var(--n-primary);
    font-weight: bold;
  }

  .is-primary {
    @extend .is-active;
  }

  .is-action-tile {
    border-radius: 0;
    border: 1px solid var(--n-border);
    background: inherit;
    color: var(--n-primary);
    text-transform: uppercase;
    padding: 8px 11px 8px 16px;
    font-weight: bold;
    font-size: 10px;
    flex: 0 0 195px;
    height: 30px;
    transition: var(--n-transition-common);

    &:hover:not(.is-disabled) {
      @extend .is-active;
    }
  }

  .is-action-text {
    color: var(--n-action-blue);
    border-width: 0;
    font-size: 12px;
  }
</style>
