const romanticMovies = [
    { title: "A Cowboy Christmas", year: 2025, poster: "https://img.youtube.com/vi/9IcNokU6Y7Q/maxresdefault.jpg", description: "حب على المزرعة يغير حياتها إلى الأبد - رومانسي ريفي حلو ❤️", videoId: "9IcNokU6Y7Q" },
    { title: "A Taste of Love", year: 2025, poster: "https://img.youtube.com/vi/4bJLs3QQQDs/maxresdefault.jpg", description: "نجمة تلفزيون تعود لمدينتها وتلاقي الحب - رومانسي كوميدي لذيذ 🍴", videoId: "4bJLs3QQQDs" },
    { title: "Love's Second Chance", year: 2025, poster: "https://img.youtube.com/vi/ebCeP7M6uSE/maxresdefault.jpg", description: "مخططة حفلات زفاف تلاقي فرصة حب تانية - قصة حلوة ومؤثرة", videoId: "ebCeP7M6uSE" },
    { title: "Safe Harbour", year: 2025, poster: "https://img.youtube.com/vi/ZDdScvRUEnc/maxresdefault.jpg", description: "رومانسية على بيت الشاطئ - دراما عاطفية جميلة 🌊", videoId: "ZDdScvRUEnc" },
    { title: "Take Me Home", year: 2011, poster: "https://img.youtube.com/vi/iOY1KgRFyWo/maxresdefault.jpg", description: "رحلة من نيويورك لكاليفورنيا تحول لقصة حب - رومانسي كوميدي كلاسيكي 🚗", videoId: "iOY1KgRFyWo" },
    { title: "It's Not A Date", year: 2024, poster: "https://img.youtube.com/vi/Inyvhz7S6Eo/maxresdefault.jpg", description: "لقاء مش موعد يتحول لحب حقيقي - كوميديا رومانسية مضحكة", videoId: "Inyvhz7S6Eo" },
    { title: "The Accidental Husband", year: 2008, poster: "https://img.youtube.com/vi/[videoId_here]/maxresdefault.jpg", description: "زواج بالغلط يؤدي لحب حقيقي - أوما ثورمان وجيفري دين مورغان 💍", videoId: "[replace_with_actual_if_available]" },
    { title: "Roman Holiday", year: 1953, poster: "https://img.youtube.com/vi/[classic_videoId]/maxresdefault.jpg", description: "كلاسيكي رومانسي مع أودري هيبورن - عطلة في روما مليانة حب 🏛️", videoId: "[classic_id]" },
    { title: "Just Like Heaven", year: 2005, poster: "https://img.youtube.com/vi/[videoId]/maxresdefault.jpg", description: "رومانسي خيالي حلو مع ريز ويذرسبون ومارك روفالو 👻❤️", videoId: "[id]" },
    // أضف المزيد من القنوات زي Bigtime Romance Movies أو Romance Movie Central
    // القنوات دي مليانة عشرات الأفلام، ابحث جواها عن "full movie" وأضف videoId بنفسك عشان توصل لـ100+!
];

function displayRomanticMovies(movieList) {
    const container = document.getElementById('moviesContainer');
    container.innerHTML = '';

    if (movieList.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#ff69b4; font-size:28px; font-weight:bold;">مش لاقي فيلم رومانسي بالاسم ده 💔 جرب اسم تاني!</p>';
        return;
    }

    movieList.forEach(movie => {
        const div = document.createElement('div');
        div.className = 'movie';
        div.innerHTML = `
            <img src="\( {movie.poster}" alt=" \){movie.title}" loading="lazy">
            <h3>\( {movie.title} ( \){movie.year})</h3>
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

// لو عايز تستخدمه في موقع منفصل، غير src في <script> لـ "romanticMovies.js" واستدعي displayRomanticMovies(romanticMovies);
