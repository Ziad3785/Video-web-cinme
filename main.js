let currentMovies = [];

// افتراضيًا: أكشن أجنبي
if (typeof movies !== 'undefined') {
    currentMovies = movies;
    displayMovies(movies);
}

// التبويبات
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const tab = button.getAttribute('data-tab');

        if (tab === 'foreignAction' && typeof movies !== 'undefined') {
            currentMovies = movies;
            displayMovies(movies);
        } else if (tab === 'foreignComedy' && typeof comedyMovies !== 'undefined') {
            currentMovies = comedyMovies;
            displayMovies(comedyMovies);
        } else if (tab === 'foreignRomance' && typeof romanticMovies !== 'undefined') {
            currentMovies = romanticMovies;
            displayMovies(romanticMovies);
        } else if (tab === 'egyAction' && typeof egyAction !== 'undefined') {
            currentMovies = egyAction;
            displayMovies(egyAction);
        } else if (tab === 'egyComedy' && typeof egyComedy !== 'undefined') {
            currentMovies = egyComedy;
            displayMovies(egyComedy);
        } else if (tab === 'egyRomance' && typeof egyRomance !== 'undefined') {
            currentMovies = egyRomance;
            displayMovies(egyRomance);
        }
    });
});

// دالة عرض الأفلام
function displayMovies(movieList) {
    const container = document.getElementById('moviesContainer');
    container.innerHTML = '';

    if (movieList.length === 0) {
        container.innerHTML = '<p style="grid-column:1/-1;text-align:center;font-size:28px;color:#ff4444;">مش لاقي أفلام 😔</p>';
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
                        allowfullscreen loading="lazy"></iframe>
            </div>
        `;
        container.appendChild(div);
    });
}

// البحث العام
document.getElementById('globalSearch').addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase().trim();
    if (term === '' || currentMovies.length === 0) {
        displayMovies(currentMovies);
        return;
    }

    const filtered = currentMovies.filter(movie =>
        movie.title.toLowerCase().includes(term) ||
        movie.description.toLowerCase().includes(term) ||
        (movie.year && movie.year.toString().includes(term))
    );

    displayMovies(filtered);
});
