import { Observer } from './Observer';
import { VideoData } from './VideoData';

export class EmailNotify implements Observer {
  private title: string;
  private uploader: string;
  private description: string;
  private ageStrict: boolean;
  private videoData: VideoData;

  constructor(videoDataParam: VideoData) {
    this.videoData = videoDataParam;
    videoDataParam.registerObserver(this);
  }
  
  update(titleParam: string, uploaderParam: string, descriptionParam: string, ageStrictParam: boolean): void {
    this.title = titleParam;
    this.uploader = uploaderParam;
    this.description = descriptionParam;
    this.ageStrict = ageStrictParam;
    this.notify();
  }

  notify(): void {
    console.log(`The video information had changed:
    Title: ${this.title}
    Uploader: ${this.uploader}
    Description: ${this.description}
    Age Strict: ${this.ageStrict}`);
  }
}