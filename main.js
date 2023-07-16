import axios from 'axios';

function fetchMoovie() {
	axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then((response) => {
			console.log(response);
		})
};

fetchMoovie();