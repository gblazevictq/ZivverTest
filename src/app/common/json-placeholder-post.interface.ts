export interface IJsonPlaceholderBasic {
  userId: number;
  id: number;
}

export interface IJsonPlaceholderPost extends IJsonPlaceholderBasic {
  title: string;
  body: string;
}
