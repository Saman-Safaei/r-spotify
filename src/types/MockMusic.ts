import type { MockSinger } from './MockSinger';

interface MockMusic {
  id: number;
  title: string;
  imageCover: string;
  duration: number;
  musicFile: string;
  publishDate: string;
  like: number;
  singer: MockSinger[];
  album?: string;
}

export type { MockMusic };
