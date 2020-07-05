(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{293:function(t,s,n){"use strict";n.r(s);var a=n(28),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"vuepress"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress"}},[t._v("#")]),t._v(" vuepress")]),t._v(" "),n("h3",{attrs:{id:"发布到github"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发布到github"}},[t._v("#")]),t._v(" 发布到github")]),t._v(" "),n("ol",[n("li",[t._v("先在github上新建一个库<你的username>.github.io")]),t._v(" "),n("li",[t._v("建立deploy.sh文件内容为")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保脚本抛出遇到的错误")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入生成的文件夹")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是发布到自定义域名")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo 'www.example.com' > CNAME")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://USERNAME.github.io")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:USERNAME/USERNAME.github.io.git master")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://USERNAME.github.io/REPO")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:USERNAME/REPO.git master:gh-pages")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("查看https://username.github.io/")]),t._v(" "),n("li",[t._v("npm run deploy.sh")])])])}),[],!1,null,null,null);s.default=e.exports}}]);