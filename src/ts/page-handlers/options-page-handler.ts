import { AppConfig } from "../app-config";
import { Storage } from "../interfaces/storage";
import { ChromeStorageService } from "../services/chrome-storage-service";

export class OptionsPageHandler {
  private storage: Storage;
  private optionInputElementIds = AppConfig.storageKeys;

  constructor();
  constructor(storage?: Storage) {
    this.storage = storage || new ChromeStorageService();
  }

  loadOptions(): void {
    const optionInputElements = {};

    this.optionInputElementIds.forEach((key) => {
      optionInputElements[key] = document.getElementById(key);
    });

    document.getElementById("save-options").addEventListener("click", () => {
      this.saveOptions(optionInputElements);
    });

    var token = document.getElementById("tfs-auth-token");

    token.addEventListener("input", () => {
      this.saveOptions(optionInputElements);
    });

    this.getOptions(optionInputElements);
  }

  private getOptions(optionInputElements: object): void {
    this.storage
      .getData(this.optionInputElementIds)
      .then((items) => {
        this.optionInputElementIds.forEach((key) => {
          const inputElement = <HTMLInputElement>optionInputElements[key];

          inputElement.value = items[key] || "";
        });
      })
      .catch((error) => console.error(error));
  }

  private saveOptions(optionInputElements: object): void {
    const storageObject = {};

    this.optionInputElementIds.forEach((key) => {
      const inputElement = <HTMLInputElement>optionInputElements[key];

      storageObject[key] = inputElement.value;
      console.log(storageObject);
    });

    this.storage
      .setData(storageObject)
      .then(() =>
        chrome.runtime.sendMessage({ action: "options", data: storageObject })
      )
      .catch((error) => console.error(error));
  }
}
