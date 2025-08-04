import requests
import json
from datetime import datetime

# Function to make a GET request
def get_data(url):
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise exception for 4XX/5XX responses
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error making request: {e}")
        return None

# Function to make a POST request
def post_data(url, data):
    try:
        headers = {'Content-Type': 'application/json'}
        response = requests.post(url, json=data, headers=headers)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error making request: {e}")
        return None

# Example GET request
api_url = "https://jsonplaceholder.typicode.com/posts/1"
print("Making GET request...")
result = get_data(api_url)
if result:
    print(f"Title: {result['title']}")
    print(f"Body: {result['body']}")

# Example POST request
new_post = {
    "title": "POST Example",
    "body": "This is a test post created at " + datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
    "userId": 1
}
print("\nMaking POST request...")
post_result = post_data("https://jsonplaceholder.typicode.com/posts", new_post)
if post_result:
    print(f"Created post with ID: {post_result['id']}")
    print(json.dumps(post_result, indent=2))
