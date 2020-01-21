var expect = require("chai").expect;
const fs = require('fs');
const csv2Json=require('../Utils/Csv2Json');

const requestContent=require('./RequestsPayloads/request');
const responseContent=require('./ResponsePayloads/response');
const errorContent=require('./ErrorPayloads/ErrorPayloads');


const requestMapping='./ProxyJS/cancelpayout-request-mappping';
const responseMapping='./ProxyJS/cancelpayout-response-mapping';


var sinon = require('sinon');


var contextVars = {};

global.context = {
	getVariable: function(variable) {},
	setVariable: function(variable, value) {}
};

var contextGetVariableMethod, contextSetVariableMethod;

// This method will execute before every it() method in the test
// we are stubbing all Apigee objects and the methods we need here
beforeEach(function() {
	contextGetVariableMethod = sinon.stub(context, 'getVariable');
	contextSetVariableMethod = sinon.stub(context, 'setVariable').callsFake(
        function(a, b) {
            contextVars[a] = b;}
         );
});

// restore all stubbed methods back to their original implementation
afterEach(function() {
	contextGetVariableMethod.restore();
	contextSetVariableMethod.restore();
});



//#region  Request
 
//conversion csv to json 
const CancelRequest_CsvFile = fs.readFileSync('./CSVFiles/RequestCSV/CancelRequest_CSV.csv', 'utf8');
const CancelRequest_JsonData = JSON.parse(csv2Json.convert(CancelRequest_CsvFile));

// testing request is mapped or not 
describe("Request Maping Test Cases ", () => {

    CancelRequest_JsonData.forEach(async function(data,i){

          describe("Checking the Request CSV - Row No :-" + (1+i), () => {
            
                before(async function(){
                  //set the payload
                    requestContent.request_body.payload=data;

                });

                it("Checking ( paymentTrackingId ) field to ns20:epTransactionID" , (done) => {
                    contextGetVariableMethod.withArgs("request.content").returns(JSON.stringify(requestContent.request_body));
                    loadJS(requestMapping);
                    var latestRequest =JSON.parse(contextVars["request.content"]);
                    expect(latestRequest["parameters"]["ns20:cancellationRequest"]["ns20:epTransactionID"]).to.equal(requestContent.request_body.transactionDetail.paymentTrackingId);
                    done();
                  }).timeout(5000);
            
            
                  it("Checking ns20:epTransactionID is not null" , (done) => {
                    contextGetVariableMethod.withArgs("request.content").returns(JSON.stringify(requestContent.request_body));
                    loadJS(requestMapping);
                    var latestRequest =JSON.parse(contextVars["request.content"]);
                    expect(latestRequest["parameters"]["ns20:cancellationRequest"]["ns20:epTransactionID"]).to.not.equal('');
                    done();
              }).timeout(5000);
            
          });
    
    }); //end of cancelRequest_json foreach
 
 
});

//#endregion

//#region  Response - Cancelled

//conversion csv to json 
const CancelSuccessResponse_CsvFile = fs.readFileSync('./CSVFiles/ResponseCSV/Cancelled_Response_CSV.csv', 'utf8');
const CancelSuccessResponse_JsonData = JSON.parse(csv2Json.convert(CancelSuccessResponse_CsvFile));

