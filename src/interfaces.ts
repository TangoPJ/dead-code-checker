export interface IDeadCodeInfo {
  count: number;
  declaredIn: {
    filePath: string;
    line: number;
  }[];
}

export interface IDeadCodeReport {
  name: string;
  line: number;
  filePath: string;
}

export interface IDeadCodeParams {
  ignoreFolders: string[];
}
