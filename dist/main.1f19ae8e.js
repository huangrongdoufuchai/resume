// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var resume = "# \u5218\u7FFC\n18717857675 | 18717857675@163.com | \u6DF1\u5733\n20\u5C4A\u6BD5\u4E1A\u751F | \u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF08\u5B9E\u4E60\uFF09\n\n## \u4E13\u4E1A\u6280\u80FD\n- HTML5, CSS3 & JavaScript\n    - \u638C\u63E1 HTML5 \u5982 canvas \u3001 audio \u7B49\u8BED\u4E49\u5316\u6807\u7B7E\u53CA WebStorage API \u7B49\n    - \u638C\u63E1 CSS3 \u52A8\u753B\u3001\u8FC7\u6E21\u3001\u5F39\u6027\u76D2\u5B50\u5E03\u5C40\u3001\u5A92\u4F53\u67E5\u8BE2\u7B49\u54CD\u5E94\u5F0F\u8BBE\u8BA1\u5E38\u7528\u6280\u672F\n    - \u638C\u63E1Javascript\u8BED\u8A00\u6838\u5FC3\u6280\u672FDOM\u3001BOM\u3001Ajax\u3001JSON\u7B49\uFF0C\u5BF9Javascript\u6846\u67B6\u5E94\u7528\u6709\u4E00\u5B9A\u7684\u7ECF\u9A8C\uFF1B\n- \u5176\u4ED6\n    - \u719F\u6089python\uFF0Cc++\uFF0C\u6570\u636E\u5E93\u3002\n    - \u719F\u6089 Git \u5E38\u7528\u547D\u4EE4\u3001\u4EE3\u7801\u4ED3\u5E93\u534F\u540C\u5DE5\u4F5C\u6D41\u7A0B\u7B49\n    - \u719F\u6089 jQuery \u5E38\u7528 API \uFF0C\u5982 DOM \u64CD\u4F5C\u3001\u7279\u6548\u3001\u4E8B\u4EF6\u7B49\u3002\n    - \u719F\u6089\u4F7F\u7528figema\u7B49\u8FDB\u884C\u754C\u9762\u8BBE\u8BA1\u3002\n    - \u7231\u597D\u6444\u5F71\uFF0C\u719F\u6089\u62CD\u6444\u548C\u5F71\u89C6\u540E\u671F\u5236\u4F5C\uFF0C\u719F\u6089lightroom\u3001finalcutpro\u7B49\u56FE\u50CF\u89C6\u9891\u5904\u7406\u5DE5\u5177\n\n## \u6559\u80B2\u7ECF\u5386\n### \u4E0A\u6D77\u5927\u5B66 \n2014/9 - 2018/6 \n- \u4E13\u4E1A\u5B66\u5386\uFF1A\u8BA1\u7B97\u673A\u79D1\u5B66\u4E0E\u6280\u672F \u5927\u5B66\u672C\u79D1\n- \u8363\u8A89\uFF1A\u6821\u4E09\u5956\u5B66\u91D1\u3001\u4F18\u79C0\u5B66\u751F\u3001\u4F18\u79C0\u5B66\u751F\u5E72\u90E8\u3001\u6570\u5B66\u5EFA\u6A21\u4E09\u7B49\u5956\n- \u76F8\u5173\u8BFE\u7A0B\uFF1A\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5\u3001\u6570\u636E\u5E93\u7CFB\u7EDF\u539F\u7406\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u7B49\n         \n### \u65E5\u672C\u4E1C\u5317\u5927\u5B66 \n2018/9 - 2019/6 \n- \u7814\u7A76\u7ECF\u5386\uFF1A\u8BA1\u7B97\u6D41\u4F53\u529B\u5B66 \u7814\u7A76\u52A9\u624B\n    \n### \u9999\u6E2F\u57CE\u5E02\u5927\u5B66 \n2019/9 - 2020/6 \n- \u4E13\u4E1A\u5B66\u5386\uFF1A\u591A\u5A92\u4F53\u6280\u672F \u7814\u7A76\u751F\n- \u76F8\u5173\u8BFE\u7A0B\uFF1A\u673A\u5668\u5B66\u4E60\uFF0C\u6570\u636E\u5DE5\u7A0B\uFF0C\u52A8\u753B\u8BBE\u8BA1\n\n## \u9879\u76EE\u7ECF\u9A8C\n### \u7B80\u5386\u751F\u6210\u5668\n- \u5173\u952E\u8BCD\uFF1A`JavaScript`\u3001`Promise`\u3001`\u53D8\u901F`\u3001`\u8FC7\u6E21\u52A8\u753B`\u3001`\u76D2\u9634\u5F71`\n- \u63CF\u8FF0\uFF1A\u8BE5\u9879\u76EE\u5B9E\u73B0\u4E86\u4E00\u4E2A Markdown \u7B80\u5386\u7684\u5236\u4F5C\u8FC7\u7A0B\uFF0C\u5728\u539F\u751F JS \u4E2D\u4F7F\u7528 Promise \u5904\u7406\u5F02\u6B65\u64CD\u4F5C\uFF0C\u5229\u7528 CSS3 \u5B9E\u73B0\u8FC7\u6E21\u3001\u52A8\u753B\u3001\u9634\u5F71\u548C\u5F39\u6027\u5E03\u5C40\u7B49\u3002\n- [\u6E90\u7801\u94FE\u63A5](https://github.com/huangrongdoufuchai/resume/main.js) | [\u9884\u89C8\u94FE\u63A5](https://huangrongdoufuchai.github.io/resume/)\n\n### \u5BFC\u822A\u7F51\u7AD9\n- \u5173\u952E\u8BCD\uFF1A`CSS \u5E03\u5C40`\u3001`\u5A92\u4F53\u67E5\u8BE2`\u3001`jQuery`\u3001`\u963B\u6B62\u5192\u6CE1`\u3001`localStorage`\n- \u63CF\u8FF0\uFF1A\u4E00\u4E2A\u7B80\u5355\u7684\u5BFC\u822A\u7F51\u7AD9\uFF0C\u7528\u6237\u53EF\u4EE5\u6DFB\u52A0\u548C\u5220\u9664\u7F51\u5740\n- [\u6E90\u7801\u94FE\u63A5](https://github.com/huangrongdoufuchai/guide) | [\u9884\u89C8\u94FE\u63A5](https://huangrongdoufuchai.github.io/guide/src/index.html)\n\n### \u590D\u6742\u7F51\u7EDC\u4E2D\u7684\u76F8\u5173\u6027\u5BF9\u4F20\u64AD\u884C\u4E3A\u7684\u5F71\u54CD\u7814\u7A76\n- \u5173\u952E\u8BCD\uFF1A`\u590D\u6742\u7F51\u7EDC`\u3001`\u4F20\u64AD\u6A21\u578B`\u3001`\u56FE\u8BBA`\n- \u63CF\u8FF0\uFF1A\u5BF9\u5305\u542B\u65F6\u95F4\u7684\u6570\u636E\u8FDB\u884C\u590D\u6742\u7F51\u7EDC\u5EFA\u6A21\uFF0C\u6A21\u62DF\u6D41\u884C\u75C5\u7684\u4F20\u64AD\uFF0C\u901A\u8FC7\u6539\u53D8\u56FE\u4E2D\u8282\u70B9\u7684\u5404\u79CD\u76F8\u5173\u6027\u7814\u7A76\u5BF9\u75BE\u75C5\u4F20\u64AD\u7684\u5F71\u54CD\n\n\n\n";
var code_ready = "/*\n * \u55E8\uFF0C\u6211\u662F\u5218\u7FFC\u3002\n * \u6211\u60F3\u7528\u4EE3\u7801\u7ED9\u4F60\u5C55\u793A\u4E00\u4E0B\u6211\u7684\u4E2A\u4EBA\u7B80\u5386\uFF5E\n * \u7075\u611F\u6765\u81EA\uFF1Ahttp://strml.net\n * \n * \u90A3\u4E48\uFF0C\u6211\u8981\u5F00\u59CB\u5566...\n */\n\n/* \u6DFB\u52A0\u4E00\u4E2A\u8FC7\u6E21\uFF0C\u4F7F\u53D8\u5316\u770B\u8D77\u6765\u66F4\u67D4\u548C */\n* {\n  transition: all 0.3s;\n}\n/* \u52A0\u4E2A\u80CC\u666F\u8272 */\nbody {\n  background: #455A64;\n}\n/* \u7ED9\u4EE3\u7801\u52A0\u4E2A\u8FB9\u6846 */\n#code_body {\n  width: 100%;\n  border: 1px solid #CFD8DC;\n  background: #CFD8DC;\n  padding: 16px;\n  overflow: auto;\n}\n\n/* \u8BA9\u4EE3\u7801\u9AD8\u4EAE\u8D77\u6765 */\n.token.comment, .token.punctuation {\n  color: #757575;\n}\n.token.selector {\n  color: #007400;\n}\n.token.property {\n  color: #cf1f1f;\n}\n\n/* \n * \u7ED9\u5B83\u4EEC\u6765\u4E2A\u7279\u6548\u5427\uFF01\n * \u8BA9\u5B83\u4EEC\u5728\u88AB\u7F16\u8F91\u7684\u65F6\u5019\u4EA7\u751F\u201C\u547C\u5438\u201D\u7684\u6548\u679C\n */\n.breathe {\n  animation: breathe 3s ease 0s infinite;\n}\n\n\n/* \u73B0\u5728\u5F00\u59CB\u5199\u7B80\u5386\u5566\uFF01 */\n\n/* \u8BA9\u4EE3\u7801\u6846\u817E\u51FA\u4E00\u4E9B\u7684\u4F4D\u7F6E\u7ED9\u6211\u7684\u7B80\u5386\u6846 */\n#options {\n  width: 32%;\n}\n/* \u51C6\u5907\u4E00\u4E2A\u767D\u677F */\n#paper {\n  flex: 1;\n  background: #fdfdfd;\n  margin: 16px;\n  overflow: auto;\n  white-space: pre-wrap;\n}\n\n/* \u63A5\u4E0B\u6765\uFF0C\u8BF7\u770B\u53F3\u8FB9 */\n\n";
var code_marked = "\n/* \n * \u63A5\u4E0B\u6765\u6211\u8981\u4F7F\u7528\u4E00\u4E2A\u4F18\u79C0\u7684\u5E93 marked.js\n * \u6765\u4F7F\u6211\u7684\u7B80\u5386\u53D8\u6210\u4E00\u7BC7 Markdown\n * (https://github.com/markedjs/marked)\n */\n";
var code_beautify_resume = "\n/* \u8C03\u6574\u6211\u7684\u7B80\u5386\uFF0C\u8BA9\u5B83\u53D8\u5F97\u518D\u597D\u770B\u4E00\u70B9 */\n#paper {\n  white-space: unset;\n  padding: 0 32px;\n  font-size: 14px;\n}\n#paper a {\n  color: #455A64;\n}\n#paper ul {\n  padding-left: 20px;\n}\n/* \u8BA9\u6BCF\u4E2A\u6A21\u5757\u4E0A\u4E0B\u95F4\u9694\u660E\u663E\u4E00\u70B9 */\n#paper > div {\n  margin: 28px 0;\n}\n\n/* \u63A5\u4E0B\u6765\u662F\u7CBE\u7EC6\u7684\u8C03\u6574 */\n\n/* \u9996\u5148\uFF0C\u8C03\u6574\u6211\u7684\u201C\u57FA\u7840\u4FE1\u606F\u201D\u677F\u5757 */\n#paper h1 {\n  font-size: 22px;\n  margin-bottom: 10px;\n}\n#information {\n  text-align: center;\n}\n#information p {\n  line-height: 24px;\n  white-space: pre-wrap;\n}\n\n/* \u7136\u540E\u662F\u8BE6\u7EC6\u4ECB\u7ECD\u6A21\u5757 */\n#paper h2 {\n  font-size: 16px;\n  border-bottom: 1px solid #455A64;\n  padding-bottom: 6px;\n  margin-bottom: 6px;\n}\n#paper h3 {\n  display: inline-block;\n  font-size: 14px;\n  margin: 6px 0;\n}\n#skills > ul ul {\n  margin: 4px 0;\n}\n#skills li, #works li, #education li {\n  margin-bottom: 4px;\n}\n#jobs > .experience {\n  margin-bottom: 6px;\n}\n\n/* \u8C03\u6574\u201C\u5B9E\u4E60\u7ECF\u5386\u201D\u548C\u201C\u6559\u80B2\u7ECF\u5386\u201D\u4E2D\u65F6\u95F4\u7684\u4F4D\u7F6E */\n#jobs > .experience, #education {\n  position: relative;\n}\n#jobs p, #education p {\n  position: absolute;\n  right: 0px;\n}\n#jobs p {\n  top: 6px;\n}\n#education p {\n  top: 40px;\n}\n\n\n/* \u63A5\u4E0B\u6765\u6DFB\u52A0\u4E2A\u5934\u50CF\u5427\uFF01 */\n";
var code_photo = "\n/* \u628A\u6211\u7684\u5934\u50CF\u653E\u5728\u4E2A\u4EBA\u4FE1\u606F\u91CC */\n#information {\n  position: relative;\n}\n#information .avatar {\n  width: 90px;\n  position: absolute;\n  right: 0px;\n  top: -10px;\n}\n/* \u8BA9\u591A\u4F59\u7684\u7167\u7247\u9690\u85CF\u5427~ */\n#information {\n  overflow: hidden;\n}\n\n/* \n * \u597D\u5566\uFF0C\u6211\u7684\u5934\u50CF\u51FA\u6765\u5566~\n * \u671F\u5F85\u8FD9\u5F20\u9762\u5B54\u51FA\u73B0\u5728\u60A8\u7684\u9762\u8BD5\u4E2D\n * \n *   \u2014\u2014 \u5218\u7FFC 2019/11 *^_^*\n */\n";
var resumeInputTimeoutID, codeInputTimeoutID;
writeCode(code_ready, '').then(function () {
  createResume().then(function () {
    adjustResume().then(function () {
      addAndAdjustAvatar().then(showDownloadButton);
    }, function () {
      showFinalResult();
    });
  });
});
var speedCode = 1,
    duration = 80;
