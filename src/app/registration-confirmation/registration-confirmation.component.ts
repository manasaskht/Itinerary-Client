import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RegistrationConfService } from "../registration-confirmation/services/registration-conf.service";
import { from } from "rxjs";
import { StorageHelper } from "../shared/utilities/storage.helper";

@Component({
  selector: "app-registration-confirmation",
  templateUrl: "./registration-confirmation.component.html",
  styleUrls: ["./registration-confirmation.component.scss"],
  providers: [RegistrationConfService]
})
export class RegistrationConfirmationComponent implements OnInit {
  constructor(
    private regConfService: RegistrationConfService,
    private router: Router
  ) {
    StorageHelper.getInstance().clear();
  }

  message: string;

  ngOnInit() {
    var routeURL = this.router.url;

    var params = routeURL.split("/");

    if (params.length === 4) {
      var userId = params[2];
      var token = params[3];

      this.regConfService.activateUser(userId, token).subscribe(
        (result: any) => {
          this.message = result.msg;
          console.log(this.message);
        },
        error => {
          this.message = error.error.msg;
          console.log(this.message);
        }
      );
    }
  }

  redirectToLandingPage() {
    this.router.navigate(["/landing"]);
  }
}
