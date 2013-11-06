DadeCore API
============

DadeCore API allows RESTful access to account data inside DadeCore. All calls will return data in JSON format.

### Authentication

All requests to the API require authentication via simple access token which must be included in the HTTP request as a param named `access_token`.

### API Methods

#### GET /api/receivable_accounts
Retrieves accounts matching the provided address parameters.

##### Parameters
- address_line_1
- address_line_2 (optional)
- city
- state
- zip

##### Example response
```json
[
  { 
    "id": 223,
    "address_line_1": "26315 Rohan Estates",
    "address_line_2": "Apt. 858",
    "city": "Port Kayleighton",
    "state": "New York",
    "zip": "72618-0666",
    "full_address": "26315 Rohan Estates Apt. 858 Port Kayleighton New York 72618-0666"
  },
  { 
    "id": 523,
    "address_line_1": "74472 Kihn Creek",
    "address_line_2": "Apt. 800",
    "city": "Conradton",
    "state": "Mississippi",
    "zip": "33184",
    "full_address": "74472 Kihn Creek Apt. 800 Conradton Mississippi 33184"
  }
]
```
