import { Tfs } from "../interfaces/tfs";

export class TfsService implements Tfs {
  private tfsUrl: URL;
  private accessToken: string;
  private tfsApiPipeInfo: string;

  constructor(TfsUrl: string, accessToken: string) {
    this.setTfsUrl(TfsUrl);
    this.setTfsRestApiCredentials(accessToken);
  }

  setTfsUrl(tfsUrl: string): void {
    this.tfsUrl = new URL(tfsUrl);
    this.tfsApiPipeInfo =
      this.tfsUrl.toString().split("_build")[0] + "_apis/build/definitions/";
  }

  setTfsRestApiCredentials(accessToken: string): void {
    this.accessToken = accessToken;
  }

  GetPipeinfo(): any {
    var regPattern = RegExp("(?<=definitionId=)([^&]+)");
    var tfsPipeId = this.tfsUrl.toString().match(regPattern)[0];

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", `${this.tfsApiPipeInfo}${tfsPipeId}`, false);
    xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xmlHttp.setRequestHeader(
      "authorization",
      "Basic " + btoa("Basic" + ":" + this.accessToken)
    );

    xmlHttp.send(null);

    var response = JSON.parse(xmlHttp.responseText);
    return response;
  }

  ClonePipe(pipeInfo: any): void {
    document.getElementById("Status").innerHTML = "";
    var elem2 = document.createElement("label");

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open(
      "POST",
      "http://home-pc/DefaultCollection/Test/_apis/build/definitions?api-version=6.0"
    );
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.setRequestHeader(
      "authorization",
      "Basic " + btoa("Basic" + ":" + this.accessToken)
    );
    xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");

    xmlHttp.onload = function () {
      var data = JSON.parse(this.response);
      if (xmlHttp.status >= 200 && xmlHttp.status < 400) {
        elem2.innerHTML = "Succsess";
      } else {
        elem2.innerHTML = data.message.toString();
      }

      document.getElementById("Status").appendChild(elem2);
    };
    xmlHttp.send(JSON.stringify(pipeInfo));
  }
}
