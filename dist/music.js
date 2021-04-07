const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "Sweet Memory",
        artist: 'MACO',
        url: 'https://music.163.com/song/media/outer/url?id=515573221.mp3',
        cover: 'https://p1.music.126.net/-U7mfaIjENUu8G_O0Dhv8g==/18419018788768520.jpg',
      },
      {
        name: '願い~あの頃のキミへ~',
        artist: '當山みれい',
        url: 'https://music.163.com/song/media/outer/url?id=488388942.mp3',
        cover: 'https://p1.music.126.net/kbLlBkGfEcA3RJyC5JhkDA==/18346451021830743.jpg',
      },
    ]
});

