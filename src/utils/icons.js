import config from '@/utils/config';
import { merge } from '@/utils/helpers'

const faIcons = () => {
  const faIconPrefix = config && config.defaultIconComponent ? '' : 'fa-'
  return {
      sizes: {
          'default': faIconPrefix + 'lg',
          'is-small': null,
          'is-medium': faIconPrefix + '2x',
          'is-large': faIconPrefix + '3x'
      },
      iconPrefix: faIconPrefix,
      internalIcons: {
          'information': 'info-circle',
          'alert': 'exclamation-triangle',
          'alert-circle': 'exclamation-circle',
          'chevron-right': 'angle-right',
          'chevron-left': 'angle-left',
          'chevron-down': 'angle-down',
          'eye-off': 'eye-slash',
          'menu-down': 'caret-down',
          'menu-up': 'caret-up',
          'close-circle': 'times-circle'
      }
  }
}

const getIcons = () => {
  let icons = {
      mdi: mdiIcons,
      fa: faIcons(),
      fas: faIcons(),
      far: faIcons(),
      fad: faIcons(),
      fab: faIcons(),
      fal: faIcons()
  }

  if (config && config.customIconPacks) {
      icons = merge(icons, config.customIconPacks, true)
  }

  return icons
}

export default getIcons