describe("Response Maping of Status= Cancelled ( Test Cases ) - ", () => {

        CancelSuccessResponse_JsonData.forEach(async function(data,i){
        
              describe("Checking Cancelled_Response_CSV - Row No :- " + (1+i), () => { 
             
                before(async function(){
                  //set the request payload
                    requestContent.request_body.payload=CancelRequest_JsonData[i];
                  //set the response payload
                    responseContent.responseSuccessCancelled.payload=data;

                });     

                it("Checking originatorDetail.acquiringBIN field " , (done) => {
                  contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                  contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.responseSuccessCancelled));
                  loadJS(responseMapping);

                  var latestRequest =JSON.parse(contextVars["response.content"]);
                  expect(latestRequest["originatorDetail"]["acquiringBIN"]).to.equal(requestContent.request_body.originatorDetail.acquiringBIN);
                  done();
                  }).timeout(5000);


                it("Checking originatorDetail.merchantId field " , (done) => {
                  contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                  contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.responseSuccessCancelled));
                  loadJS(responseMapping);

                  var latestRequest =JSON.parse(contextVars["response.content"]);
                  expect(latestRequest["originatorDetail"]["merchantId"]).to.equal(requestContent.request_body.originatorDetail.merchantId);
                  done();
                  }).timeout(5000);

                it("Checking transactionDetail.retrievalReferenceNumber field " , (done) => {
                  contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                  contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.responseSuccessCancelled));
                  loadJS(responseMapping);

                  var latestRequest =JSON.parse(contextVars["response.content"]);
                  expect(latestRequest["transactionDetail"]["retrievalReferenceNumber"]).to.equal(requestContent.request_body.transactionDetail.retrievalReferenceNumber);
                  done();
                  }).timeout(5000);

                it("Checking transactionDetail.systemTraceAuditNumber field " , (done) => {
                  contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                  contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.responseSuccessCancelled));
                  loadJS(responseMapping);

                  var latestRequest =JSON.parse(contextVars["response.content"]);
                  expect(latestRequest["transactionDetail"]["systemTraceAuditNumber"]).to.equal(requestContent.request_body.transactionDetail.systemTraceAuditNumber);
                  done();
                  }).timeout(5000);
    

                it("Checking transactionDetail.transmissionDateTime field " , (done) => {
                  contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                  contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.responseSuccessCancelled));
                  loadJS(responseMapping);

                  var latestRequest =JSON.parse(contextVars["response.content"]);
                  expect(latestRequest["transactionDetail"]["transmissionDateTime"]).to.equal(requestContent.request_body.transactionDetail.transmissionDateTime);
                  done();
                  }).timeout(5000);

                it("Checking transactionDetail.paymentTrackingId field " , (done) => {
                  contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                  contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.responseSuccessCancelled));
                  loadJS(responseMapping);

                  var latestRequest =JSON.parse(contextVars["response.content"]);
                  expect(latestRequest["transactionDetail"]["paymentTrackingId"]).to.equal(requestContent.request_body.transactionDetail.paymentTrackingId);
                  done();
                  }).timeout(5000);


                it("Checking transactionDetail.status field " , (done) => {
                  contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                  contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.responseSuccessCancelled));
                  loadJS(responseMapping);

                  var latestRequest =JSON.parse(contextVars["response.content"]);
                  expect(latestRequest["transactionDetail"]["status"]).to.equal("Cancelled");
                  done();
                  }).timeout(5000);  

                

              });

        });//end of forEach
              

});

//#endregion

//#region  Response - PendingCancellation

//conversion csv to json 
const PendingCancellationResponse_CsvFile = fs.readFileSync('./CSVFiles/ResponseCSV/PendingCancellation_Response_CSV.csv', 'utf8');
const PendingCancellation_JsonData = JSON.parse(csv2Json.convert(PendingCancellationResponse_CsvFile));

describe("Response Maping of Status= PendingCancellation ( Test Cases ) - ", () => {

      PendingCancellation_JsonData.forEach(async function(data,i){
        
              describe("Checking PendingCancellation_Response_CSV - Row No :- " + (1+i), () => { 
             
                before(async function(){
                  //set the request payload
                    requestContent.request_body.payload=CancelRequest_JsonData[i];
                  //set the response payload
                    responseContent.responsePendingCancellation.payload=data;

                });     

                it("Checking originatorDetail.acquiringBIN field " , (done) => {
                  contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                  contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.responsePendingCancellation));
                  loadJS(responseMapping);

                  var latestRequest =JSON.parse(contextVars["response.content"]);
                  expect(latestRequest["originatorDetail"]["acquiringBIN"]).to.equal(requestContent.request_body.originatorDetail.acquiringBIN);
                  done();
                  }).timeout(5000);


                it("Checking originatorDetail.merchantId field " , (done) => {
                  contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                  contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.responsePendingCancellation));
                  loadJS(responseMapping);

                  var latestRequest =JSON.parse(contextVars["response.content"]);
                  expect(latestRequest["originatorDetail"]["merchantId"]).to.equal(requestContent.request_body.originatorDetail.merchantId);
                  done();
                  }).timeout(5000);

                it("Checking transactionDetail.retrievalReferenceNumber field " , (done) => {
                  contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                  contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.responsePendingCancellation));
                  loadJS(responseMapping);

                  var latestRequest =JSON.parse(contextVars["response.content"]);
                  expect(latestRequest["transactionDetail"]["retrievalReferenceNumber"]).to.equal(requestContent.request_body.transactionDetail.retrievalReferenceNumber);
                  done();
                  }).timeout(5000);

                it("Checking transactionDetail.systemTraceAuditNumber field " , (done) => {
                  contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                  contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.responsePendingCancellation));
                  loadJS(responseMapping);

                  var latestRequest =JSON.parse(contextVars["response.content"]);
                  expect(latestRequest["transactionDetail"]["systemTraceAuditNumber"]).to.equal(requestContent.request_body.transactionDetail.systemTraceAuditNumber);
                  done();
                  }).timeout(5000);
    

                it("Checking transactionDetail.transmissionDateTime field " , (done) => {
                  contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                  contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.responsePendingCancellation));
                  loadJS(responseMapping);

                  var latestRequest =JSON.parse(contextVars["response.content"]);
                  expect(latestRequest["transactionDetail"]["transmissionDateTime"]).to.equal(requestContent.request_body.transactionDetail.transmissionDateTime);
                  done();
                  }).timeout(5000);

                it("Checking transactionDetail.paymentTrackingId field " , (done) => {
                  contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                  contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.responsePendingCancellation));
                  loadJS(responseMapping);

                  var latestRequest =JSON.parse(contextVars["response.content"]);
                  expect(latestRequest["transactionDetail"]["paymentTrackingId"]).to.equal(requestContent.request_body.transactionDetail.paymentTrackingId);
                  done();
                  }).timeout(5000);


                it("Checking transactionDetail.status field " , (done) => {
                  contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                  contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.responsePendingCancellation));
                  loadJS(responseMapping);

                  var latestRequest =JSON.parse(contextVars["response.content"]);
                  expect(latestRequest["transactionDetail"]["status"]).to.equal("PendingCancellation");
                  done();
                  }).timeout(5000);  



              });

        });//end of forEach
              

});

