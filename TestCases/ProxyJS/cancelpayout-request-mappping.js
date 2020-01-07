var request=JSON.parse(context.getVariable('request.content'));
var latestrequest ={
   "parameters": {
       "@xmlns": {
           "ns20": "http://customer.endpoint.earthport.com/api/merchant/v2/services/cancellationRequest"
       },
       "ns20:cancellationRequest": {

   }
   }
};

var b = {
   "version": "2.0"
};
var reference_id = "";

latestrequest.parameters["ns20:cancellationRequest"]["#attrs"] = b;
// if ('originatorDetail' in request) {
//     if ('acquiringBIN' in request.originatorDetail) {
// reference_id = reference_id+request.originatorDetail.acquiringBIN;}
// if ('merchantId' in request.originatorDetail ){
// reference_id =reference_id+request.originatorDetail.merchantId}}
// if ('transactionDetail' in request){
//     if ('retrievalReferenceNumber' in request.transactionDetail) {
//         reference_id = reference_id+request.transactionDetail.retrievalReferenceNumber;
// }}
if('transactionDetail' in request){
if('paymentTrackingId' in request.transactionDetail){
latestrequest.parameters["ns20:cancellationRequest"]["ns20:epTransactionID"]=request.transactionDetail.paymentTrackingId;
}}

// if(reference_id!==null && reference_id!==''){
// latestrequest.parameters["ns20:cancellationRequest"]["ns20:merchantTransactionReference"]=reference_id;
// }
context.setVariable('originalRequest', JSON.stringify(request));
context.setVariable('request.content', JSON.stringify(latestrequest));