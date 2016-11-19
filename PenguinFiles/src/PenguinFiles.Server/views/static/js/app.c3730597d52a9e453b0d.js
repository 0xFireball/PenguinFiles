webpackJsonp([1,0],[function(A,t,e){"use strict";function n(A){return A&&A.__esModule?A:{default:A}}var i=e(79),s=n(i),a=e(78),r=n(a),o=e(29),d=n(o);e(53),e(54),e(55),e(52);var u=e(77),l=n(u);e(51);var c=e(58),f=n(c);s.default.use(r.default),s.default.use(l.default);var m=new r.default({routes:d.default});m.afterEach(function(A){var t=document.querySelector(".main-content");t&&(t.scrollTop=0)}),s.default.material.theme.registerAll({muted:{primary:{color:"grey",hue:300},accent:"indigo"},apptheme:{primary:"pink",accent:{color:"light-blue",hue:600}},inverse:{primary:{color:"light-blue",hue:600},accent:"pink"}});var p=s.default.component("app",f.default);new p({el:"#app",router:m})},,function(A,t,e){var n,i;e(41),n=e(31);var s=e(66);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-33a0628b",A.exports=n},function(A,t,e){var n,i;e(47),n=e(34);var s=e(72);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-798fa25a",A.exports=n},,,,,,,,function(A,t,e){var n,i;n=e(36);var s=e(73);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,A.exports=n},,,,,,,,,,,,,,,,,,function(A,t,e){"use strict";function n(A){return A&&A.__esModule?A:{default:A}}Object.defineProperty(t,"__esModule",{value:!0});var i=e(64),s=n(i),a=e(63),r=n(a),o=e(62),d=n(o),u=e(65),l=n(u),c=[{path:"/",name:"landing",component:s.default},{path:"/landing",redirect:"/"},{path:"/about",name:"about",component:d.default},{path:"/files",name:"files-places",component:r.default}],f=[{path:"*",name:"error",component:l.default}];t.default=[].concat(c,f)},function(A,t,e){"use strict";function n(A){return A&&A.__esModule?A:{default:A}}Object.defineProperty(t,"__esModule",{value:!0});var i=e(3),s=n(i);t.default={data:function(){return{}},components:{Toolbar:s.default}}},function(A,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"intro",data:function(){return{msg:"PenguinFiles"}}}},function(A,t,e){"use strict";function n(A){return A&&A.__esModule?A:{default:A}}Object.defineProperty(t,"__esModule",{value:!0});var i=e(11),s=n(i),a=e(4),r=n(a),o={validateStatus:function(A){return A>=200&&A<500}};t.default={name:"login",data:function(){return{lUsername:"",lPassword:"",rUsername:"",rPassword:"",rConfirmPassword:"",lErrMsg:"",rErrMsg:"",iaccept:!1}},methods:{tryLogin:function(){var A=this;A.lErrMsg="",r.default.post("/login",{username:A.lUsername,password:A.lPassword}).then(function(t){A.$router.push("/files")}).catch(function(t){t&&(A.lErrMsg="invalid login credentials")})},trySignup:function(){var A=this,t=this;return t.rUsername.length<3?void(t.rErrMsg="username must be at least 3 characters. this is also validated on the server"):t.rPassword.length<8?void(t.rErrMsg="password must be at least 8 characters. this is also validated on the server"):t.iaccept?t.rPassword!==t.rConfirmPassword?void(t.rErrMsg="password confirmation does not match"):(t.rErrMsg="",void r.default.post("/register",{username:t.rUsername,password:t.rPassword},o).then(function(e){if(200===e.status)A.$refs.authOptionTabs.changeTab("t-login");else if(403===e.status){var n=JSON.parse(e.data);t.rErrMsg=n.Message}}).catch(function(A){A&&console.log(A)})):void(t.rErrMsg="you must accept the terms and conditions")}},components:{AboutWidget:s.default}}},function(A,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:[String,Number],titleTheme:{type:String,default:"muted"},bodyTheme:{type:String,default:"apptheme"},size:[String,Number],height:[String,Number]},computed:{classes:function(){}}}},function(A,t,e){"use strict";function n(A){return A&&A.__esModule?A:{default:A}}Object.defineProperty(t,"__esModule",{value:!0});var i=e(4),s=n(i);t.default={name:"toolbar",data:function(){return{appName:"PenguinFiles",isLoggedIn:!1}},methods:{visitGitHub:function(){window.open("https://github.com/0xFireball/PenguinFiles")},toggleLeftSidenav:function(){this.$refs.leftSidenav.toggle()}},created:function(){var A=this;setInterval(function(){s.default.post("/checkauth",{validateStatus:function(A){return 200===A||401===A}}).then(function(t){200===t.status?A.isLoggedIn=!0:401===t.status&&(A.isLoggedIn=!1)}).catch(function(t){t&&(A.isLoggedIn=!1)})},800)}}},function(A,t,e){"use strict";function n(A){return A&&A.__esModule?A:{default:A}}Object.defineProperty(t,"__esModule",{value:!0});var i=e(60),s=n(i);t.default={props:["cloudfiles"],data:function(){return{title:"My Files",header:"All Files",progressHeader:"Uploading",shouldEncryptUploadedFile:!1,uploadingTheme:"muted",uploadingFiles:[{name:"bob",kind:"fake",progress:99,id:9324}]}},methods:{downloadFile:function(A){console.log("downloading file "+A)},deleteFile:function(A){window.confirm("are you sure you want to delete this file?")&&console.log("deleting file "+A)},encryptFile:function(A){console.log("encrypting file "+A)},decryptFile:function(A){console.log("decrypting file "+A)},uploadFile:function(){this.uploadingFiles.push({name:"Fahrenheit 451",kind:"Book",progress:44,id:451}),this.$refs.fileListTabs.changeTab("t-files")},cancelUpload:function(A){}},mounted:function(){},components:{Panel:s.default}}},function(A,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}}}},function(A,t,e){"use strict";function n(A){return A&&A.__esModule?A:{default:A}}Object.defineProperty(t,"__esModule",{value:!0});var i=e(2),s=n(i),a=e(11),r=n(a);t.default={data:function(){return{}},components:{Intro:s.default,AboutWidget:r.default}}},function(A,t,e){"use strict";function n(A){return A&&A.__esModule?A:{default:A}}Object.defineProperty(t,"__esModule",{value:!0});var i=e(3),s=n(i),a=e(61),r=n(a);t.default={name:"filesplace",data:function(){return{cloudFiles:[{name:"google-logo.png",kind:"Image",id:1337},{name:"my-essay.odt",kind:"Document",id:1338},{name:"totally-not-passwords.txt",kind:"Text File",id:1339,isEncrypted:!0}]}},components:{Toolbar:s.default,FilesList:r.default},methods:{},mounted:function(){}}},function(A,t,e){"use strict";function n(A){return A&&A.__esModule?A:{default:A}}Object.defineProperty(t,"__esModule",{value:!0});var i=e(2),s=n(i),a=e(59),r=n(a),o=e(3),d=n(o);t.default={name:"app",components:{Toolbar:d.default,Intro:s.default,Login:r.default}}},function(A,t,e){"use strict";function n(A){return A&&A.__esModule?A:{default:A}}Object.defineProperty(t,"__esModule",{value:!0});var i=e(2),s=n(i);t.default={data:function(){return{}},components:{Intro:s.default}}},function(A,t){},function(A,t){},function(A,t){},function(A,t){},function(A,t){},function(A,t){},function(A,t){},function(A,t){},function(A,t){},function(A,t){},function(A,t){},function(A,t){},function(A,t){},function(A,t){},function(A,t){},,function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AsHETQ2WeMXowAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAcNklEQVR42uzd2Y/Vdx3H4Q87zAzDsA20FqwtlG1oLNognSm0MV4YE2NiamJi4pWJiSwFocVSirZUodWmwnXTP4A7rWtVZjswrLU6MKWl7Pu+LzPM4AVEEyFa4Bx+53zP8/wJnwtm3q9+f9MIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICi1MsJslFfX3/dFQAAACJyuZxteh/0dgIAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAA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AAIAAEBpGPNOuyMAIAAAAKQ+/se+2+EQAAgAAADGPwAIAAAAxj8ACAAAAMY/AAgAAADGPwAIAAAAxj8AAgAAAMY/AAIAAADGPwACAACA8Q8AAgAAgPEPAAIAAIDxDwACAACA8Q8AAgAAgPEPAAIAAIDxD4AAAACA8Q+AAAAAYPwDgAAAAGD8A4AAAABg/AOAAAAAYPwDgAAAAGD8A4AAAABg/AOAAAAAYPwDIAAAABj/xj8AAgAAgPEPAAIAAIDxDwACAACA8Q8AAgAAgPEPAAIAAIDxDwACAACA8Q8AAgAAgPEPAAIAAGD8A4AAAABg/AOAAAAAYPwDgAAAAGD8A4AAAABg/AOAAAAAYPwDgAAAAGD8A4AAAAAY/wCAAAAAGP8AIAAAABj/ACAAAAAY/wAgAAAAGP8AIAAAABj/ACAAAAAY/wAgAAAAGP8AIAAAAMY/ACAAAADGPwAIAAAAxj8ACAAAAMY/AAgAAADGPwAIAAAAxj8ACAAAAMY/AAgAAIDxDwAIAACA8Q8ACAAAgPEPAAgAAIDxDwACAACA8Q8AAgAAgPEPAAIAAIDxDwACAABg/AMAAgAAYPwDAAIAAGD8AwACAABg/AMAAgAAYPwDgAAAAJBnxj8ACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgATgAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/2oPDkgAAAAABP1/3Y9QAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAjQBMLLqFOTcKCgAAAABJRU5ErkJggg=="},function(A,t,e){var n,i;e(43),n=e(30);var s=e(68);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,A.exports=n},function(A,t,e){var n,i;e(50),n=e(32);var s=e(76);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-cd97b5f0",A.exports=n},function(A,t,e){var n,i;e(48),n=e(33);var s=e(74);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-b15d0bba",A.exports=n},function(A,t,e){var n,i;e(46),n=e(35);var s=e(71);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-6b09aff4",A.exports=n},function(A,t,e){var n,i;e(49),n=e(37);var s=e(75);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-bb034adc",A.exports=n},function(A,t,e){var n,i;e(42),n=e(38);var s=e(67);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,A.exports=n},function(A,t,e){var n,i;e(45),n=e(39);var s=e(70);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,A.exports=n},function(A,t,e){var n,i;e(44),n=e(40);var s=e(69);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-40238b07",A.exports=n},function(A,t,e){A.exports={render:function(){var A=this;return A._h("div",{staticClass:"intro"},[A._h("div",{staticClass:"has-ripple"},[A._m(0)," ",A._h("h1",[A._s(A.msg)])," ",A._m(1)])])},staticRenderFns:[function(){var A=this;return A._h("img",{attrs:{src:e(57),width:"240",height:"240"}})},function(){var A=this;return A._h("a",{attrs:{href:"https://iridiumion.xyz",target:"_blank"}},[A._h("h5",{staticClass:"company-brand"},["IridiumIon Software"])])}]}},function(A,t){A.exports={render:function(){var A=this;return A._h("div",{directives:[{name:"md-theme",rawName:"v-md-theme",value:"muted",expression:"'muted'"}]},[A._h("div",{staticClass:"container",attrs:{id:"filesplace"}},[A._h("div",{staticClass:"row"},[A._h("div",{staticClass:"twelve columns"},[A._h("filesList",{attrs:{cloudfiles:A.cloudFiles}})])])," ",A._m(0)])])},staticRenderFns:[function(){var A=this;return A._h("div",{staticClass:"row",attrs:{id:"footer"}},[A._h("div",{staticClass:"six columns offset-by-three "},[A._h("h6",[A._h("a",{attrs:{href:"https://github.com/0xFireball/PenguinFiles ",target:"_blank "}},["PenguinFiles on GitHub"])])])])}]}},function(A,t){A.exports={render:function(){var A=this;return A._h("div",{directives:[{name:"md-theme",rawName:"v-md-theme",value:"apptheme",expression:"'apptheme'"}]},[A._h("toolbar")," ",A._h("transition",{attrs:{name:"md-router"}},[A._h("router-view")])])},staticRenderFns:[]}},function(A,t){A.exports={render:function(){var A=this;return A._h("div",{staticClass:"not-found"},[A._h("div",{staticClass:"container",attrs:{id:"app"}},[A._h("div",{staticClass:"row",attrs:{id:"intro-area"}},[A._h("div",{staticClass:"twelve columns"},[A._h("intro")])])," ",A._m(0)])])},staticRenderFns:[function(){var A=this;return A._h("div",{staticClass:"not-found-content"},[A._h("h1",["404. That's an error."])," ",A._h("h3",["The page you were looking for couldn't be found."])])}]}},function(A,t){A.exports={render:function(){var A=this;return A._h("div",{directives:[{name:"md-theme",rawName:"v-md-theme",value:"apptheme",expression:"'apptheme'"}]},[A._h("div",{staticClass:"container",attrs:{id:"app"}},[A._h("div",{staticClass:"row",attrs:{id:"intro-area"}},[A._h("div",{staticClass:"twelve columns"},[A._h("intro")])])," ",A._h("div",{staticClass:"row"},[A._h("div",{staticClass:"six columns offset-by-three"},[A._h("login")])])," ",A._m(0)])])},staticRenderFns:[function(){var A=this;return A._h("div",{staticClass:"row",attrs:{id:"footer"}},[A._h("div",{staticClass:"six columns offset-by-three "},[A._h("h6",[A._h("a",{attrs:{href:"https://github.com/0xFireball/PenguinFiles ",target:"_blank "}},["PenguinFiles on GitHub"])])])])}]}},function(A,t){A.exports={render:function(){var A=this;return A._h("div",{staticClass:"fileslist"},[A._h("panel",{attrs:{title:A.title,bodyTheme:"apptheme"}},[A._h("md-tabs",{ref:"fileListTabs"},[A._h("md-tab",{attrs:{id:"t-files","md-label":"Files"}},[A._h("md-list",{staticClass:"custom-list md-triple-line"},[A._h("md-subheader",[A._s(A.header)])," "," ",A._l(A.cloudfiles,function(t){return A._h("div",[A._h("md-list-item",[t.isEncrypted?A._h("md-avatar",[A._h("md-icon",{staticClass:"md-primary"},["lock"])]):A._h("md-avatar",[A._h("md-icon",{staticClass:"md-primary"},["lock_open"])])," "," ",A._h("div",{staticClass:"md-list-text-container"},[A._h("span",[A._s(t.name)])," ",A._h("span",[A._s(t.kind)])," ",A._m(0,!0)])," ",A._h("md-menu",[A._h("md-button",{staticClass:"md-icon-button md-list-action",attrs:{"md-menu-trigger":""}},[A._h("md-icon",{staticClass:"md-primary"},["more_horiz"])])," ",A._h("md-menu-content",[t.isEncrypted?A._h("md-menu-item",{on:{click:function(e){A.decryptFile(t.id)}}},["Decrypt"]):A._h("md-menu-item",{on:{click:function(e){A.encryptFile(t.id)}}},["Encrypt"])," "," ",A._h("md-menu-item",{on:{click:function(e){A.deleteFile(t.id)}}},["Delete"])])])," ",A._h("md-button",{staticClass:"md-icon-button md-list-action",on:{click:function(e){A.downloadFile(t.id)}}},[A._h("md-icon",{staticClass:"md-primary"},["file_download"])])," ",A._h("md-divider",{staticClass:"md-inset"})])])})])," ",A._h("md-list",{directives:[{name:"md-theme",rawName:"v-md-theme",value:A.uploadingTheme,expression:"uploadingTheme"}],staticClass:"custom-list md-triple-line"},[A._h("md-subheader",[A._s(A.progressHeader)])," "," ",A._l(A.uploadingFiles,function(t){return A._h("div",[A._h("md-list-item",[A._h("md-avatar",[A._h("md-icon",{staticClass:"md-primary"},["file_upload"])])," ",A._h("div",{staticClass:"md-list-text-container"},[A._h("span",[A._s(t.name)])," ",A._h("span",[A._s(t.kind)])," ",A._h("p",[A._s(t.progress)+"% uploaded"])])," ",A._h("md-button",{staticClass:"md-icon-button md-list-action"},[A._h("md-icon",{staticClass:"md-primary"},["star"])])," ",A._h("md-divider",{staticClass:"md-inset"})])])})])])," ",A._h("md-tab",{attrs:{id:"t-upload","md-label":"upload"}},[A._h("md-subheader",["File Options"])," ",A._h("div",[A._h("md-checkbox",{directives:[{name:"model",rawName:"v-model",value:A.shouldEncryptUploadedFile,expression:"shouldEncryptUploadedFile"}],domProps:{value:A.shouldEncryptUploadedFile},on:{input:function(t){A.shouldEncryptUploadedFile=t}}},["Store Encrypted (Significantly Slower)"])])," ",A._h("md-button",{staticClass:"space-v md-raised md-primary",on:{click:function(t){A.uploadFile()}}},["Upload File"])," ",A._h("input",{ref:"fileInput",staticClass:"invisible",attrs:{type:"file"}})])])])])},staticRenderFns:[function(){var A=this;return A._h("p",["Uploaded some time ago."])}]}},function(A,t){A.exports={render:function(){var A=this;return A._h("div",{staticClass:"toolbar"},[A._h("md-toolbar",[A._h("md-button",{staticClass:"md-icon-button",on:{click:A.toggleLeftSidenav}},[A._h("md-icon",["menu"])])," ",A._h("h2",{staticClass:"md-title",attrs:{style:"flex: 1"}},[A._s(A.appName)])," ",A._h("md-button",{staticClass:"md-icon-button",on:{click:A.visitGitHub}},[A._h("md-icon",["favorite"])])])," ",A._h("md-sidenav",{ref:"leftSidenav",staticClass:"md-left"},[A._h("md-toolbar",{staticClass:"md-large"},[A._h("div",{staticClass:"md-toolbar-container"},[A._h("h2",{staticClass:"md-title"},[A._s(A.appName)])])])," "," ",A._h("div",{staticClass:"toolbar-content"},[A._h("div",{staticClass:"sidebar-links"},[A._h("md-list",{staticClass:"md-dense"},[A._h("md-list-item",[A._h("router-link",{attrs:{exact:"",to:"/"}},["Home"])])," ",A.isLoggedIn?A._h("md-list-item",[A._h("router-link",{attrs:{exact:"",to:"/files"}},["Files"])]):A._e()," ",A._h("md-list-item",[A._h("router-link",{attrs:{exact:"",to:"/about"}},["About"])])," ",A._h("md-list-item",[A._m(0)," ",A._h("md-list-expand",[A._h("md-list",[A._h("md-list-item",{staticClass:"md-inset",attrs:{href:"https://github.com/0xFireball/PenguinFiles"}},["\n                  GitHub\n                "])," ",A._h("md-list-item",{staticClass:"md-inset",attrs:{href:"https://github.com/0xFireball"}},["\n                  Donate\n                "])])])])])])])])])},staticRenderFns:[function(){var A=this;return A._h("span",["Support"])}]}},function(A,t){A.exports={render:function(){var A=this;return A._m(0)},staticRenderFns:[function(){var A=this;return A._h("div",{staticClass:"about-widget"},[A._h("h5",["About PenguinFiles"])," ",A._h("p",["\n    PenguinFiles is an open source, lightweight, simple, and secure cloud file management application.\n  "])," ",A._h("p",["\n    PenguinFiles will be announced soon!\n  "])," ",A._h("p",["\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem,\n    expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.\n  "])])}]}},function(A,t){A.exports={render:function(){var A=this;return A._h("md-whiteframe",{staticClass:"panel",class:A.classes,style:{height:A.height+"px"}},[A._h("md-toolbar",{directives:[{name:"md-theme",rawName:"v-md-theme",value:A.titleTheme,expression:"titleTheme"}],staticClass:"panel-toolbar"},[A._h("h2",{staticClass:"md-title"},[A._s(A.title)])])," ",A._h("section",{directives:[{name:"md-theme",rawName:"v-md-theme",value:A.bodyTheme,expression:"bodyTheme"}],staticClass:"panel-body"},[A._t("default")])])},staticRenderFns:[]}},function(A,t){A.exports={render:function(){var A=this;return A._h("div",{staticClass:"about-pg"},[A._h("div",{staticClass:"container",attrs:{id:"app"}},[A._h("div",{staticClass:"row",attrs:{id:"intro-area"}},[A._h("div",{staticClass:"twelve columns"},[A._h("intro")])])," ",A._h("div",{staticClass:"about-pg-content"},[A._h("aboutWidget")])])])},staticRenderFns:[]}},function(A,t){A.exports={render:function(){var A=this;return A._h("div",{staticClass:"login"},[A._h("md-tabs",{ref:"authOptionTabs",staticClass:"md-accent"},[A._h("md-tab",{attrs:{id:"t-login","md-label":"Log In"}},[A._h("form",{on:{submit:function(t){t.preventDefault(),A.tryLogin(t)}}},[A._h("md-input-container",[A._m(0)," ",A._h("md-input",{directives:[{name:"model",rawName:"v-model",value:A.lUsername,expression:"lUsername"}],domProps:{value:A.lUsername},on:{input:function(t){A.lUsername=t}}})])," ",A._h("md-input-container",{attrs:{"md-has-password":""}},[A._m(1)," ",A._h("md-input",{directives:[{name:"model",rawName:"v-model",value:A.lPassword,expression:"lPassword"}],attrs:{type:"password"},domProps:{value:A.lPassword},on:{input:function(t){A.lPassword=t}}})])," ",A._h("p",{staticClass:"error-message"},[A._s(A.lErrMsg)])," ",A._m(2)," ",A._h("md-button",{staticClass:"md-raised md-primary",on:{click:A.tryLogin}},["Log In"])])])," ",A._h("md-tab",{attrs:{id:"t-signup","md-label":"Sign Up"}},[A._h("form",{on:{submit:function(t){t.preventDefault(),A.trySignup(t)}}},[A._h("md-input-container",[A._m(3)," ",A._h("md-input",{directives:[{name:"model",rawName:"v-model",value:A.rUsername,expression:"rUsername"}],domProps:{value:A.rUsername},on:{input:function(t){A.rUsername=t}}})])," ",A._h("md-input-container",{attrs:{"md-has-password":""}},[A._m(4)," ",A._h("md-input",{directives:[{name:"model",rawName:"v-model",value:A.rPassword,expression:"rPassword"}],attrs:{type:"password"},domProps:{value:A.rPassword},on:{input:function(t){A.rPassword=t}}})])," ",A._h("md-input-container",[A._m(5)," ",A._h("md-input",{directives:[{name:"model",rawName:"v-model",value:A.rConfirmPassword,expression:"rConfirmPassword"}],attrs:{type:"password"},domProps:{value:A.rConfirmPassword},on:{input:function(t){A.rConfirmPassword=t}}})])," ",A._h("md-checkbox",{directives:[{name:"model",rawName:"v-model",value:A.iaccept,expression:"iaccept"}],domProps:{value:A.iaccept},on:{input:function(t){A.iaccept=t}}},["I accept the Terms and Conditions"])," ",A._h("p",{staticClass:"error-message"},[A._s(A.rErrMsg)])," ",A._m(6)," ",A._h("md-button",{staticClass:"md-raised md-primary",on:{click:A.trySignup}},["Sign Up"])])])," ",A._h("md-tab",{directives:[{name:"md-ink-ripple",rawName:"v-md-ink-ripple"}],attrs:{id:"t-about","md-label":"About"}},[A._h("aboutWidget")])])])},staticRenderFns:[function(){var A=this;return A._h("label",["Username"])},function(){var A=this;return A._h("label",["Password"])},function(){var A=this;return A._h("input",{staticClass:"invisible",attrs:{type:"submit"}})},function(){var A=this;return A._h("label",["Username"])},function(){var A=this;return A._h("label",["Password"])},function(){var A=this;return A._h("label",["Confirm Password"])},function(){var A=this;return A._h("input",{staticClass:"invisible",attrs:{type:"submit"}})}]}}]);
//# sourceMappingURL=app.c3730597d52a9e453b0d.js.map