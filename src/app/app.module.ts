import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CandidateAddComponent } from "./components/candidate-add.component";
import { CandidateExplorerComponent } from "./components/candidate-explorer.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    CandidateAddComponent,
    CandidateExplorerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
