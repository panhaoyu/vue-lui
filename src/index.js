import LCol from './core/col'
import LRow from './core/row'
import LText from './core/text'
import LPopup from './core/popup'
import {manager} from './core/popup'


export default {
  install: function (Vue, options) {
    Vue.component('l-col', LCol);
    Vue.component('l-row', LRow);
    Vue.component('l-text', LText);
    Vue.component('l-popup', LPopup);
    Vue.prototype.$lPopup = function (name) {
      return manager[name];
    };
    if (options.containers) {
    }
  }
}