$('#speed_btn').click(function () {
  speedCode += 1;

  if (speedCode > 3) {
    speedCode = 1;
  }

  switch (speedCode) {
    case 1:
      speed_status.innerText = '🚲';
      description.innerText = '开小车车快点吧~';
      duration = 70;
      break;

    case 2:
      speed_status.innerText = '🚗';
      description.innerText = '太废话了，我要最快！';
      duration = 30;
      break;

    case 3:
      speed_status.innerText = '🚀';
      description.innerText = '我眼花了！慢一点~';
      duration = 0;
      break;

    default:
      return 0;
  }
});

function writeCode(code, origin) {
  var n = 1;
  return new Promise(function (resolve) {
    codeInputTimeoutID = setTimeout(write, duration);

    function write() {
      code_body.innerHTML = Prism.highlight(origin + code.substr(0, n), Prism.languages.css, 'css');
      code_style.innerHTML = origin + code.substr(0, n);
      code_body.scrollTop = code_body.scrollHeight;
      n++;

      if (n === code.length) {
        window.clearTimeout(codeInputTimeoutID);
        resolve.call(undefined);
      } else {
        window.clearTimeout(codeInputTimeoutID);
        codeInputTimeoutID = setTimeout(write, duration);
      }
    }
  });
}

function writeResume() {
  var n = 1;
  return new Promise(function (resolve) {
    resumeInputTimeoutID = setTimeout(write, duration);

    function write() {
      paper.innerHTML = resume.substr(0, n);
      paper.scrollTop = paper.scrollHeight;
      n++;

      if (n === resume.length) {
        window.clearTimeout(resumeInputTimeoutID);
        resolve.call(undefined);
      } else {
        window.clearTimeout(resumeInputTimeoutID);
        resumeInputTimeoutID = setTimeout(write, duration);
      }
    }
  });
}

