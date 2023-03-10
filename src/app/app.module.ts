import { EnvironmentInjector, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthModule } from './auth/auth.module'
import { IonicModule } from '@ionic/angular'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        IonicModule.forRoot(),
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: false
        })
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
