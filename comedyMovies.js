const comedyMovies = [
    { title: "The Hangover", year: 2009, poster: "https://img.youtube.com/vi/tcdUhdOlz9M/maxresdefault.jpg", description: "ليلة مجنونة في لاس فيجاس - كوميديا كلاسيكية مضحكة جدًا 😂", videoId: "tcdUhdOlz9M" },
    { title: "Superbad", year: 2007, poster: "https://img.youtube.com/vi/1hPt7W4b8rQ/maxresdefault.jpg", description: "مراهقين عايزين يحتفلوا قبل الكلية - كوميديا مراهقة نارية", videoId: "1hPt7W4b8rQ" },
    { title: "Step Brothers", year: 2008, poster: "https://img.youtube.com/vi/CewglxElBK0/maxresdefault.jpg", description: "أخوين كبار لسه عايشين مع أهلهم - ويل فيريل وجون سي رايلي 😂", videoId: "CewglxElBK0" },
    { title: "21 Jump Street", year: 2012, poster: "https://img.youtube.com/vi/rv6o7DkQe3k/maxresdefault.jpg", description: "شرطة متخفيين في مدرسة ثانوي - تشانينج تاتوم وجونا هيل", videoId: "rv6o7DkQe3k" },
    { title: "The 40-Year-Old Virgin", year: 2005, poster: "https://img.youtube.com/vi/1O9s2u4d4zM/maxresdefault.jpg", description: "ستيف كاريل في موقف كوميدي لا يُنسى", videoId: "1O9s2u4d4zM" },
    { title: "Bridesmaids", year: 2011, poster: "https://img.youtube.com/vi/FNppLrmXsmo/maxresdefault.jpg", description: "كوميديا بنات مجنونة في حفل زفاف", videoId: "FNppLrmXsmo" },
    { title: "Anchorman", year: 2004, poster: "https://img.youtube.com/vi/NJQ4qG1sCGc/maxresdefault.jpg", description: "ويل فيريل مذيع أخبار متعجرف - كلاسيكي", videoId: "NJQ4qG1sCGc" },
    { title: "Dumb and Dumber", year: 1994, poster: "https://img.youtube.com/vi/l13yPh_Bg8U/maxresdefault.jpg", description: "جيم كاري وجيف دانيلز - كوميديا غبية بس رهيبة", videoId: "l13yPh_Bg8U" },
    { title: "Game Night", year: 2018, poster: "https://img.youtube.com/vi/3m1Q4WxXDYg/maxresdefault.jpg", description: "ليلة ألعاب تتحول لجريمة حقيقية - جيسون بيتمان", videoId: "3m1Q4WxXDYg" },
    { title: "The Grand Budapest Hotel", year: 2014, poster: "https://img.youtube.com/vi/1Fg5iWmQ0qw/maxresdefault.jpg", description: "ويس أندرسون - كوميديا فنية أنيقة ومضحكة", videoId: "1Fg5iWmQ0qw" },
    { title: "Zombieland", year: 2009, poster: "https://img.youtube.com/vi/8m3eIPHsZQw/maxresdefault.jpg", description: "كوميديا زومبي مع وودي هارلسون وجيسي آيزنبرج", videoId: "8m3eIPHsZQw" },
    { title: "Pitch Perfect", year: 2012, poster: "https://img.youtube.com/vi/8eF4f1C1dAk/maxresdefault.jpg", description: "كوميديا غناء جامعي - أغاني ومواقف مضحكة", videoId: "8eF4f1C1dAk" },
    { title: "Tropic Thunder", year: 2008, poster: "https://img.youtube.com/vi/T-6YeaYpKgM/maxresdefault.jpg", description: "بن ستيلر وروبرت داوني جونيور في فيلم داخل فيلم", videoId: "T-6YeaYpKgM" },
    { title: "Neighbors", year: 2014, poster: "https://img.youtube.com/vi/kRKKyX2w69I/maxresdefault.jpg", description: "سيث روجن ضد جمعية طلاب مجنونة", videoId: "kRKKyX2w69I" },
    { title: "Horrible Bosses", year: 2011, poster: "https://img.youtube.com/vi/GjJqNq5RU5Y/maxresdefault.jpg", description: "3 موظفين عايزين يتخلصوا من رؤسائهم", videoId: "GjJqNq5RU5Y" },
    { title: "We're the Millers", year: 2013, poster: "https://img.youtube.com/vi/0Vsy5KzsieQ/maxresdefault.jpg", description: "جيسون سوديكيس وعائلة مزيفة في رحلة كوميدية", videoId: "0Vsy5KzsieQ" },
    { title: "This Is the End", year: 2013, poster: "https://img.youtube.com/vi/YMApeL8wv3k/maxresdefault.jpg", description: "نهاية العالم مع سيث روجن وأصحابه - كوميديا سوداء", videoId: "YMApeL8wv3k" },
    { title: "The Interview", year: 2014, poster: "https://img.youtube.com/vi/fp6fTh8k6BY/maxresdefault.jpg", description: "سيث روجن وجيمس فرانكو في مهمة مجنونة", videoId: "fp6fTh8k6BY" },
    { title: "Pineapple Express", year: 2008, poster: "https://img.youtube.com/vi/3KkhZws1u7c/maxresdefault.jpg", description: "سيث روجن وجيمس فرانكو في مغامرة مخدرات كوميدية", videoId: "3KkhZws1u7c" },
    { title: "Knocked Up", year: 2007, poster: "https://img.youtube.com/vi/1wpm5Uqgg6Y/maxresdefault.jpg", description: "حمل غير متوقع - كوميديا رومانسية مضحكة", videoId: "1wpm5Uqgg6Y" },
    // أضف المزيد لو لقيت روابط جديدة متاحة
];

function displayComedyMovies(movieList) {
    const container = document.getElementById('moviesContainer');
    container.innerHTML = '';

    if (movieList.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#ffeb3b; font-size:28px; font-weight:bold;">مش لاقي فيلم كوميدي بالاسم ده 😢 جرب حاجة تانية!</p>';
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

// لو عايز تستخدمه في موقع منفصل، هتحتاج HTML و CSS مشابه للي فات
// مثال: غير src في <script> لـ "comedyMovies.js" واستدعي displayComedyMovies(comedyMovies);
