import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angular-6-social-login";


export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      // {
      //   id: GoogleLoginProvider.PROVIDER_ID,
      //   provider: new GoogleLoginProvider("335789157809-ve7nf6ijvl5s4c04p8ogpm18uv62dnje.apps.googleusercontent.com")
      // },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("335789157809-79bm8bnbg0ac9itl17elrfss2p78gfsm.apps.googleusercontent.com")
      }

    ]
  );
  return config;
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
