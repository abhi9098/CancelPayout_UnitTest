module.exports = {
    responseSuccessCancelled: {
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
        },
        set payload(data) {

            //cancellationRequestResponse
            data.cancellationRequestResponse_epUserID != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.epUserID = data.cancellationRequestResponse_epUserID : "";
            data.cancellationRequestResponse_merchantUserIdentity != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.merchantUserIdentity = data.cancellationRequestResponse_merchantUserIdentity : "";
            data.cancellationRequestResponse_timestamp != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.timestamp = data.cancellationRequestResponse_timestamp : "";
            data.cancellationRequestResponse_managedMerchantIdentity != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.managedMerchantIdentity = data.cancellationRequestResponse_managedMerchantIdentity : "";
            data.cancellationRequestResponse_cancellationTransactionID != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.cancellationTransactionID = data.cancellationRequestResponse_cancellationTransactionID : "";
            data.cancellationRequestResponse_status != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.status = data.cancellationRequestResponse_status : "";
            data.cancellationRequestResponse_statusDescription != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.statusDescription = data.cancellationRequestResponse_statusDescription : "";

            //CanellationRequestResponse - refundedAmount 
            data.cancellationRequestResponse_refundedAmount_currency != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.refundedAmount.currency = data.cancellationRequestResponse_refundedAmount_currency : "";
            data.cancellationRequestResponse_refundedAmount_amount != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.refundedAmount.amount = data.cancellationRequestResponse_refundedAmount_amount : "";


            //CanellationRequestResponse - payoutAmount 
            data.cancellationRequestResponse_payoutAmount_currency != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.payoutAmount.currency = data.cancellationRequestResponse_payoutAmount_currency : "";
            data.cancellationRequestResponse_payoutAmount_amount != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.payoutAmount.amount = data.cancellationRequestResponse_payoutAmount_amount : "";


            //CanellationRequestResponse - payoutTransactionID 
            data.cancellationRequestResponse_payoutTransactionID_epTransactionID != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.payoutTransactionID.epTransactionID = data.cancellationRequestResponse_payoutTransactionID_epTransactionID : "";
            data.cancellationRequestResponse_payoutTransactionID_merchantTransactionReference != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.payoutTransactionID.merchantTransactionReference = data.cancellationRequestResponse_payoutTransactionID_merchantTransactionReference : "";

            //other info
            data.cancellationRequestResponse_epBankID != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.epBankID = data.cancellationRequestResponse_epBankID : "";
            data.cancellationRequestResponse_reason != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.reason = data.cancellationRequestResponse_reason : "";
            data.cancellationRequestResponse_reasonID != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.reasonID = data.cancellationRequestResponse_reasonID : "";
        }

    },
    responsePendingCancellation: {
        "submitDocumentResponse": {
            "submitDocumentReturn": {
                "ack": "success",
                "cancellationRequestResponse": {
                    "epUserID": 3472690168330,
                    "merchantUserIdentity": 1579253359212,
                    "timestamp": "2020-01-17T09:28:35.295+00:00",
                    "managedMerchantIdentity": 100,
                    "status": "PendingCancellation",
                    "statusDescription": "Cancellation Request received for a transaction that cannot be cancelled immediately. \nA refund notification will be issued if and when this transaction is successfully cancelled",
                    "payoutTransactionID": {
                        "epTransactionID": 281474984777890,
                        "merchantTransactionReference": 1579253359212
                    }
                }
            }
        },
        set payload(data){
             //cancellationRequestResponse
             data.cancellationRequestResponse_epUserID != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.epUserID = data.cancellationRequestResponse_epUserID : "";
             data.cancellationRequestResponse_merchantUserIdentity != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.merchantUserIdentity = data.cancellationRequestResponse_merchantUserIdentity : "";
             data.cancellationRequestResponse_timestamp != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.timestamp = data.cancellationRequestResponse_timestamp : "";
             data.cancellationRequestResponse_managedMerchantIdentity != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.managedMerchantIdentity = data.cancellationRequestResponse_managedMerchantIdentity : "";
             data.cancellationRequestResponse_status != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.status = data.cancellationRequestResponse_status : "";
             data.cancellationRequestResponse_statusDescription != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.statusDescription = data.cancellationRequestResponse_statusDescription : "";
 
            //CanellationRequestResponse - payoutTransactionID 
             data.cancellationRequestResponse_payoutTransactionID_epTransactionID != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.payoutTransactionID.epTransactionID = data.cancellationRequestResponse_payoutTransactionID_epTransactionID : "";
             data.cancellationRequestResponse_payoutTransactionID_merchantTransactionReference != "" ? this.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.payoutTransactionID.merchantTransactionReference = data.cancellationRequestResponse_payoutTransactionID_merchantTransactionReference : "";
 
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
    response_epTransactionID_NOTFOUND: {
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