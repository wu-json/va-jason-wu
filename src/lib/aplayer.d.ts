declare module 'aplayer?client' {
  type Audio = {
    name: string;
    artist: string;
    url: string;
    cover: string;
    theme?: string;
    lrc?: string;
  };
  export default class APlayer {
    constructor(args: {
      container: HTMLElement | null;
      mutex: boolean;
      audio: Audio[];
    });
    list: { index: number; audios: Audio[] };
    on: (event: string, fn: ({ index }: { index: number }) => void) => void;
    theme: (color: string, index: number) => void;
    destroy: () => void;
  }
}
