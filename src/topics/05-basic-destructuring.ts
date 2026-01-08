interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const AudioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "mess",
  details: {
    author: "ed sheeran",
    year: 2015,
  },
};

const {
  song,
  songDuration,
  details: { author },
} = AudioPlayer;

// console.log("Song:", song);
// console.log("Duration", songDuration);
// console.log("Author", author);

//? Arreglos destructuring

const [p1, p2, trunks]: string[] = ["goku", "vegeta", "trunks"];

console.log(trunks);

export {};