function createResume() {
  return new Promise(function (resolve) {
    $('#paper').addClass('breathe');
    $('#code_body').removeClass('breathe');
    writeResume().then(resolve);
    setTimeout(function () {
      $('#skip_inputResume').show();
      $('#skip_inputResume').click(function () {
        skipResumeInput().then(resolve);
      });
    }, 1000);
  });
}

function adjustResume() {
  return new Promise(function (resolve, reject) {
    $('#code_body').addClass('breathe');
    $('#paper').removeClass('breathe');
    writeCode(code_marked, code_ready).then(function () {
      structureResume();
      $('#paper')[0].scrollTop = 0;
      writeCode(code_beautify_resume, code_ready + code_marked).then(resolve);
      setTimeout(function () {
        $('#skip_all').show();
        $('#skip_all').click(function () {
          skipAll().then(reject);
        });
      }, 1000);
    });
  });
}

function structureResume() {
  $('#paper')[0].innerHTML = marked(resume);
  $('#paper').prepend('<div id="information"></div>', '<div id="skills"></div>', '<div id="jobs"></div>', '<div id="works"></div>', '<div id="education"></div>');
  $('#information').append($('h1'), $('p').first());
  $('#skills').append($('h2:contains("技能")'), $('ul').first());
  $('#jobs').append($('h2:contains("教育")'));
  $('h3:contains("大学")').each(function (index, element) {
    $('<div class="experience"></div>').append($(element), $('#paper > p').first(), $('#paper > ul').first()).appendTo($('#jobs'));
  });
  $('#works').append($('h2:contains("项目")'), $('#paper').children().not($('div')));
  $('a[href="./images/qrcode.png"]').addClass('qrcode-trigger').append($('img.qrcode'));
}

