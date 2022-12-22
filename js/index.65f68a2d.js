(function(){"use strict";var t={6043:function(t,i,e){var n=e(9242),o=e(3396);function a(t,i,e,n,a,r){const l=(0,o.up)("LoginForm"),d=(0,o.up)("ProSignUp");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l,{header:"Login"}),(0,o.Wm)(d,{link:a.proSignUpLink,header:a.proSignUpHeader,"body-text":a.proSignUpBodyText,"link-text":a.proSignUpLinkText},null,8,["link","header","body-text","link-text"])],64)}var r=e(7139);const l={id:"login-form-wrapper"},d={id:"login-form"},s={id:"app-header"};function p(t,i,e,n,a,p){const u=(0,o.up)("EmailField"),c=(0,o.up)("PasswordField"),g=(0,o.up)("RobotField"),h=(0,o.up)("FormControls");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("form",d,[(0,o._)("h1",s,(0,r.zw)(e.header),1),((0,o.wg)(),(0,o.j4)(u,{onValidateEmail:p.validate,key:a.componentKey},null,8,["onValidateEmail"])),((0,o.wg)(),(0,o.j4)(c,{onValidatePassword:p.validate,key:a.componentKey},null,8,["onValidatePassword"])),(0,o.Wm)(g,{onValidateRobotField:p.validate},null,8,["onValidateRobotField"]),(0,o.Wm)(h,{"login-enabled":p.loginEnabled,onLogin:p.login,onClearForm:p.clearForm},null,8,["login-enabled","onLogin","onClearForm"])])])}const u=t=>((0,o.dD)("data-v-7ece7493"),t=t(),(0,o.Cn)(),t),c={id:"email-field"},g=u((()=>(0,o._)("label",{for:"email"},"EMAIL ADDRESS",-1))),h={key:0,class:"invalid-email","data-testid":"email-field--div-invalid"};function m(t,i,e,a,l,d){return(0,o.wg)(),(0,o.iD)("div",c,[g,(0,o.wy)((0,o._)("input",{type:"text",name:"email",id:"email","aria-required":"true","data-testid":"email-field--input","onUpdate:modelValue":i[0]||(i[0]=t=>l.input=t),class:(0,r.C_)({invalid:!l.emailIsValid}),autocomplete:"on"},null,2),[[n.nr,l.input,void 0,{lazy:!0}]]),l.emailIsValid?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",h," Please enter a valid email address. "))])}var w={name:"EmailField",data(){return{input:"",emailIsValid:!0}},watch:{input(t){const i=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;i.test(t)?this.emailIsValid=!0:this.emailIsValid=!1,this.$emit("validateEmail","email",this.emailIsValid&&!!this.input.length)}}},f=e(89);const v=(0,f.Z)(w,[["render",m],["__scopeId","data-v-7ece7493"]]);var C=v;const b=t=>((0,o.dD)("data-v-6ef8a7b0"),t=t(),(0,o.Cn)(),t),y={class:"password-wrapper"},I=b((()=>(0,o._)("label",{for:"password"},"PASSWORD",-1))),_=["type"],F={key:0,class:"invalid-password","data-testid":"password-field--div-invalid"};function V(t,i,e,a,l,d){const s=(0,o.up)("ToggleButton");return(0,o.wg)(),(0,o.iD)("div",y,[I,(0,o._)("div",{id:"password-field",class:(0,r.C_)({invalid:!l.passwordIsValid})},[(0,o.wy)((0,o._)("input",{type:l.inputFieldType,name:"password",id:"password","aria-required":"true","data-testid":"password-field--input","onUpdate:modelValue":i[0]||(i[0]=t=>l.input=t),minLength:"6",autocomplete:"on","current-password":""},null,8,_),[[n.YZ,l.input,void 0,{lazy:!0}]]),(0,o.Wm)(s,{icon:d.getIconType(),onButtonToggled:d.togglePasswordVisibility},null,8,["icon","onButtonToggled"])],2),l.passwordIsValid?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",F," Please enter a valid password. "))])}function k(t,i,e,n,a,r){const l=(0,o.up)("ToggleIcon");return(0,o.wg)(),(0,o.iD)("button",{class:"toggle-button",onClick:i[0]||(i[0]=i=>t.$emit("buttonToggled")),title:"Toggle password Visibility","data-testid":"toggle-button",type:"button"},[(0,o.Wm)(l,{icon:e.icon},null,8,["icon"])])}const T={width:"21",height:"16",viewBox:"0 0 21 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","data-testid":"toggle-icon--svg-password-hide"},L=(0,o.uE)('<g clip-path="url(#clip0)"><path d="M6.59998 8.00001C6.59998 8.40001 6.69998 8.80001 6.79998 9.20001L8.09998 7.90001C8.09998 6.50001 9.19998 5.40001 10.6 5.40001L11.9 4.10001C11.6 4.00001 11.1 3.90001 10.7 3.90001C8.49997 3.90001 6.59998 5.70001 6.59998 8.00001Z" fill="black"></path><path d="M3.39999 12.6L4.49999 11.5C4.39999 11.4 4.39999 11.4 4.29999 11.3C3.59999 10.7 3.09999 10 2.79999 9.30001C2.39999 8.70001 2.29999 8.20001 2.29999 8.00001C2.29999 7.80001 2.39999 7.30001 2.79999 6.60001C3.09999 6.00001 3.69999 5.20001 4.39999 4.60001C5.79999 3.20001 7.89999 2.10001 10.8 2.10001C11.8 2.10001 12.8 2.30001 13.6 2.50001L14.8 1.30001C13.6 0.800006 12.3 0.600006 10.8 0.600006C7.49999 0.600006 4.99999 2.00001 3.39999 3.50001C2.49999 4.30001 1.89999 5.10001 1.49999 5.90001C1.09999 6.60001 0.799988 7.40001 0.799988 8.00001C0.799988 8.60001 1.09999 9.30001 1.49999 10C1.89999 10.8 2.49999 11.6 3.29999 12.4C3.39999 12.5 3.39999 12.5 3.39999 12.6Z" fill="black"></path><path d="M20 5.90001C19.6 5.10001 19 4.30001 18.2 3.50001C17.9 3.20001 17.6 3.00001 17.2 2.70001L18.6 1.30001C18.9 1.00001 18.9 0.500006 18.6 0.200006C18.3 -0.0999939 17.8 -0.0999939 17.5 0.200006L2.99996 14.7C2.69996 15 2.69996 15.5 2.99996 15.8C3.19996 15.9 3.39996 16 3.59996 16C3.79996 16 3.99996 15.9 4.09996 15.8L5.69996 14.2C7.09996 14.9 8.79996 15.4 10.7 15.4C14 15.4 16.5 14 18.1 12.5C18.9 11.7 19.5 10.9 19.9 10.1C20.3 9.40001 20.6 8.60001 20.6 8.00001C20.6 7.40001 20.4 6.60001 20 5.90001ZM13.3 8.00001C13.3 9.40001 12.1 10.6 10.7 10.6C10.3 10.6 9.89996 10.5 9.59996 10.3L13 6.90001C13.2 7.20001 13.3 7.60001 13.3 8.00001ZM18.7 9.30001C18.4 9.90001 17.8 10.7 17.1 11.3C15.7 12.7 13.6 13.8 10.7 13.8C9.19996 13.8 7.89996 13.5 6.79996 13L8.49996 11.3C9.09996 11.7 9.89996 12 10.7 12C13 12 14.8 10.2 14.8 7.90001C14.8 7.10001 14.6 6.30001 14.1 5.70001L16.1 3.70001C16.5 4.00001 16.8 4.20001 17.1 4.50001C17.8 5.20001 18.3 5.90001 18.7 6.50001C19.1 7.20001 19.2 7.60001 19.2 7.90001C19.1 8.20001 19 8.70001 18.7 9.30001Z" fill="black"></path></g><defs><clipPath id="clip0"><rect width="19.8" height="16" fill="white" transform="translate(0.799988)"></rect></clipPath></defs>',2),x=[L],P={width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","data-testid":"toggle-icon--svg-password-show"},S=(0,o.uE)('<g clip-path="url(#clip0)"><path d="M9.9 15.4C3.5 15.4 0 10.2 0 8.00001C0 5.90001 3.5 0.600006 9.9 0.600006C16.3 0.600006 19.8 5.90001 19.8 8.00001C19.8 10.2 16.4 15.4 9.9 15.4ZM9.9 2.10001C4.2 2.10001 1.5 6.80001 1.5 8.00001C1.5 9.20001 4.2 13.9 9.9 13.9C15.6 13.9 18.3 9.20001 18.3 8.00001C18.3 6.80001 15.6 2.10001 9.9 2.10001Z" fill="black"></path><path d="M9.89999 12.1C7.59999 12.1 5.79999 10.3 5.79999 8.00001C5.79999 5.70001 7.59999 3.90001 9.89999 3.90001C12.2 3.90001 14 5.80001 14 8.00001C14 10.3 12.2 12.1 9.89999 12.1ZM9.89999 5.40001C8.49999 5.40001 7.29999 6.60001 7.29999 8.00001C7.29999 9.40001 8.49999 10.6 9.89999 10.6C11.3 10.6 12.5 9.40001 12.5 8.00001C12.5 6.60001 11.3 5.40001 9.89999 5.40001Z" fill="black"></path></g><defs><clipPath id="clip0"><rect width="19.8" height="14.8" fill="white" transform="translate(0 0.600006)"></rect></clipPath></defs>',2),D=[S];function Z(t,i,e,a,r,l){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.wy)(((0,o.wg)(),(0,o.iD)("svg",T,x,512)),[[n.F8,"hide"===e.icon]]),(0,o.wy)(((0,o.wg)(),(0,o.iD)("svg",P,D,512)),[[n.F8,"show"===e.icon]])],64)}var E={name:"ToggleIcon",props:{icon:String}};const O=(0,f.Z)(E,[["render",Z]]);var U=O,M={name:"ToggleButton",emits:["buttonToggled"],props:{icon:String},components:{ToggleIcon:U}};const B=(0,f.Z)(M,[["render",k],["__scopeId","data-v-3a5f75bc"]]);var j=B,R={name:"PasswordField",emits:["validatePassword"],data(){return{input:"",passwordIsValid:!0,inputFieldType:"password"}},components:{ToggleButton:j},watch:{input(t){const i=6;t&&t.length>=i?this.passwordIsValid=!0:this.passwordIsValid=!1,this.$emit("validatePassword","password",this.passwordIsValid&&!!this.input.length)}},methods:{togglePasswordVisibility(){"text"===this.inputFieldType?this.inputFieldType="password":this.inputFieldType="text"},getIconType(){return"password"===this.inputFieldType?"show":"hide"}}};const z=(0,f.Z)(R,[["render",V],["__scopeId","data-v-6ef8a7b0"]]);var W=z;const $=t=>((0,o.dD)("data-v-881bd12a"),t=t(),(0,o.Cn)(),t),q={id:"robot-field"},H=$((()=>(0,o._)("label",{for:"robot"},"I am not a robot",-1)));function A(t,i,e,a,r,l){return(0,o.wg)(),(0,o.iD)("div",q,[(0,o.wy)((0,o._)("input",{type:"checkbox",name:"robot",id:"robot","aria-required":"true","data-testid":"robot-field--input","onUpdate:modelValue":i[0]||(i[0]=t=>r.input=t)},null,512),[[n.e8,r.input]]),H])}var K={name:"RobotField",data(){return{input:"",fieldIsValid:!1}},watch:{input(t){this.fieldIsValid=t,this.$emit("validateRobotField","robotField",this.fieldIsValid)}}};const Y=(0,f.Z)(K,[["render",A],["__scopeId","data-v-881bd12a"]]);var N=Y;function G(t,i,e,a,l,d){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("button",{class:(0,r.C_)(["login",{enabled:e.loginEnabled}]),"data-testid":"login-form--button-login",onClick:i[0]||(i[0]=(0,n.iM)((i=>t.$emit("login")),["prevent"])),type:"button"}," Login ",2),(0,o._)("button",{class:"clear-form",onClick:i[1]||(i[1]=i=>t.$emit("clearForm")),"data-testid":"login-form--button-clear-form",type:"button"}," Clear form ")],64)}var J={name:"FormControls",props:{loginEnabled:Boolean},emits:["clearForm","login"]};const Q=(0,f.Z)(J,[["render",G],["__scopeId","data-v-367f5944"]]);var X=Q,tt={name:"LoginForm",data(){return{emailIsValid:!1,passwordIsValid:!1,robotFieldIsValid:!1,componentKey:0}},computed:{loginEnabled(){return this.emailIsValid&&this.passwordIsValid&&this.robotFieldIsValid}},props:{header:String},components:{EmailField:C,PasswordField:W,RobotField:N,FormControls:X},methods:{validate(t,i){"email"===t&&(this.emailIsValid=i),"password"===t&&(this.passwordIsValid=i),"robotField"===t&&(this.robotFieldIsValid=i)},clearForm(){this.componentKey+=1,this.emailIsValid=!1,this.passwordIsValid=!1},login(){this.loginEnabled&&window.confirm("Login successful!")}}};const it=(0,f.Z)(tt,[["render",p],["__scopeId","data-v-3d64fdd3"]]);var et=it;const nt={id:"pro-sign-up"},ot={class:"sign-up-wrapper"},at={"data-testid":"pro-signup--header"},rt={"data-testid":"pro-signup--description"},lt=["href"];function dt(t,i,e,n,a,l){return(0,o.wg)(),(0,o.iD)("section",nt,[(0,o._)("div",ot,[(0,o._)("h1",at,(0,r.zw)(e.header),1),(0,o._)("p",rt,(0,r.zw)(e.bodyText),1),(0,o._)("a",{"data-testid":"pro-signup--link",href:e.link},(0,r.zw)(e.linkText),9,lt)])])}var st={name:"ProSignUp",props:{header:String,link:String,bodyText:String,linkText:String}};const pt=(0,f.Z)(st,[["render",dt],["__scopeId","data-v-f5aa9608"]]);var ut=pt,ct={name:"App",components:{LoginForm:et,ProSignUp:ut},data(){return{proSignUpLink:"https://www.politico.com",proSignUpHeader:"Not a Pro yet?",proSignUpBodyText:"POLITICO Pro is a smart, personalized policy intelligence platform that combines\n        in-depth policy reporting and analysis with sophisticated technology\n        to help you stay one step ahead.",proSignUpLinkText:"Learn more and become a member"}}};const gt=(0,f.Z)(ct,[["render",a]]);var ht=gt;(0,n.ri)(ht).mount("#app")}},i={};function e(n){var o=i[n];if(void 0!==o)return o.exports;var a=i[n]={exports:{}};return t[n](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(i,n,o,a){if(!n){var r=1/0;for(p=0;p<t.length;p++){n=t[p][0],o=t[p][1],a=t[p][2];for(var l=!0,d=0;d<n.length;d++)(!1&a||r>=a)&&Object.keys(e.O).every((function(t){return e.O[t](n[d])}))?n.splice(d--,1):(l=!1,a<r&&(r=a));if(l){t.splice(p--,1);var s=o();void 0!==s&&(i=s)}}return i}a=a||0;for(var p=t.length;p>0&&t[p-1][2]>a;p--)t[p]=t[p-1];t[p]=[n,o,a]}}(),function(){e.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(i,{a:i}),i}}(),function(){e.d=function(t,i){for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){var t={826:0};e.O.j=function(i){return 0===t[i]};var i=function(i,n){var o,a,r=n[0],l=n[1],d=n[2],s=0;if(r.some((function(i){return 0!==t[i]}))){for(o in l)e.o(l,o)&&(e.m[o]=l[o]);if(d)var p=d(e)}for(i&&i(n);s<r.length;s++)a=r[s],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(p)},n=self["webpackChunkfe_engineer_take_home_ewalters"]=self["webpackChunkfe_engineer_take_home_ewalters"]||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(6043)}));n=e.O(n)})();
//# sourceMappingURL=index.65f68a2d.js.map