(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){e.exports=t.p+"static/media/grappled.e51a0206.png"},101:function(e,a,t){e.exports=t.p+"static/media/guard.7008f8f6.png"},102:function(e,a,t){e.exports=t.p+"static/media/impaled.fd1342bd.png"},103:function(e,a,t){e.exports=t.p+"static/media/incapacitated.5a2bafbe.png"},104:function(e,a,t){e.exports=t.p+"static/media/slash.4542507d.png"},105:function(e,a,t){e.exports=t.p+"static/media/staggered.20c1d0aa.png"},106:function(e,a,t){e.exports=t.p+"static/media/stunned.ac3a0fc5.png"},107:function(e,a,t){e.exports=t.p+"static/media/wounded.f873b18a.png"},143:function(e,a,t){"use strict";t.r(a);var n,r,l=t(20),i=t(7),d=t(23),o=t(9),c=t(10),s=t(12),u=t(11),m=t(13),p=t(8),b=t(0),h=t.n(b),g=t(35),f=t.n(g),E=(t(84),t(14)),w=t(6),v=t(148),D=t(147),k=t(149),x=t(91),O=(t(27),w.a.div(n||(n=Object(p.a)(["\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  padding: 8px;\n  margin-bottom: 8px;\n  transition: background-color 0.2s ease;\n  background-color: ",";\n"])),function(e){return e.isDragDisabled?"lightgrey":e.isDragging?"lightgreen":"white"}),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).temp={id:-1,name:"temp",texture:"temp",reactions:[],resources:{blade:0,flourish:0,lunge:0,brawn:0},level:1},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return h.a.createElement(v.a,null,h.a.createElement(v.a.Toggle,{variant:"success",id:"dropdown-basic",style:{width:"100%"}},"Add Card"),h.a.createElement(v.a.Menu,null,h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"nameInput"},"Name")),h.a.createElement(k.a,{placeholder:"name","aria-label":"name","aria-describedby":"basic-addon1",onChange:function(a){e.temp.name=a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"bladeInput"},"Blade")),h.a.createElement(k.a,{placeholder:0,"aria-label":"blade","aria-describedby":"basic-addon1",onChange:function(a){e.temp.resources.blade=+a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"flourishInput"},"Flourish")),h.a.createElement(k.a,{placeholder:0,"aria-label":"flourish","aria-describedby":"basic-addon1",onChange:function(a){e.temp.resources.flourish=+a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"lungeInput"},"Lunge")),h.a.createElement(k.a,{placeholder:0,"aria-label":"lunge","aria-describedby":"basic-addon1",onChange:function(a){e.temp.resources.lunge=+a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"brawnInput"},"Brawn")),h.a.createElement(k.a,{placeholder:0,"aria-label":"brawn","aria-describedby":"basic-addon1",onChange:function(a){e.temp.resources.brawn=+a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"brawnInput"},"Texture")),h.a.createElement(k.a,{placeholder:"temp","aria-label":"texture","aria-describedby":"basic-addon1",onChange:function(a){e.temp.texture=a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"brawnInput"},"Level")),h.a.createElement(k.a,{placeholder:this.temp.level,"aria-label":"texture","aria-describedby":"basic-addon1",onChange:function(a){e.temp.level=+a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"reactions"},"Reactions")),h.a.createElement(k.a,{placeholder:[],"aria-label":"texture","aria-describedby":"basic-addon1",onChange:function(a){for(var t=a.target.value,n=[];t.indexOf(",")>-1;)n.push(+t.substring(0,t.indexOf(","))),t=t.substring(t.indexOf(",")+1);t.length>0&&n.push(+t),e.temp.responses=n}})),h.a.createElement(x.a,{onClick:function(){return e.props.addCard(e.temp)}},"Add")))}}]),a}(h.a.Component)),S=(t(27),w.a.div(r||(r=Object(p.a)(["\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  padding: 8px;\n  margin-bottom: 8px;\n  transition: background-color 0.2s ease;\n  background-color: ",";\n"])),function(e){return e.isDragDisabled?"lightgrey":e.isDragging?"lightgreen":"white"}),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).temp={id:-1,name:"temp",description:"temp",cost:{blade:0,flourish:0,lunge:0,brawn:0},reward:0,addToDeck:[1],delete:[],win:!1,lose:!1},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return h.a.createElement(v.a,null,h.a.createElement(v.a.Toggle,{variant:"success",id:"dropdown-basic",style:{width:"100%",backgroundColor:"brown",borderColor:"brown"}},"Add Reaction"),h.a.createElement(v.a.Menu,null,h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"nameInput"},"Name")),h.a.createElement(k.a,{placeholder:"name","aria-label":"name","aria-describedby":"basic-addon1",onChange:function(a){e.temp.name=a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"nameInput"},"Description")),h.a.createElement(k.a,{placeholder:"desc","aria-label":"name","aria-describedby":"basic-addon1",onChange:function(a){e.temp.description=a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"bladeInput"},"Blade")),h.a.createElement(k.a,{placeholder:0,"aria-label":"blade","aria-describedby":"basic-addon1",onChange:function(a){e.temp.cost.blade=+a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"flourishInput"},"Flourish")),h.a.createElement(k.a,{placeholder:0,"aria-label":"flourish","aria-describedby":"basic-addon1",onChange:function(a){e.temp.cost.flourish=+a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"lungeInput"},"Lunge")),h.a.createElement(k.a,{placeholder:0,"aria-label":"lunge","aria-describedby":"basic-addon1",onChange:function(a){e.temp.cost.lunge=+a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"brawnInput"},"Brawn")),h.a.createElement(k.a,{placeholder:0,"aria-label":"brawn","aria-describedby":"basic-addon1",onChange:function(a){e.temp.cost.brawn=+a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"reactions"},"Add to Deck")),h.a.createElement(k.a,{placeholder:[],"aria-label":"texture","aria-describedby":"basic-addon1",onChange:function(a){for(var t=a.target.value,n=[];t.indexOf(",")>-1;)n.push(+t.substring(0,t.indexOf(","))),t=t.substring(t.indexOf(",")+1);t.length>0&&n.push(+t),e.temp.addToDeck=n}})),h.a.createElement(x.a,{onClick:function(){return e.props.addReaction(e.temp)}},"Add")))}}]),a}(h.a.Component)),C=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).temp={enemyName:"Wolven Thug",enemyTexture:"wolvenThug.jpg",deck:[1,2],background:"background.jpg"},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return h.a.createElement("div",null,h.a.createElement("label",null,"Create Fight"),h.a.createElement(v.a,null,h.a.createElement(v.a.Toggle,{variant:"success",id:"dropdown-basic",style:{width:"100%",backgroundColor:"purple",borderColor:"purple"}},"Edit Enemy Fight"),h.a.createElement(v.a.Menu,null,h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"nameInput"},"Enemy Name")),h.a.createElement(k.a,{placeholder:"name","aria-label":"name","aria-describedby":"basic-addon1",onChange:function(a){e.temp.enemyName=a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"nameInput"},"Enemy Texture")),h.a.createElement(k.a,{placeholder:"texture","aria-label":"name","aria-describedby":"basic-addon1",onChange:function(a){e.temp.enemyTexture=a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"nameInput"},"Background")),h.a.createElement(k.a,{placeholder:"texture","aria-label":"name","aria-describedby":"basic-addon1",onChange:function(a){e.temp.background=a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"reactions"},"Deck")),h.a.createElement(k.a,{placeholder:this.temp.deck,"aria-label":"texture","aria-describedby":"basic-addon1",onChange:function(a){for(var t=a.target.value,n=[];t.indexOf(",")>-1;)n.push(+t.substring(0,t.indexOf(","))),t=t.substring(t.indexOf(",")+1);t.length>0&&n.push(+t),e.temp.deck=n}})),h.a.createElement(x.a,{onClick:function(){return e.props.downloadFight(e.temp)}},"Download Fight"))))}}]),a}(h.a.Component),y={Slash:{id:0,name:"Slash",texture:"slash",reactions:[0,1,2,3],resources:{blade:0,flourish:0,lunge:0,brawn:1},level:1},"Bide Time":{id:1,name:"Bide Time",texture:"bidetime",reactions:[4,5,6,7],resources:{blade:0,flourish:0,lunge:1,brawn:0},level:1},Guard:{id:2,name:"Guard",texture:"guard",reactions:[8,9,10,11],resources:{blade:1,flourish:0,lunge:0,brawn:0},level:1},Grab:{id:3,name:"Grab",texture:"grab",reactions:[12,13,14],resources:{blade:0,flourish:1,lunge:0,brawn:0},level:1},Grappled:{id:4,name:"Grappled",texture:"grappled",reactions:[15,16,17,18],resources:{blade:0,flourish:0,lunge:3,brawn:0},level:2},Exposed:{id:5,name:"Exposed",texture:"exposed",reactions:[19,20,21,22],resources:{blade:0,flourish:0,lunge:0,brawn:3},level:2},Staggered:{id:6,name:"Staggered",texture:"staggered",reactions:[23,24,25,26],resources:{blade:0,flourish:3,lunge:0,brawn:0},level:2},Stunned:{id:7,name:"Stunned",texture:"stunned",reactions:[27,28,29,30],resources:{blade:9,flourish:0,lunge:0,brawn:0},level:3},Wounded:{id:8,name:"Wounded",texture:"wounded",reactions:[31,32,33],resources:{blade:0,flourish:9,lunge:0,brawn:0},level:3},Blinded:{id:9,name:"Blinded",texture:"blinded",reactions:[34,35,36,37],resources:{blade:0,flourish:0,lunge:0,brawn:9},level:3},Crushed:{id:10,name:"Crushed",texture:"crushed",reactions:[38,39,40],resources:{blade:15,flourish:0,lunge:0,brawn:0},level:4},Impaled:{id:11,name:"Impaled",texture:"impaled",reactions:[41,42,43],resources:{blade:0,flourish:0,lunge:0,brawn:15},level:4},Incapacitated:{id:12,name:"Incapacitated",texture:"incapacitated",reactions:[44,44,44],resources:{blade:0,flourish:0,lunge:0,brawn:0},level:5}},T={Block:{id:0,name:"Block",description:"Shuffle GRAB into the Deck",cost:{blade:0,flourish:0,lunge:0,brawn:1},reward:0,addToDeck:[3],delete:[],win:!1,lose:!1},"Side Step":{id:1,name:"Side Step",description:"Shuffle BIDE TIME into the Deck",cost:{blade:0,flourish:0,lunge:1,brawn:0},reward:0,addToDeck:[1],delete:[],win:!1,lose:!1},Parry:{id:2,name:"Parry",description:"Shuffle GUARD into the Deck",cost:{blade:0,flourish:1,lunge:0,brawn:0},reward:0,addToDeck:[2],delete:[],win:!1,lose:!1},"Roll Behind":{id:3,name:"Roll Behind",description:"Shuffle EXPOSED into the Deck",cost:{blade:0,flourish:0,lunge:2,brawn:0},reward:0,addToDeck:[5],delete:[],win:!1,lose:!1},Lunge:{id:4,name:"Lunge",description:"Shuffle GRAB into the Deck",cost:{blade:0,flourish:0,lunge:1,brawn:0},reward:0,addToDeck:[3],delete:[],win:!1,lose:!1},Guard:{id:5,name:"Guard",description:"Shuffle SLASH into the Deck",cost:{blade:0,flourish:0,lunge:0,brawn:1},reward:0,addToDeck:[0],delete:[],win:!1,lose:!1},Stab:{id:6,name:"Stab",description:"Shuffle GUARD into the Deck",cost:{blade:1,flourish:0,lunge:0,brawn:0},reward:0,addToDeck:[2],delete:[],win:!1,lose:!1},Feint:{id:7,name:"Feint",description:"Shuffle STAGGERED into the Deck",cost:{blade:0,flourish:1,lunge:1,brawn:0},reward:0,addToDeck:[6],delete:[],win:!1,lose:!1},Strike:{id:8,name:"Strike",description:"Shuffle GRAB into the Deck",cost:{blade:1,flourish:0,lunge:0,brawn:0},reward:0,addToDeck:[3],delete:[],win:!1,lose:!1},Probe:{id:9,name:"Probe",description:"Shuffle SLASH into the Deck",cost:{blade:0,flourish:1,lunge:0,brawn:0},reward:0,addToDeck:[0],delete:[],win:!1,lose:!1},"Jump Back":{id:10,name:"Jump Back",description:"Shuffle BIDE TIME into the Deck",cost:{blade:0,flourish:0,lunge:1,brawn:0},reward:0,addToDeck:[1],delete:[],win:!1,lose:!1},Grab:{id:11,name:"Grab",description:"Shuffle GRAPPLED into the Deck",cost:{blade:0,flourish:2,lunge:0,brawn:0},reward:0,addToDeck:[4],delete:[],win:!1,lose:!1},"Break Free":{id:12,name:"Break Free",description:"Shuffle BIDE TIME into the Deck",cost:{blade:0,flourish:0,lunge:0,brawn:1},reward:0,addToDeck:[1],delete:[],win:!1,lose:!1},Twist:{id:13,name:"Twist",description:"Shuffle GRAPPLED into the Deck",cost:{blade:0,flourish:2,lunge:0,brawn:0},reward:0,addToDeck:[4],delete:[],win:!1,lose:!1},Kick:{id:14,name:"Kick",description:"Shuffle STAGGERED into the Deck",cost:{blade:0,flourish:0,lunge:2,brawn:0},reward:0,addToDeck:[6],delete:[],win:!1,lose:!1},"Firm Grip":{id:15,name:"Firm Grip",description:"Shuffle GRAPPLED into the Deck",cost:{blade:0,flourish:2,lunge:0,brawn:0},reward:0,addToDeck:[4],delete:[],win:!1,lose:!1},Wrench:{id:16,name:"Wrench",description:"Shuffle STAGGERED into the Deck",cost:{blade:0,flourish:0,lunge:2,brawn:0},reward:0,addToDeck:[6],delete:[],win:!1,lose:!1},"Face Grab":{id:17,name:"Face Grab",description:"Shuffle BLINDED into the Deck",cost:{blade:0,flourish:3,lunge:0,brawn:1},reward:0,addToDeck:[9],delete:[],win:!1,lose:!1},Headbutt:{id:18,name:"Headbutt",description:"Shuffle STUNNED into the Deck",cost:{blade:0,flourish:0,lunge:2,brawn:2},reward:0,addToDeck:[7],delete:[],win:!1,lose:!1},Evade:{id:19,name:"Evade",description:"Shuffle EXPOSED into the Deck",cost:{blade:0,flourish:0,lunge:2,brawn:0},reward:0,addToDeck:[5],delete:[],win:!1,lose:!1},Whack:{id:20,name:"Whack",description:"Shuffle STUNNED into the Deck",cost:{blade:0,flourish:0,lunge:3,brawn:1},reward:0,addToDeck:[7],delete:[],win:!1,lose:!1},"Cut Above the Eyes":{id:21,name:"Cut Above the Eyes",description:"Shuffle BLINDED into the Deck",cost:{blade:1,flourish:3,lunge:0,brawn:0},reward:0,addToDeck:[9],delete:[],win:!1,lose:!1},Backstab:{id:22,name:"Backstab",description:"Shuffle WOUNDED into the Deck",cost:{blade:1,flourish:0,lunge:3,brawn:0},reward:0,addToDeck:[8],delete:[],win:!1,lose:!1},Juke:{id:23,name:"Juke",description:"Shuffle EXPOSED into the Deck",cost:{blade:0,flourish:1,lunge:1,brawn:0},reward:0,addToDeck:[5],delete:[],win:!1,lose:!1},Tackle:{id:24,name:"Tackle",description:"Shuffle GRAPPLED into the Deck",cost:{blade:0,flourish:0,lunge:2,brawn:0},reward:0,addToDeck:[4],delete:[],win:!1,lose:!1},"Blunt Strike":{id:25,name:"Blunt Strike",description:"Shuffle STUNNED into the Deck",cost:{blade:0,flourish:3,lunge:0,brawn:1},reward:0,addToDeck:[7],delete:[],win:!1,lose:!1},"Quick Slice":{id:26,name:"Quick Slice",description:"Shuffle WOUNDED into the Deck",cost:{blade:1,flourish:3,lunge:0,brawn:0},reward:0,addToDeck:[8],delete:[],win:!1,lose:!1},"Eye Stab":{id:27,name:"Eye Stab",description:"Shuffle BLINDED into the Deck",cost:{blade:1,flourish:3,lunge:0,brawn:0},reward:0,addToDeck:[9],delete:[],win:!1,lose:!1},"Shield Bash":{id:28,name:"Shield Bash",description:"Shuffle WOUNDED into the Deck",cost:{blade:0,flourish:0,lunge:0,brawn:4},reward:0,addToDeck:[8],delete:[],win:!1,lose:!1},"Run Through":{id:29,name:"Run Through",description:"Shuffle IMPALED into the Deck",cost:{blade:2,flourish:0,lunge:4,brawn:0},reward:0,addToDeck:[11],delete:[],win:!1,lose:!1},Suplex:{id:30,name:"Suplex",description:"Shuffle CRUSHED into the Deck",cost:{blade:0,flourish:0,lunge:4,brawn:2},reward:0,addToDeck:[10],delete:[],win:!1,lose:!1},Wound:{id:31,name:"Wound",description:"Shuffle WOUNDED into the Deck",cost:{blade:0,flourish:3,lunge:1,brawn:0},reward:0,addToDeck:[8],delete:[],win:!1,lose:!1},"Hammer Kick":{id:32,name:"Hammer Kick",description:"Shuffle CRUSHED into the Deck",cost:{blade:0,flourish:0,lunge:6,brawn:0},reward:0,addToDeck:[10],delete:[],win:!1,lose:!1},Pierce:{id:33,name:"Pierce",description:"Shuffle IMPALED into the Deck",cost:{blade:2,flourish:4,lunge:0,brawn:0},reward:0,addToDeck:[11],delete:[],win:!1,lose:!1},Discombobulate:{id:34,name:"Discombobulate",description:"Shuffle BLINDED into the Deck",cost:{blade:0,flourish:0,lunge:0,brawn:4},reward:0,addToDeck:[9],delete:[],win:!1,lose:!1},Mangle:{id:35,name:"Mangle",description:"Shuffle WOUNDED into the Deck",cost:{blade:2,flourish:0,lunge:0,brawn:2},reward:0,addToDeck:[8],delete:[],win:!1,lose:!1},Impale:{id:36,name:"Impale",description:"Shuffle IMPALED into the Deck",cost:{blade:6,flourish:0,lunge:0,brawn:0},reward:0,addToDeck:[11],delete:[],win:!1,lose:!1},"Ankle Slash":{id:37,name:"Ankle Slash",description:"Shuffle CRUSHED into the Deck",cost:{blade:6,flourish:0,lunge:0,brawn:0},reward:0,addToDeck:[10],delete:[],win:!1,lose:!1},Skewer:{id:38,name:"Skewer",description:"Shuffle IMPALED into the Deck",cost:{blade:2,flourish:2,lunge:2,brawn:0},reward:0,addToDeck:[11],delete:[],win:!1,lose:!1},"Boot Stomp":{id:39,name:"Boot Stomp",description:"Shuffle CRUSHED into the Deck",cost:{blade:0,flourish:0,lunge:6,brawn:0},reward:0,addToDeck:[10],delete:[],win:!1,lose:!1},Pulverize:{id:40,name:"Pulverize",description:"Shuffle INCAPACITATED into the Deck",cost:{blade:0,flourish:0,lunge:0,brawn:8},reward:0,addToDeck:[12],delete:[],win:!1,lose:!1},Perforate:{id:41,name:"Perforate",description:"Shuffle IMPALED into the Deck",cost:{blade:0,flourish:6,lunge:0,brawn:0},reward:0,addToDeck:[11],delete:[],win:!1,lose:!1},"Shield Crush":{id:42,name:"Shield Crush",description:"Shuffle CRUSHED into the Deck",cost:{blade:0,flourish:0,lunge:0,brawn:6},reward:0,addToDeck:[10],delete:[],win:!1,lose:!1},Decapitate:{id:43,name:"Decapitate",description:"Shuffle INCAPACITATED into the Deck",cost:{blade:8,flourish:0,lunge:0,brawn:0},reward:0,addToDeck:[12],delete:[],win:!1,lose:!1},Win:{id:44,name:"Win",description:"Win the fight",cost:{heavy:0,flourish:0,lunge:0,block:0},reward:0,addToDeck:[12],delete:[],win:!0,lose:!1}},I=JSON.parse(JSON.stringify(T)),j=Object.keys(I).map(function(e){return I[e].name});console.log(j);var N,P,R,B,A,G,L,U,J,F={cards:y,reactions:T,columns:{"column-1":{id:"column-1",title:"Level 1",level:1,cardIds:["Slash","Bide Time","Guard","Grab"]},"column-2":{id:"column-2",title:"Level 2",level:2,cardIds:["Grappled","Exposed","Staggered"]},"column-3":{id:"column-3",title:"Level 3",level:3,cardIds:["Stunned","Wounded","Blinded"]},"column-4":{id:"column-4",title:"Level 4",level:4,cardIds:["Crushed","Impaled"]},"column-5":{id:"column-5",title:"Level 5",level:5,cardIds:["Incapacitated"]}},reactionColumn:{id:"reactionCol",title:"Reactions",reactionIds:j},columnOrder:["column-1","column-2","column-3","column-4","column-5"],cardCounter:13,reactionCounter:45},W=t(17),M=(t(27),w.a.div(N||(N=Object(p.a)(["\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  padding: 8px;\n  margin-bottom: 8px;\n  transition: background-color 0.2s ease;\n  background-color: ",";\n  display:flex;\n  flex-direction: column;\n"])),function(e){return e.isDragDisabled?"lightgrey":e.isDragging?"lightgreen":"white"})),H=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).temp=JSON.parse(JSON.stringify(t.props.card)),t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;this.temp=JSON.parse(JSON.stringify(this.props.card));var a;try{a=t(94)("./"+this.props.card.texture+".png")}catch(n){a=t(54)}return h.a.createElement(E.b,{draggableId:this.props.card.name,index:this.props.index,isDragDisabled:!1},function(t,n){return h.a.createElement(M,Object.assign({},t.draggableProps,t.dragHandleProps,{innerRef:t.innerRef,isDragging:n.isDragging,isDragDisabled:!1}),e.props.card.name+" - "+e.props.card.id,h.a.createElement(v.a,null,h.a.createElement(v.a.Toggle,{variant:"success",id:"dropdown-basic",style:{width:"100%"}},"Edit"),h.a.createElement(v.a.Menu,null,h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"nameInput"},"Name")),h.a.createElement(k.a,{placeholder:e.props.card.name,"aria-label":"name","aria-describedby":"basic-addon1",onChange:function(a){e.temp.name=a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"bladeInput"},"Blade")),h.a.createElement(k.a,{placeholder:e.props.card.resources.blade,"aria-label":"blade","aria-describedby":"basic-addon1",onChange:function(a){e.temp.resources.blade=+a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"flourishInput"},"Flourish")),h.a.createElement(k.a,{placeholder:e.props.card.resources.flourish,"aria-label":"flourish","aria-describedby":"basic-addon1",onChange:function(a){e.temp.resources.flourish=+a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"lungeInput"},"Lunge")),h.a.createElement(k.a,{placeholder:e.props.card.resources.lunge,"aria-label":"lunge","aria-describedby":"basic-addon1",onChange:function(a){e.temp.resources.lunge=+a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"brawnInput"},"Brawn")),h.a.createElement(k.a,{placeholder:e.props.card.resources.brawn,"aria-label":"brawn","aria-describedby":"basic-addon1",onChange:function(a){e.temp.resources.brawn=+a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"brawnInput"},"Texture")),h.a.createElement(k.a,{placeholder:e.props.card.texture,"aria-label":"texture","aria-describedby":"basic-addon1",onChange:function(a){e.temp.texture=a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"responses"},"Reactions")),h.a.createElement(k.a,{placeholder:e.props.card.reactions,"aria-label":"texture","aria-describedby":"basic-addon1",onChange:function(a){for(var t=a.target.value,n=[];t.indexOf(",")>-1;)n.push(+t.substring(0,t.indexOf(","))),t=t.substring(t.indexOf(",")+1);t.length>0&&n.push(+t),e.temp.reactions=n}})),h.a.createElement(x.a,{onClick:function(){return e.props.handler(e.props.index,e.props.card.name,e.temp)}},"Save"))),h.a.createElement("img",{src:a,style:{width:150}}),h.a.createElement(x.a,{style:{backgroundColor:"red"},onClick:function(){return e.props.delete(e.props.card.name)}},"Delete"))})}}]),a}(h.a.Component),_=w.a.div(P||(P=Object(p.a)(["\n  margin: 8px;\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  width: 220px;\n\n  display: flex;\n  flex-direction: column;\n"]))),K=w.a.h3(R||(R=Object(p.a)(["\n  padding: 8px;\n"]))),X=w.a.div(B||(B=Object(p.a)(["\n  padding: 8px;\n  transition: background-color 0.2s ease;\n  background-color: ","\n  flex-grow: 1;\n  min-height: 100px;\n"])),function(e){return e.isDraggingOver?"skyblue":"white"}),z=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).handler=t.handler.bind(Object(W.a)(Object(W.a)(t))),t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"handler",value:function(e,a,t){this.props.handler(a,t,this.props.column.id)}},{key:"render",value:function(){var e=this;return h.a.createElement(_,null,h.a.createElement(K,null,this.props.column.title),h.a.createElement(E.c,{droppableId:this.props.column.id,type:"CARD"},function(a,t){return h.a.createElement(X,Object.assign({innerRef:a.innerRef},a.droppableProps,{isDraggingOver:t.isDraggingOver}),e.props.cards.map(function(a,t){return h.a.createElement(H,{key:a.name,card:a,index:t,handler:e.handler,delete:e.props.delete})}),a.placeholder)}))}}]),a}(h.a.Component),Q=(t(27),w.a.div(A||(A=Object(p.a)(["\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  padding: 8px;\n  margin-bottom: 8px;\n  transition: background-color 0.2s ease;\n  background-color: ",";\n"])),function(e){return e.isDragDisabled?"lightgrey":e.isDragging?"lightgreen":"white"})),q=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).temp=JSON.parse(JSON.stringify(t.props.reaction)),t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;this.temp=JSON.parse(JSON.stringify(this.props.reaction));return h.a.createElement(E.b,{draggableId:this.props.reaction.name,index:this.props.index,isDragDisabled:!1},function(a,t){return h.a.createElement(Q,Object.assign({},a.draggableProps,a.dragHandleProps,{innerRef:a.innerRef,isDragging:t.isDragging,isDragDisabled:!1}),e.props.reaction.name+" - "+e.props.reaction.id,h.a.createElement(v.a,null,h.a.createElement(v.a.Toggle,{variant:"success",id:"dropdown-basic",style:{backgroundColor:"brown",borderColor:"brown",width:"80%"}},"Edit"),h.a.createElement(v.a.Menu,null,h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"nameInput"},"Name")),h.a.createElement(k.a,{placeholder:e.props.reaction.name,"aria-label":"name","aria-describedby":"basic-addon1",onChange:function(a){e.temp.name=a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"bladeInput"},"Blade")),h.a.createElement(k.a,{placeholder:e.props.reaction.cost.blade,"aria-label":"blade","aria-describedby":"basic-addon1",onChange:function(a){e.temp.cost.blade=+a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"flourishInput"},"Flourish")),h.a.createElement(k.a,{placeholder:e.props.reaction.cost.flourish,"aria-label":"flourish","aria-describedby":"basic-addon1",onChange:function(a){e.temp.cost.flourish=+a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"lungeInput"},"Lunge")),h.a.createElement(k.a,{placeholder:e.props.reaction.cost.lunge,"aria-label":"lunge","aria-describedby":"basic-addon1",onChange:function(a){e.temp.cost.lunge=+a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"brawnInput"},"Brawn")),h.a.createElement(k.a,{placeholder:e.props.reaction.cost.brawn,"aria-label":"brawn","aria-describedby":"basic-addon1",onChange:function(a){e.temp.cost.brawn=+a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"brawnInput"},"Description")),h.a.createElement(k.a,{placeholder:e.props.reaction.description,"aria-label":"texture","aria-describedby":"basic-addon1",onChange:function(a){e.temp.description=a.target.value}})),h.a.createElement(D.a,{className:"mb-3"},h.a.createElement(D.a.Prepend,null,h.a.createElement(D.a.Text,{id:"reactions"},"Add to Deck")),h.a.createElement(k.a,{placeholder:e.temp.addToDeck,"aria-label":"texture","aria-describedby":"basic-addon1",onChange:function(a){for(var t=a.target.value,n=[];t.indexOf(",")>-1;)n.push(+t.substring(0,t.indexOf(","))),t=t.substring(t.indexOf(",")+1);t.length>0&&n.push(+t),e.temp.addToDeck=n}})),h.a.createElement(x.a,{onClick:function(){return e.props.handler(e.props.index,e.props.reaction.name,e.temp)}},"Save"))),h.a.createElement(x.a,{style:{backgroundColor:"red"},onClick:function(){return e.props.delete(e.temp.name)}},"Delete"))})}}]),a}(h.a.Component),V=w.a.div(G||(G=Object(p.a)(["\n  margin: 8px;\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  width: 220px;\n\n  display: flex;\n  flex-direction: column;\n"]))),Y=w.a.h3(L||(L=Object(p.a)(["\n  padding: 8px;\n"]))),Z=w.a.div(U||(U=Object(p.a)(["\n  padding: 8px;\n  transition: background-color 0.2s ease;\n  background-color: ","\n  flex-grow: 1;\n  min-height: 100px;\n"])),function(e){return e.isDraggingOver?"skyblue":"white"}),$=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).handler=t.handler.bind(Object(W.a)(Object(W.a)(t))),t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"handler",value:function(e,a,t){this.props.handler(a,t)}},{key:"render",value:function(){var e=this;return h.a.createElement(V,null,h.a.createElement(Y,null,this.props.column.title),h.a.createElement(E.c,{droppableId:this.props.column.id,type:"REACTION"},function(a,t){return h.a.createElement(Z,Object.assign({innerRef:a.innerRef},a.droppableProps,{isDraggingOver:t.isDraggingOver}),e.props.reactions.map(function(a,t){return h.a.createElement(q,{delete:e.props.delete,key:a.name,reaction:a,index:t,handler:e.handler})}),a.placeholder)}))}}]),a}(h.a.Component),ee=(t(141),w.a.div(J||(J=Object(p.a)(["\n  display:flex;\n"])))),ae=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).addCard=function(e){if(!(e.name in t.state.cards)){var a=JSON.parse(JSON.stringify(e));a.id=t.state.cardCounter,t.state.cardCounter+=1,t.state.cards[a.name]=a,t.state.columns["column-"+a.level].cardIds.push(a.name),t.setState(t.state)}},t.addReaction=function(e){if(!(e.name in t.state.reactions)){var a=JSON.parse(JSON.stringify(e));a.id=t.state.reactionCounter,t.state.reactionCounter+=1,t.state.reactions[a.name]=a,t.state.reactionColumn.reactionIds.unshift(a.name),t.setState(t.state)}},t.uploadCards=function(e){var a=new FileReader;try{a.readAsText(e.target.files[0],"UTF-8")}catch(n){return}a.onload=function(e){var a=JSON.parse(e.target.result).Cards;console.log(a),t.state.cards=a;for(var n=0,r=Object.entries(t.state.columns);n<r.length;n++){var l=r[n],o=Object(d.a)(l,2),c=o[0];o[1];t.state.columns[c].cardIds=[]}for(var s=-1,u=0,m=Object.entries(a);u<m.length;u++){var p=m[u],b=Object(d.a)(p,2),h=b[0],g=(b[1],a[h]);t.state.columns["column-"+g.level].cardIds.push(h),s=a[h].id>s?a[h].id:s}t.state.cardCounter=s+1,console.log(t.state);var f=Object(i.a)({},t.state);t.setState(f)}},t.uploadReactions=function(e){var a=new FileReader;try{a.readAsText(e.target.files[0],"UTF-8")}catch(n){return}a.onload=function(e){var a=JSON.parse(e.target.result).Responses;console.log(a),t.state.reactions={};for(var n=-1,r=0,l=Object.entries(a);r<l.length;r++){var o=l[r],c=Object(d.a)(o,2),s=c[0],u=c[1];t.state.reactions[a[s].name]=u,t.state.reactionColumn.reactionIds.push(a[s].name),n=a[s].id>n?a[s].id:n}t.state.reactionCounter=n+1,console.log(t.state);var m=Object(i.a)({},t.state);t.setState(m)}},t.downloadCards=function(){var e=JSON.stringify({Cards:t.state.cards},null,2);if(window.navigator&&window.navigator.msSaveOrOpenBlob){var a=new Blob([decodeURIComponent(encodeURI(e))],{type:"application/json;charset=utf-8;"});navigator.msSaveOrOpenBlob(a,"cards.json")}else{var n=document.createElement("a");n.download="cards.json",n.href="data:application/json;charset=utf-8;,"+encodeURIComponent(e),n.target="_blank",document.body.appendChild(n),n.click(),document.body.removeChild(n)}},t.downloadReactions=function(){var e=JSON.stringify({Responses:t.state.reactions},null,2);if(window.navigator&&window.navigator.msSaveOrOpenBlob){var a=new Blob([decodeURIComponent(encodeURI(e))],{type:"application/json;charset=utf-8;"});navigator.msSaveOrOpenBlob(a,"responses.json")}else{var n=document.createElement("a");n.download="responses.json",n.href="data:application/json;charset=utf-8;,"+encodeURIComponent(e),n.target="_blank",document.body.appendChild(n),n.click(),document.body.removeChild(n)}},t.download=function(e){var a=JSON.stringify(e,null,2);if(window.navigator&&window.navigator.msSaveOrOpenBlob){var t=new Blob([decodeURIComponent(encodeURI(a))],{type:"application/json;charset=utf-8;"});navigator.msSaveOrOpenBlob(t,"enemyFight.json")}else{var n=document.createElement("a");n.download="enemyFight.json",n.href="data:application/json;charset=utf-8;,"+encodeURIComponent(a),n.target="_blank",document.body.appendChild(n),n.click(),document.body.removeChild(n)}},t.cardhandler=function(e,a,n){delete t.state.cards[e],t.state.cards[a.name]=a;var r=t.state.columns[n].cardIds.indexOf(e);t.state.columns[n].cardIds[r]=a.name,t.setState(Object(i.a)({},t.state))},t.reactionhandler=function(e,a){delete t.state.reactions[e],t.state.reactions[a.name]=a;var n=t.state.reactionColumn.reactionIds.indexOf(e);t.state.reactionColumn.reactionIds[n]=a.name,t.setState(Object(i.a)({},t.state))},t.deleteCard=function(e){var a=t.state.cards[e].id,n=t.state.cards[e].level;delete t.state.cards[e];for(var r=[],l=0;l<t.state.columns["column-"+n].cardIds.length;l++)t.state.columns["column-"+n].cardIds[l]!=e&&r.push(t.state.columns["column-"+n].cardIds[l]);t.state.columns["column-"+n].cardIds=r;for(var o=0,c=Object.entries(t.state.reactions);o<c.length;o++){for(var s=c[o],u=Object(d.a)(s,2),m=u[0],p=(u[1],t.state.reactions[m].addToDeck),b=[],h=0;h<p.length;h++)p[h]!=a&&b.push(p[h]);t.state.reactions[m].addToDeck=b}console.log(t.state),t.setState(Object(i.a)({},t.state))},t.deleteReaction=function(e){var a=t.state.reactions[e].id;delete t.state.reactions[e];for(var n=[],r=0;r<t.state.reactionColumn.reactionIds.length;r++)t.state.reactionColumn.reactionIds[r]!=e&&n.push(t.state.reactionColumn.reactionIds[r]);t.state.reactionColumn.reactionIds=n;for(var l=0,o=Object.entries(t.state.cards);l<o.length;l++){for(var c=o[l],s=Object(d.a)(c,2),u=s[0],m=(s[1],t.state.cards[u].reactions),p=[],b=0;b<m.length;b++)m[b]!=a&&p.push(m[b]);t.state.cards[u].reactions=p}console.log(t.state),t.setState(Object(i.a)({},t.state))},t.onDragEnd=function(e){var a;console.log(t.state);var n=e.destination,r=e.source,d=e.draggableId;if(n&&!(n.droppableId===r.droppableId&&n.index===r.index||n.droppableId in t.state.columns&&r.droppableId==t.state.reactionColumn.id||n.droppableId==t.state.reactionColumn.id&&r.droppableId in t.state.columns)){var o=t.state.columns[r.droppableId],c=t.state.columns[n.droppableId];if(o!==c||"reactionCol"===r.droppableId)if(o!==c){var s=Array.from(o.cardIds);s.splice(r.index,1);var u=Object(i.a)({},o,{cardIds:s}),m=Array.from(c.cardIds);m.splice(n.index,0,d);var p=Object(i.a)({},c,{cardIds:m}),b=Object(i.a)({},t.state,{columns:Object(i.a)({},t.state.columns,(a={},Object(l.a)(a,u.id,u),Object(l.a)(a,p.id,p),a)),cards:Object(i.a)({},t.state.cards,Object(l.a)({},d,Object(i.a)({},t.state.cards[d],{level:p.level})))});t.setState(b)}else{var h=t.state.reactionColumn,g=Array.from(h.reactionIds);g.splice(r.index,1),g.splice(n.index,0,d),console.log(g);var f=Object(i.a)({},h,{reactionIds:g}),E=Object(i.a)({},t.state,{reactionColumn:Object(i.a)({},f)});t.setState(E)}else{var w=Array.from(o.cardIds);w.splice(r.index,1),w.splice(n.index,0,d),console.log(w);var v=Object(i.a)({},o,{cardIds:w}),D=Object(i.a)({},t.state,{columns:Object(i.a)({},t.state.columns,Object(l.a)({},v.id,v))});t.setState(D)}}},t.state=F,console.log(t.state),t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.state.reactionColumn.reactionIds.map(function(a){return e.state.reactions[a]});return console.log(this.state),h.a.createElement("div",null,h.a.createElement("div",{style:{height:140,display:"flex",flexDirection:"row",justifyContent:"space-between"}},h.a.createElement("div",{style:{display:"flex",flexDirection:"column",paddingLeft:10}},h.a.createElement("label",null,"Upload Card",h.a.createElement("input",{name:"cardupload",type:"file",onChange:this.uploadCards})),h.a.createElement(O,{addCard:this.addCard}),h.a.createElement(x.a,{onClick:this.downloadCards},"Download Cards")),h.a.createElement("div",{style:{display:"flex",flexDirection:"column",paddingLeft:10}},h.a.createElement(C,{downloadFight:this.download})),h.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},h.a.createElement("label",null,"Upload Reaction",h.a.createElement("input",{name:"reactionupload",type:"file",onChange:this.uploadReactions})),h.a.createElement(S,{addReaction:this.addReaction}),h.a.createElement(x.a,{onClick:this.downloadReactions},"Download Reactions"))),h.a.createElement(E.a,{onDragEnd:this.onDragEnd},h.a.createElement(ee,null,this.state.columnOrder.map(function(a){var t=e.state.columns[a],n=t.cardIds.map(function(a){return e.state.cards[a]});return h.a.createElement(z,{key:t.id,column:t,cards:n,handler:e.cardhandler,delete:e.deleteCard})}),h.a.createElement($,{key:"reac",column:this.state.reactionColumn,reactions:a,delete:this.deleteReaction,handler:this.reactionhandler}))))}}]),a}(h.a.Component),te=document.getElementById("root");f.a.render(h.a.createElement(ae,null),te)},54:function(e,a,t){e.exports=t.p+"static/media/notfound.c7c261da.png"},79:function(e,a,t){e.exports=t(143)},94:function(e,a,t){var n={"./bidetime.png":95,"./blinded.png":96,"./crushed.png":97,"./exposed.png":98,"./grab.png":99,"./grappled.png":100,"./guard.png":101,"./impaled.png":102,"./incapacitated.png":103,"./notfound.png":54,"./slash.png":104,"./staggered.png":105,"./stunned.png":106,"./wounded.png":107};function r(e){var a=l(e);return t(a)}function l(e){var a=n[e];if(!(a+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=94},95:function(e,a,t){e.exports=t.p+"static/media/bidetime.73c8ab84.png"},96:function(e,a,t){e.exports=t.p+"static/media/blinded.eaedef31.png"},97:function(e,a,t){e.exports=t.p+"static/media/crushed.e3e3e8f9.png"},98:function(e,a,t){e.exports=t.p+"static/media/exposed.2c15a99f.png"},99:function(e,a,t){e.exports=t.p+"static/media/grab.51f6246b.png"}},[[79,2,1]]]);
//# sourceMappingURL=main.815ceef0.chunk.js.map