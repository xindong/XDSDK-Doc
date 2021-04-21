(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),l=(n(0),n(88)),b=n(89),c={id:"fun-pay",title:"\u652f\u4ed8",sidebar_label:"\u652f\u4ed8&\u5e7f\u544a"},i={unversionedId:"fun-pay",id:"fun-pay",isDocsHomePage:!1,title:"\u652f\u4ed8",description:"\u5185\u8d2d",source:"@site/docs/fun-pay.md",slug:"/fun-pay",permalink:"/XDSDK-Doc/fun-pay",version:"current",sidebar_label:"\u652f\u4ed8&\u5e7f\u544a"},d=[{value:"\u5185\u8d2d",id:"\u5185\u8d2d",children:[{value:"\u6d41\u7a0b\u56fe",id:"\u6d41\u7a0b\u56fe",children:[]},{value:"\u53d1\u8d77\u652f\u4ed8",id:"\u53d1\u8d77\u652f\u4ed8",children:[]},{value:"\u6062\u590d\u652f\u4ed8",id:"\u6062\u590d\u652f\u4ed8",children:[]},{value:"\u6062\u590d\u8ba2\u5355",id:"\u6062\u590d\u8ba2\u5355",children:[]},{value:"\u652f\u4ed8\u7ed3\u679c",id:"\u652f\u4ed8\u7ed3\u679c",children:[]}]},{value:"\u5e7f\u544a",id:"\u5e7f\u544a",children:[{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]}]}],p={toc:d};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u5185\u8d2d"},"\u5185\u8d2d"),Object(l.b)("h3",{id:"\u6d41\u7a0b\u56fe"},"\u6d41\u7a0b\u56fe"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://qnblog.ijemy.com/xd_pay.png",alt:"image"})),Object(l.b)("h3",{id:"\u53d1\u8d77\u652f\u4ed8"},"\u53d1\u8d77\u652f\u4ed8"),Object(l.b)(b.a,{color:"#f00",mdxType:"Highlight"},"\u4e0d\u4fdd\u8bc1\u5728\u4efb\u4f55\u60c5\u51b5\u4e0b\u90fd\u80fd\u6536\u5230\u56de\u8c03\uff0c\u8bf7\u52ff\u76f4\u63a5\u4f7f\u7528SDK\u8fd4\u56de\u7684\u652f\u4ed8\u7ed3\u679c\u4f5c\u4e3a\u6700\u7ec8\u5224\u5b9a\u8ba2\u5355\u72b6\u6001\u7684\u4f9d\u636e\u3002 \u4e3a\u4e86\u6536\u5230\u652f\u4ed8\u56de\u8c03\uff0c\u9700\u8981\u5728\u5e94\u7528\u542f\u52a8\u540e\u5c31\u8bbe\u7f6e\u597d\u652f\u4ed8\u76f8\u5173\u529f\u80fd\u3002"),Object(l.b)("p",null,"\u8c03\u7528\u8be5\u63a5\u53e3\u53d1\u8d77\u652f\u4ed8\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cs"},"/**\n* @param info \u652f\u4ed8\u76f8\u5173\u4fe1\u606f\uff0c\u6ce8\u610fkey\u548cvalue\u90fd\u662f\u5b57\u7b26\u4e32\u7c7b\u578b\n*/\npublic static bool Pay(Dictionary<string, string> info)\n")),Object(l.b)("h4",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cs"},'Dictionary<string, string> info = new Dictionary<string,string>();\ninfo.Add("OrderId", "1234567890123456789012345678901234567890");\ninfo.Add("Product_Price", "1");\ninfo.Add("EXT", "abcd|efgh|1234|5678");\ninfo.Add("Sid", "2");\ninfo.Add("Role_Id", "3");\ninfo.Add("Product_Id", "4");\ninfo.Add("Product_Name", "648\u5927\u793c\u5305");\ninfo.Add("EXT", "{\\"payCallbackCode\\":2}");\uff08\uff09\nXDSDK.Pay (info);\n')),Object(l.b)("p",null,"\u5176\u4e2dinfo\u7684\u5b57\u6bb5\u5982\u4e0b\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u53c2\u6570"),Object(l.b)("th",{parentName:"tr",align:null},"\u5fc5\u987b"),Object(l.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Product_Name"),Object(l.b)("td",{parentName:"tr",align:null},"\u662f"),Object(l.b)("td",{parentName:"tr",align:null},"\u5546\u54c1\u540d\u79f0\uff0c\u5efa\u8bae\u4ee5\u6e38\u620f\u540d\u79f0\u5f00\u5934\uff0c\u65b9\u4fbf\u8d22\u52a1\u5bf9\u8d26")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Product_Id"),Object(l.b)("td",{parentName:"tr",align:null},"\u662f"),Object(l.b)("td",{parentName:"tr",align:null},"\u5546\u54c1ID")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Product_Price"),Object(l.b)("td",{parentName:"tr",align:null},"\u662f"),Object(l.b)("td",{parentName:"tr",align:null},"\u5546\u54c1\u4ef7\u683c\uff08\u5355\u4f4d\u5206\uff09")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Sid"),Object(l.b)("td",{parentName:"tr",align:null},"\u662f"),Object(l.b)("td",{parentName:"tr",align:null},"\u6240\u5728\u670d\u52a1\u5668ID\uff0c\u4e0d\u80fd\u6709\u7279\u6b8a\u5b57\u7b26\uff0c\u670d\u52a1\u7aef\u652f\u4ed8\u56de\u8c03\u4f1a\u5305\u542b\u8be5\u5b57\u6bb5")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Role_Id"),Object(l.b)("td",{parentName:"tr",align:null},"\u662f"),Object(l.b)("td",{parentName:"tr",align:null},"\u652f\u4ed8\u89d2\u8272ID\uff0c\u670d\u52a1\u7aef\u652f\u4ed8\u56de\u8c03\u4f1a\u5305\u542b\u8be5\u5b57\u6bb5")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"OrderId"),Object(l.b)("td",{parentName:"tr",align:null},"\u5426"),Object(l.b)("td",{parentName:"tr",align:null},"\u6e38\u620f\u4fa7\u8ba2\u5355\u53f7\uff0c\u670d\u52a1\u7aef\u652f\u4ed8\u56de\u8c03\u4f1a\u5305\u542b\u8be5\u5b57\u6bb5")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"EXT"),Object(l.b)("td",{parentName:"tr",align:null},"\u5426"),Object(l.b)("td",{parentName:"tr",align:null},'\u989d\u5916\u4fe1\u606f\uff0c\u6700\u957f512\u4e2a\u5b57\u7b26\uff0c\u670d\u52a1\u7aef\u652f\u4ed8\u56de\u8c03\u4f1a\u5305\u542b\u8be5\u5b57\u6bb5\u3002\u53ef\u7528\u4e8e\u6807\u8bb0\u533a\u5206\u5145\u503c\u56de\u8c03\u5730\u5740\uff0c\u5982\u9700\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u8bf7\u8054\u7cfb\u5e73\u53f0\u8fdb\u884c\u914d\u7f6e\u3002#### \u793a\u4f8b\u4ee3\u7801\uff1ainfo.Add("EXT", "{\\"payCallbackCode\\":2}");')))),Object(l.b)("h3",{id:"\u6062\u590d\u652f\u4ed8"},"\u6062\u590d\u652f\u4ed8"),Object(l.b)(b.a,{color:"#f00",mdxType:"Highlight"},"\u6062\u590d\u652f\u4ed8\u903b\u8f91\uff0cSDK 4.0.1(iOS)\u4e4b\u540e\u6dfb\u52a0\u3002"),Object(l.b)("p",null,"\u4f18\u5316\u524d\uff1a"),Object(l.b)("p",null,"\u5728\u73a9\u5bb6\u7b2c\u4e00\u7b14\u6389\u5355\u65f6\uff0cSDK \u4e00\u76f4\u5904\u4e8e\u7b49\u5f85\u63a5\u6536\u6536\u636e\u7684\u72b6\u6001\uff0c\u6b64\u65f6\uff0c\n\u7528\u6237\u4e00\u76f4\u5728\u6e38\u620f\u4e2d\uff0c\u82f9\u679c\u968f\u65f6\u53ef\u80fd\u53d1\u9001\u6536\u636e\u7ed9 SDK\uff0c\u4e00\u65e6\u53d1\u9001\uff0cSDK \u5c31\u4f1a\u901a\u77e5\u6e38\u620f\u53d1\u9001\u9053\u5177\uff1b\n\u7528\u6237\u5173\u95ed\u6e38\u620f\uff08\u6740\u8fdb\u7a0b\u6216\u9000\u540e\u53f0\uff09\uff0c\u6b64\u65f6 SDK \u4e0d\u518d\u63a5\u6536\u82f9\u679c\u6536\u636e\u3002\u5bfc\u81f4\u5373\u4f7f\u8fd9\u671f\u95f4\u5982\u679c\u82f9\u679c\u6709\u53d1\u9001\u6536\u636e\u6765\uff0cSDK \u4e5f\u6536\u4e0d\u5230\u3002\u9664\u975e\u73a9\u5bb6\u7b2c\u4e8c\u6b21\u5145\u503c\uff0c\u82f9\u679c\u4f1a\u8fde\u540c\u4e0a\u4e00\u7b14\u672a\u5b8c\u6210\u8ba2\u5355\u4e00\u6b21\u6027\u53d1\u9001\uff0c\u9020\u6210\u73a9\u5bb6\u540c\u65f6\u6536\u5230\u4e24\u7b14\u9053\u5177\u7684\u60c5\u51b5\u3002"),Object(l.b)("p",null,"\u4f18\u5316\u540e\uff1a"),Object(l.b)("p",null,"\u5f53\u73a9\u5bb6\u518d\u6b21\u6253\u5f00\u6e38\u620f\uff0cSDK \u518d\u6b21\u5411\u82f9\u679c\u8bf7\u6c42\u4e00\u6b21\u6536\u636e\u4fe1\u606f\u3002\u5982\u6709\u6389\u5355\u7684\u6536\u636e\uff0c\u4e14\u73a9\u5bb6\u767b\u5f55\u6210\u529f\u540e\uff0c\u5219\u901a\u77e5\u6e38\u620f\uff0c\u6e38\u620f\u6765\u6536\u5230\u901a\u77e5\u540e\u6765\u51b3\u5b9a\u662f\u5426\u8981\u8865\u53d1\u9053\u5177\u3002"),Object(l.b)(b.a,{color:"#f00",mdxType:"Highlight"},"\u6e38\u620f\u5185\u8d2d\u6d41\u7a0b\u56fe\uff1a"),Object(l.b)(b.a,{color:"#f00",mdxType:"Highlight"},"\u6ce8\u610f: \u5982\u679c\u6709\u9057\u7559\u672a\u5b8c\u6210\u8ba2\u5355\uff0c\u5728\u63a5\u6536\u5230\u6062\u590d\u8ba2\u5355\u56de\u8c03\u540e\uff0c(\u82e5\u5355\u4e2a\u7528\u6237\u53ef\u80fd\u62e5\u6709\u591a\u4e2a\u8d26\u53f7\uff0c\u53ef\u4ee5\u8bf7\u6c42\u7528\u6237\u786e\u8ba4\u540e\uff09\u8c03\u7528\u6062\u590d\u8ba2\u5355\u63a5\u53e3\u3002"),Object(l.b)("p",null,"\u8bf4\u660e\uff1a"),Object(l.b)("p",null,"\u5728\u6389\u5355\u7684\u60c5\u51b5\u4e0b\uff0cSDK\u53ea\u80fd\u83b7\u53d6\u8ba2\u5355\u7684\u57fa\u672c\u4fe1\u606f\uff0c\u5982\u5546\u54c1ID\u3001\u82f9\u679c\u4fa7\u8ba2\u5355ID\uff08\u975e\u6e38\u620f\u751f\u6210order_id\uff09\u548c\u5546\u54c1\u6570\u91cf\uff0c\u4e0d\u80fd\u76f4\u63a5\u5bf9\u5e94\u5230\u7528\u6237\uff0c\u6240\u4ee5\u65e0\u6cd5\u76f4\u63a5\u5151\u6362\u5546\u54c1\u3002"),Object(l.b)("p",null,"\u6e38\u620f\u5728\u6536\u5230\u6389\u5355\u56de\u8c03\u4e4b\u540e\uff0c\u53ef\u4ee5\u5f39\u7a97\u8bf7\u7528\u6237\u786e\u8ba4\u662f\u5426\u9700\u8981\u6062\u590d\u5546\u54c1\uff0c\u5982\u9700\u8981\uff0c\u5219\u7528\u56de\u8c03\u63d0\u4f9b\u7684\u5df2\u6709\u53c2\u6570\uff0c\u52a0\u4e0a\u5176\u4ed6\u9700\u8981\u7684\u53c2\u6570\uff0c\u5982\u89d2\u8272ID\uff0c\u670d\u52a1\u5668ID\u7b49\uff0c\u4f7f\u7528\u6062\u590d\u8ba2\u5355\u63a5\u53e3\u6062\u590d\u8be5\u5546\u54c1\u3002"),Object(l.b)(b.a,{color:"#f00",mdxType:"Highlight"},"SDK\u4f1a\u63d0\u4f9b\u6d4b\u8bd5\u5305\uff0c\u4f9b\u6e38\u620f\u4f7f\u7528\u6c99\u76d2\u6d4b\u8bd5\uff08\u8d2d\u4e70\u4e4b\u540e\u4f1a\u9020\u6210\u6389\u5355\uff09\uff0c\u6e38\u620f\u8c03\u7528\u6062\u590d\u63a5\u53e3\u5982\u679c\u6210\u529f\u5230\u8d26\u5219\u4e3a\u6d4b\u8bd5\u6210\u529f\u3002"),Object(l.b)("p",null,"\u6e38\u620f\u5185\u5f39\u7a97\u793a\u4f8b(\u6587\u6848\u505a\u76f8\u5e94\u4fee\u6539)\uff1a"),Object(l.b)("p",null,"\u56de\u8c03\u65b9\u6cd5"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cs"},"/// \u6709\u672a\u5b8c\u6210\u7684\u8ba2\u5355\u56de\u8c03\uff0c\u6bd4\u5982\uff1a\u793c\u5305\u7801.\u6ce8\u610f\uff1a\u591a\u4e2a\u672a\u5b8c\u6210\u8ba2\u5355\u4f1a\u5728\u4e00\u4e2a\u6570\u7ec4\u4e2d\u4e00\u8d77\u56de\u8c03\u3002\uff08\u53ea\u4f1a\u5728\u767b\u5f55\u72b6\u6001\u4e0b\u56de\u8c03\uff09\n/// @param resultList \u8ba2\u5355\u4fe1\u606fList\u3002\n/// \u5355\u4e2a\u672a\u5b8c\u6210\u8ba2\u5355\u4fe1\u606f\u5305\u542b\uff1a     TransactionIdentifier \uff1a\u8ba2\u5355\u6807\u8bc6 \uff0c\u6062\u590d\u8d2d\u4e70\u65f6\u9700\u8981\u56de\u4f20\n///                                    Product_Id \uff1a\u5546\u54c1ID\uff0c\n///                                        Quantity\uff1a\u5546\u54c1\u6570\u91cf\npublic override void RestoredPayment(List<Dictionary<string,string>> resultList){\n    }\n")),Object(l.b)("h3",{id:"\u6062\u590d\u8ba2\u5355"},"\u6062\u590d\u8ba2\u5355"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cs"},"/**\n* @param info \u652f\u4ed8\u76f8\u5173\u4fe1\u606f\uff0c\u6ce8\u610fkey\u548cvalue\u90fd\u662f\u5b57\u7b26\u4e32\u7c7b\u578b\n*/\npublic static bool RestorePay(Dictionary<string, string> info)\n\n")),Object(l.b)("p",null,"\u5176\u4e2dinfo\u7684\u5b57\u6bb5\u5982\u4e0b\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u53c2\u6570"),Object(l.b)("th",{parentName:"tr",align:null},"\u5fc5\u987b"),Object(l.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"TransactionIdentifier"),Object(l.b)("td",{parentName:"tr",align:null},"\u662f"),Object(l.b)("td",{parentName:"tr",align:null},"\u9700\u8981\u6062\u590d\u7684\u8ba2\u5355\u6807\u8bc6\uff0cSDK\u6062\u590d\u8ba2\u5355\u56de\u8c03\u4e2d\u5305\u542b")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Product_Name"),Object(l.b)("td",{parentName:"tr",align:null},"\u662f"),Object(l.b)("td",{parentName:"tr",align:null},"\u5546\u54c1\u540d\u79f0\uff0c\u5efa\u8bae\u4ee5\u6e38\u620f\u540d\u79f0\u5f00\u5934\uff0c\u65b9\u4fbf\u8d22\u52a1\u5bf9\u8d26")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Product_Id"),Object(l.b)("td",{parentName:"tr",align:null},"\u662f"),Object(l.b)("td",{parentName:"tr",align:null},"\u5546\u54c1ID\uff0c\u5230AppStore\u8d2d\u4e70\u7684\u5546\u54c1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Product_Price"),Object(l.b)("td",{parentName:"tr",align:null},"\u662f"),Object(l.b)("td",{parentName:"tr",align:null},"\u5546\u54c1\u4ef7\u683c\uff08\u5355\u4f4d\u5206\uff09\uff0c\u5bf9\u4e8eAppStore\u652f\u4ed8\uff0c\u8be5\u5b57\u6bb5\u6ca1\u6709\u7528\u5904\uff0c\u4f46\u662f\u9700\u8981\u4f20\u9012\u771f\u5b9e\u91d1\u989d\uff0c\u6709\u591a\u5904\u9700\u8981\u7528\u5230")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Sid"),Object(l.b)("td",{parentName:"tr",align:null},"\u662f"),Object(l.b)("td",{parentName:"tr",align:null},"\u6240\u5728\u670d\u52a1\u5668ID\uff0c\u4e0d\u80fd\u6709\u7279\u6b8a\u5b57\u7b26\uff0c\u670d\u52a1\u7aef\u652f\u4ed8\u56de\u8c03\u4f1a\u5305\u542b\u8be5\u5b57\u6bb5")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Role_Id"),Object(l.b)("td",{parentName:"tr",align:null},"\u662f"),Object(l.b)("td",{parentName:"tr",align:null},"\u652f\u4ed8\u89d2\u8272ID\uff0c\u670d\u52a1\u7aef\u652f\u4ed8\u56de\u8c03\u4f1a\u5305\u542b\u8be5\u5b57\u6bb5")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"OrderId"),Object(l.b)("td",{parentName:"tr",align:null},"\u5426"),Object(l.b)("td",{parentName:"tr",align:null},"\u6e38\u620f\u4fa7\u8ba2\u5355\u53f7\uff0c\u670d\u52a1\u7aef\u652f\u4ed8\u56de\u8c03\u4f1a\u5305\u542b\u8be5\u5b57\u6bb5")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"EXT"),Object(l.b)("td",{parentName:"tr",align:null},"\u5426"),Object(l.b)("td",{parentName:"tr",align:null},"\u989d\u5916\u4fe1\u606f\uff0c\u6700\u957f512\u4e2a\u5b57\u7b26\uff0c\u670d\u52a1\u7aef\u652f\u4ed8\u56de\u8c03\u4f1a\u5305\u542b\u8be5\u5b57\u6bb5\u3002\u53ef\u7528\u4e8e\u6807\u8bb0\u533a\u5206\u5145\u503c\u56de\u8c03\u5730\u5740\uff0c\u5982\u9700\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u8bf7\u8054\u7cfb\u5e73\u53f0\u8fdb\u884c\u914d\u7f6e\u3002#### \u793a\u4f8b\u4ee3\u7801\uff1a",'[prdInfo setObject:@"{',"\\",'"payCallbackCode',"\\",'":1}" forKey:@"EXT"]',";")))),Object(l.b)("h3",{id:"\u652f\u4ed8\u7ed3\u679c"},"\u652f\u4ed8\u7ed3\u679c"),Object(l.b)("p",null,"\u8c03\u7528\u53d1\u8d77\u652f\u4ed8\u548c\u6062\u590d\u652f\u4ed8\u63a5\u53e3\u4f1a\u89e6\u53d1\u4e0b\u5217\u56de\u8c03\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u522b"),Object(l.b)("th",{parentName:"tr",align:null},"\u56de\u8c03\u65b9\u6cd5"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u652f\u4ed8\u5b8c\u6210"),Object(l.b)("td",{parentName:"tr",align:null},"public void OnPayCompleted()")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u652f\u4ed8\u5931\u8d25"),Object(l.b)("td",{parentName:"tr",align:null},"public void OnPayFailed(string msg)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u652f\u4ed8\u53d6\u6d88"),Object(l.b)("td",{parentName:"tr",align:null},"public void OnPayCanceled()")))),Object(l.b)("h2",{id:"\u5e7f\u544a"},"\u5e7f\u544a"),Object(l.b)("p",null,"XDSDK\u5185\u90e8\u96c6\u6210\u4e86\u90e8\u5206\u4e3b\u8981\u6e20\u9053\u5e7f\u544aSDK\uff0c\u5305\u62ec\u4eca\u65e5\u5934\u6761\u5de8\u91cf\u5e7f\u544a\u5e73\u53f0SDK\uff0c\u548c\u817e\u8baf\u5e7f\u70b9\u901aSDK\u3002\u5fc5\u8981\u4e8b\u4ef6\uff08\u5982\u6ce8\u518c\uff09\u4f1a\u5728SDK\u5185\u90e8\u53d1\u9001\uff0c\u5145\u503c\u4e8b\u4ef6\u7531XDSDK\u670d\u52a1\u7aef\u53d1\u9001\u4e8b\u4ef6\u5230\u76f8\u5e94\u5e73\u53f0\u3002\u6e38\u620f\u4e0d\u7528\u505a\u989d\u5916\u5bf9\u63a5\u5de5\u4f5c\u3002"),Object(l.b)("p",null,"\u9700\u8981\u63a5\u5165\u76f8\u5e94\u5e73\u53f0\u7684SDK\u8bf7\u8054\u7cfbXDSDK\u540e\u7aef\u914d\u7f6e\u5e7f\u544a\u53c2\u6570\u3002"),Object(l.b)("h3",{id:"ios"},"iOS"),Object(l.b)("p",null,"\u4eca\u65e5\u5934\u6761\uff1aTTTracker.framework\uff0c\u7248\u672c2.0.6"),Object(l.b)("p",null,"\u5e7f\u70b9\u901a\uff1aGDTActionSDK.framework\uff0c\u7248\u672c1.4.9"),Object(l.b)("p",null,"\u6e38\u620f\u6253\u5305\u65f6\u52a0\u5165\u5bf9\u5e94\u7684SDK\u5373\u53ef\u3002"),Object(l.b)("p",null,"\u6ce8\u610f\uff1a"),Object(l.b)("p",null,"1.\u5e7f\u70b9\u901aSDK\u5728\u6dfb\u52a0\u5230Link Binary With Libraries\u4e4b\u540e\uff0c\u8fd8\u5fc5\u987b\u6dfb\u52a0\u5230Embedded Contend\u4e2d\u3002"),Object(l.b)("p",null,"2.build setting \u4e2dOther Link Flag \u4e2d\u6dfb\u52a0-ObjC\u3002"),Object(l.b)("h3",{id:"android"},"Android"),Object(l.b)("p",null,"\u4eca\u65e5\u5934\u6761\uff1a\u7248\u672c2.0.6"),Object(l.b)("p",null,"\u5e7f\u70b9\u901a\uff1a\u7248\u672c1.4.9"),Object(l.b)("p",null,"\u9700\u8981\u4f7f\u7528\u5e7f\u544a\u5305\u65f6\uff0c\u5c06XDAdAction.aar\u52a0\u5165\u5de5\u7a0b\u3002\u5e76\u6dfb\u52a0\u65b0\u6743\u9650"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'<uses-permission android:name="android.permission.READ_PHONE_STATE"/>\n')),Object(l.b)("p",null,"\u82e5\u9700\u8981\u51fa\u591a\u4e2a\u6e20\u9053\u5305\uff0c\u7531\u5e02\u573a\u8054\u7cfbXDSDK\uff0c\u63d0\u4f9b\u6240\u9700\u6587\u4ef6\u3002"),Object(l.b)("p",null,"SDK\u63d0\u4f9b\u63a5\u53e3\uff0c\u83b7\u53d6\u5f53\u524d\u5305\u7684\u6e20\u9053\u540d\u3002\uff08\u5355\u63a5TapDB\u65f6\u53ef\u4ee5\u4f7f\u7528\u6539\u63a5\u53e3\u83b7\u53d6\u6e20\u9053\uff09"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"//\u83b7\u53d6\u5f53\u524d\u5305\u7684\u6e20\u9053\u540d\uff08\u5b89\u5353\uff09\npublic static string GetAdChannelName()\n\n")))}o.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},o=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),o=p(n),O=a,j=o["".concat(b,".").concat(O)]||o[O]||u[O]||l;return n?r.a.createElement(j,c(c({ref:t},d),{},{components:n})):r.a.createElement(j,c({ref:t},d))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var d=2;d<l;d++)b[d]=n[d];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),l=function(e){var t=e.children,n=e.color;return r.a.createElement("span",{style:{color:n,padding:"0.2rem"}},t)}}}]);