function addAndAdjustAvatar() {
  return new Promise(function (resolve) {
    $('#information').append($('img.avatar'));
    writeCode(code_photo, code_ready + code_marked + code_beautify_resume).then(function () {
      $('#paper').addClass('breathe');
      $('#code_body').removeClass('breathe');
      $('.skipper').remove();
      setTimeout(resolve, 1000);
    });
  });
}

function showDownloadButton() {
  $('#options').css({
    'width': '23%'
  });
  $('a.downloadResume').addClass('show');
  $('#options').append($('a.downloadResume'));
}

function skipResumeInput() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      window.clearTimeout(resumeInputTimeoutID);
      paper.innerHTML = resume;
      paper.scrollTop = paper.scrollHeight;
      resolve();
      $('#skip_inputResume').remove();
    }, 0);
  });
}

function skipAll() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      window.clearTimeout(codeInputTimeoutID);
      resolve();
      $('.skipper').remove();
    }, 0);
  });
}

function showFinalResult() {
  $('#paper').addClass('breathe');
  $('#code_body').removeClass('breathe');
  $('#information').append($('img.avatar'));
  code_body.innerHTML = Prism.highlight(code_ready + code_marked + code_beautify_resume + code_photo, Prism.languages.css, 'css');
  code_style.innerHTML = code_ready + code_marked + code_beautify_resume + code_photo;
  code_body.scrollTop = code_body.scrollHeight;
  window.clearTimeout(codeInputTimeoutID);
  $('#options').css({
    'width': '23%'
  });
  $('a.downloadResume').addClass('show');
  $('#options').append($('a.downloadResume'));
}
},{}],"../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57375" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map