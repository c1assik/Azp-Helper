
export interface Tfs {
  setTfsUrl(tfsUrl: string): void;
  setTfsRestApiCredentials(accessToken: string): void;
  GetPipeinfo(): any;
  ClonePipe(pipeInfo: any): void;
}
