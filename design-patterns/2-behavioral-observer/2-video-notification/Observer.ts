export interface Observer {
  update(title: string, uploader: string, description: string, ageStrict: boolean): void;
  notify(): void
}