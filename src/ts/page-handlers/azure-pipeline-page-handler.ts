import { Tfs } from "../interfaces/tfs";
import { Config } from "../interfaces/config";
import { gen_copy_div } from "./copy-form";
import { AppConfig } from "../app-config";
import { TfsService } from "../services/tfs-service";

export class PipelinePageHandler {
  static isValidPipelinePage(): boolean {
    return document.URL.indexOf("definitionId") > -1;
  }

  private tfs: Tfs;

  constructor(tfs: Tfs) {
    this.tfs = tfs;

    chrome.runtime.onMessage.addListener((message, sender) => {
      const config = <Config>message;
      this.tfs.setTfsRestApiCredentials(config.tfsAuthToken);
    });
  }

  displayCloneButton(): void {
    var bt = document.createElement("button");
    bt.innerHTML = "Clone";
    bt.className = "bolt-button enabled bolt-focus-treatment";
    var div_copy_toogle = true;

    bt.onclick = function () {
      AppConfig.getConfig().then((config) => {
        const tfs = new TfsService(window.location.href, config.tfsAuthToken);
        console.log(typeof window.location.pathname);
        var pipeInfo = tfs.GetPipeinfo();
        console.log(pipeInfo);

        var divCopy = gen_copy_div(pipeInfo.name, pipeInfo.path);
        var divParent = document.getElementsByClassName(
          "bolt-portal-host absolute-fill no-events scroll-hidden"
        )[0];
        var insertedContent = document.querySelector(".insertedContent");

        if (insertedContent) {
          insertedContent.parentNode.removeChild(insertedContent);
        }
        divParent.insertAdjacentHTML("afterend", divCopy);

        const cancalBtn = document.getElementById("cancel_btn");
        cancalBtn.addEventListener(
          "click",
          function () {
            var insertedContent = document.querySelector(".insertedContent");
            if (insertedContent) {
              insertedContent.parentNode.removeChild(insertedContent);
            }
          },
          false
        );

        const copyBtn = document.getElementById("copy-btn");
        copyBtn.addEventListener("click", function () {
          pipeInfo.name = (<HTMLInputElement>(
            document.getElementById("__bolt-textfield-input-1")
          )).value;

          pipeInfo.path = (<HTMLInputElement>(
            document.getElementById("__bolt-textfield-input-2")
          )).value;
          tfs.ClonePipe(pipeInfo);
        });
      });
    };

    var BtnGroup = document.getElementsByClassName("bolt-button-group")[0];
    BtnGroup.parentNode.insertBefore(bt, BtnGroup);

    div_copy_toogle = !div_copy_toogle;
  }
}
