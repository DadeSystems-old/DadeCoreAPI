DadeCore API
============

DadeCore API allows RESTful access to account data inside DadeCore. All calls will return data in JSON format.

### Authentication

All requests to the API require authentication via simple access token which must be included in the HTTP request as a param named `access_token`.

### API Methods

#### GET /api/receivable_accounts
Retrieves accounts matching the provided parameters.

##### Parameters
- name
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
    "external_key": "7331406508",
    "address_line_1": "26315 Rohan Estates",
    "address_line_2": "Apt. 858",
    "city": "Queens",
    "state": "New York",
    "zip": "72618-0666",
    "full_address": "26315 Rohan Estates Apt. 858 Queens New York 72618-0666",
    "payer": { 
      "id": 96, 
      "name": "Dr. Dorothy Cummerata"
    }, 
    "biller": {
      "id": 2, 
      "name": "Green Property Management" },
    "group": {
      "id": 4, 
      "name": "Ice House Condos", 
      "external_key": "0005" 
    }
  }
]
```

#### GET /api/payers
Retrieves payers matching the provided parameters.

##### Parameters
- name
- account_number (optional)

##### Example response
```json
[
  { 
    "id": 123,
    "name": "John Smith",
    "receivable_accounts": [
      { 
        "id":12,
        "external_key": "481815583"
      }
    ]
  }
]
```

#### GET /api/billers
Retrieves billers matching the provided parameters.

##### Parameters
- name

##### Example response
```json
[
  { 
    "id": 12,
    "name": "Green Property Management",
    "external_key": "481815583"
  }
]
```