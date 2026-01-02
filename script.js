const movies = [
    { title: "Elite Spy", year: 2025, poster: "https://img.youtube.com/vi/crEH4dKuKOY/maxresdefault.jpg", description: "جيسون ستاثام وجوش هارتنت - أكشن جاسوسية 🔥", videoId: "crEH4dKuKOY" },
    { title: "Legend of the Hero", year: 2025, poster: "https://img.youtube.com/vi/en7VIfOJw2I/maxresdefault.jpg", description: "جاكي شان في مغامرة أكشن كلاسيك 💥", videoId: "en7VIfOJw2I" },
    { title: "The Expat", year: 2025, poster: "https://img.youtube.com/vi/SsD-_oykv30/maxresdefault.jpg", description: "أكشن وإثارة في الخارج", videoId: "SsD-_oykv30" },
    { title: "The Saviour 3", year: 2025, poster: "https://img.youtube.com/vi/_nQJ8B5NtA8/maxresdefault.jpg", description: "جيسون ستاثام بلوكباستر أكشن", videoId: "_nQJ8B5NtA8" },
    { title: "Avengement", year: 2019, poster: "https://img.youtube.com/vi/318udnyw6qc/maxresdefault.jpg", description: "سكوت أدكينز - انتقام عنيف 💪", videoId: "318udnyw6qc" },
    { title: "Ultimate Justice", year: 2017, poster: "https://img.youtube.com/vi/iIpasGonkhg/maxresdefault.jpg", description: "فريق سابق ينتقم - أكشن ثأر", videoId: "iIpasGonkhg" },
    { title: "Elite", year: 2018, poster: "https://img.youtube.com/vi/MJJ2bvsomRo/maxresdefault.jpg", description: "تحقيق عسكري - أكشن عسكري", videoId: "MJJ2bvsomRo" },
    { title: "The Lost Agent", year: 2025, poster: "https://img.youtube.com/vi/jvVg8sj6jNA/maxresdefault.jpg", description: "جاكي شان - أكشن مفقود", videoId: "jvVg8sj6jNA" },
    { title: "The Aggressor", year: 2025, poster: "https://img.youtube.com/vi/oa2BgZdNyiM/maxresdefault.jpg", description: "آرون إيكهارت - ثأر قوي", videoId: "oa2BgZdNyiM" },
    { title: "2030 Megastorm", year: 2025, poster: "https://img.youtube.com/vi/AvPFMnmkbJY/maxresdefault.jpg", description: "كارثة sci-fi أكشن", videoId: "AvPFMnmkbJY" },
    { title: "The Last Sentinel", year: 2023, poster: "https://img.youtube.com/vi/vlBnNDfWsPc/maxresdefault.jpg", description: "روبوتات وأكشن بدون رحمة", videoId: "vlBnNDfWsPc" },
    { title: "Day Off", year: 2024, poster: "https://img.youtube.com/vi/IKYvVeWt_n4/maxresdefault.jpg", description: "انتقام سريع بعد جريمة", videoId: "IKYvVeWt_n4" },
    // أضفت المزيد من المتاح في قنوات زي Movie Central و WATCH ACTION MOVIES NOW
    // لو عايز أكتر، افتح القنوات دي وابحث عن "full movie" وأضف videoId بنفسك!
];

function displayMovies(movieList) {
    const container = document.getElementById('moviesContainer');
    container.innerHTML = '';

    if (movieList.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#00ffff; font-size:28px; font-weight:bold;">مش لاقي نتايج 😔 جرب كلمة تانية!</p>';
        return;
    }

    movieList.forEach(movie => {
        const div = document.createElement('div');
        div.className = 'movie';
        div.innerHTML = `
            <img src="\( {movie.poster}" alt=" \){movie.title}" loading="lazy">
            <h3>${movie.title} ${movie.year ? '(' + movie.year + ')' : ''}</h3>
            <p>${movie.description}</p>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/${movie.videoId}?rel=0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen loading="lazy"></iframe>
            </div>
        `;
        container.appendChild(div);
    });
}

displayMovies(movies);

document.getElementById('search').addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase().trim();
    
    if (term === '') {
        displayMovies(movies);
        return;
    }

    const filtered = movies.filter(movie => 
        movie.title.toLowerCase().includes(term) ||
        movie.description.toLowerCase().includes(term) ||
        (movie.year && movie.year.toString().includes(term))
    );

    displayMovies(filtered);
});
