parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n,e,o="# 刘翼\n18717857675 | 18717857675@163.com | 深圳\n20届毕业生 | 前端开发工程师（实习）\n\n## 专业技能\n- HTML5, CSS3 & JavaScript\n    - 掌握 HTML5 如 canvas 、 audio 等语义化标签及 WebStorage API 等\n    - 掌握 CSS3 动画、过渡、弹性盒子布局、媒体查询等响应式设计常用技术\n    - 掌握Javascript语言核心技术DOM、BOM、Ajax、JSON等，对Javascript框架应用有一定的经验；\n- 其他\n    - 熟悉python，c++，数据库。\n    - 熟悉 Git 常用命令、代码仓库协同工作流程等\n    - 熟悉 jQuery 常用 API ，如 DOM 操作、特效、事件等。\n    - 熟悉使用figema等进行界面设计。\n    - 爱好摄影，熟悉拍摄和影视后期制作，熟悉lightroom、finalcutpro等图像视频处理工具\n\n## 教育经历\n### 上海大学 \n2014/9 - 2018/6 \n- 专业学历：计算机科学与技术 大学本科\n- 荣誉：校三奖学金、优秀学生、优秀学生干部、数学建模三等奖\n- 相关课程：数据结构与算法、数据库系统原理、计算机网络等\n         \n### 日本东北大学 \n2018/9 - 2019/6 \n- 研究经历：计算流体力学 研究助手\n    \n### 香港城市大学 \n2019/9 - 2020/6 \n- 专业学历：多媒体技术 研究生\n- 相关课程：机器学习，数据工程，动画设计\n\n## 项目经验\n### 简历生成器\n- 关键词：`JavaScript`、`Promise`、`变速`、`过渡动画`、`盒阴影`\n- 描述：该项目实现了一个 Markdown 简历的制作过程，在原生 JS 中使用 Promise 处理异步操作，利用 CSS3 实现过渡、动画、阴影和弹性布局等。\n- [源码链接](https://github.com/huangrongdoufuchai/resume/main.js) | [预览链接](https://huangrongdoufuchai.github.io/resume/)\n\n### 导航网站\n- 关键词：`CSS 布局`、`媒体查询`、`jQuery`、`阻止冒泡`、`localStorage`\n- 描述：一个简单的导航网站，用户可以添加和删除网址\n- [源码链接](https://github.com/huangrongdoufuchai/guide) | [预览链接](https://huangrongdoufuchai.github.io/guide/src/index.html)\n\n### 复杂网络中的相关性对传播行为的影响研究\n- 关键词：`复杂网络`、`传播模型`、`图论`\n- 描述：对包含时间的数据进行复杂网络建模，模拟流行病的传播，通过改变图中节点的各种相关性研究对疾病传播的影响\n\n\n\n",i="/*\n * 嗨，我是刘翼。\n * 我想用代码给你展示一下我的个人简历～\n * 灵感来自：http://strml.net\n * \n * 那么，我要开始啦...\n */\n\n/* 添加一个过渡，使变化看起来更柔和 */\n* {\n  transition: all 0.3s;\n}\n/* 加个背景色 */\nbody {\n  background: #455A64;\n}\n/* 给代码加个边框 */\n#code_body {\n  width: 100%;\n  border: 1px solid #CFD8DC;\n  background: #CFD8DC;\n  padding: 16px;\n  overflow: auto;\n}\n\n/* 让代码高亮起来 */\n.token.comment, .token.punctuation {\n  color: #757575;\n}\n.token.selector {\n  color: #007400;\n}\n.token.property {\n  color: #cf1f1f;\n}\n\n/* \n * 给它们来个特效吧！\n * 让它们在被编辑的时候产生“呼吸”的效果\n */\n.breathe {\n  animation: breathe 3s ease 0s infinite;\n}\n\n\n/* 现在开始写简历啦！ */\n\n/* 让代码框腾出一些的位置给我的简历框 */\n#options {\n  width: 32%;\n}\n/* 准备一个白板 */\n#paper {\n  flex: 1;\n  background: #fdfdfd;\n  margin: 16px;\n  overflow: auto;\n  white-space: pre-wrap;\n}\n\n/* 接下来，请看右边 */\n\n",t="\n/* \n * 接下来我要使用一个优秀的库 marked.js\n * 来使我的简历变成一篇 Markdown\n * (https://github.com/markedjs/marked)\n */\n",r="\n/* 调整我的简历，让它变得再好看一点 */\n#paper {\n  white-space: unset;\n  padding: 0 32px;\n  font-size: 14px;\n}\n#paper a {\n  color: #455A64;\n}\n#paper ul {\n  padding-left: 20px;\n}\n/* 让每个模块上下间隔明显一点 */\n#paper > div {\n  margin: 28px 0;\n}\n\n/* 接下来是精细的调整 */\n\n/* 首先，调整我的“基础信息”板块 */\n#paper h1 {\n  font-size: 22px;\n  margin-bottom: 10px;\n}\n#information {\n  text-align: center;\n}\n#information p {\n  line-height: 24px;\n  white-space: pre-wrap;\n}\n\n/* 然后是详细介绍模块 */\n#paper h2 {\n  font-size: 16px;\n  border-bottom: 1px solid #455A64;\n  padding-bottom: 6px;\n  margin-bottom: 6px;\n}\n#paper h3 {\n  display: inline-block;\n  font-size: 14px;\n  margin: 6px 0;\n}\n#skills > ul ul {\n  margin: 4px 0;\n}\n#skills li, #works li, #education li {\n  margin-bottom: 4px;\n}\n#jobs > .experience {\n  margin-bottom: 6px;\n}\n\n/* 调整“实习经历”和“教育经历”中时间的位置 */\n#jobs > .experience, #education {\n  position: relative;\n}\n#jobs p, #education p {\n  position: absolute;\n  right: 0px;\n}\n#jobs p {\n  top: 6px;\n}\n#education p {\n  top: 40px;\n}\n\n\n/* 接下来添加个头像吧！ */\n",a="\n/* 把我的头像放在个人信息里 */\n#information {\n  position: relative;\n}\n#information .avatar {\n  width: 90px;\n  position: absolute;\n  right: 0px;\n  top: -10px;\n}\n/* 让多余的照片隐藏吧~ */\n#information {\n  overflow: hidden;\n}\n\n/* \n * 好啦，我的头像出来啦~\n * 期待这张面孔出现在您的面试中\n * \n *   —— 刘翼 2019/11 *^_^*\n */\n";d(i,"").then(function(){u().then(function(){l().then(function(){h().then(f)},function(){w()})})});var s=1,p=80;function d(n,o){var i=1;return new Promise(function(t){e=setTimeout(function r(){code_body.innerHTML=Prism.highlight(o+n.substr(0,i),Prism.languages.css,"css");code_style.innerHTML=o+n.substr(0,i);code_body.scrollTop=code_body.scrollHeight;i++;i===n.length?(window.clearTimeout(e),t.call(void 0)):(window.clearTimeout(e),e=setTimeout(r,p))},p)})}function c(){var e=1;return new Promise(function(i){n=setTimeout(function t(){paper.innerHTML=o.substr(0,e);paper.scrollTop=paper.scrollHeight;e++;e===o.length?(window.clearTimeout(n),i.call(void 0)):(window.clearTimeout(n),n=setTimeout(t,p))},p)})}function u(){return new Promise(function(n){$("#paper").addClass("breathe"),$("#code_body").removeClass("breathe"),c().then(n),setTimeout(function(){$("#skip_inputResume").show(),$("#skip_inputResume").click(function(){g().then(n)})},1e3)})}function l(){return new Promise(function(n,e){$("#code_body").addClass("breathe"),$("#paper").removeClass("breathe"),d(t,i).then(function(){m(),$("#paper")[0].scrollTop=0,d(r,i+t).then(n),setTimeout(function(){$("#skip_all").show(),$("#skip_all").click(function(){b().then(e)})},1e3)})})}function m(){$("#paper")[0].innerHTML=marked(o),$("#paper").prepend('<div id="information"></div>','<div id="skills"></div>','<div id="jobs"></div>','<div id="works"></div>','<div id="education"></div>'),$("#information").append($("h1"),$("p").first()),$("#skills").append($('h2:contains("技能")'),$("ul").first()),$("#jobs").append($('h2:contains("教育")')),$('h3:contains("大学")').each(function(n,e){$('<div class="experience"></div>').append($(e),$("#paper > p").first(),$("#paper > ul").first()).appendTo($("#jobs"))}),$("#works").append($('h2:contains("项目")'),$("#paper").children().not($("div"))),$('a[href="./images/qrcode.png"]').addClass("qrcode-trigger").append($("img.qrcode"))}function h(){return new Promise(function(n){$("#information").append($("img.avatar")),d(a,i+t+r).then(function(){$("#paper").addClass("breathe"),$("#code_body").removeClass("breathe"),$(".skipper").remove(),setTimeout(n,1e3)})})}function f(){$("#options").css({width:"23%"}),$("a.downloadResume").addClass("show"),$("#options").append($("a.downloadResume"))}function g(){return new Promise(function(e){setTimeout(function(){window.clearTimeout(n),paper.innerHTML=o,paper.scrollTop=paper.scrollHeight,e(),$("#skip_inputResume").remove()},0)})}function b(){return new Promise(function(n){setTimeout(function(){window.clearTimeout(e),n(),$(".skipper").remove()},0)})}function w(){$("#paper").addClass("breathe"),$("#code_body").removeClass("breathe"),$("#information").append($("img.avatar")),code_body.innerHTML=Prism.highlight(i+t+r+a,Prism.languages.css,"css"),code_style.innerHTML=i+t+r+a,code_body.scrollTop=code_body.scrollHeight,window.clearTimeout(e),$("#options").css({width:"23%"}),$("a.downloadResume").addClass("show"),$("#options").append($("a.downloadResume"))}$("#speed_btn").click(function(){switch((s+=1)>3&&(s=1),s){case 1:speed_status.innerText="🚲",description.innerText="开小车车快点吧~",p=70;break;case 2:speed_status.innerText="🚗",description.innerText="太废话了，我要最快！",p=30;break;case 3:speed_status.innerText="🚀",description.innerText="我眼花了！慢一点~",p=0;break;default:return 0}});
},{}]},{},["epB2"], null)
//# sourceMappingURL=dist/main.14c54eca.js.map