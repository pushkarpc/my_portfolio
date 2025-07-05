import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HomepageComponent } from '../homepage/homepage.component';
// import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
            HeaderComponent,
            FooterComponent,
            HomepageComponent
            // SidebarComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-project';
}

