(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),l=a.n(o),i=a(1),s=a(2),c=a(4),u=a(3),p=(a(12),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"center"},r.a.createElement("button",{onClick:this.props.playButton},"Play"),r.a.createElement("button",{onClick:this.props.pauseButton},"Pause"),r.a.createElement("button",{onClick:this.props.slow},"Slow"),r.a.createElement("button",{onClick:this.props.fast},"Fast"),r.a.createElement("button",{onClick:this.props.clear},"Clear"),r.a.createElement("button",{onClick:this.props.random},"Randomize"))}}]),a}(r.a.Component)),h=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).activeBox=function(){e.props.activeBox(e.props.row,e.props.col)},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.boxClass,id:this.props.id,onClick:this.activeBox})}}]),a}(r.a.Component),f=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){for(var e=16*this.props.cols,t=[],a="",n=0;n<this.props.rows;n++)for(var o=0;o<this.props.cols;o++){var l=n+"_"+o;a=this.props.gridFull[n][o]?"box on":"box off",t.push(r.a.createElement(h,{boxClass:a,key:l,boxId:l,row:n,col:o,activeBox:this.props.activeBox}))}return r.a.createElement("div",{className:"grid",style:{width:e}},t)}}]),a}(r.a.Component),m=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"rules"},r.a.createElement("p",null,"The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine. "),r.a.createElement("p",null,"These rules, which compare the behavior of the automaton to real life, can be condensed into the following:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Any live cell with two or three live neighbours survives."),r.a.createElement("li",null,"Any dead cell with three live neighbours becomes a live cell."),r.a.createElement("li",null,"All other live cells die in the next generation. Similarly, all other dead cells stay dead.")))}}]),a}(r.a.Component);function d(e){return JSON.parse(JSON.stringify(e))}var v=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).activeBox=function(t,a){var n=d(e.state.gridFull);n[t][a]=!n[t][a],e.setState({gridFull:n})},e.random=function(){for(var t=d(e.state.gridFull),a=0;a<e.rows;a++)for(var n=0;n<e.cols;n++)1===Math.floor(4*Math.random())&&(t[a][n]=!0);e.setState({gridFull:t})},e.playButton=function(){clearInterval(e.intervalId),e.intervalId=setInterval(e.play,e.speed)},e.pauseButton=function(){clearInterval(e.intervalId)},e.slow=function(){e.speed=800,e.playButton()},e.fast=function(){e.speed=100,e.playButton()},e.clear=function(){var t=Array(e.rows).fill().map((function(){return Array(e.cols).fill(!1)}));e.setState({gridFull:t,generation:0})},e.play=function(){for(var t=e.state.gridFull,a=d(e.state.gridFull),n=0;n<e.rows;n++)for(var r=0;r<e.cols;r++){var o=0;n>0&&t[n-1][r]&&o++,n>0&&r>0&&t[n-1][r-1]&&o++,n>0&&r<e.cols-1&&t[n-1][r+1]&&o++,r<e.cols-1&&t[n][r+1]&&o++,r>0&&t[n][r-1]&&o++,n<e.rows-1&&t[n+1][r]&&o++,n<e.rows-1&&r>0&&t[n+1][r-1]&&o++,n<e.rows-1&&r<e.cols-1&&t[n+1][r+1]&&o++,t[n][r]&&(o<2||o>3)&&(a[n][r]=!1),t[n][r]||3!==o||(a[n][r]=!0)}e.setState({gridFull:a,generation:e.state.generation+1})},e.speed=100,e.rows=20,e.cols=40,e.state={generation:0,gridFull:Array(e.rows).fill().map((function(){return Array(e.cols).fill(!1)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.random(),this.playButton()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null," The Game of Life"),r.a.createElement(p,{playButton:this.playButton,pauseButton:this.pauseButton,slow:this.slow,fast:this.fast,clear:this.clear,random:this.random}),r.a.createElement(f,{gridFull:this.state.gridFull,rows:this.rows,cols:this.cols,activeBox:this.activeBox}),r.a.createElement("h2",null," Generations: ",this.state.generation),r.a.createElement("p",null,r.a.createElement(m,null)))}}]),a}(r.a.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.b16f5dc7.chunk.js.map