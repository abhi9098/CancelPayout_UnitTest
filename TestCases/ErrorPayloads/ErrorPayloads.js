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
    }
}