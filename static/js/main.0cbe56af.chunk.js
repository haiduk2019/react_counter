(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(2),r=n.n(o),u=(n(12),n(3)),s=n(4),i=n(6),l=n(5),m=(n(13),function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={count:0},t.addOne=function(){t.setState((function(t){return{count:t.count+1}}))},t.add100=function(){t.setState((function(t){return{count:t.count+100}}))},t.resetCount=function(){t.setState({count:0})},t.increase=function(){t.addOne(),t.state.count%5===0&&t.add100()},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.count;return c.a.createElement("section",{className:"counter"},c.a.createElement("h1",{className:"counter__title"},"Count:",c.a.createElement("span",{className:"counter__number"},t)),c.a.createElement("div",{className:"counter__wrapper"},c.a.createElement("button",{onClick:this.addOne,className:"counter__btn",type:"button"},"Add one"),c.a.createElement("button",{onClick:this.add100,className:"counter__btn",type:"button"},"Add 100"),c.a.createElement("button",{onClick:this.increase,className:"counter__btn",type:"button"},"Increase"),c.a.createElement("button",{onClick:this.resetCount,className:"counter__btn",type:"button"},"Reset")))}}]),n}(c.a.Component)),d=function(){return c.a.createElement(m,null)};r.a.render(c.a.createElement(d,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.0cbe56af.chunk.js.map