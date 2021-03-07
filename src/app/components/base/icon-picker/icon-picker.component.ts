<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 19354ce2b11a6152ad2ee4a50a7b1e0037fa4f60
import { FormControl } from '@angular/forms';
import { MatOption, MatOptionSelectionChange } from '@angular/material/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'packer-icon-picker',
  templateUrl: './icon-picker.component.html',
  styleUrls: ['./icon-picker.component.scss']
})
export class IconPicker implements OnInit {
<<<<<<< HEAD
  @Input() icon!: string;
=======
>>>>>>> 19354ce2b11a6152ad2ee4a50a7b1e0037fa4f60
	iconControl = new FormControl();
	iconSet = [
		'lightbulb','face','fingerprint','schedule','shopping_bag',
		'book','group_work','work','work_outline',
		'account_balance_wallet','shopping_basket','card_giftcard','source','anchor','theaters','aspect_ratio','commute','pregnant_woman','outlet','hourglass_full','hourglass_top','hourglass_bottom','camera_enhance','fit_screen','settings_remote','next_plan','tour','settings_cell','all_inbox','dynamic_form','settings_input_hdmi','settings_power','settings_input_svideo','settings_input_component','comment_bank','hotel_class','person','people','groups','school','catching_pokemon','sentiment_very_satisfied','sentiment_satisfied','emoji_emotions','sentiment_neutral','sentiment_dissatisfied','sentiment_very_dissatisfied','emoji_objects','science','sports_esports','cake','self_improvement','travel_explore','location_city','domain','hiking','sports_soccer','emoji_nature','whatshot','sports_basketball','luggage','nights_stay','outdoor_grill','sports_tennis','kayaking','emoji_food_beverage','deck','king_bed','sports_baseball','skateboarding','fireplace','sports_football','sports_volleyball','sports','surfing','single_bed','snowboarding','sports_bar','sports_handball','snowshoeing','sledding','sports_golf','sports_cricket','kitesurfing','iceskating','recycling','compost','cancel','expand_more','expand_less','payments','maps_home_work','arrow_drop_down_circle','switch_left','switch_right','location_on','business','chat','vpn_key','contact_mail','contacts','contact_phone','import_contacts','stay_current_portrait','content_copy','create','bolt','save','inventory_2','inventory','flag','remove_circle','sort','push_pin','add_box','add_circle','shield','content_paste','report','archive','content_cut','biotech','inbox','change_circle','waves','dynamic_feed','drafts','markunread','move_to_inbox','select_all','copy_all','next_week','photo_camera','auto_awesome','palette','receipt_long','image','auto_stories','music_note','wb_cloudy','wb_incandescent','wb_iridescent','wb_shade','wb_sunny','wb_twilight','brush','camera','landscape','filter_vintage','style','straighten','filter_drama','healing','timelapse','auto_awesome_motion','flare','collections_bookmark','colorize','animation','compare','broken_image','cases','movie_creation','bedtime','flip_camera_android','panoroma','mic_external_on','transform','hdr_strong','photo_album','photo_camera_front','movie_filter','camera_roll','vrpano','monochrome_photos','dirty_lens','brightness_1','brightness_2','brightness_4','brightness_5','brightness_6','brightness_7','local_shipping','local_cafe','menu_book','volunteer_activism','local_activity','local_atm','local_bar','local_cafe','local_dining','local_drink','local_fire_department','local_florist','local_gas_station','local_grocery_store','local_hospital','local_hotel','local_laundry_services','local_library','local_movies','local_pharmacy','local_phone','local_police','local_post_office','local_printshop','local_taxi','directions_bike','directions_car','badge','handyman','flight','local_mall','restaurant_menu','lunch_dining','design_services','park','medical_services','celebration','pin_drop','layers','delivery_dining','hotel','home_repair_service','pedal_bike','train','agriculture','fastfood','ramen_dining','directions_boat','directions_bus','traffic','two_wheeler','money','alt_route','liquor','sailing','wine_bar','theater_comedy','bakery_dining','electrical_services','dinner_dining','icecream','ev_station','nightlife','tram','festival','attractions','dry_cleaning','store_mall_directory','subway','moped','brunch_dining','emergency','videogame_asset','watch','smartphone','computer','tv','smart_toy','desktop_windows','laptop','speaker','toys','highlight','spa','storefront','house','apartment','fitness_center','business_center','family_restroom','ac_unit','cottage','grass','pool','casino','beach_access','kitchen','gite','free_breakfast','holiday_village','roofing','child_friendly','backpack','bathtub','tapas','cabin','umbrella','chalet','crib','stroller','power','battery_charging_full','chair','yard','bedroom_baby','bathroom','bedroom_parent','living','chair_alt','bedroom_child',
	]
	filteredOptions!: Observable<string[]>;
	chosenIcon = 'default';

  constructor() { }

  ngOnInit(): void {
  	this.filteredOptions = this.iconControl.valueChanges.pipe(
  		startWith(''),
  		map(value => this._filter(value))
  	);
  }

  renderIcon(event: MatOptionSelectionChange ) {
  	const matOption: MatOption = event.source;
  	if (matOption.value) this.chosenIcon = matOption.value;
  	matOption.value = '';
  }

  private _filter(value: string): string[] {
  	const filterValue = value.toLowerCase();

  	return this.iconSet.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  onBlur() {
  	// this.input.nativeElement.blur();
  }
}
