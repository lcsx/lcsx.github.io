(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{252:function(t,s,l){"use strict";l.r(s);var a=l(28),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,l=t._self._c||s;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"敏感信息传输"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#敏感信息传输"}},[t._v("#")]),t._v(" 敏感信息传输")]),t._v(" "),l("p",[t._v("密码在数据库里不应该是明文存放的")]),t._v(" "),l("p",[t._v("其实")]),l("p",{staticStyle:{color:"red"}},[t._v("用户登录客户端用明文+https的方式就够了安全了s")]),t._v("，"),l("p"),t._v(" "),l("p",[t._v("如果是客户端采用md5, 服务器没有加salt 直接用来比较的话，那如果数据库库泄露了，相当于你所有的用户的密码都暴露在外面了， 这样就是去用md5的意义了，\nmd5主要的作用还是防止服务器端的安全，在数据库泄露之后，黑客拿到这些md5没法实现登录操作。")]),t._v(" "),l("p",[t._v("如果客户端不想用明文传输密码想用md5，那服务器端一定要记得加salt\nMD5(MD5(clinet) + salt) 用这样的方式才行。 不然毫无意义")]),t._v(" "),l("ol",[l("li",[t._v("前端使用固定 salt 加密后送给后端")]),t._v(" "),l("li",[t._v("后端生成强大的 salt 将前端送来的值加密储存")]),t._v(" "),l("li",[t._v("使用安全的 hash 函数")]),t._v(" "),l("li",[t._v("如果可能，使用 HTTPS")])])])}),[],!1,null,null,null);s.default=e.exports}}]);