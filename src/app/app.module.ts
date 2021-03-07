import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> 19354ce2b11a6152ad2ee4a50a7b1e0037fa4f60
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AgmCoreModule } from '@agm/core';

import { AppComponent, DialogDataExampleDialog  } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { PlacesMapComponent, PlacesFormComponent, PlacesListComponent } from '@components';
// import { PlacesMapComponent } from '@components/places-map/places-map.component';
// import { PlacesFormComponent } from '@components/places-form/places-form.component';
// import { PlacesListComponent } from '@components/places-list/places-list.component';

import { environment } from 'src/environments/environment';
import {
<<<<<<< HEAD
  ItemDetails,
  IconPicker,
  Luggage,
  LuggageMenu,
  Menu,
  NumberSlider,
  PackingItem,
  ProfileMenu,
  ProfileMenuOverlay,
  SetsItems,
  SetsMenu,
  TravelDestination,
  TravelDestinationMenu,
  TravelMenu
=======
  IconPicker,
  Luggage,
  NumberSlider,
  PackingItem,
  SetsMenu,
  TravelDestination
>>>>>>> 19354ce2b11a6152ad2ee4a50a7b1e0037fa4f60
} from '@components';
import {
  SetPage,
  TravelPage
} from '@pages';

//Material
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
<<<<<<< HEAD
=======
import { ItemDetails } from './components/item-details/item-details.component';
>>>>>>> 19354ce2b11a6152ad2ee4a50a7b1e0037fa4f60

@NgModule({
  declarations: [
    AppComponent,
    // PlacesMapComponent,
    // PlacesFormComponent,
    // PlacesListComponent,
    DialogDataExampleDialog,
    // Components
    IconPicker,
<<<<<<< HEAD
    ItemDetails,
    Luggage,
    LuggageMenu,
    Menu,
    NumberSlider,
    PackingItem,
    ProfileMenu,
    ProfileMenuOverlay,
    SetsItems,
    SetsMenu,
    TravelDestination,
    TravelDestinationMenu,
    TravelMenu,
    // Pages
    SetPage,
    TravelPage,
  ],
  imports: [
=======
    Luggage,
    NumberSlider,
    PackingItem,
    SetsMenu,
    TravelDestination,
    // Pages
    SetPage,
    TravelPage,
    SetsMenu,
    ItemDetails,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
>>>>>>> 19354ce2b11a6152ad2ee4a50a7b1e0037fa4f60
    // AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyABqQlhH2mpwyBRQG91i2t6vpNz3L3OMQE'
    // }),
<<<<<<< HEAD
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
=======
    BrowserAnimationsModule,
>>>>>>> 19354ce2b11a6152ad2ee4a50a7b1e0037fa4f60
    //Material
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatSliderModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  entryComponents: [
    DialogDataExampleDialog,
<<<<<<< HEAD
    ItemDetails,
    Luggage,
    LuggageMenu,
    SetPage,
    TravelPage,
    TravelDestination,
    TravelDestinationMenu,
    TravelMenu,
=======
    SetPage,
    TravelPage,
    TravelDestination,
>>>>>>> 19354ce2b11a6152ad2ee4a50a7b1e0037fa4f60
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
