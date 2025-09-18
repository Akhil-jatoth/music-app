// Existing code...
// Add this function for search
function searchSongs() {
  const query = document.getElementById("search").value.toLowerCase();
  const playlist = document.getElementById("playlist");
  const cards = playlist.getElementsByClassName("song-card");

  Array.from(cards).forEach(card => {
    const title = card.querySelector(".song-title").textContent.toLowerCase();
    card.style.display = title.includes(query) ? "block" : "none";
  });
}


const playlists = {
  En: [
    { title: "Shape of You", singer: "Ed Sheeran", movie: "Single", duration: "3:53", src: "shapeofyou.mp3", mood: "party", cover: "https://c.saavncdn.com/126/Shape-of-You-English-2017-500x500.jpg" },

    { title: "Beautiful Things", singer: "Chinmayi, G. V. Prakash Kumar, and Rakendu Mouli", movie:"Anna", duration: "3:12", src: "Beautiful Things.mp3", mood: "melody", cover: "https://a10.gaanacdn.com/gn_img/albums/w4MKPgOboj/MKPDLJ0oKo/size_m_1753409875.jpg" },


    { title: "Birds of a Feather", singer: "Billie Eilish", movie:"Anna", duration: "5:14", src: "Birds of a Feather.mp3", mood: "melody", cover: "https://pyxis.nymag.com/v1/imgs/df5/53a/de7064889c5445ed1d33d868437fa127dc-birdsofafeather-video.2x.rsocial.w600.png" },


     { title: "I Am The Dange", singer: "Anirudh Ravichander, Siddarth Basrur", movie:"Coolie", duration: "3:34", src: "I Am The Danger.mp3", mood: "melody", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytgTS3s8WWW1DEBKCzPwIgiMqQ5sCdPH01Q&s" },



    { title: "Bruno Mars APT.", singer: "Chinmayi, G. V. Prakash Kumar, and Rakendu Mouli", movie:"Anna", duration: "5:14", src: "m/Bruno Mars APT.mp3", mood: "melody", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkJYFP0y1DlWU0CwI3gvl70iapULns_jNHw&s" },


    { title: "Yem Maya Jarughuthondho", singer: "Chinmayi, G. V. Prakash Kumar, and Rakendu Mouli", movie:"Anna", duration: "5:14", src: "YemMayaJaruguthundo.mp3", mood: "melody", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkJYFP0y1DlWU0CwI3gvl70iapULns_jNHw&s" },


    { title: "Yem Maya Jarughuthondho", singer: "Chinmayi, G. V. Prakash Kumar, and Rakendu Mouli", movie:"Anna", duration: "5:14", src: "YemMayaJaruguthundo.mp3", mood: "melody", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkJYFP0y1DlWU0CwI3gvl70iapULns_jNHw&s" },


    { title: "Yem Maya Jarughuthondho", singer: "Chinmayi, G. V. Prakash Kumar, and Rakendu Mouli", movie:"Anna", duration: "5:14", src: "YemMayaJaruguthundo.mp3", mood: "melody", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkJYFP0y1DlWU0CwI3gvl70iapULns_jNHw&s" },


    { title: "Yem Maya Jarughuthondho", singer: "Chinmayi, G. V. Prakash Kumar, and Rakendu Mouli", movie:"Anna", duration: "5:14", src: "YemMayaJaruguthundo.mp3", mood: "melody", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkJYFP0y1DlWU0CwI3gvl70iapULns_jNHw&s" }
  ],
  Hi: [
    { title: "Tum Hi Ho", singer: "Arijit Singh", movie: "Aashiqui 2", duration: "4:20", src: "tumhiho.mp3", mood: "sad", cover: "tumhiho.jpg" },


    { title: "Yem Maya Jarughuthondho", singer: "Chinmayi, G. V. Prakash Kumar, and Rakendu Mouli", movie:"Anna", duration: "5:14", src: "YemMayaJaruguthundo.mp3", mood: "melody", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkJYFP0y1DlWU0CwI3gvl70iapULns_jNHw&s" },


    { title: "Yem Maya Jarughuthondho", singer: "Chinmayi, G. V. Prakash Kumar, and Rakendu Mouli", movie:"Anna", duration: "5:14", src: "YemMayaJaruguthundo.mp3", mood: "melody", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkJYFP0y1DlWU0CwI3gvl70iapULns_jNHw&s" },


    { title: "Yem Maya Jarughuthondho", singer: "Chinmayi, G. V. Prakash Kumar, and Rakendu Mouli", movie:"Anna", duration: "5:14", src: "YemMayaJaruguthundo.mp3", mood: "melody", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkJYFP0y1DlWU0CwI3gvl70iapULns_jNHw&s" },


    { title: "Yem Maya Jarughuthondho", singer: "Chinmayi, G. V. Prakash Kumar, and Rakendu Mouli", movie:"Anna", duration: "5:14", src: "YemMayaJaruguthundo.mp3", mood: "melody", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkJYFP0y1DlWU0CwI3gvl70iapULns_jNHw&s" },


    { title: "Yem Maya Jarughuthondho", singer: "Chinmayi, G. V. Prakash Kumar, and Rakendu Mouli", movie:"Anna", duration: "5:14", src: "YemMayaJaruguthundo.mp3", mood: "melody", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkJYFP0y1DlWU0CwI3gvl70iapULns_jNHw&s" },


    { title: "Yem Maya Jarughuthondho", singer: "Chinmayi, G. V. Prakash Kumar, and Rakendu Mouli", movie:"Anna", duration: "5:14", src: "YemMayaJaruguthundo.mp3", mood: "melody", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkJYFP0y1DlWU0CwI3gvl70iapULns_jNHw&s" },



    { title: "Tera Ban Jaunga", singer: "Akhil Sachdeva", movie: "Kabir Singh", duration: "3:55", src: "terabanjaunga.mp3", mood: "melody", cover: "terabanjaunga.jpg" }
  ],
  Te: [
    { title: "Samajavaragamana", singer: "Sid Sriram", movie: "Ala Vaikunthapurramuloo", duration: "3:48", src: "Samajavaragamana.mp3", mood: "melody", cover: "https://i.scdn.co/image/ab67616d0000b2736f3d477e1f31b354c5de3d56" },

    { title: "Anuvanuvuu", singer: "Arijt Singh", movie:"Oh Bheem Bhsh", duration: "3:31", src: "Anuvanuvuu.mp3", mood: "melody", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/4e/90/4e/4e904ea0-cd94-5409-0631-b1f63ac44715/cover.jpg/600x600bf-60.jpg" },

    { title: "Yem Maya Jarughuthondho", singer: "Chinmayi, G. V. Prakash Kumar, and Rakendu Mouli", movie:"Anna", duration: "5:14", src: "YemMayaJaruguthundo.mp3", mood: "melody", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkJYFP0y1DlWU0CwI3gvl70iapULns_jNHw&s" },

    { title: "Prathi Kadalo", singer: "Child Singers Group", movie:"Salaar", duration: "3:03", src: "Prathi Kadalo.mp3", mood: "melody", cover: "https://assets.telegraphindia.com/telegraph/2023/Dec/1703243689_salaar-1.jpg" },


    { title: "Sooreede", singer: "Harini Ivaturi", movie:"Salaar", duration: "3:20", src: "Sooreede.mp3", mood: "melody", cover: "https://www.sakshi.com/gallery_images/2023/12/21/prabhas%20salaar%20movie%20hd%20stills-3.jpg" },


    { title: "Sound of Salaar", singer: "Ravi Barsur Team", movie:"Salaar", duration: "2:56", src: "Sound of Salaar.mp3", mood: "melody", cover: "https://media.assettype.com/deccanherald%2F2023-11%2F0985bf0b-c0ed-4622-a341-76f7e9e74201%2FSalaar.jpeg?w=undefined&auto=format%2Ccompress&fit=max" },


    { title: "Vinaraa", singer: "Sachin Basrur", movie:"Salaar", duration: "3:15", src: "Vinaraa.mp3", mood: "melody", cover: "https://www.sakshi.com/gallery_images/2023/12/21/prabhas%20salaar%20movie%20hd%20stills-3.jpg" },


    { title: "Andham Vadi Choopera", singer: "Inno Genga", movie:"Master", duration: "3:14", src: "Andham Vadi Choopera.mp3", mood: "melody", cover: "https://tse4.mm.bing.net/th/id/OIP.TmLzTE_SJ3TLG6LSd7RD3gHaKe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },

    { title: "Beat Of Master", singer: " (Instrumental)", movie:"Master", duration: "1:15", src: "Master songs/Beat Of Master.mp3", mood: "melody", cover: "/msongs" },


    { title: "Chitti Story", singer: "Inno Genga", movie:"Master", duration: "5:01", src: "Master songs/Chiku Vibe.mp3", mood: "melody", cover: "/msongs" },


    { title: "Letha Letha Gundelu", singer: "Inno Genga", movie:"Master", duration: "1:36", src: "Master songs/Letha Letha Gundelu.mp3", mood: "melody", cover: "/msongs" },


    { title: "Master Coming", singer: "Inno Genga", movie:"Master", duration: "3:47", src: "Master songs/Master Coming.mp3", mood: "melody", cover: "/msongs" },


    { title: "Modhalettu", singer: "Inno Genga", movie:"Master", duration: "3:47", src: "Master songs/Modhalettu.mp3", mood: "melody", cover: "/msongs" },

    { title: "Quit Chyyara.mp3", singer: "Inno Genga", movie:"Master", duration: "3:47", src: "Master songs/Quit Chyyara.mp3", mood: "melody", cover: "/msongs" },


    { title: "Modhalettu", singer: "Inno Genga", movie:"Master", duration: "3:47", src: "Master songs/Modhalettu.mp3", mood: "melody", cover: "/msongs" },
    
    
  ],
  Ta: [

    { title: "Chikitu", singer: "Anirudh Ravichander, T Rajendar", movie:"Coolie", duration: "4:17", src: "Chikitu.mp3", mood: "melody", cover: "https://etvbharatimages.akamaized.net/etvbharat/prod-images/12-12-2024/1200-675-23100475-584-23100475-1734008149209.jpg" },

     { title: "Chiku Vibe", singer: "Anirudh Ravichander, T Rajendar", movie:"Coolie", duration: "0:56", src: "Chiku Vibe.mp3", mood: "melody", cover: "https://etvbharatimages.akamaized.net/etvbharat/prod-images/12-12-2024/1200-675-23100475-584-23100475-1734008149209.jpg" },

      { title: "Kokki", singer: "Sooraj Santhosh", movie:"Coolie", duration: "3:52", src: "Kokki.mp3", mood: "melody", cover: "https://pbs.twimg.com/media/Gy9WHeMXkAA6gWz.jpg" },


        { title: "Mobsta", singer: "Anirudh Ravichander", movie:"Coolie", duration: "1:54", src: "Mobsta.mp3", mood: "melody", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpqFaA7ED6XbCIwVUF2kbkzzX0PqF2wVG-Cg&s" },

        { title: "Monica", singer: "Anirudh Ravichander, Sublahshini", movie:"Coolie", duration: "3:34", src: "Monica.mp3", mood: "party", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiPRM0x-PNAy4wBbTPA5XkLf4Ry5-Yit4RCg&s" },

        { title: "Power House Vibe", singer: "Anirudh Ravichander, Arivu", movie:"Coolie", duration: "3:26", src: "Power House Vibe.mp3", mood: "melody", cover: "https://static.toiimg.com/thumb/msid-122848812,imgsize-21154,width-400,resizemode-4/CO.jpg" },



    { title: "Kannana Kanne", singer: "Sid Sriram", movie: "Viswasam", duration: "4:00", src: "kannanakanne.mp3", mood: "melody", cover: "kannanakanne.jpg" },


    { title: "Yem Maya Jarughuthondho", singer: "Chinmayi, G. V. Prakash Kumar, and Rakendu Mouli", movie:"Anna", duration: "5:14", src: "YemMayaJaruguthundo.mp3", mood: "melody", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkJYFP0y1DlWU0CwI3gvl70iapULns_jNHw&s" },


    { title: "Yem Maya Jarughuthondho", singer: "Chinmayi, G. V. Prakash Kumar, and Rakendu Mouli", movie:"Anna", duration: "5:14", src: "YemMayaJaruguthundo.mp3", mood: "melody", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkJYFP0y1DlWU0CwI3gvl70iapULns_jNHw&s" },


    { title: "Yem Maya Jarughuthondho", singer: "Chinmayi, G. V. Prakash Kumar, and Rakendu Mouli", movie:"Anna", duration: "5:14", src: "YemMayaJaruguthundo.mp3", mood: "melody", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkJYFP0y1DlWU0CwI3gvl70iapULns_jNHw&s" },


    { title: "Yem Maya Jarughuthondho", singer: "Chinmayi, G. V. Prakash Kumar, and Rakendu Mouli", movie:"Anna", duration: "5:14", src: "YemMayaJaruguthundo.mp3", mood: "melody", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkJYFP0y1DlWU0CwI3gvl70iapULns_jNHw&s" },


    { title: "Yem Maya Jarughuthondho", singer: "Chinmayi, G. V. Prakash Kumar, and Rakendu Mouli", movie:"Anna", duration: "5:14", src: "YemMayaJaruguthundo.mp3", mood: "melody", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkJYFP0y1DlWU0CwI3gvl70iapULns_jNHw&s" },


    { title: "Yem Maya Jarughuthondho", singer: "Chinmayi, G. V. Prakash Kumar, and Rakendu Mouli", movie:"Anna", duration: "5:14", src: "YemMayaJaruguthundo.mp3", mood: "melody", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkJYFP0y1DlWU0CwI3gvl70iapULns_jNHw&s" },
    { title: "Why This Kolaveri Di", singer: "Dhanush", movie: "3", duration: "4:05", src: "kolaveri.mp3", mood: "party", cover: "kolaveri.jpg" }
  ]
};

// 🎵 Load playlist
function loadPlaylist(lang, mode) {
  const playlist = document.getElementById("playlist");
  playlist.innerHTML = "";

  playlists[lang]
    .filter(song => mode === "all" || song.mood === mode)
    .forEach((song, index) => {
      const li = document.createElement("li");
      li.classList.add("song-card");
      li.innerHTML = `
        <img src="${song.cover}" alt="${song.title}" class="song-cover">
        <div class="song-title">${song.title}</div>
        <div class="song-details">${song.singer} • ${song.movie}</div>
        <div class="song-details">⏱ ${song.duration}</div>
        <div class="song-actions">
          <button onclick="playSong('${song.src}', '${song.title}', ${index}, '${lang}')">▶️ Play</button>
          <a href="${song.src}" download>📥 Download</a>
        </div>
      `;
      playlist.appendChild(li);
    });
}

// 🎶 Play song
function playSong(src, title, index, lang) {
  currentIndex = index;
  currentLang = lang;
  const audio = document.getElementById("audioPlayer");
  audio.src = src;
  audio.play();
  document.getElementById("nowPlaying").innerText = "▶️ Now Playing: " + title;

  // Autoplay next
  audio.onended = function() {
    playNext();
  };
}

function playNext() {
  currentIndex = (currentIndex + 1) % playlists[currentLang].length;
  const song = playlists[currentLang][currentIndex];
  playSong(song.src, song.title, currentIndex, currentLang);
}

// 🌍 Change language
function changeLanguage() {
  currentLang = document.getElementById("language").value;
  loadPlaylist(currentLang, "all");
}

// 🎭 Filter by mood
function filterSongs() {
  let mode = document.getElementById("mode").value;
  loadPlaylist(currentLang, mode);
}

// 🎵 Floating notes random speed
document.querySelectorAll('.note').forEach(note => {
  note.style.animationDuration = (Math.random() * 4 + 4) + "s";
});

// Load English songs on start
window.onload = () => {
  loadPlaylist("En", "all");
};
