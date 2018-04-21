import VuiButton from './vButton'
import VuiRow from './vRow'
import VuiCol from './vCol'
import VuiText from './vText'
import VuiPopup from './popup'
import PopupManager from './popup/manager'

export default {
  install: function (Vue, options) {
    Vue.component('v-button', VuiButton);
    Vue.component('v-row', VuiRow);
    Vue.component('v-col', VuiCol);
    Vue.component('v-text', VuiText);
    Vue.component('v-popup', VuiPopup);
    Vue.prototype.$popup = PopupManager;
  }
}
