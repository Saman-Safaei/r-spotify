import type { MockMusic } from './MockMusic';

interface MockSinger {
    id: number;
    firstname: string;
    lastname: string;

    musics: MockMusic[]
}

export type { MockSinger };