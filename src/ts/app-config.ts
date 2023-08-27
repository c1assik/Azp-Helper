import { Config } from "./interfaces/config";
import { Storage } from "./interfaces/storage";
import { ChromeStorageService } from "./services/chrome-storage-service";

export class AppConfig {
  static storageKeys = ["tfs-auth-token"];

  static getConfig(storage?: Storage): Promise<Config> {
    storage = storage || new ChromeStorageService();

    return storage.getData(AppConfig.storageKeys).then((items) => {
      const config: Config = AppConfig.convertObjectToConfig(items);
      return Promise.resolve(config);
    });
  }

  static convertObjectToConfig(storageObject: object): Config {
    const config: Config = {
      tfsAuthToken: storageObject[AppConfig.storageKeys[0]] || "",
    };
    return config;
  }
}
