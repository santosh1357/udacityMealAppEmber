import Service from '@ember/service';

export default Service.extend({
	init() {
		this._super(...arguments);
		this.selectedDay = 'Monday';
		this.menuSelection = {
			Monday:{},
			Tuesday:{},
			Wednesday:{},
			Thursday:{},
			Friday:{}
		};
	},
	actions:{
		setSelectedDayTo(day){
			this.set('selectedDay', day);
		},
		chooseMenuOption(mealCategory, menuItemName){
			this.set('menuSelection.' + this.get('selectedDay') + '.' + mealCategory, menuItemName);
		},
		removeMenuOption(day, mealCategory){
			this.set('menuSelection.' + day + '.' + mealCategory, '');
		},
	}	

});
