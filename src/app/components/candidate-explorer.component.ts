import { Component, VERSION } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Candidate } from "../candidate";
import { DataService } from "../services/dataservice.component";

@Component({
  selector: "candidate-explorer",
  templateUrl: "./candidate-explorer.component.html"
  //styleUrls: [ './app.component.css' ]
})
export class CandidateExplorerComponent {
  candidateDate: Candidate[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getJson().subscribe(data => (this.candidateDate = data));
  }
}
