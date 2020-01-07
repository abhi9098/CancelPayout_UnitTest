var expect = require("chai").expect;
const requestContent=require('./RequestsPayloads/request');
const responseContent=require('./ResponsePayloads/response');

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


//#region  Mocha Tests here:


// testing request is mapped or not 
describe("Request Maping Test Cases ", () => {

  describe("Checking the request - paymentTrackingId Value", () => {
    
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
        expect(latestRequest["parameters"]["ns20:cancellationRequest"]["ns20:epTransactionID"]).to.not.equal(null);
        done();
      }).timeout(5000);
     
  });

});



// testing response is mapped or not 

describe("Response Maping Test Cases ", () => {

  describe("sending the cancel transaction request first time", () => {      

          it("Checking ( paymentTrackingId ) field with response epTransaction" , (done) => {
            contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
            contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.reponseCancelled));
            loadJS(responseMapping);

            var latestRequest =JSON.parse(contextVars["response.content"]);
            expect(latestRequest["transactionDetail"]["paymentTrackingId"]).to.equal(requestContent.request_body.transactionDetail.paymentTrackingId);
            done();
            }).timeout(5000);


          it("Checking paymentTrackingId is not null" , (done) => {
            contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
            contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.reponseCancelled));
            loadJS(responseMapping);

            var latestRequest =JSON.parse(contextVars["response.content"]);
            expect(latestRequest["transactionDetail"]["paymentTrackingId"]).to.not.equal(null);
            done();
          }).timeout(5000);
      
          it("Checking Status" , (done) => {
            contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
            contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.reponseCancelled));
            loadJS(responseMapping);

            var latestRequest =JSON.parse(contextVars["response.content"]);
            expect(latestRequest["transactionDetail"]["status"]).to.equal("Cancelled");
            done();
          }).timeout(5000);
  });


  describe("sending the cancel transaction request second time with same paymentTrackingId", () => {      

    it("Checking ( paymentTrackingId ) field with response epTransaction" , (done) => {
      contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
      contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.reponseNotCancellable));
      loadJS(responseMapping);

      var latestRequest =JSON.parse(contextVars["response.content"]);
      expect(latestRequest["transactionDetail"]["paymentTrackingId"]).to.equal(requestContent.request_body.transactionDetail.paymentTrackingId);
      done();
      }).timeout(5000);


    it("Checking paymentTrackingId is not null" , (done) => {
      contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
      contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.reponseNotCancellable));
      loadJS(responseMapping);

      var latestRequest =JSON.parse(contextVars["response.content"]);
      expect(latestRequest["transactionDetail"]["paymentTrackingId"]).to.not.equal(null);
      done();
    }).timeout(5000);

    it("Checking Status" , (done) => {
      contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
      contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.reponseNotCancellable));
      loadJS(responseMapping);

      var latestRequest =JSON.parse(contextVars["response.content"]);
      expect(latestRequest["transactionDetail"]["status"]).to.equal("Validation Error");
      done();
    }).timeout(5000);
  });

  describe("sending the invalid paymentTrackingId", () => {      

    it("Checking ( paymentTrackingId ) field with response epTransaction" , (done) => {
      contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
      contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.response_epTransactionID_NOTFOUND));
      loadJS(responseMapping);

      var latestRequest =JSON.parse(contextVars["response.content"]);
      expect(latestRequest["transactionDetail"]["paymentTrackingId"]).to.equal(requestContent.request_body.transactionDetail.paymentTrackingId);
      done();
      }).timeout(5000);


    it("Checking paymentTrackingId is not null" , (done) => {
      contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
      contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.response_epTransactionID_NOTFOUND));
      loadJS(responseMapping);

      var latestRequest =JSON.parse(contextVars["response.content"]);
      expect(latestRequest["transactionDetail"]["paymentTrackingId"]).to.not.equal(null);
      done();
    }).timeout(5000);

    it("Checking Status" , (done) => {
      contextGetVariableMethod.withArgs("originalRequest").returns(JSON.stringify(requestContent.request_body));
      contextGetVariableMethod.withArgs("response.content").returns(JSON.stringify(responseContent.response_epTransactionID_NOTFOUND));
      loadJS(responseMapping);

      var latestRequest =JSON.parse(contextVars["response.content"]);
      expect(latestRequest["transactionDetail"]["status"]).to.equal("Validation Error");
      done();
    }).timeout(5000);
  });

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