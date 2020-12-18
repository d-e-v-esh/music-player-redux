import { v4 as uuidv4 } from "uuid";

function songData() {
  return [
    {
      name: "Maple Leaf Pt.2",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      artist: "Philanthrope",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10243",
      color: ["#EC6431", "#74523C"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sleepover",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
      artist: "Nymano, JK the Sage",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10130",
      color: ["#595381", "#A36F86"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Backyard Puddles",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
      artist: "Sleepy Fish",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10032",
      color: ["#8BD3F2", "#2E2D4C"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Glory Days",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/08/63d2d2cdabbc5df023603b5f47b2fb97963cb537-1024x1024.jpg",
      artist: "Sitting Duck, Hoffy Beats",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7981",
      color: ["#6A9D94", "#4D5B41"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Vibe Vibe",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/08/7ba352cafecae63aa3f09a52e125ea615d2c1f9b-1024x1024.jpg",
      artist: "Moods, Yasper",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10002",
      color: ["#C8EFFE", "#AE8F38"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Far Away",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/bc9a7af2ad67de703541c2c7a91e3df74ab494c0-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7951",
      color: ["#3B4E5D", "#D7878D"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default songData;
