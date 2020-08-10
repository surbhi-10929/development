import { Component } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private socialAuthService: AuthService) { }
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        if (userData.idToken != null) {
          window.location.href = 'https://helpndoc.moglix.com/document';
        }
        
      }
    );
  }
}
