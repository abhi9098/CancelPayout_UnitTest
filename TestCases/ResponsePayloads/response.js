module.exports={
    reponseCancelled:  {
           "submitDocumentResponse": {
                "submitDocumentReturn": {
                    "ack": "success",
                    "cancellationRequestResponse": {
                        "epUserID": 3472690167971,
                        "merchantUserIdentity": "0MRCHNT_4678566760302",
                        "timestamp": "2020-01-03T07:02:56.240+00:00",
                        "managedMerchantIdentity": 100,
                        "cancellationTransactionID": 281474984773594,
                        "status": "Cancelled",
                        "statusDescription": "Transaction has been successfully cancelled",
                        "refundedAmount": {
                            "currency": "INR",
                            "amount": 20.0
                        },
                        "payoutAmount": {
                            "currency": "INR",
                            "amount": 20.0
                        },
                        "payoutTransactionID": {
                            "epTransactionID": 281474984773593,
                            "merchantTransactionReference": "0MRCHNT_4678566760302"
                        },
                        "epBankID": 4237698,
                        "reason": "Automatic Cancellation",
                        "reasonID": 35
                    }
                }
            }
             
    },
    reponseNotCancellable: {
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
    reponsePending  : {},
    response_epTransactionID_NOTFOUND :{
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
        }
}