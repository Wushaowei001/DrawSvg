define(["order!underscore","node","nodeconnectorendmixin","constants"],function(a,b,c,d){var e=b.extend({initialize:function(a){this.constructor.__super__.initialize.apply(this,[a]),this.set({fill:d.endNodeFillColor,stroke:d.endNodeStrokeColor}),this.startConnectors.on("add",this.startConnectorAdded,this),this.get("board").dispatcher.on("connectorStarted",function(){this.endConnectors.length==0&&this.set("highlight",!0)},this),this.get("board").dispatcher.on("connectorEnded connectorCancelled",function(){this.set("highlight",!1)},this)},startConnectorAdded:function(a){a.set("flipflopactive",this.startConnectors.length==1)},activeStartConnector:function(){return this.startConnectors.find(function(a){return a.get("flipflopactive")})},stepActiveStartConnector:function(){var a=this.activeStartConnector(),b=this.startConnectors.indexOf(a);b++,b==this.startConnectors.length&&(b=0),a.set("flipflopactive",!1),this.startConnectors.at(b).set("flipflopactive",!0)},spritePassingOver:function(a){this.stepActiveStartConnector()}});return a.extend(e.prototype,c),e})