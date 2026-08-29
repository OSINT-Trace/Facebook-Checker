const data = JSON.stringify({
  input: "test@example.com"
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

// Primary (Recommended): OSINT Trace Direct API
xhr.open('POST', 'https://api.osinttrace.com/v1/check/facebook');
xhr.setRequestHeader('x-osint-key', 'YOUR_OSINT_KEY');
xhr.setRequestHeader('Content-Type', 'application/json');

// Alternative (API.Market):
// xhr.open('POST', 'https://prod.api.market/api/v1/osint-trace-1/facebook-checker/check/facebook');
// xhr.setRequestHeader('X-Api-Key', 'YOUR_API_KEY');

// Alternative (RapidAPI):
// xhr.open('POST', 'https://facebook-checker.p.rapidapi.com/check');
// xhr.setRequestHeader('x-rapidapi-key', 'YOUR_RAPIDAPI_KEY');
// xhr.setRequestHeader('x-rapidapi-host', 'facebook-checker.p.rapidapi.com');

xhr.send(data);