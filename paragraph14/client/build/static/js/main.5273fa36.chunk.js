(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){e.exports=t(19)},17:function(e,n,t){},19:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(10),s=t.n(c),i=(t(17),t(1)),o=t.n(i),u=t(2),l=t(8),h=t(3),p=t(4),d=t(6),m=t(7);function f(e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(o.a.mark(function e(n){var t,a,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=(new TextEncoder).encode(n),e.next=3,crypto.subtle.digest("SHA-256",t);case 3:return a=e.sent,r=Array.from(new Uint8Array(a)),e.abrupt("return",r.map(function(e){return("00"+e.toString(16)).slice(-2)}).join(""));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function b(){var e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}var k,g=function(){function e(){Object(d.a)(this,e),this._chain=[],this._pendingTransactions=[],this._isMining=!1}return Object(m.a)(e,[{key:"initializeWith",value:function(e){this._chain=Object(p.a)(e)}},{key:"initializeWithGenesisBlock",value:function(){var e=Object(u.a)(o.a.mark(function e(){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.mineBlock({previousHash:"0",timestamp:Date.now(),transactions:[]});case 2:n=e.sent,this._chain.push(n);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"mineBlock",value:function(){var e=Object(u.a)(o.a.mark(function e(n){var t,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this._isMining=!0,t="",a=0;case 3:return e.next=5,this.calculateHash(Object(h.a)({},n,{nonce:++a}));case 5:t=e.sent;case 6:if(!t.startsWith("0000")){e.next=3;break}case 7:return this._isMining=!1,this._pendingTransactions=[],e.abrupt("return",Object(h.a)({},n,{hash:t,nonce:a}));case 10:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"mineBlockWith",value:function(){var e=Object(u.a)(o.a.mark(function e(n){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={previousHash:this.latestBlock.hash,timestamp:Date.now(),transactions:n},e.abrupt("return",this.mineBlock(t));case 2:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"addTransaction",value:function(e){this._pendingTransactions.push(e)}},{key:"addBlock",value:function(){var e=Object(u.a)(o.a.mark(function e(n){var t,a,r,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t='\u26a0\ufe0f Block "'.concat(n.hash.substr(0,8),'" is rejected'),!((a=this._chain.findIndex(function(e){return e.hash===n.previousHash}))<0)){e.next=4;break}throw new Error("".concat(t,' - there is no block in the chain with the specified previous hash "').concat(n.previousHash.substr(0,8),'".'));case 4:if(!(this._chain.slice(a+1).length>=1)){e.next=7;break}throw new Error("".concat(t," - the longer tail of the current node takes precedence over the new block."));case 7:return e.next=9,this.calculateHash(n);case 9:if(r=e.sent,c=this._chain[a].hash,r.startsWith("0000")&&n.previousHash===c&&n.hash===r){e.next=14;break}throw new Error("".concat(t," - hash verification has failed."));case 14:this._chain=[].concat(Object(p.a)(this._chain),[n]);case 15:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"calculateHash",value:function(){var e=Object(u.a)(o.a.mark(function e(n){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.previousHash+n.timestamp+JSON.stringify(n.transactions)+n.nonce,e.abrupt("return",f(t));case 2:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()},{key:"isMining",get:function(){return this._isMining}},{key:"chain",get:function(){return Object(p.a)(this._chain)}},{key:"chainIsEmpty",get:function(){return 0===this._chain.length}},{key:"latestBlock",get:function(){return this._chain[this._chain.length-1]}},{key:"pendingTransactions",get:function(){return Object(p.a)(this._pendingTransactions)}},{key:"hasPendingTransactions",get:function(){return this.pendingTransactions.length>0}},{key:"noPendingTransactions",get:function(){return 0===this.pendingTransactions.length}}]),e}();!function(e){e.GetLongestChainRequest="GET_LONGEST_CHAIN_REQUEST",e.GetLongestChainResponse="GET_LONGEST_CHAIN_RESPONSE",e.NewBlockRequest="NEW_BLOCK_REQUEST",e.NewBlockAnnouncement="NEW_BLOCK_ANNOUNCEMENT"}(k||(k={}));var w=function(){function e(){var n=this;Object(d.a)(this,e),this.websocket=void 0,this.messagesCallback=void 0,this.messagesAwaitingReply=new Map,this.onMessageReceived=function(e){var t=JSON.parse(e.data);n.messagesAwaitingReply.has(t.correlationId)?(n.messagesAwaitingReply.get(t.correlationId).resolve(t),n.messagesAwaitingReply.delete(t.correlationId)):n.messagesCallback(t)}}return Object(m.a)(e,[{key:"connect",value:function(e){var n=this;return this.messagesCallback=e,this.websocket=new Promise(function(e,t){var a=new WebSocket(n.url);a.addEventListener("open",function(){return e(a)}),a.addEventListener("error",function(e){return t(e)}),a.addEventListener("message",n.onMessageReceived)})}},{key:"disconnect",value:function(){this.websocket.then(function(e){return e.close()})}},{key:"send",value:function(){var e=Object(u.a)(o.a.mark(function e(n){var t,a=this,r=arguments;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>1&&void 0!==r[1]&&r[1],e.abrupt("return",new Promise(function(){var e=Object(u.a)(o.a.mark(function e(r,c){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t&&a.messagesAwaitingReply.set(n.correlationId,{resolve:r,reject:c}),a.websocket.then(function(e){return e.send(JSON.stringify(n))},function(){return a.messagesAwaitingReply.delete(n.correlationId)});case 2:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()},{key:"requestLongestChain",value:function(){var e=Object(u.a)(o.a.mark(function e(){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.send({type:k.GetLongestChainRequest,correlationId:b()},!0);case 2:return n=e.sent,e.abrupt("return",n.payload);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"requestNewBlock",value:function(e){this.send({type:k.NewBlockRequest,correlationId:b(),payload:e})}},{key:"announceNewBlock",value:function(e){this.send({type:k.NewBlockAnnouncement,correlationId:b(),payload:e})}},{key:"url",get:function(){var e="https:"===window.location.protocol?"wss":"ws";return"".concat(e,"://").concat("localhost:3002")}}]),e}(),y=function(e){var n=e.index,t=e.block,a=t.transactions.map(function(e){return"".concat(e.sender," \u2192 ").concat(e.recipient,": $").concat(e.amount)}).join("\n"),c=new Date(t.timestamp).toLocaleTimeString();return r.a.createElement("div",{className:"block"},r.a.createElement("div",{className:"block__header"},r.a.createElement("span",{className:"block__index"},"#",n),r.a.createElement("span",{className:"block__timestamp"},c)),r.a.createElement("div",{className:"block__hashes"},r.a.createElement("div",{className:"block__hash"},r.a.createElement("div",{className:"block__label"},"\u2190 PREV HASH"),r.a.createElement("div",{className:"block__hash-value"},t.previousHash)),r.a.createElement("div",{className:"block__hash"},r.a.createElement("div",{className:"block__label"},"THIS HASH"),r.a.createElement("div",{className:"block__hash-value"},t.hash))),r.a.createElement("div",null,r.a.createElement("div",{className:"block__label"},"TRANSACTIONS"),r.a.createElement("pre",{className:"block__transactions"},a||"No transactions")))};var E=function(e){var n=e.blocks;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Current blocks"),r.a.createElement("div",{className:"blocks"},r.a.createElement("div",{className:"blocks__ribbon"},n.map(function(e,n){return r.a.createElement(y,{key:e.hash,index:n,block:e})})),r.a.createElement("div",{className:"blocks__overlay"})))},_=function(e){var n=e.formattedTransactions,t=e.onGenerateBlock,a=e.disabled;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Pending transactions"),r.a.createElement("pre",{className:"pending-transactions__list"},n||"No pending transactions yet."),r.a.createElement("div",{className:"pending-transactions__form"},r.a.createElement("button",{disabled:a,onClick:function(){return t()},className:"ripple",type:"button"},"GENERATE BLOCK")),r.a.createElement("div",{className:"clear"}))},N=t(5),O={recipient:"",sender:"",amount:0},j=function(e){var n=e.onAddTransaction,t=e.disabled,c=Object(a.useState)(O),s=Object(l.a)(c,2),i=s[0],o=s[1],u=i.sender&&i.recipient&&i.amount>0;function p(e){var n=e.target;o(Object(h.a)({},i,Object(N.a)({},n.name,n.value)))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"New transaction"),r.a.createElement("form",{className:"add-transaction-form",onSubmit:function(e){e.preventDefault(),n(i),o(O)}},r.a.createElement("input",{type:"text",name:"sender",placeholder:"Sender",autoComplete:"off",disabled:t,value:i.sender,onChange:p}),r.a.createElement("span",{className:"hidden-xs"},"\u2192"),r.a.createElement("input",{type:"text",name:"recipient",placeholder:"Recipient",autoComplete:"off",disabled:t,value:i.recipient,onChange:p}),r.a.createElement("input",{type:"number",name:"amount",placeholder:"Amount",disabled:t,value:i.amount,onChange:p}),r.a.createElement("button",{type:"submit",disabled:!u||t,className:"ripple"},"ADD TRANSACTION")))},x=new w,T=new g;function B(e){return e.chainIsEmpty?"\u23f3 Initializing the blockchain...":e.isMining?"\u23f3 Mining a new block...":e.noPendingTransactions?"\ud83d\udce9 Add one or more transactions.":"\u2705 Ready to mine a new block (transactions: ".concat(e.pendingTransactions.length,").")}var C=function(){var e,n=Object(a.useState)(""),t=Object(l.a)(n,2),c=t[0],s=t[1],i=Object(a.useCallback)(function(e){x.send({type:k.GetLongestChainResponse,correlationId:e.correlationId,payload:T.chain})},[]),h=Object(a.useCallback)(function(){var e=Object(u.a)(o.a.mark(function e(n){var t,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.payload,a=T.mineBlockWith(t),s(B(T)),e.next=5,a;case 5:f(e.sent);case 7:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),[]),p=Object(a.useCallback)(function(){var e=Object(u.a)(o.a.mark(function e(n){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:f(n.payload,!1);case 2:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),[]),d=Object(a.useCallback)(function(e){switch(e.type){case k.GetLongestChainRequest:return i(e);case k.NewBlockRequest:return h(e);case k.NewBlockAnnouncement:return p(e);default:console.log('Received message of unknown type: "'.concat(e.type,'"'))}},[i,p,h]);function m(){return(m=Object(u.a)(o.a.mark(function e(){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return x.requestNewBlock(T.pendingTransactions),n=T.mineBlockWith(T.pendingTransactions),s(B(T)),e.next=5,n;case 5:f(e.sent);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(o.a.mark(function e(n){var t,a=arguments;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=!(a.length>1&&void 0!==a[1])||a[1],e.prev=1,e.next=4,T.addBlock(n);case 4:t&&x.announceNewBlock(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0.message);case 10:s(B(T));case 11:case"end":return e.stop()}},e,null,[[1,7]])}))).apply(this,arguments)}return Object(a.useEffect)(function(){function e(){return(e=Object(u.a)(o.a.mark(function e(){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.connect(d);case 2:return e.next=4,x.requestLongestChain();case 4:if(!((n=e.sent).length>0)){e.next=9;break}T.initializeWith(n),e.next=11;break;case 9:return e.next=11,T.initializeWithGenesisBlock();case 11:s(B(T));case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){return x.disconnect()}},[d]),Object(a.useEffect)(function(){s(B(T))},[]),r.a.createElement("main",null,r.a.createElement("h1",null,"Blockchain node"),r.a.createElement("aside",null,r.a.createElement("p",null,c)),r.a.createElement("section",null,r.a.createElement(j,{onAddTransaction:function(e){T.addTransaction(e),s(B(T))},disabled:T.isMining||T.chainIsEmpty})),r.a.createElement("section",null,r.a.createElement(_,{formattedTransactions:(e=T.pendingTransactions,e.map(function(e){return"".concat(e.sender," \u2192 ").concat(e.recipient,": $").concat(e.amount)}).join("\n")),onGenerateBlock:function(){return m.apply(this,arguments)},disabled:T.isMining||T.noPendingTransactions})),r.a.createElement("section",null,r.a.createElement(E,{blocks:T.chain})))};s.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.5273fa36.chunk.js.map