(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{171:function(t,e){},192:function(t,e,s){"use strict";var n=s(171),r=s.n(n);e.default=r.a},209:function(t,e,s){"use strict";s.r(e);var n={props:{form:{type:Object,default:function(){return{}}}}},r=s(18),o={components:{FormCard:Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[t.form.cover_image?s("g-link",{staticClass:"card-image",attrs:{to:t.form.link}},[s("figure",{staticClass:"image is-16by9"},[s("g-image",{attrs:{src:t.form.cover_image,alt:t.form.title}})],1)]):t._e(),s("div",{staticClass:"card-content"},[s("h1",{staticClass:"is-size-4 has-text-weight-bold"},[t._v("\n      "+t._s(t.form.title)+"\n    ")]),s("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"content",domProps:{innerHTML:t._s(t.form.content)}})]),t.form.buttons?s("footer",{staticClass:"card-footer"},t._l(t.form.buttons,(function(e,n){return s("g-link",{key:n,staticClass:"card-footer-item",attrs:{to:e.link}},[t._v("\n      "+t._s(e.label)+"\n    ")])})),1):t._e()],1)}),[],!1,null,null,null).exports},metaInfo:{title:"Forms"},methods:{filteredForms:function(t,e){for(var s=this.$page.forms.edges,n=s.length,r=Math.ceil(n/e),o=[],a=0;a<r;a++){var i=a*e+t-1;s[i]&&o.push(s[i])}return o.length?o:null}}},a=s(192),i=Object(r.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("section",{staticClass:"section posts"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns is-desktop"},[t.$page.forms.edges.length>=1?s("div",{staticClass:"column"},t._l(t.filteredForms(1,3),(function(t){return s("FormCard",{key:t.node.id,attrs:{form:t.node}})})),1):t._e(),t.$page.forms.edges.length>=2?s("div",{staticClass:"column"},t._l(t.filteredForms(2,3),(function(t){return s("FormCard",{key:t.node.id,attrs:{form:t.node}})})),1):t._e(),t.$page.forms.edges.length>=3?s("div",{staticClass:"column"},t._l(t.filteredForms(3,3),(function(t){return s("FormCard",{key:t.node.id,attrs:{form:t.node}})})),1):t._e()])])])])}),[],!1,null,null,null);"function"==typeof a.default&&Object(a.default)(i);e.default=i.exports}}]);