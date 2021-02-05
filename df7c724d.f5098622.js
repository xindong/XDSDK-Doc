(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),c=(n(0),n(86)),i=n(89),l={id:"unity",title:"Unity\u5feb\u901f\u5f00\u59cb",sidebar_label:"Unity",slug:"/"},o={unversionedId:"unity",id:"unity",isDocsHomePage:!1,title:"Unity\u5feb\u901f\u5f00\u59cb",description:"\u57fa\u4e8eXDSDK\u5b9e\u73b0\u7b80\u5355\u7684\u767b\u5f55\u529f\u80fd",source:"@site/docs/unity.md",slug:"/",permalink:"/XDSDK-Doc/",version:"current",sidebar_label:"Unity",sidebar:"xdsdk",next:{title:"Android\u5feb\u901f\u5f00\u59cb",permalink:"/XDSDK-Doc/android"}},p=[{value:"\u5bfc\u5305",id:"\u5bfc\u5305",children:[]},{value:"TapTap\u767b\u9646\u529f\u80fd",id:"taptap\u767b\u9646\u529f\u80fd",children:[{value:"\u8bbe\u7f6e\u56de\u8c03",id:"\u8bbe\u7f6e\u56de\u8c03",children:[]},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",children:[]},{value:"\u767b\u5f55",id:"\u767b\u5f55",children:[]}]},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[]},{value:"Android \u5bfc\u51faAPK",id:"android-\u5bfc\u51faapk",children:[]},{value:"iOS \u6253\u5305xcode\u5de5\u7a0b",id:"ios-\u6253\u5305xcode\u5de5\u7a0b",children:[]}],b={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u57fa\u4e8eXDSDK\u5b9e\u73b0\u7b80\u5355\u7684\u767b\u5f55\u529f\u80fd"),Object(c.b)("h2",{id:"\u5bfc\u5305"},"\u5bfc\u5305"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u6253\u5f00/xd-sdk-4/sdk/unity/vx.x.x\uff0c\u62d6\u62fdunitypackage\u5230Plugins\u76ee\u5f55  "),Object(c.b)("li",{parentName:"ol"},"\u5168\u90e8\u9009\u62e9\uff0c\u70b9\u51fbimport   "),Object(c.b)("li",{parentName:"ol"},"\u5bfc\u5165\u540e\uff0c\u5c06 Plugins/script \u4e0b\u9762\u7684 XDSDKListener.cs \u811a\u672c\u6587\u4ef6\u62d6\u52a8\u5230\u957f\u751f\u547d\u5468\u671f\u7684\u5bf9\u8c61\u4e2d\u8fdb\u884c\u811a\u672c\u6302\u63a5  ")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u60a8\u53ef\u4ee5\u53c2\u8003",Object(c.b)("a",{parentName:"strong",href:"#"},"\u5feb\u901f\u5f00\u59cbdemo"))),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"http://qnblog.ijemy.com/WX20201125-093759.png",alt:"unitypackage import"}),Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("strong",{parentName:"p"},"\u81f3\u6b64\uff0c\u5df2\u7ecf\u5c06XDSDK\u5bfc\u5165\u81ea\u5df1\u7684\u5de5\u7a0b"),"   "),Object(c.b)("h2",{id:"taptap\u767b\u9646\u529f\u80fd"},"TapTap\u767b\u9646\u529f\u80fd"),Object(c.b)("h3",{id:"\u8bbe\u7f6e\u56de\u8c03"},"\u8bbe\u7f6e\u56de\u8c03"),Object(c.b)("h4",{id:"api"},"API"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c#"},"public static void SetCallback(XDCallback callback)\n")),Object(c.b)("h4",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c#"},"//XDSDKCallback\u9700\u8981\u5b9e\u73b0XDCallback\u63a5\u53e3\u7684\u6240\u6709\u65b9\u6cd5\n XDSDK.SetCallback(new XDSDKCallback());\n")),Object(c.b)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),Object(c.b)("p",null,"XDSDK.InitSDK"),Object(c.b)("h4",{id:"api-1"},"API"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c#"},"/**\n * @param appid \u5fc3\u52a8AppID\n * @param aOrientation \u5c4f\u5e55\u65b9\u5411\uff0c0\u8868\u793a\u6a2a\u5c4f\uff0c1\u8868\u793a\u7ad6\u5c4f\n * @param channel \u6e20\u9053\u53f7\n * @param version \u7248\u672c\u53f7\n * @param enableTapDB \u662f\u5426\u5f00\u542fTapDB\n */\n\npublic static void InitSDK(string appid, int aOrientation, string channel, string version, bool enableTapdb)\n")),Object(c.b)("h4",{id:"\u793a\u4f8b\u4ee3\u7801-1"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c#"},'XDSDK.InitSDK ("xxxxxx", 1,"xx","xx",true);\n')),Object(c.b)("h3",{id:"\u767b\u5f55"},"\u767b\u5f55"),Object(c.b)("h4",{id:"api-2"},"API"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c#"},"public static void TapTapLogin()\n")),Object(c.b)("h4",{id:"\u793a\u4f8b\u4ee3\u7801-2"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c#"},"XDSDK.TapTapLogin();\n")),Object(c.b)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"XDCallback\u65b9\u6cd5\u9700\u8981\u5168\u90e8\u5b9e\u73b0\uff0c\u5efa\u8baecopy demo\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u62a5\u9519  "),Object(c.b)("li",{parentName:"ul"},"InitSDK\u7684appid\u786e\u8ba4\u662f\u4ece\u5f00\u53d1\u8005\u540e\u53f0\u6b63\u786e\u83b7\u53d6  "),Object(c.b)("li",{parentName:"ul"},"\u6ce8\u610fXDSDKListener.cs\u7684\u6302\u8f7d")),Object(c.b)("h2",{id:"android-\u5bfc\u51faapk"},"Android \u5bfc\u51faAPK"),Object(c.b)(i.a,{color:"#f00",mdxType:"Highlight"},"* \u8bf7\u786e\u4fdd\u7b7e\u540d\u6587\u4ef6\u548c\u5305\u540d\u662f\u5728\u5f00\u53d1\u8005\u4e2d\u5fc3\u6b63\u786e\u914d\u7f6e\u8fc7\u7684\uff0cclient_id\u4ece\u5f00\u53d1\u8005\u4e2d\u5fc3\u83b7\u53d6"),Object(c.b)("p",null,"\u6309\u4e0b\u9762\u6b65\u9aa4\u5373\u53ef\u6210\u529f\u6253\u5305\u5b89\u88c5"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"http://qnblog.ijemy.com/xd_android_releaseapk.png",alt:null})),Object(c.b)("h2",{id:"ios-\u6253\u5305xcode\u5de5\u7a0b"},"iOS \u6253\u5305xcode\u5de5\u7a0b"))}u.isMDXComponent=!0},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=b(n),s=r,O=u["".concat(i,".").concat(s)]||u[s]||d[s]||c;return n?a.a.createElement(O,l(l({ref:t},p),{},{components:n})):a.a.createElement(O,l({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<c;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),c=function(e){var t=e.children,n=e.color;return a.a.createElement("span",{style:{color:n,padding:"0.2rem"}},t)}}}]);