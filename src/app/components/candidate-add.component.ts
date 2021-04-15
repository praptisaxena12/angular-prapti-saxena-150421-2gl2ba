import { Component, VERSION } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "candidate-add",
  templateUrl: "./candidate-add.component.html"
  //styleUrls: [ './app.component.css' ]
})
export class CandidateAddComponent {
  candidateForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    gender: new FormControl("")
  });

  addData() {
    console.log();
  }
}
