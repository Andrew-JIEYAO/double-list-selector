export interface DoubleList {
  title: string;
  subTitle: string;
  titleCodeNames: TitleCodeName[];
}

export interface TitleCodeName {
  title: string;
  codeNames: CodeName[];
}

export interface CodeName {
  code: string;
  name: string;
}
