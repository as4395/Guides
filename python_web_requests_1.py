import requests

def get_joke():
    try:
        response = requests.get('https://v2.jokeapi.dev/joke/Any?safe-mode')
        response.raise_for_status()  # Raise exception for 4XX/5XX responses
        joke = response.json()
        if joke['type'] == 'single':
            print(f"Joke: {joke['joke']}")
        else:
            print(f"Joke: {joke['setup']}\n{joke['delivery']}")
    except requests.exceptions.RequestException as error:
        print(f"Error fetching joke: {error}")

get_joke()
