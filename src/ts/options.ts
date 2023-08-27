import { OptionsPageHandler } from "./page-handlers/options-page-handler";
import { PipelinePageHandler } from "./page-handlers/azure-pipeline-page-handler";
import { AppConfig } from "./app-config";
import { TfsService } from "./services/tfs-service";


if (PipelinePageHandler.isValidPipelinePage()) {
  AppConfig.getConfig().then((config) => {
    const tfs = new TfsService('https://noneed', config.tfsAuthToken);
    const pipelinePageHandler = new PipelinePageHandler(tfs);
    pipelinePageHandler.displayCloneButton();
  });
}

const optionsPageHandler = new OptionsPageHandler();
optionsPageHandler.loadOptions();
