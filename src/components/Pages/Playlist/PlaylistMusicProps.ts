import {ComponentPropsWithoutRef} from "react";

export default interface PlaylistMusicProps extends ComponentPropsWithoutRef<'tr'>{
    musicUrl: string;
    musicNumber: string | number;
    musicCover: string;
    musicName: string;
    singerName: string;
    albumName: string;
    uploadDay: string;
    musicDuration: string|number;
}