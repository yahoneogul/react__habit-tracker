(this["webpackJsonphabit-tracker"]=this["webpackJsonphabit-tracker"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(11),r=n.n(s),o=(n(18),n(12)),i=n(6),l=n(2),u=n(3),b=n(5),h=n(4),j=(n(19),n(0)),m=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).hadleIncrement=function(){e.props.onIncrement(e.props.habit)},e.hadleDecrement=function(){e.props.onDecrement(e.props.habit)},e.hadleDelete=function(){e.props.onDelete(e.props.habit)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("habit: ".concat(this.props.habit.name," mounted"))}},{key:"componentWillUnmount",value:function(){console.log("habit: ".concat(this.props.habit.name," will unmounted"))}},{key:"render",value:function(){var e=this.props.habit,t=e.name,n=e.count;return Object(j.jsxs)("li",{className:"habit",children:[Object(j.jsx)("span",{className:"habit-name",children:t}),Object(j.jsx)("span",{className:"habit-count",children:n}),Object(j.jsx)("button",{className:"habit-button habit-increase",onClick:this.hadleIncrement,children:Object(j.jsx)("i",{className:"fas fa-plus-square"})}),Object(j.jsx)("button",{className:"habit-button habit-decrease",onClick:this.hadleDecrement,children:Object(j.jsx)("i",{className:"fas fa-minus-square"})}),Object(j.jsx)("button",{className:"habit-button habit-delete",onClick:this.hadleDelete,children:Object(j.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(a.PureComponent),p=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).hadleIncrement=function(t){e.props.onIncrement(t)},e.hadleDecrement=function(t){e.props.onDecrement(t)},e.hadleDelete=function(t){e.props.onDelete(t)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsx)("ul",{className:"habits",children:this.props.habits.map((function(t){return Object(j.jsx)(m,{habit:t,onIncrement:e.hadleIncrement,onDecrement:e.hadleDecrement,onDelete:e.hadleDelete},t.id)}))})}}]),n}(a.Component),d=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)("i",{className:"fas fa-grin-stars navbar-logo"}),Object(j.jsx)("strong",{children:"Habit Tracker"}),Object(j.jsx)("span",{className:"navbar-count",children:this.props.totalCount})]})}}]),n}(a.PureComponent),f=Object(a.memo)((function(e){var t=c.a.createRef();return Object(j.jsxs)("form",{className:"add-form",onSubmit:function(n){n.preventDefault();var a=t.current.value;a&&e.onAdd(a),t.current.value=""},children:[Object(j.jsx)("input",{className:"add-input",type:"text",placeholder:"Habit",ref:t}),Object(j.jsx)("button",{className:"add-button",children:"Add"})]})})),O=(a.Component,n(21),n(13)),x=function(e){var t=Object(a.useState)(0),n=Object(O.a)(t,2),c=n[0],s=n[1];return Object(a.useEffect)((function(){console.log("mounted  & updated! : ".concat(c))}),[console.log("\uc5c5\ub370\uc774\ud2b8")]),Object(j.jsxs)("li",{className:"habit",children:[Object(j.jsx)("span",{className:"habit-name",children:"Reading"}),Object(j.jsx)("span",{className:"habit-count",children:c}),Object(j.jsx)("button",{className:"habit-button habit-increase",onClick:function(){s(c+1)},children:Object(j.jsx)("i",{className:"fas fa-plus-square"})})]})};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.f3616c0c.chunk.js.map