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
- biller_id (optional)

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

#### GET /api/bank_accounts
Retrieves banks accounts for the provided receivable account(s).

##### Parameters
- receivable_account_id (single id or JSON array of ids, ex: `[196, 197]`)

##### Example response
```json
[
  { 
    "receivable_account_id": 196,
    "bank_account": { 
      "id": 6,
      "name": "Demo Account",
      "routing_number": "444223469",
      "account_number": "1483050006"
    }
  }
]
```

#### GET /api/billers/7/splits/
Retrieves splits/payment data for the provided biller.

##### Parameters
api/billers/7/splits/?batches.batch_scope=
&batches.batch_type=
&payment_type=
&validation_type=manual
&batches.id=
&splits.payment_id=
&date_posted=02/22/2018 - 02/10/2018
&payers.name=
&receivable_accounts.external_key=
&receivable_accounts.account_type=
&receivable_accounts.external_code=
&checks.check_num=

##### Example response
```json
{
    "splits": [
        {
            "payment_id": 83,
            "amount": "174.78",
            "receivable_account": {
                "external_key": "67843",
                "external_code": "0",
                "account_type": "Default"
            },
            "post": {
                "date_posted": "2018-01-31T22:31:22.496Z"
            },
            "checks": [
                {
                    "id": 87,
                    "check_num": "70"
                }
            ],
            "batch": {
                "id": 9
            },
            "payer": {
                "id": 880,
                "name": "Miami Dade County",
                "alternate_name": null
            }
        }
    ],
    "meta": {
        "total": 1,
        "page_length": 1,
        "next_page": null,
        "previous_page": null
    }
}
```
