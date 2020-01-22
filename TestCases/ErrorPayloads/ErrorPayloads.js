module.exports ={
    Error_NotCancellable: {
        "submitDocumentResponse": {
            "submitDocumentReturn": {
                "ack": "failure",
                "errors": {
                    "timeOfFailure": "2020-01-03T07:04:12.761+00:00",
                    "failureType": "validation",
                    "shortMsg": "Transaction not in a cancellable state.",
                    "longMsg": "Transaction not in a cancellable state",
                    "code": 11031,
                    "uniqueErrorID": "1U7WSD67GI5YZ",
                    "failures": {
                        "failure": {
                            "key": "Undefined",
                            "code": 11031,
                            "value": "Transaction not in a cancellable state."
                        }
                    }
                }
            }
        }
    },
    Error_epTransactionID_NOTFOUND: {
        "submitDocumentResponse": {
            "submitDocumentReturn": {
                "ack": "failure",
                "errors": {
                    "timeOfFailure": "2020-01-03T07:06:17.478+00:00",
                    "failureType": "validation",
                    "shortMsg": "Payout instruction with specified transaction id or merchant transaction reference not found.",
                    "longMsg": "Payout instruction with epTransactionID '2814749847' and/or merchantReference '' cannot be found",
                    "code": 11029,
                    "uniqueErrorID": "13KPFWLLDFBP4",
                    "failures": {
                        "failure": {
                            "key": "Undefined",
                            "code": 11029,
                            "value": "Payout instruction with specified transaction id or merchant transaction reference not found."
                        }
                    }
                }
            }
        }
    },
    Error_Supplied_VAN_does_not_belong_to_the_calling_merchant: {
        "submitDocumentResponse": {
            "submitDocumentReturn": {
                "ack": "failure",
                "errors": {
                    "timeOfFailure": "2020-01-15T14:32:01.631+00:00",
                    "failureType": "validation",
                    "shortMsg": "Supplied VAN does not belong to the calling merchant",
                    "longMsg": "Supplied VAN=3449590247870 does not belong to the merchantID=727",
                    "code": 12143,
                    "uniqueErrorID": "1OJNV7A5XXO26",
                    "failures": {
                        "failure": {
                            "key": "Undefined",
                            "code": 12143,
                            "value": "Supplied VAN does not belong to the calling merchant"
                        }
                    }
                }
            }
        }
    },
    Error_Schema_validation_failure_during_JAXB_parsing: { 
        "submitDocumentResponse":{ 
           "submitDocumentReturn":{ 
              "ack":"failure",
              "errors":{ 
                 "timeOfFailure":"2020-01-22T06:07:56.861+00:00",
                 "failureType":"validation",
                 "shortMsg":"Schema validation failure during JAXB parsing",
                 "longMsg":"Please check the supplied SOAP request against the published schema definition for this service to determine the cause of the validation failure",
                 "code":10002,
                 "uniqueErrorID":"LM0ZJPU0IJQD",
                 "failures":{ 
                    "failure":{ 
                       "key":"epTransactionID",
                       "code":10002,
                       "value":"\"2814749E84772722\" does not satisfy the \"long\" type"
                    }
                 }
              }
           }
        }
     },
     
    Error_Cancellation_Request_received_for_a_transaction_that_is_already_pending_to_be_cancelled: { 
        "submitDocumentResponse":{ 
           "submitDocumentReturn":{ 
              "ack":"failure",
              "errors":{ 
                 "timeOfFailure":"2020-01-21T06:32:07.910+00:00",
                 "failureType":"validation",
                 "shortMsg":"Cancellation Request received for a transaction that is already pending to be cancelled. \nA refund notification will be issued if and when this transaction is successfully cancelled.",
                 "longMsg":"Transaction is pending cancellation already",
                 "code":11033,
                 "uniqueErrorID":"17K4XS6ZZ8VBN",
                 "failures":{ 
                    "failure":{ 
                       "key":"Undefined",
                       "code":11033,
                       "value":"Cancellation Request received for a transaction that is already pending to be cancelled. \nA refund notification will be issued if and when this transaction is successfully cancelled."
                    }
                 }
              }
           }
        }
     }
}