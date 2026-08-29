import requests

# Primary (Recommended): OSINT Trace Direct API
url = "https://api.osinttrace.com/v1/check/facebook"
headers = {
    "x-osint-key": "YOUR_OSINT_KEY",
    "Content-Type": "application/json"
}

# Alternative (API.Market):
# url = "https://prod.api.market/api/v1/osint-trace-1/facebook-checker/check/facebook"
# headers = {"X-Api-Key": "YOUR_API_KEY", "Content-Type": "application/json"}

# Alternative (RapidAPI):
# url = "https://facebook-checker.p.rapidapi.com/check"
# headers = {"x-rapidapi-key": "YOUR_RAPIDAPI_KEY", "x-rapidapi-host": "facebook-checker.p.rapidapi.com", "Content-Type": "application/json"}

payload = {"input": "test@example.com"}

response = requests.post(url, json=payload, headers=headers)
print(response.json())