//#endregion

//#region Error Response - Payout not cancellable 

describe("Response Maping of Status = Validation Error && Description = Payout not cancellable( Test Cases ) - ", () => {

     PendingCancellation_JsonData.forEach(async function(data,i){
        
            describe("Checking Response - Row No :- " + (1+i), () => { 
                  
                  before(async function(){                    
                    //set the request payload
                      requestContent.request_body.payload=CancelRequest_JsonData[i];                 
                  });   
                  
                  it("Checking originatorDetail.acquiringBIN field " , (done) => {
                    contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                    contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(errorContent.Error_NotCancellable));
                    loadJS(responseMapping);
  
                    var latestRequest =JSON.parse(contextVars["response.content"]);
                    expect(latestRequest["originatorDetail"]["acquiringBIN"]).to.equal(requestContent.request_body.originatorDetail.acquiringBIN);
                    done();
                    }).timeout(5000);
  
  
                  it("Checking originatorDetail.merchantId field " , (done) => {
                    contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                    contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(errorContent.Error_NotCancellable));
                    loadJS(responseMapping);
  
                    var latestRequest =JSON.parse(contextVars["response.content"]);
                    expect(latestRequest["originatorDetail"]["merchantId"]).to.equal(requestContent.request_body.originatorDetail.merchantId);
                    done();
                    }).timeout(5000);
  
                  it("Checking transactionDetail.retrievalReferenceNumber field " , (done) => {
                    contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                    contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(errorContent.Error_NotCancellable));
                    loadJS(responseMapping);
  
                    var latestRequest =JSON.parse(contextVars["response.content"]);
                    expect(latestRequest["transactionDetail"]["retrievalReferenceNumber"]).to.equal(requestContent.request_body.transactionDetail.retrievalReferenceNumber);
                    done();
                    }).timeout(5000);
  
                  it("Checking transactionDetail.systemTraceAuditNumber field " , (done) => {
                    contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                    contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(errorContent.Error_NotCancellable));
                    loadJS(responseMapping);
  
                    var latestRequest =JSON.parse(contextVars["response.content"]);
                    expect(latestRequest["transactionDetail"]["systemTraceAuditNumber"]).to.equal(requestContent.request_body.transactionDetail.systemTraceAuditNumber);
                    done();
                    }).timeout(5000);
      
  
                  it("Checking transactionDetail.transmissionDateTime field " , (done) => {
                    contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                    contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(errorContent.Error_NotCancellable));
                    loadJS(responseMapping);
  
                    var latestRequest =JSON.parse(contextVars["response.content"]);
                    expect(latestRequest["transactionDetail"]["transmissionDateTime"]).to.equal(requestContent.request_body.transactionDetail.transmissionDateTime);
                    done();
                    }).timeout(5000);
  
                  it("Checking transactionDetail.paymentTrackingId field " , (done) => {
                    contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                    contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(errorContent.Error_NotCancellable));
                    loadJS(responseMapping);
  
                    var latestRequest =JSON.parse(contextVars["response.content"]);
                    expect(latestRequest["transactionDetail"]["paymentTrackingId"]).to.equal(requestContent.request_body.transactionDetail.paymentTrackingId);
                    done();
                    }).timeout(5000);
  

                  it("Checking Status = Validation Error " , (done) => {
                    contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                    contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(errorContent.Error_NotCancellable));
                    loadJS(responseMapping);

                    var latestRequest =JSON.parse(contextVars["response.content"]);
                    expect(latestRequest["transactionDetail"]["status"]).to.equal("Validation Error");
                    done();
                    }).timeout(5000);

                  it("Checking description = Payout not cancellable " , (done) => {
                    contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                    contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(errorContent.Error_NotCancellable));
                    loadJS(responseMapping);

                    var latestRequest =JSON.parse(contextVars["response.content"]);
                    expect(latestRequest["transactionDetail"]["description"]).to.equal("Payout not cancellable");
                    done();
                    }).timeout(5000);


       
             });     

     });//end of forEach
              

});

