(window["webpackJsonpangular-app"]=window["webpackJsonpangular-app"]||[]).push([[32],{QiT1:function(l,n,e){"use strict";e.r(n),e.d(n,"Managed_AccountsModuleNgFactory",function(){return ll});var a=e("8Y7J"),t=e("s7LF"),u=e("+lH4"),d=e("64ls"),i=e("u790"),r=e("BIDT"),o=e("lMXt"),c=e("Hr86"),s=e("rUxc"),m=e("fmxY"),p=e("x8M4"),g=e("FE24"),b=e("6No5");const v={getManagedCardsCount:{_id:"wm-getManagedCardsCount-wm.ServiceVariable-1626015756174",name:"getManagedCardsCount",owner:"Page",category:"wm.ServiceVariable",dataBinding:[{target:"hostName",value:"bind:servicehost",type:"string"},{target:"authorization",value:"bind:authtoken",type:"string"}],type:"integer",service:"ManagedAccounts",operation:"getManagedCardsCount",operationId:"ManagedAccountsController_getManagedCardsCount",operationType:"get",serviceType:"JavaService",dataSet:[],isList:!1,maxResults:20,startUpdate:!1,autoUpdate:!0,inFlightBehavior:"executeLast",transformationRequired:!1,saveInPhonegap:!1,controller:"ManagedAccounts"},JS_getManagedAccounts:{_id:"wm-JS_getManagedAccounts-wm.ServiceVariable-1625039773183",name:"JS_getManagedAccounts",owner:"Page",category:"wm.ServiceVariable",dataBinding:[{target:"hostName",value:"bind:servicehost",type:"string"},{target:"authorization",value:"bind:authtoken",type:"string"},{target:"accountId",value:"bind:enduserid",type:"string"}],service:"ManagedAccounts",operation:"getManagedAccount",operationId:"ManagedAccountsController_getManagedAccount",operationType:"get",serviceType:"JavaService",dataSet:[],isList:!0,maxResults:20,startUpdate:!0,autoUpdate:!0,inFlightBehavior:"executeLast",transformationRequired:!1,saveInPhonegap:!1,controller:"ManagedAccounts"},ManagedAccountInfo:{_id:"wm-ManagedAccountInfo-wm.Variable-1625039708151",name:"ManagedAccountInfo",owner:"Page",category:"wm.Variable",dataBinding:[{target:"dataBinding",value:'bind:servicehost=="Railsbank"?(Variables.JS_getManagedAccounts.dataSet):(Variables.JS_getManagedAccounts.dataSet[0].accounts)'}],dataSet:[{data:""}],type:"entry",isList:!0,twoWayBinding:!1,saveInPhonegap:!1},supportedLocale:{_id:"wm-wm.Variable1402640443182",name:"supportedLocale",owner:"Page",category:"wm.Variable",dataSet:{en:"English"},type:"string",isList:!1,saveInPhonegap:!1}};var f=e("tMU/");class w extends f.o{constructor(l){super(),this.injector=l,this.prefabName="Managed_Accounts",super.init()}getVariables(){return JSON.parse(JSON.stringify(v))}evalUserScript(l,n,e){((l,n,e)=>{l.onPropertyChange=function(l,n,e){},l.onReady=function(){l.Widgets.list1.pagesize=l.itemsperpage},l.list1Click=function(n,e){l.onLedgerselect()},l.button3Click=function(n,e,a,t){l.onTransferfundsclick(e,a)},l.refreshLedgers=function(){l.Variables.JS_getManagedAccounts.invoke()},l.maskAccountNumber=function(l){return l.substring(0,10).replace(new RegExp("[0-9]{0,1}","g"),"X")+"-"+l.substring(14,18)},l.getAccountNumber=function(l){return lastDigitsOfAccount=l.slice(l.length-4),"XXXX-XXXX"+lastDigitsOfAccount}})(l)}}g.e.forRoot(),b.d.forRoot();let y=(()=>{class l{}return l.rootComponent=w,l})();var _=e("iutN"),I=e("1lUd"),h=e("pMnS"),A=e("XePT"),C=e("z5nN"),L=e("IORg"),M=e("xYUj"),R=e("g2TG"),S=e("8wCY"),j=e("IbpX"),P=e("SVse"),V=a["\u0275crt"]({encapsulation:2,styles:[[""]],data:{}});function x(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,48,"div",[["name","card1"],["wmCard",""]],null,null,null,M.c,M.a)),a["\u0275prd"](6144,null,R.ab,null,[r.a]),a["\u0275did"](2,5488640,null,1,r.a,[a.Injector],null,null),a["\u0275qud"](603979776,6,{reDrawableComponents:1}),(l()(),a["\u0275eld"](4,16777216,null,2,44,"div",[["fontsize","0.8"],["fontunit","em"],["name","card_content1"],["partialContainer",""],["wmCardContent",""]],null,null,null,M.d,M.b)),a["\u0275did"](5,5488640,null,0,r.b,[a.Injector],null,null),a["\u0275prd"](2048,null,R.ab,null,[r.b]),a["\u0275did"](7,16384,null,0,R.J,[[4,R.ab]],null,null),a["\u0275did"](8,16384,null,0,R.G,[[4,R.ab],a.ViewContainerRef,a.ElementRef,a.Injector,S.m,[8,null],a.ComponentFactoryResolver,S.G],null,null),(l()(),a["\u0275eld"](9,0,null,0,39,"div",[["name","layoutgrid2"],["wmLayoutGrid",""]],null,null,null,null,null)),a["\u0275prd"](6144,null,R.ab,null,[i.d]),a["\u0275did"](11,5455872,null,1,i.d,[a.Injector],null,null),a["\u0275qud"](603979776,7,{reDrawableComponents:1}),(l()(),a["\u0275eld"](13,0,null,null,14,"div",[["name","gridrow3"],["wmLayoutGridRow",""]],null,null,null,null,null)),a["\u0275prd"](6144,null,R.ab,null,[i.c]),a["\u0275did"](15,5455872,null,0,i.c,[a.Injector],null,null),(l()(),a["\u0275eld"](16,0,null,null,5,"div",[["class","col-xs-8"],["columnwidth","8"],["name","gridcolumn5"],["wmLayoutGridColumn",""]],null,null,null,null,null)),a["\u0275prd"](6144,null,R.ab,null,[i.a]),a["\u0275did"](18,5455872,null,0,i.a,[a.Injector,[8,null],S.M],null,null),(l()(),a["\u0275eld"](19,0,null,null,2,"label",[["caption.bind","servicehost==\"APIVendor(R)\"?(item.ledger_primary_use_types[0] == 'ledger-primary-use-types-payments' ? 'Payment Ledger': item.ledger_primary_use_types[0] == 'ledger-primary-use-types-deposit' ? 'Deposit Ledger' : item.ledger_primary_use_types[0] == 'ledger-primary-use-types-settlement' ? 'Settlement Ledger' : ''):(servicehost==\"APIVendor(W)\"?(item.tag):(item.virtual_account_ref))"],["class","p text-muted"],["fontsize","12"],["margintop","0px"],["name","JobTitle"],["wmLabel",""]],[[1,"aria-label",0]],null,null,null,null)),a["\u0275prd"](6144,null,R.ab,null,[u.g]),a["\u0275did"](21,5455872,[["wm_label55",4]],0,u.g,[a.Injector,R.Z],null,null),(l()(),a["\u0275eld"](22,0,null,null,5,"div",[["class","col-xs-4"],["columnwidth","4"],["name","gridcolumn6"],["wmLayoutGridColumn",""]],null,null,null,null,null)),a["\u0275prd"](6144,null,R.ab,null,[i.a]),a["\u0275did"](24,5455872,null,0,i.a,[a.Injector,[8,null],S.M],null,null),(l()(),a["\u0275eld"](25,0,null,null,2,"label",[["caption.bind",'servicehost == "APIVendor(R)" ? (item.asset_type == \'gbp\' ? \'\xa3\' : item.asset_type == \'usd\' ? \'$\': \'\u20ac\') :(servicehost=="APIVendor(W)"?(item.currency=="GBP"?"\xa3":item.currency=="USD?"?"$": "\u20ac"):(item.virtual_account_curr=="EUR"?"\u20ac":\'\xa3\'))'],["class","pull-right account-currency"],["fontsize","14"],["marginbottom","0px"],["name","label4"],["paddingleft","0.5em"],["paddingright","0.5em"],["wmLabel",""]],[[1,"aria-label",0]],null,null,null,null)),a["\u0275prd"](6144,null,R.ab,null,[u.g]),a["\u0275did"](27,5455872,[["wm_label56",4]],0,u.g,[a.Injector,R.Z],null,null),(l()(),a["\u0275eld"](28,0,null,null,11,"div",[["name","gridrow4"],["wmLayoutGridRow",""]],null,null,null,null,null)),a["\u0275prd"](6144,null,R.ab,null,[i.c]),a["\u0275did"](30,5455872,null,0,i.c,[a.Injector],null,null),(l()(),a["\u0275eld"](31,0,null,null,8,"div",[["columnwidth","12"],["name","gridcolumn7"],["wmLayoutGridColumn",""]],null,null,null,null,null)),a["\u0275prd"](6144,null,R.ab,null,[i.a]),a["\u0275did"](33,5455872,null,0,i.a,[a.Injector,[8,null],S.M],null,null),(l()(),a["\u0275eld"](34,0,null,null,2,"label",[["caption.bind",'servicehost=="APIVendor(R)"?(item.ledger_meta.ledgerName):(servicehost=="APIVendor(W)"?(item.friendlyName):(item.virtual_account_name))'],["class","h3 media-heading pull-left"],["fontunit","em"],["fontweight","bold"],["name","Name"],["wmLabel",""]],[[1,"aria-label",0]],null,null,null,null)),a["\u0275prd"](6144,null,R.ab,null,[u.g]),a["\u0275did"](36,5455872,[["wm_label57",4]],0,u.g,[a.Injector,R.Z],null,null),(l()(),a["\u0275eld"](37,0,null,null,2,"label",[["caption.bind",'servicehost=="APIVendor(R)"?getAccountNumber(item.uk_account_number || item.iban): maskAccountNumber(item.id)'],["class","text-muted"],["fontsize","13"],["name","label5"],["paddingright","0.5em"],["wmLabel",""]],[[1,"aria-label",0]],null,null,null,null)),a["\u0275prd"](6144,null,R.ab,null,[u.g]),a["\u0275did"](39,5455872,[["wm_label58",4]],0,u.g,[a.Injector,R.Z],null,null),(l()(),a["\u0275eld"](40,0,null,null,8,"div",[["name","gridrow5"],["wmLayoutGridRow",""]],null,null,null,null,null)),a["\u0275prd"](6144,null,R.ab,null,[i.c]),a["\u0275did"](42,5455872,null,0,i.c,[a.Injector],null,null),(l()(),a["\u0275eld"](43,0,null,null,5,"div",[["columnwidth","12"],["name","gridcolumn9"],["wmLayoutGridColumn",""]],null,null,null,null,null)),a["\u0275prd"](6144,null,R.ab,null,[i.a]),a["\u0275did"](45,5455872,null,0,i.a,[a.Injector,[8,null],S.M],null,null),(l()(),a["\u0275eld"](46,0,null,null,2,"label",[["caption.bind","servicehost==\"APIVendor(R)\"?((item.asset_type == 'gbp' ? '\xa3 ': item.asset_type == 'usd' ? '$ ': '\u20ac ')+ item.amount):(servicehost==\"APIVendor(W)\"?((item.currency == 'GBP' ? '\xa3 ': item.currency == 'USD' ? '$ ': '\u20ac ')+ item.balances.availableBalance / 100):((item.virtual_account_curr == 'GBP' ? '\xa3 ': item.virtual_account_curr == 'USD' ? '$ ': '\u20ac ')+ item.virtual_account_balance))"],["class","h2"],["fontsize","28"],["fontunit","px"],["margintop","0px"],["name","Content"],["show.bind",'itemRef.currentItemWidgets.Name.caption!=""'],["wmLabel",""]],[[1,"aria-label",0]],null,null,null,null)),a["\u0275prd"](6144,null,R.ab,null,[u.g]),a["\u0275did"](48,5455872,[["wm_label59",4]],0,u.g,[a.Injector,R.Z],null,null)],function(l,n){l(n,2,0),l(n,5,0),l(n,11,0),l(n,15,0),l(n,18,0),l(n,21,0),l(n,24,0),l(n,27,0),l(n,30,0),l(n,33,0),l(n,36,0),l(n,39,0),l(n,42,0),l(n,45,0),l(n,48,0)},function(l,n){l(n,19,0,a["\u0275nov"](n,21).hint||"Label text"),l(n,25,0,a["\u0275nov"](n,27).hint||"Label text"),l(n,34,0,a["\u0275nov"](n,36).hint||"Label text"),l(n,37,0,a["\u0275nov"](n,39).hint||"Label text"),l(n,46,0,a["\u0275nov"](n,48).hint||"Label text")})}function J(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,8,null,null,null,null,null,null,null)),(l()(),a["\u0275eld"](1,0,null,null,7,"div",[["class","list-card ledgers-list"],["click.event","list1Click($event, widget)"],["dataset.bind","Variables.JS_getManagedAccounts.dataSet"],["datasource.bind","Variables.JS_getManagedAccounts"],["itemsperrow","xs-1 sm-2 md-3 lg-3"],["listclass","list-group"],["loadingdatamsg.bind",'servicehost=="APIVendor(R)"?"Loading ledgers...":"Loading Accounts..."'],["name","list1"],["navigation","On-Demand"],["nodatamessage.bind",'servicehost=="APIVendor(R)"?"Loading ledgers...":"No Accounts found.."'],["paginationclass","btn-default"],["statehandler","none"],["template","true"],["template-name","Business Card"],["wmList",""],["wmLiveActions",""]],null,null,null,j.b,j.a)),a["\u0275prd"](6144,null,R.ab,null,[o.a]),a["\u0275did"](3,5488640,null,4,o.a,[a.Injector,a.ChangeDetectorRef,R.W,S.m,S.o,a.NgZone,[8,null],[8,null],[8,"Variables.JS_getManagedAccounts.dataSet"],[8,"Variables.JS_getManagedAccounts"],[8,null],[8,null],S.I,S.F],null,null),a["\u0275qud"](603979776,2,{listTemplate:0}),a["\u0275qud"](603979776,3,{listLeftActionTemplate:0}),a["\u0275qud"](603979776,4,{listRightActionTemplate:0}),a["\u0275qud"](603979776,5,{btnComponents:1}),(l()(),a["\u0275and"](0,[[2,2],["listTemplate",2]],null,0,null,x))],function(l,n){l(n,3,0)},null)}function N(l){return a["\u0275vid"](0,[a["\u0275qud"](671088640,1,{prefabContainerDirective:0}),(l()(),a["\u0275eld"](1,0,null,null,4,"div",[["name","prefab_container1"],["scripts-to-load","node_modules-jquery-ui-ui-widgets-droppable.js,node_modules-jquery-ui-ui-widgets-sortable.js"],["wmPrefabContainer",""]],null,null,null,null,null)),a["\u0275prd"](6144,null,R.ab,null,[p.a]),a["\u0275did"](3,5455872,[[1,4]],0,p.a,[a.Injector,S.M],null,null),(l()(),a["\u0275and"](16777216,null,null,1,null,J)),a["\u0275did"](5,16384,null,0,P.t,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,3,0),l(n,5,0,e.compileContent)},null)}function k(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,2,"app-prefab-Managed_Accounts",[],null,null,null,N,V)),a["\u0275prd"](6144,null,S.J,null,[w]),a["\u0275did"](2,4374528,null,0,w,[a.Injector],null,null)],null,null)}var B=a["\u0275ccf"]("app-prefab-Managed_Accounts",w,k,{},{},[]),T=e("IheW"),D=e("2uy1"),F=e("z/SZ"),q=e("7dAJ"),X=e("B0QU"),G=e("qjpJ"),U=e("iInd"),O=e("EApP"),z=e("992W"),W=e("WxLl"),E=e("CRDY"),Z=e("Bwcw"),$=e("LqlI"),Y=e("BtBD"),H=e("xE2l"),K=e("zw+1"),Q=e("JAJP"),ll=a["\u0275cmf"](y,[],function(l){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[_.a,I.a,I.b,h.a,A.a,C.a,C.b,L.b,B]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,P.v,P.u,[a.LOCALE_ID]),a["\u0275mpd"](4608,T.l,T.r,[P.e,a.PLATFORM_ID,T.p]),a["\u0275mpd"](4608,T.s,T.s,[T.l,T.q]),a["\u0275mpd"](5120,T.a,function(l){return[l]},[T.s]),a["\u0275mpd"](4608,T.o,T.o,[]),a["\u0275mpd"](6144,T.m,null,[T.o]),a["\u0275mpd"](4608,T.k,T.k,[T.m]),a["\u0275mpd"](6144,T.b,null,[T.k]),a["\u0275mpd"](4608,T.f,T.n,[T.b,a.Injector]),a["\u0275mpd"](4608,T.c,T.c,[T.f]),a["\u0275mpd"](4608,D.a,D.a,[a.NgZone,a.RendererFactory2,a.PLATFORM_ID]),a["\u0275mpd"](4608,F.a,F.a,[a.ComponentFactoryResolver,a.NgZone,a.Injector,D.a,a.ApplicationRef]),a["\u0275mpd"](4608,g.f,g.f,[]),a["\u0275mpd"](1073742336,t.C,t.C,[]),a["\u0275mpd"](1073742336,t.B,t.B,[]),a["\u0275mpd"](1073742336,t.k,t.k,[]),a["\u0275mpd"](1073742336,P.c,P.c,[]),a["\u0275mpd"](1073742336,q.a,q.a,[]),a["\u0275mpd"](1073742336,R.bb,R.bb,[]),a["\u0275mpd"](1073742336,u.c,u.c,[]),a["\u0275mpd"](1073742336,X.c,X.c,[]),a["\u0275mpd"](1073742336,d.c,d.c,[]),a["\u0275mpd"](1073742336,i.b,i.b,[]),a["\u0275mpd"](1073742336,g.e,g.e,[]),a["\u0275mpd"](1073742336,G.b,G.b,[]),a["\u0275mpd"](1073742336,s.k,s.k,[]),a["\u0275mpd"](1073742336,m.e,m.e,[]),a["\u0275mpd"](1073742336,r.c,r.c,[]),a["\u0275mpd"](1073742336,b.d,b.d,[]),a["\u0275mpd"](1073742336,c.b,c.b,[]),a["\u0275mpd"](1073742336,o.c,o.c,[]),a["\u0275mpd"](1073742336,p.c,p.c,[]),a["\u0275mpd"](1073742336,U.p,U.p,[[2,U.u],[2,U.o]]),a["\u0275mpd"](1073742336,T.e,T.e,[]),a["\u0275mpd"](1073742336,T.d,T.d,[]),a["\u0275mpd"](1073742336,O.j,O.j,[]),a["\u0275mpd"](1073742336,z.a,z.a,[]),a["\u0275mpd"](1073742336,S.s,S.s,[]),a["\u0275mpd"](1073742336,W.a,W.a,[]),a["\u0275mpd"](1073742336,E.b,E.b,[]),a["\u0275mpd"](1073742336,Z.d,Z.d,[]),a["\u0275mpd"](1073742336,$.e,$.e,[]),a["\u0275mpd"](1073742336,Y.e,Y.e,[]),a["\u0275mpd"](1073742336,H.b,H.b,[]),a["\u0275mpd"](1073742336,K.a,K.a,[]),a["\u0275mpd"](1073742336,f.I,f.I,[z.a,S.m,S.M]),a["\u0275mpd"](1073742336,Q.a,Q.a,[]),a["\u0275mpd"](1073742336,y,y,[]),a["\u0275mpd"](256,T.p,"XSRF-TOKEN",[]),a["\u0275mpd"](256,T.q,"X-XSRF-TOKEN",[]),a["\u0275mpd"](256,O.c,{default:O.a,config:{maxOpened:1,autoDismiss:!0}},[])])})}}]);