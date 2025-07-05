import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { HomepageComponent } from "../homepage/homepage.component";
// import { SidebarComponent } from "../sidebar/sidebar.component";

@NgModule({
          declarations: [
            AppComponent,
            BrowserModule,
            HeaderComponent,
            FooterComponent,
            HomepageComponent,
            // SidebarComponent
          ],
          imports: [
            
          ],
          bootstrap: [AppComponent]
        })

export class AppModule {}