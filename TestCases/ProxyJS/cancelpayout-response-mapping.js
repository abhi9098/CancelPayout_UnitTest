var request = JSON.parse(context.getVariable('originalRequest'));
 // print(JSON.stringify(request));
  var response = JSON.parse(context.getVariable('response.content'));
var newresponse= {};
if('originatorDetail' in request)
{
    newresponse["originatorDetail"] = {};
    if('acquiringBIN' in request.originatorDetail)
    newresponse["originatorDetail"]["acquiringBIN"] = request.originatorDetail.acquiringBIN;
    if('merchantId' in request.originatorDetail)
    newresponse["originatorDetail"]["merchantId"] = request.originatorDetail.merchantId;
 }
 
 if('transactionDetail' in request)
 {
    newresponse["transactionDetail"] = {};
    if('retrievalReferenceNumber' in request.transactionDetail)
    newresponse["transactionDetail"]["retrievalReferenceNumber"] = request.transactionDetail.retrievalReferenceNumber;
    if('systemTraceAuditNumber' in request.transactionDetail)
    newresponse["transactionDetail"]["systemTraceAuditNumber"] = request.transactionDetail.systemTraceAuditNumber;
    if('transmissionDateTime' in request.transactionDetail)
    newresponse["transactionDetail"]["transmissionDateTime"] = request.transactionDetail.transmissionDateTime;
    if('paymentTrackingId' in request.transactionDetail)
    newresponse["transactionDetail"]["paymentTrackingId"] = request.transactionDetail.paymentTrackingId;
}

if('cancellationRequestResponse' in response.submitDocumentResponse.submitDocumentReturn){
    if ('status' in response.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse)
    {    newresponse["transactionDetail"]["status"] = response.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.status;
    }
    if ('statusDescription' in response.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse)
    {
        if(response.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.status === "Cancelled")
        newresponse["transactionDetail"]["description"] = "Cancelled";
        else if(response.submitDocumentResponse.submitDocumentReturn.cancellationRequestResponse.status === "PendingCancellation")
        newresponse["transactionDetail"]["description"] = "Pending Cancellation";
    }
}

else if("errors" in response.submitDocumentResponse.submitDocumentReturn){
    newresponse["transactionDetail"]["status"] = "Validation Error"; 
if(response.submitDocumentResponse.submitDocumentReturn.errors.shortMsg.includes("transaction id or merchant transaction reference not found."))
    newresponse["transactionDetail"]["description"] = "Payout not found";
    else if(response.submitDocumentResponse.submitDocumentReturn.errors.shortMsg.includes("Transaction not in a cancellable state."))
     newresponse["transactionDetail"]["description"] = "Payout not cancellable";
// context.setVariable("triggerError", "true");
}
context.setVariable('response.content', JSON.stringify(newresponse));
context.setVariable("response.status.code", "200");