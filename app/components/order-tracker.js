import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
	orderManager: service('order-manager')
});
