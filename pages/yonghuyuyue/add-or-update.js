(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghuyuyue/add-or-update"],{"12b8":function(e,n,i){"use strict";var t=i("5efe"),u=i.n(t);u.a},"22c8":function(e,n,i){"use strict";i.r(n);var t=i("f79a"),u=i.n(t);for(var a in t)"default"!==a&&function(e){i.d(n,e,(function(){return t[e]}))}(a);n["default"]=u.a},"5efe":function(e,n,i){},"8bb1":function(e,n,i){"use strict";i.r(n);var t=i("ab33"),u=i("22c8");for(var a in u)"default"!==a&&function(e){i.d(n,e,(function(){return u[e]}))}(a);i("12b8");var r,o=i("f0c5"),s=Object(o["a"])(u["default"],t["b"],t["c"],!1,null,"3ab708b6",null,!1,t["a"],r);n["default"]=s.exports},ab33:function(e,n,i){"use strict";var t,u=function(){var e=this,n=e.$createElement;e._self._c},a=[];i.d(n,"b",(function(){return u})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return t}))},b678:function(e,n,i){"use strict";(function(e){i("c9a6"),i("921b");t(i("66fd"));var n=t(i("8bb1"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("543d")["createPage"])},f79a:function(e,n,i){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=u(i("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,n,i,t,u,a,r){try{var o=e[a](r),s=o.value}catch(h){return void i(h)}o.done?n(s):Promise.resolve(s).then(t,u)}function r(e){return function(){var n=this,i=arguments;return new Promise((function(t,u){var r=e.apply(n,i);function o(e){a(r,t,u,o,s,"next",e)}function s(e){a(r,t,u,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("84c1"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{ruleForm:{yuyuebianhao:this.getUUID(),xuanzefuwu:"",weixiushijian:"",jishizhanghao:"",jishixingming:"",cheliangzhaopian:"",zhanghao:"",xingming:"",shouji:"",chepaihao:"",cheliangpinpai:"",wentimiaoshu:"",beizhu:"",sfsh:"",shhf:"",userid:""},xuanzefuwuOptions:[],xuanzefuwuIndex:0,user:{},ro:{yuyuebianhao:!1,xuanzefuwu:!1,weixiushijian:!1,jishizhanghao:!1,jishixingming:!1,cheliangzhaopian:!1,zhanghao:!1,xingming:!1,shouji:!1,chepaihao:!1,cheliangpinpai:!1,wentimiaoshu:!1,beizhu:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var n=r(t.default.mark((function n(i){var u,a,r,o;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return u=e.getStorageSync("nowTable"),n.next=3,this.$api.session(u);case 3:if(a=n.sent,this.user=a.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.xingming=this.user.xingming,this.ruleForm.shouji=this.user.shouji,this.ruleForm.chepaihao=this.user.chepaihao,this.xuanzefuwuOptions="维修,保养".split(","),this.ruleForm.userid=e.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!i.id){n.next=18;break}return this.ruleForm.id=i.id,n.next=16,this.$api.info("yonghuyuyue",this.ruleForm.id);case 16:a=n.sent,this.ruleForm=a.data;case 18:if(!i.cross){n.next=81;break}r=e.getStorageSync("crossObj"),n.t0=t.default.keys(r);case 21:if((n.t1=n.t0()).done){n.next=81;break}if(o=n.t1.value,"yuyuebianhao"!=o){n.next=27;break}return this.ruleForm.yuyuebianhao=r[o],this.ro.yuyuebianhao=!0,n.abrupt("continue",21);case 27:if("xuanzefuwu"!=o){n.next=31;break}return this.ruleForm.xuanzefuwu=r[o],this.ro.xuanzefuwu=!0,n.abrupt("continue",21);case 31:if("weixiushijian"!=o){n.next=35;break}return this.ruleForm.weixiushijian=r[o],this.ro.weixiushijian=!0,n.abrupt("continue",21);case 35:if("jishizhanghao"!=o){n.next=39;break}return this.ruleForm.jishizhanghao=r[o],this.ro.jishizhanghao=!0,n.abrupt("continue",21);case 39:if("jishixingming"!=o){n.next=43;break}return this.ruleForm.jishixingming=r[o],this.ro.jishixingming=!0,n.abrupt("continue",21);case 43:if("cheliangzhaopian"!=o){n.next=47;break}return this.ruleForm.cheliangzhaopian=r[o],this.ro.cheliangzhaopian=!0,n.abrupt("continue",21);case 47:if("zhanghao"!=o){n.next=51;break}return this.ruleForm.zhanghao=r[o],this.ro.zhanghao=!0,n.abrupt("continue",21);case 51:if("xingming"!=o){n.next=55;break}return this.ruleForm.xingming=r[o],this.ro.xingming=!0,n.abrupt("continue",21);case 55:if("shouji"!=o){n.next=59;break}return this.ruleForm.shouji=r[o],this.ro.shouji=!0,n.abrupt("continue",21);case 59:if("chepaihao"!=o){n.next=63;break}return this.ruleForm.chepaihao=r[o],this.ro.chepaihao=!0,n.abrupt("continue",21);case 63:if("cheliangpinpai"!=o){n.next=67;break}return this.ruleForm.cheliangpinpai=r[o],this.ro.cheliangpinpai=!0,n.abrupt("continue",21);case 67:if("wentimiaoshu"!=o){n.next=71;break}return this.ruleForm.wentimiaoshu=r[o],this.ro.wentimiaoshu=!0,n.abrupt("continue",21);case 71:if("beizhu"!=o){n.next=75;break}return this.ruleForm.beizhu=r[o],this.ro.beizhu=!0,n.abrupt("continue",21);case 75:if("userid"!=o){n.next=79;break}return this.ruleForm.userid=r[o],this.ro.userid=!0,n.abrupt("continue",21);case 79:n.next=21;break;case 81:this.styleChange();case 82:case"end":return n.stop()}}),n,this)})));function i(e){return n.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xuanzefuwuChange:function(e){this.xuanzefuwuIndex=e.target.value,this.ruleForm.xuanzefuwu=this.xuanzefuwuOptions[this.xuanzefuwuIndex]},cheliangzhaopianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.cheliangzhaopian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=r(t.default.mark((function e(){return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.xuanzefuwu){e.next=3;break}return this.$utils.msg("选择服务不能为空"),e.abrupt("return");case 3:if(this.ruleForm.weixiushijian){e.next=6;break}return this.$utils.msg("维修时间不能为空"),e.abrupt("return");case 6:if(this.ruleForm.beizhu){e.next=9;break}return this.$utils.msg("备注不能为空"),e.abrupt("return");case 9:if(!this.ruleForm.id){e.next=14;break}return e.next=12,this.$api.update("yonghuyuyue",this.ruleForm);case 12:e.next=16;break;case 14:return e.next=16,this.$api.add("yonghuyuyue",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,i=n.getFullYear(),t=n.getMonth()+1,u=n.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),t=t>9?t:"0"+t,u=u>9?u:"0"+u,"".concat(i,"-").concat(t,"-").concat(u)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,i("543d")["default"])}},[["b678","common/runtime","common/vendor"]]]);