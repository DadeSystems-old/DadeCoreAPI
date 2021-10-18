#  Notifications API

Applications may register for notifications from DadePay.

Notfications are sent as POST requests to the url provided.

### Event Types:

  payment_commented
  payment_clarified
  posting_completed
  posting_undone
  payments_imported
  load_completed
  file_transfer_failed
  file_transfer_completed


## Post

### Authorization
  OAuth 2 token flow

### Headers

CorrelationId: a unique random string to track this request
ContentType: application/json

### Body

All Event contain the following fields:

billerId:  The ID of the biller in DadePay
billerGroup: The billers Group
eventName: One of the above Event Names
EventDate: yyyy-MM-dd'T'HH:mm:ss.SSSZ.

Additional Fields:

paymentId:  ID of the payments in Dadepay; used in:  payment_commented, payment_clarified.
reason:  Reason for the reveral; used for posting_undone
jobStatus: string; used in: load_completed, file_transfer_failed, file_transfer_completed, posting_completed


#### Example: file_transfer_failed

```
{
	"billerId": "745",
	"billerGroup": "Q84233",
	"eventName": "file_transfer_failed",
	"eventDate": "2019-05-14T13:03:45.221Z",
	"paymentId": "1236625",
	"reason": "Reason Text",
	“jobStatus”:”pass””
}
```
