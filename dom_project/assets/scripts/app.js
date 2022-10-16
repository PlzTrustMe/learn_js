// Выбираем див с модальным окном и кнопку
const addMovieModal = document.getElementById('add-modal'); 

const mainAddMovieBtn = document.querySelector('header button');
const cancelAddMovieBtn = document.querySelector('.modal__actions .btn--passive');
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;

const backdrop = document.getElementById('backdrop');

const userInputs = addMovieModal.querySelectorAll('input');

const entryTextSection = document.getElementById('entry-text');

const movies = []; 

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
}

const deleteMovieHandler = (movieId) => {
    let movieIndex = 0;

    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    };

    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class='movie-element__image'>
            <img src='${imageUrl}' alt='${title}'>
        </div>
        <div class='movie-element__info'>
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;

    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.appendChild(newMovieElement);
}

const clearMovieInput = () => {
    for (const userInput of userInputs) {
        userInput.value = ''
    }
};

const toggleBackDrop = () => {
    backdrop.classList.toggle('visible');

}

const toggleMovieModal = () => {
    // Добавляем к диву новый класс, для отображения формы
    addMovieModal.classList.toggle('visible');
    toggleBackDrop();

}

const cancelAddMovie = () => {
    toggleMovieModal();
    clearMovieInput();
}

const backdropClickHandler = () => {
    toggleBackDrop();

}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imgUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue.trim() === '' || 
        imgUrlValue.trim() === '' || 
        ratingValue.trim() === '' ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ) {
        alert('Please enter valid values (rating between 1 and 5).')
        return;
    } 

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imgUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);

    toggleMovieModal();
    clearMovieInput();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
};



mainAddMovieBtn.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieBtn.addEventListener('click', cancelAddMovie);
confirmAddMovieBtn.addEventListener('click', addMovieHandler);
