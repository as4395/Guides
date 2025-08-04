import axios from 'axios';

const getJoke = () => {
  axios.get('https://v2.jokeapi.dev/joke/Any?safe-mode')
    .then(response => {
      const joke = response.data;
      if (joke.type === 'single') {
        console.log(`Joke: ${joke.joke}`);
      } else {
        console.log(`Joke: ${joke.setup}\n${joke.delivery}`);
      }
    })
    .catch(error => {
      console.error('Error fetching joke:', error);
    });
};

getJoke();
