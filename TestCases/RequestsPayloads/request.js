module.exports={
    request_body:  {
            "originatorDetail": {
              "acquiringBIN": 1,
              "merchantId": "MRCHNT_4678"
            },
            "transactionDetail": {
              "retrievalReferenceNumber": 566760014,
              "systemTraceAuditNumber": "AUDIT0099887765",
              "transmissionDateTime": "10-06-2019 00:00:00",
              "narrative": "STMTNRTV",
              "paymentTrackingId": ""
            },
            set payload(data){

              //originatorDetails
              data.originatorDetail_acquiringBIN !=""? this.originatorDetail.acquiringBIN=data.originatorDetail_acquiringBIN : "";
              data.originatorDetail_merchantId !=""? this.originatorDetail.merchantId=data.originatorDetail_merchantId : "";


              //transactionalDetails
              data.transactionDetail_retrievalReferenceNumber !=""? this.transactionDetail.retrievalReferenceNumber=data.transactionDetail_retrievalReferenceNumber : "";
              data.transactionDetail_systemTraceAuditNumber !=""? this.transactionDetail.systemTraceAuditNumber=data.transactionDetail_systemTraceAuditNumber : "";
              data.transactionDetail_transmissionDateTime !=""? this.transactionDetail.transmissionDateTime=data.transactionDetail_transmissionDateTime : "";
              data.transactionDetail_narrative !=""? this.transactionDetail.narrative=data.transactionDetail_narrative : "";
              data.transactionDetail_paymentTrackingId !=null? this.transactionDetail.paymentTrackingId=data.transactionDetail_paymentTrackingId : "";

            }        
    }
}