//#endregion

//#region Error Response - Payout not found - ( transaction id or merchant transaction reference not found.)

describe("Response Maping of Status = Validation Error && Description = Payout not found i.e transaction id or merchant transaction reference not found.( Test Cases ) - ", () => {

  PendingCancellation_JsonData.forEach(async function(data,i){
     
         describe("Checking Response - Row No :- " + (1+i), () => { 
               
               before(async function(){                    
                 //set the request payload
                   requestContent.request_body.payload=CancelRequest_JsonData[i];                 
               });   
               
               it("Checking originatorDetail.acquiringBIN field " , (done) => {
                 contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                 contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(errorContent.Error_epTransactionID_NOTFOUND));
                 loadJS(responseMapping);

                 var latestRequest =JSON.parse(contextVars["response.content"]);
                 expect(latestRequest["originatorDetail"]["acquiringBIN"]).to.equal(requestContent.request_body.originatorDetail.acquiringBIN);
                 done();
                 }).timeout(5000);


               it("Checking originatorDetail.merchantId field " , (done) => {
                 contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                 contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(errorContent.Error_epTransactionID_NOTFOUND));
                 loadJS(responseMapping);

                 var latestRequest =JSON.parse(contextVars["response.content"]);
                 expect(latestRequest["originatorDetail"]["merchantId"]).to.equal(requestContent.request_body.originatorDetail.merchantId);
                 done();
                 }).timeout(5000);

               it("Checking transactionDetail.retrievalReferenceNumber field " , (done) => {
                 contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                 contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(errorContent.Error_epTransactionID_NOTFOUND));
                 loadJS(responseMapping);

                 var latestRequest =JSON.parse(contextVars["response.content"]);
                 expect(latestRequest["transactionDetail"]["retrievalReferenceNumber"]).to.equal(requestContent.request_body.transactionDetail.retrievalReferenceNumber);
                 done();
                 }).timeout(5000);

               it("Checking transactionDetail.systemTraceAuditNumber field " , (done) => {
                 contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                 contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(errorContent.Error_epTransactionID_NOTFOUND));
                 loadJS(responseMapping);

                 var latestRequest =JSON.parse(contextVars["response.content"]);
                 expect(latestRequest["transactionDetail"]["systemTraceAuditNumber"]).to.equal(requestContent.request_body.transactionDetail.systemTraceAuditNumber);
                 done();
                 }).timeout(5000);
   

               it("Checking transactionDetail.transmissionDateTime field " , (done) => {
                 contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                 contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(errorContent.Error_epTransactionID_NOTFOUND));
                 loadJS(responseMapping);

                 var latestRequest =JSON.parse(contextVars["response.content"]);
                 expect(latestRequest["transactionDetail"]["transmissionDateTime"]).to.equal(requestContent.request_body.transactionDetail.transmissionDateTime);
                 done();
                 }).timeout(5000);

               it("Checking transactionDetail.paymentTrackingId field " , (done) => {
                 contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                 contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(errorContent.Error_epTransactionID_NOTFOUND));
                 loadJS(responseMapping);

                 var latestRequest =JSON.parse(contextVars["response.content"]);
                 expect(latestRequest["transactionDetail"]["paymentTrackingId"]).to.equal(requestContent.request_body.transactionDetail.paymentTrackingId);
                 done();
                 }).timeout(5000);


               it("Checking Status = Validation Error " , (done) => {
                 contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                 contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(errorContent.Error_epTransactionID_NOTFOUND));
                 loadJS(responseMapping);

                 var latestRequest =JSON.parse(contextVars["response.content"]);
                 expect(latestRequest["transactionDetail"]["status"]).to.equal("Validation Error");
                 done();
                 }).timeout(5000);

               it("Checking description = Payout not found " , (done) => {
                 contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
                 contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(errorContent.Error_epTransactionID_NOTFOUND));
                 loadJS(responseMapping);

                 var latestRequest =JSON.parse(contextVars["response.content"]);
                 expect(latestRequest["transactionDetail"]["description"]).to.equal("Payout not found");
                 done();
                 }).timeout(5000);


    
          });     

  });//end of forEach
           

});

//#endregion



//#region function to remove the require file cache 

function loadJS(fileName) {
 	//ensure js can be included without error
	var errorThrown = false;
	try {
		requireUncached(fileName);
	} catch (e) {
		console.log(e.stack);
		errorThrown = true;
	}
	expect(errorThrown).to.equal(false);
}

// node.js caches modules that is imported using 'require'
// this utility function prevents caching between it() functions - don't forget that variables are global in our javascript file
function requireUncached(module) {
	delete require.cache[require.resolve(module)];
	return require(module);
}

//#endregion 