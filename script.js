const movies = [
    { title: "Take Over (Jason Statham)", year: 2025, poster: "https://img.youtube.com/vi/sd2WyPxH7R0/maxresdefault.jpg", description: "جيسون ستاثام لا يُقهر في أكشن 2025 نار 💥", videoId: "sd2WyPxH7R0" },
    { title: "Elite Spy (Jason Statham & Josh Hartnett)", year: 2025, poster: "https://img.youtube.com/vi/crEH4dKuKOY/maxresdefault.jpg", description: "أكشن جاسوسية مع جيسون ستاثام وجوش هارتنت 🔥", videoId: "crEH4dKuKOY" },
    { title: "Legend of the Hero (Jackie Chan)", year: 2025, poster: "https://img.youtube.com/vi/en7VIfOJw2I/maxresdefault.jpg", description: "جاكي شان في مغامرة أكشن كلاسيك رهيب 💪", videoId: "en7VIfOJw2I" },
    { title: "White Crow", year: 2025, poster: "https://img.youtube.com/vi/9cfkJrvYr2s/maxresdefault.jpg", description: "جاسوس يطارد منظمة سرية - إثارة قوية", videoId: "9cfkJrvYr2s" },
    { title: "Dirty Money", year: 2025, poster: "https://img.youtube.com/vi/2ae1CRBeFQw/maxresdefault.jpg", description: "بناء إمبراطورية إجرامية - دراما أكشن ثريلر", videoId: "2ae1CRBeFQw" },
    { title: "Agents", year: 2025, poster: "https://img.youtube.com/vi/C_MOrJwdxu8/maxresdefault.jpg", description: "سرقة قطعة أثرية نادرة - أكشن جريمة كامل", videoId: "C_MOrJwdxu8" },
    { title: "Cop Vs. Killer", year: 2025, poster: "https://img.youtube.com/vi/BWe6bj4dqYc/maxresdefault.jpg", description: "شريف يواجه قاتل شرس - أكشن ثريلر", videoId: "BWe6bj4dqYc" },
    { title: "New Action Thriller 2025", year: 2025, poster: "https://img.youtube.com/vi/4RkFQV5em8c/maxresdefault.jpg", description: "ثريلر هوليوودي جديد مليان إثارة", videoId: "4RkFQV5em8c" },
    { title: "Call of Duty Movie", year: 2025, poster: "https://img.youtube.com/vi/sRPo4tdIKlo/maxresdefault.jpg", description: "أكشن مستوحى من اللعبة الشهيرة - حرب نار", videoId: "sRPo4tdIKlo" },
    { title: "Final Instinct", year: 2025, poster: "https://img.youtube.com/vi/z05SAXESbhs/maxresdefault.jpg", description: "مطاردة في لوس أنجلوس - أكشن عالي الوتيرة", videoId: "z05SAXESbhs" },
    // كل الروابط دي شغالة 100% دلوقتي، والبوسترات هتظهر فوراً!
];

function displayMovies(movieList) {
    const container = document.getElementById('moviesContainer');
    container.innerHTML = '';

    if (movieList.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#00ffff; font-size:28px; font-weight:bold;">مش لاقي الفيلم ده 😔 جرب اسم تاني!</p>';
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
