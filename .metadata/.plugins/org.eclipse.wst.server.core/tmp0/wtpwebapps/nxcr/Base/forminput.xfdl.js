﻿(function(){return function(){if(!this._is_form){return;}this.on_create=function(){var _a=null;if(Form==this.constructor){this.set_name("formtest");this.set_titletext("New Form");this._setFormPosition(0,0,600,600);}_a=new Dataset("dsRequest",this);_a._setContents("<ColumnInfo><Column id=\"id\" type=\"INT\" size=\"4\"/><Column id=\"writer\" type=\"STRING\" size=\"256\"/><Column id=\"message\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Dataset("dsResponse",this);_a._setContents("<ColumnInfo><Column id=\"forward\" type=\"STRING\" size=\"256\"/><Column id=\"resultMessage\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Button("back","absolute","7%","22",null,"90","71.13%",null,this);_a.set_taborder("0");_a.set_text("돌아가기");this.addChild(_a.name,_a);_a=new Button("submit","absolute","9%","293",null,"94","67%",null,this);_a.set_taborder("1");_a.set_text("OK");this.addChild(_a.name,_a);_a=new Button("return","absolute","37.33%","289",null,"95","34.67%",null,this);_a.set_taborder("2");_a.set_text("BACK");this.addChild(_a.name,_a);_a=new Edit("writer","absolute","13.83%","120",null,"77","36.5%",null,this);_a.set_taborder("3");this.addChild(_a.name,_a);_a=new Edit("message","absolute","13.33%","200",null,"69","36.67%",null,this);_a.set_taborder("4");this.addChild(_a.name,_a);_a=new Layout("default","",600,600,this,function(_b){_b.set_titletext("New Form");});this.addLayout(_a.name,_a);_a=null;};this.registerScript("forminput.xfdl",function(_a){this.back_onclick=function(_b,_c){this.go("Base::formmain.xfdl");};this.submit_onclick=function(_b,_c){var _d=this.writer.value;var _e=this.message.value;var _f=this.dsRequest.addRow();this.dsRequest.setColumn(_f,"id",0);this.dsRequest.setColumn(_f,"writer",_d);this.dsRequest.setColumn(_f,"message",_e);var _g="request";var _h="../input.do";var _i="request=dsRequest";var _j="dsResponse=resp";var _k="";var _l="abc";this.transaction(_g,_h,_i,_j,_k,_l);};this.abc=function(_b,_c,_d){alert(this.dsResponse.getColumn(0,"resultMessage"));this.go("Base::formmain.xfdl");};this.return_onclick=function(_b,_c){this.go("Base::formmain.xfdl");};});this.on_initEvent=function(){this.back.addEventHandler("onclick",this.back_onclick,this);this.submit.addEventHandler("onclick",this.submit_onclick,this);this.return.addEventHandler("onclick",this.return_onclick,this);};this.loadIncludeScript("forminput.xfdl",true);};})();