curl --request POST \
	# API.Market URL: https://prod.api.market/api/v1/osint-trace-1/facebook-checker/check/facebook
--url https://facebook-checker.p.rapidapi.com/check \
	# API.Market Header: X-Api-Key: YOUR_API_KEY
--header 'Content-Type: application/json' \
	--header 'x-rapidapi-host: facebook-checker.p.rapidapi.com' \
	--header 'x-rapidapi-key: Sign Up for Key' \
	--data '{"input":"test@example.com"}'