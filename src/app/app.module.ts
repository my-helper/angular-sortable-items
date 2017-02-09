import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
// import { ItemSelectedComponent } from './item-detail/item-detail.component';
import { FlagFilterComponent } from './flags-filter/flags-filter.component';
import { TextFilterComponent } from './text-filter/text-filter.component';

import { AlphabeticalOrderPipe } from './alphabetical-order/alphabetical-order.pipe';
import { FlagPipe } from './flags-filter/flags-filter.pipe';
import { TextFilterPipe } from './text-filter/text-filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    ItemListComponent,
    // ItemSelectedComponent,
    FlagFilterComponent,
    TextFilterComponent,
    AlphabeticalOrderPipe,
    FlagPipe,
    TextFilterPipe
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
