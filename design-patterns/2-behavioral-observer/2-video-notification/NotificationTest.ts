import {VideoData} from './VideoData';
import {EmailNotify} from './EmailNotify';

export class NotificationTest {
  videoData: VideoData = new VideoData();
  emailNotify: EmailNotify = new EmailNotify(this.videoData);

  NotificationTest(): void {
    this.videoData.setTitle('Title A');
    this.videoData.setUploader('Uploader A');
    this.videoData.setDescription('Desciption A');
    this.videoData.setAgeStrict(false);
    this.videoData.setTitle('Title B');
    this.videoData.setUploader('Uploader B');
    this.videoData.setDescription('Desciption B');
    this.videoData.setAgeStrict(true);
  }
}

const notificationTest = new NotificationTest();
notificationTest.NotificationTest();