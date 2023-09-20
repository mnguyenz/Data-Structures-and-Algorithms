import { Observer } from './Observer';
import { Subject } from './Subject';

export class VideoData implements Subject {
  private observers: Observer[] = [];
  private title: string;
  private uploader: string;
  private description: string;
  private ageStrict: boolean;

  registerObserver(observerParam: Observer): void {
    this.observers.push(observerParam);
  }
  removeObserver(observerParam: Observer): void {
    this.observers.forEach( (observer, index) => {
      if (observer === observerParam) {
        this.observers.splice(index, 1);
      } 
    });
  }
  notifyObserver(): void {
    this.observers.forEach( (observer) => {
      observer.update(this.title, this.uploader, this.description, this.ageStrict);
    });
  }
 
  videoDataChanged(): void {
    this.notifyObserver();
  }

  setTitle(titleParam: string): void {
    this.title = titleParam;
    this.videoDataChanged();
  }

  setUploader(uploaderParam: string): void {
    this.uploader = uploaderParam;
    this.videoDataChanged();
  }

  setDescription(descriptionParam: string): void {
    this.description = descriptionParam;
    this.videoDataChanged();
  }

  setAgeStrict(ageStrictParam: boolean): void {
    this.ageStrict = ageStrictParam;
    this.videoDataChanged();
  }
}