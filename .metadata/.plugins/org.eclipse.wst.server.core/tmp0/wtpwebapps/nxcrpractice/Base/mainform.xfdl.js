﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("mainform");this.set_titletext("New Form");this._setFormPosition(0,0,400,400);}_a=new Dataset("dsList",this);_a._setContents("<ColumnInfo><Column id=\"Dept_Title\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Grid("Grid00","absolute","1.25%","10",null,"244","1.25%",null,this);_a.set_taborder("0");_a.set_binddataset("dsList");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"389\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Dept_Title\"/></Band><Band id=\"body\"><Cell text=\"bind:Dept_Title\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Layout("default","",400,400,this,function(_b){_b.set_titletext("New Form");});this.addLayout(_a.name,_a);_a=null;};this.registerScript("mainform.xfdl",function(_a){this.loadData=function(){var _b="outputProc";var _c="../output.do";var _d="";var _e="dsList=respDs";var _f="";var _g="received";this.transaction(_b,_c,_d,_e,_f,_g);};this.received=function(){this.Grid00.set_binddataset(this.dsList);};});this.on_initEvent=function(){this.addEventHandler("onload",this.loadData,this);};this.loadIncludeScript("mainform.xfdl",true);};})();