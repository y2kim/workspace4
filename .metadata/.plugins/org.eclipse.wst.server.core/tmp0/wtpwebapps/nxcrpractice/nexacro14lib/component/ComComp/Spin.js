﻿if(!nexacro.Spin){nexacro.SpinEventInfo=function(_a,_b,_c,_d,_e,_f,_g){this.id=this.eventid=_b||"onspin";this.fromobject=this.fromreferenceobject=_a;this.pretext=_c;this.prevalue=_d;this.posttext=_e;this.postvalue=_f;this.up=_g;};var _pSpinEventInfo=nexacro._createPrototype(nexacro.Event,nexacro.SpinEventInfo);nexacro.SpinEventInfo.prototype=_pSpinEventInfo;_pSpinEventInfo._type_name="SpinEventInfo";delete _pSpinEventInfo;_pSpinEventInfo=null;nexacro.Spin_Style=function(_a,_b){nexacro.Style.call(this);if(_a){this._target=_a;}this.buttonalign=null;this.buttonsize=null;this.accessibility=null;this.displaynulltextcolor=null;};var _pSpinStyle=nexacro._createPrototype(nexacro.Style,nexacro.Spin_Style);nexacro.Spin_Style.prototype=_pSpinStyle;eval(nexacro._createAlignAttributeEvalStr("_pSpinStyle","buttonalign"));eval(nexacro._createValueAttributeEvalStr("_pSpinStyle","buttonsize"));eval(nexacro._createAccessibilityAttributeEvalStr("_pSpinStyle","accessibility"));eval(nexacro._createColorAttributeEvalStr("_pSpinStyle","displaynulltextcolor"));_pSpinStyle.__custom_emptyObject=function(){this.buttonalign=null;this.buttonsize=null;this.displaynulltextcolor=null;};_pSpinStyle.__get_custom_style_value=function(){var _a="";if(this.buttonalign&&!this.buttonalign._is_empty){_a+="buttonalign:"+this.buttonalign._value+"; ";}if(this.buttonsize&&!this.buttonsize._is_empty){_a+="buttonsize:"+this.buttonsize._value+"; ";}if(this.accessibility&&!this.accessibility._is_empty){_a+="accessibility:"+this.accessibility._value+"; ";}if(this.displaynulltextcolor&&!this.displaynulltextcolor._is_empty){_a+="displaynulltextcolor"+this.displaynulltextcolor._value+"; ";}return _a;};nexacro.Spin_CurrentStyle=function(){nexacro.CurrentStyle.call(this);this.buttonalign=null;this.buttonsize=null;this.accessibility=null;this.displaynulltextcolor=null;};var _pSpinCurrentStyle=nexacro._createPrototype(nexacro.CurrentStyle,nexacro.Spin_CurrentStyle);nexacro.Spin_CurrentStyle.prototype=_pSpinCurrentStyle;_pSpinCurrentStyle.__get_custuom_style_value=_pSpinStyle.__get_custuom_style_value;_pSpinCurrentStyle.__custom_emptyObject=_pSpinStyle.__custom_emptyObject;delete _pSpinStyle;delete _pSpinCurrentStyle;_pSpinStyle=null;_pSpinCurrentStyle=null;nexacro.Spin=function(_a,_b,_c,_d,_e,_f,_g,_h,_i){nexacro.Component.call(this,_a,_b,_c,_d,_e,_f,_g,_h,_i);this.spinupbutton=null;this.spindownbutton=null;this.spinedit=null;this.type=0;this.enable=true;this.value=undefined;this.text="";this.readonly=false;this.displaynulltext="";this.increment=1;this.max=10000;this.min=0;this.displaymask="9,999.9999999";this.circulation=false;this.displaycomma=false;this.textchangebindflag=false;this.usecontextmenu=true;this.usesoftkeyboard=true;this._old_value=undefined;this._accessibility_role="spin";this._want_arrow=false;this._has_inputElement=true;this._edit_base_api=null;this.locale="";this._event_list={"onclick":1,"ondblclick":1,"onkeypress":1,"onkeydown":1,"onkeyup":1,"onkillfocus":1,"onsetfocus":1,"ondrag":1,"ondragenter":1,"ondragleave":1,"ondragmove":1,"ondrop":1,"onlbuttondown":1,"onlbuttonup":1,"onmouseenter":1,"onmouseleave":1,"onmousemove":1,"onmove":1,"onsize":1,"onrbuttondown":1,"onrbuttonup":1,"onchanged":1,"onspin":1,"canchange":1,"oneditclick":1,"ontextchange":1,"ontextchanged":1,"cancharchange":1,"onchar":1,"oncontextmenu":1,"ontouchstart":1,"ontouchmove":1,"ontouchend":1,"onflingstart":1,"onfling":1,"onflingend":1,"onpinchstart":1,"onpinch":1,"onpinchend":1,"onlongpress":1,"onslidestart":1,"onslide":1,"onslideend":1};};var _pSpin=nexacro._createPrototype(nexacro.Component,nexacro.Spin);nexacro.Spin.prototype=_pSpin;nexacro.Spin._default_buttonalign=nexacro._getCachedStyleObj("buttonalign","right");nexacro.Spin._default_buttonsize=nexacro._getCachedStyleObj("buttonsize","-1");_pSpin._type_name="Spin";_pSpin.on_apply_custom_pseudo=function(_a){var _b=this.currentstyle;var _c=this.on_find_CurrentStyle_align(_a);if(_b.align!=_c){_b.align=_c;this.on_apply_style_align(_c);}var _d=this.on_find_CurrentStyle_font(_a);if(_b.font!=_d){_b.font=_d;this.on_apply_style_font(_d);}var _e=this.on_find_CurrentStyle_letterspace(_a);if(_b.letterspace!=_e){_b.letterspace=_e;this.on_apply_style_letterspace(_e);}var _f=this.spinedit?this.spinedit.on_find_CurrentStyle_color(_a)||this.on_find_CurrentStyle_color(_a):this.on_find_CurrentStyle_color(_a);if(_b.color!=_f){_b.color=_f;this.on_apply_style_color(_f);}var _g=this.on_find_CurrentStyle_buttonalign(_a);if(_b.buttonalign!=_g){_b.buttonalign=_g;this.on_apply_style_buttonalign(_g);}var _h=this.on_find_CurrentStyle_buttonsize(_a);if(_b.buttonsize!=_h){_b.buttonsize=_h;this.on_apply_style_buttonsize(_h);}var _i=this.on_find_CurrentStyle_rtlimagemirroring(_a);if(_i!=_b.rtlimagemirroring){_b.rtlimagemirroring=_i;this.on_apply_style_rtlimagemirroring(_i);}var _j=this.on_find_CurrentStyle_displaynulltextcolor(_a);if(_j!=_b.displaynulltextcolor){_b.displaynulltextcolor=_j;this.on_apply_style_displaynulltextcolor(_j);}};_pSpin.on_apply_custom_class=function(){if(this.spinupbutton){this.spinupbutton.on_apply_prop_class();}if(this.spindownbutton){this.spindownbutton.on_apply_prop_class();}if(this.spinedit){this.spinedit.on_apply_prop_class();}};_pSpin.on_create_custom_style=function(){return new nexacro.Spin_Style(this);};_pSpin.on_create_custom_currentStyle=function(){return new nexacro.Spin_CurrentStyle(this);};_pSpin.on_find_CurrentStyle_buttonalign=function(_a){var _b=this._find_pseudo_obj("buttonalign",_a,"align");return (_b)?_b:nexacro.Spin._default_buttonalign;};_pSpin.on_find_CurrentStyle_buttonsize=function(_a){var _b=this._find_pseudo_obj("buttonsize",_a);return (_b)?_b:nexacro.Spin._default_buttonsize;};_pSpin.on_find_CurrentStyle_displaynulltextcolor=function(_a){var _b=this._find_pseudo_obj("displaynulltextcolor",_a,"color");if(!_b){_b=this._find_pseudo_obj("color",_a,"color");}if(!_b){_b=this._find_inherit_pseudo_obj("color",_a,"color");}return (_b)?_b:nexacro.Component._default_color;};_pSpin.on_update_style_color=function(){var _a=this.currentstyle.color=(this.spinedit?(this.spinedit.on_find_CurrentStyle_color(this._pseudo)||this.on_find_CurrentStyle_color(this._pseudo)):this.on_find_CurrentStyle_color(this._pseudo));this.on_apply_style_color(_a);};_pSpin.on_update_style_buttonsize=function(){var _a=this.currentstyle.buttonsize=this.on_find_CurrentStyle_buttonsize(this._pseudo);this.on_apply_style_buttonsize();};_pSpin.on_update_style_buttonalign=function(){var _a=this.currentstyle.buttonalign=this.on_find_CurrentStyle_buttonalign(this._pseudo);this.on_apply_style_buttonalign();};_pSpin.on_update_style_displaynulltextcolor=function(){var _a=this.currentstyle.displaynulltextcolor=this.on_find_CurrentStyle_displaynulltextcolor(this._pseudo);this.on_apply_style_displaynulltextcolor(_a);};_pSpin.on_apply_style_align=function(_a){if(!_a){_a=this.on_find_CurrentStyle_align(this._pseudo);}if(this.spinedit){this.spinedit.style.set_align(_a._value);}};_pSpin.on_apply_style_color=function(_a){if(this.spinedit){this.spinedit.on_apply_style_color(this.spinedit.currentstyle.color=_a);}};_pSpin.on_apply_style_font=function(_a){if(this.spinedit){this.spinedit.on_apply_style_font(this.spinedit.currentstyle.font=_a);}};_pSpin.on_apply_style_buttonsize=function(){this._recalcLayout();};_pSpin.on_apply_style_buttonalign=function(){this._recalcLayout();};_pSpin.on_apply_style_accessibility=function(_a){nexacro.Component.prototype.on_apply_style_accessibility.call(this,_a);if(this.spinedit){this.spinedit.on_apply_style_accessibility(_a);}};_pSpin.on_apply_style_rtlimagemirroring=function(_a){return;};_pSpin.on_apply_style_letterspace=function(_a){if(this.spinedit){this.spinedit.on_apply_style_letterspace(this.spinedit.currentstyle.letterspace=_a);}};_pSpin.on_apply_style_displaynulltextcolor=function(_a){if(this.spinedit){this.spinedit.on_apply_style_displaynulltextcolor(this.spinedit.currentstyle.displaynulltextcolor=_a);}};_pSpin.on_create_contents=function(){if(this._control_element){this.spinupbutton=new nexacro.SpinButtonCtrl("spinupbutton","absolute",0,0,0,0,null,null,this);this.spindownbutton=new nexacro.SpinButtonCtrl("spindownbutton","absolute",0,0,0,0,null,null,this);var _a=this.spinedit=new nexacro.SpinEditCtrl("spinedit","absolute",0,0,0,0,null,null,this);this.spinedit.createComponent();this.spinupbutton.createComponent();this.spindownbutton.createComponent();}};_pSpin.on_created_contents=function(){this.on_apply_readonly();this.on_apply_circulation();this.on_apply_displaycomma();this.on_apply_displaynulltext();this.on_apply_type();this.on_apply_usecontextmenu();this.on_apply_style_displaynulltextcolor(this.currentstyle.displaynulltextcolor);this.spinupbutton._setEventHandler("onclick",this.on_notify_spinupbutton_click,this);this.spindownbutton._setEventHandler("onclick",this.on_notify_spindownbutton_click,this);this.spinedit._setEventHandler("ontextchange",this.on_notify_spin_textchange,this);this.spinedit._setEventHandler("ontextchanged",this.on_notify_spin_textchanged,this);this.spinedit._setEventHandler("cancharchange",this.on_notify_spin_cancharchange,this);this.spinedit._setEventHandler("onchar",this.on_notify_spin_char,this);this.spinedit._setEventHandler("oneditclick",this.on_notify_spin_editclick,this);this.spinedit._setEventHandler("onkeydown",this.on_notify_spin_keydown,this);this.spinupbutton.on_created();this.spindownbutton.on_created();this.spinedit.on_created();this._edit_base_api=this.spinedit._edit_base_api;this.on_apply_style_letterspace(this.currentstyle.letterspace);this.on_apply_style_rtlimagemirroring(this.currentstyle.rtlimagemirroring);this._setAccessibilityInfoValueMax(this.max);this._setAccessibilityInfoValueMin(this.min);this._setAccessibilityInfoValueCur(this.value);this._setAccessibilityActiveDescendant(this.spinedit);this.on_apply_prop_rtldirection();if(this._old_value!==undefined){this._setValue(this._old_value);}};_pSpin.on_destroy_contents=function(){if(this.spinupbutton){this.spinupbutton.destroy();this.spinupbutton=null;}if(this.spindownbutton){this.spindownbutton.destroy();this.spindownbutton=null;}if(this.spinedit){this.spinedit.destroy();this.spinedit=null;}};_pSpin.on_change_containerRect=function(){this._recalcLayout();};_pSpin.on_apply_prop_enable=function(_a){this._updateButton();};_pSpin.on_apply_custom_setfocus=function(_a){if(this.spinedit&&this.spinedit.enable==true){this.spinedit.on_apply_custom_setfocus(_a);}};_pSpin.on_init_bindSource=function(_a,_b,_c){if(_b=="value"){this._setValue(undefined);return true;}};_pSpin.on_change_bindSource=function(_a,_b,_c,_d,_e){if(_a=="value"){var _f=_b.getColumn(_c,_d);var _g=parseFloat(_f);if(isNaN(_g)){_g=_f;}else if(this.min>_g||this.max<_g){_g=(this.min>_g)?this.min:this.max;var _h=this.applyto_bindSource("value",_g);if(_h==false){return false;}}this._setValue(_g);return true;}return false;};_pSpin.on_getBindableProperties=function(){return "value";};_pSpin.on_get_style_accessibility_label=function(){var _a="";return _a;};_pSpin._on_getAccessibilityAdditionalLabel=function(){var _a="";if(this.spinedit&&this.spinedit._edit_base_api){_a=this.spinedit._edit_base_api._on_getAccessibilityAdditionalLabel();}return _a+" "+this.min+" "+this.max;};_pSpin._getAccessibilityReadLabel=function(_a){var _b=nexacro.Component.prototype._getAccessibilityReadLabel.call(this);if(_a&&this.spinedit._input_element&&this._status!="focus"){if(!this.spinedit._input_element._wantAccessibilityAdditionalLabel||!this.spinedit._input_element._wantAccessibilityAdditionalLabel()){_b=this.text+" "+_b;}}return _b;};_pSpin._getDlgCode=function(_a,_b,_c,_d){var _e=this._want_arrow;this._want_arrow=false;return {want_tab:false,want_return:false,want_escape:false,want_chars:false,want_arrows:_e};};_pSpin.on_apply_prop_rtldirection=function(){nexacro.Component.prototype.on_apply_prop_rtldirection.call(this);this.on_change_containerRect(this._client_width,this._client_height);var _a=this._rtldirection;var _b=this.spinedit;var _c=this.spinupbutton;var _d=this.spindownbutton;if(_b){_b._setRtlDirection(_a);}if(_c){_c._setRtlDirection(_a);}if(_d){_d._setRtlDirection(_a);}};_pSpin.set_type=function(_a){this.type=_a;this.on_apply_type();};_pSpin.on_apply_type=function(){if(this.spinedit){switch(this.type){case "spinonly":this.spinedit.set_visible(false);break;case "noneditable":this.spinedit.set_visible(true);this.spinedit.set_readonly(true);break;case "normal":default:this.spinedit.set_visible(true);this.spinedit.set_readonly(this.readonly);break;}}this._recalcLayout();};_pSpin.set_value=function(_a){var _b=parseFloat(_a,10);if(_a===null||_a===undefined){this._setValue(_a);}else{_a=this._getValidation(_a);var _c=this.applyto_bindSource("value",_a);if(_c==false){return;}this._setValue(_a);}if(!this._is_created){this._old_value=_b;}};_pSpin._setValue=function(_a){this._old_value=this.value=_a;this.text=nexacro._toString(_a);this._updateToText();this.on_apply_value();this._updateButton();};_pSpin.on_apply_value=function(){if(this.spinedit){if(this.value===null||this.value===undefined){this.spinedit.set_value(undefined);}else{this.spinedit.set_value(this.value);}this.text=this.spinedit.text;}};_pSpin.set_readonly=function(_a){_a=nexacro._toBoolean(_a);if(_a!=this.readonly){this.readonly=_a;this.on_apply_readonly();}};_pSpin.on_apply_readonly=function(){var _a=this.readonly;if(_a){this._stat_change("readonly",this._pseudo);}else{this._stat_change("writable",this._pseudo=="readonly"?"normal":this._pseudo);}if(this.spinedit){if(this.type!="noneditable"){this.spinedit.set_readonly(_a);}}};_pSpin.set_displaynulltext=function(_a){this.displaynulltext=_a.toString();this.on_apply_displaynulltext();};_pSpin.on_apply_displaynulltext=function(){if(this.spinedit&&this.displaynulltext){this.spinedit.set_displaynulltext(this.displaynulltext);}};_pSpin.set_increment=function(_a){var _b=parseFloat(_a,10);if(isNaN(_b)){return;}else{this.increment=_b;}this.on_apply_increment();};_pSpin.on_apply_increment=function(){this._updateButton();};_pSpin.set_max=function(_a){var _b=parseFloat(_a,10);if(isNaN(_b)){return;}else{this.max=_b;this._setAccessibilityInfoValueMax(_b);}this.on_apply_max();};_pSpin.on_apply_max=function(){if(this.value>this.max){this.value=this.max;}if(this.max<this.min){this.min=this.max;}this._updateToText();};_pSpin.set_min=function(_a){var _b=parseFloat(_a,10);if(isNaN(_b)){return;}else{this.min=_b;this._setAccessibilityInfoValueMin(_b);}this.on_apply_min();};_pSpin.on_apply_min=function(){if(this.value<this.min){this.value=this.min;}if(this.max<this.min){this.max=this.min;}this._updateToText();};_pSpin.set_displaycomma=function(_a){_a=nexacro._toBoolean(_a);if(_a!=this.displaycomma){this.displaycomma=_a;this.on_apply_displaycomma();}};_pSpin.on_apply_displaycomma=function(){if(this.spinedit){if(this.displaycomma){this.spinedit.set_mask(this.displaymask);}else{this.spinedit.set_mask("");}}this._updateToText();};_pSpin.set_circulation=function(_a){_a=nexacro._toBoolean(_a);if(_a!=this.circulation){this.circulation=_a;this.on_apply_circulation();}};_pSpin.on_apply_circulation=function(){this._updateButton();};_pSpin.set_text=function(_a){};_pSpin.set_usecontextmenu=function(_a){_a=nexacro._toBoolean(_a);if(_a!=this.usecontextmenu){this.usecontextmenu=_a;this.on_apply_usecontextmenu();}};_pSpin.on_apply_usecontextmenu=function(){var _a=this.spinedit;if(_a){_a.set_usecontextmenu(this.usecontextmenu);}};_pSpin.set_usesoftkeyboard=function(_a){_a=nexacro._toBoolean(_a);if(_a!=this.usesoftkeyboard){this.usesoftkeyboard=_a;this.on_apply_usesoftkeyboard();}};_pSpin.on_apply_usesoftkeyboard=function(){if(this.spinedit){this.spinedit.set_usesoftkeyboard(this.usesoftkeyboard);}};_pSpin.set_locale=function(_a){if(_a!=this.locale){this.locale=_a;if(this._locale!=_a){this._locale=_a;this.on_apply_locale();}}};_pSpin.on_apply_locale=function(){var _a=this.spinedit;if(_a){_a._setLocale(this._locale);}};_pSpin.getCaretPos=function(){if(this.readonly){return  -1;}return this.spinedit.getCaretPos();};_pSpin.getSelect=function(){return this.spinedit.getSelect();};_pSpin.getSelectedText=function(){return this.spinedit.getSelectedText();};_pSpin.setCaretPos=function(_a){return this.spinedit.setCaretPos(_a);};_pSpin.setSelect=function(_a,_b){this.spinedit.setSelect(_a,_b);};_pSpin.setSelectedText=function(_a){this.spinedit.setSelectedText(_a);};_pSpin.setRange=function(_a,_b){this.set_min(_a);this.set_max(_b);if(this.min>this.max){var _c=this.min;this.min=this.max;this.max=_c;}};_pSpin.updateToDataset=function(){if(!this._bind_event){return false;}return this.applyto_bindSource("value",this.value);};_pSpin.on_notify_spin_down=function(_a,_b){if(!this.readonly){var _c=true;this.textchangebindflag=true;var _d=parseFloat(this.value,10);if(_d==undefined||_d==null||isNaN(_d)){_d=0;}var _e=_d;var _f=this._calcValue(_d,this.increment,"-");if(this.circulation){if(this.increment>=0){_d=(_f<this.min)?this.max:_f;}else{_d=(_f>this.max)?this.min:_f;}}else{_d=(_f<this.min)?this.min:(_f>this.max)?this.max:_f;}var _g=_e.toString();var _h=this.value=_d;var _i=_d.toString();_c=this.on_fire_onspin(this,_g,_e,_i,_h,false);this.spinedit.on_fire_ontextchanged(this,_e,_h);if(_c||_c===undefined){this.value=_h;}else{this.value=_e;}this._on_focus(true);this._updateToText();}};_pSpin.on_notify_spin_up=function(_a,_b){if(!this.readonly){var _c=true;this.textchangebindflag=true;var _d=parseFloat(this.value,10);if(_d==undefined||_d==null||isNaN(_d)){_d=0;}var _e=_d;var _f=this._calcValue(_d,this.increment,"+");if(this.circulation){if(this.increment>=0){_d=(_f>this.max)?this.min:_f;}else{_d=(_f<this.min)?this.max:_f;}}else{_d=(_f>this.max)?this.max:(_f<this.min)?this.min:_f;}var _g=_e.toString();var _h=this.value=_d;var _i=_d.toString();_c=this.on_fire_onspin(this,_g,_e,_i,_h,true);this.spinedit.on_fire_ontextchanged(this,_e,_h);if(_c||_c===undefined){this.value=_h;}else{this.value=_e;}this._on_focus(true);this._updateToText();}};_pSpin.on_notify_spin_textchange=function(_a,_b){if(_a.parent==this){this._setFocus(false);}var _c=this.on_fire_ontextchange(_a,_b);var _d;if(this.displaycomma){_d=this._commaStrToStr(_b.posttext);}else{_d=_b.posttext;}if(_c){this.textchangebindflag=true;_d=parseFloat(_d,10);if(isNaN(_d)){this.value=this.min;}else{this.value=_d;}this._updateToText(true);}return _c;};_pSpin.on_notify_spin_editclick=function(_a,_b){this.on_fire_oneditclick(_a,_b.caretpos,_b.button,_b.altKey,_b.ctrlKey,_b.shiftKey,_b.screenX,_b.screenY,_b.canvasX,_b.canvasY,_b.clientX,_b.clientY,_b.fromobject,_b.fromreferenceobject);};_pSpin.on_notify_spin_textchanged=function(_a,_b){return this.on_fire_ontextchanged(_a,_b);};_pSpin.on_notify_spin_char=function(_a,_b){return this.on_fire_onchar(_a,_b);};_pSpin.on_notify_spin_cancharchange=function(_a,_b){return this.on_fire_cancharchange(_a,_b);};_pSpin.on_fire_user_onkeydown=function(_a,_b,_c,_d,_e,_f){this._want_arrow=true;nexacro.Component.prototype.on_fire_user_onkeydown.call(this,_a,_b,_c,_d,_e,_f);};_pSpin.on_notify_spin_keydown=function(_a,_b){switch(_b.keycode){case nexacro.Event.KEY_UP:if(!nexacro._enableaccessibility||_b.ctrlKey){this.on_notify_spin_up();}break;case nexacro.Event.KEY_DOWN:if(!nexacro._enableaccessibility||_b.ctrlKey){this.on_notify_spin_down();}break;case nexacro.Event.KEY_ENTER:this.textchangebindflag=true;this._valuechange();break;}return true;};_pSpin.on_notify_spinupbutton_click=function(_a,_b){this.on_notify_spin_up(_a,_b);};_pSpin.on_notify_spindownbutton_click=function(_a,_b){this.on_notify_spin_down(_a,_b);};_pSpin.on_fire_oneditclick=function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n){if(this.visible&&this._isEnable()&&this.enableevent){if(this.oneditclick&&this.oneditclick._has_handlers){var _o=new nexacro.EditClickEventInfo(this,"oneditclick",_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,this,_n);return this.oneditclick._fireEvent(this,_o);}}return false;};_pSpin.on_fire_ontextchange=function(_a,_b){if(this.ontextchange&&this.ontextchange._has_handlers){var _c=new nexacro.TextChangeEventInfo(this,"ontextchange",_b.chartext,_b.pretext,_b.posttext,"","");return this.ontextchange._fireCheckEvent(this,_c);}return true;};_pSpin.on_fire_ontextchanged=function(_a,_b){if(this.ontextchanged&&this.ontextchanged._has_handlers){var _c=new nexacro.TextChangedEventInfo(this,"ontextchanged",_b.pretext,_b.posttext);return this.ontextchanged._fireEvent(this,_c);}return true;};_pSpin.on_fire_onchar=function(_a,_b){if(this.onchar&&this.onchar._has_handlers){var _c=new nexacro.TextChangeEventInfo(this,"onchar",_b.chartext,_b.pretext,_b.posttext);return this.onchar._fireCheckEvent(this,_c);}return true;};_pSpin.on_fire_cancharchange=function(_a,_b){if(this.cancharchange&&this.cancharchange._has_handlers){var _c=new nexacro.CanCharEventInfo(_a,"cancharchange",_b.chartext,_b.pretext,_b.posttext);return this.cancharchange._fireCheckEvent(this,_c);}return true;};_pSpin.on_fire_canchange=function(_a,_b,_c,_d,_e){if(this.canchange&&this.canchange._has_handlers){var _f=new nexacro.ChangeEventInfo(this,"canchange",_b,_c,_d,_e);return this.canchange._fireCheckEvent(this,_f);}return true;};_pSpin.on_fire_onchanged=function(_a,_b,_c,_d,_e){if(this.onchanged&&this.onchanged._has_handlers){var _f=new nexacro.ChangeEventInfo(_a,"onchanged",_b,_c,_d,_e);return this.onchanged._fireEvent(this,_f);}return true;};_pSpin.on_fire_onspin=function(_a,_b,_c,_d,_e,_f){if(this.onspin&&this.onspin._has_handlers){var _g=new nexacro.SpinEventInfo(_a,"onspin",_b,_c,_d,_e,_f);return this.onspin._fireEvent(this,_g);}return true;};_pSpin._on_killfocus=function(_a,_b){var _c=this._getWindow();if(_c&&_c._is_active_window!=true&&!_a){return;}this._valuechange();if(nexacro.Browser=="IE"&&nexacro.BrowserVersion==8){if(this.spinedit){this.spinedit._is_focusing=false;}}};_pSpin._recalcLayout=function(){if(this._control_element&&this.spinupbutton&&this.spindownbutton&&this.spinedit){var _a=this._client_width,_b=this._client_height;var _c=0,_d=0,_e=0,_f=0;var _g=0;h=0;var _h=0,_i=0,_j=0,_k=0;var _l=0,_m=0,_n=0,_o=0;var _p=0,_q=0,_r=0,_s=0;var _t=this.spinupbutton.on_find_CurrentStyle_margin();if(_t){_h=_t.top;_i=_t.left;_k=_t.bottom;_j=_t.right;}var _u=this.spindownbutton.on_find_CurrentStyle_margin();if(_u){_l=_u.top;_m=_u.left;_o=_u.bottom;_n=_u.right;}var _v=this.spinedit.on_find_CurrentStyle_margin();if(_v){_p=_v.top;_q=_v.left;_s=_v.bottom;_r=_v.right;}var _w=0;var _x=_b;if(this.type=="spinonly"){_w=_a;}else{_w=_x;}var _y=this.on_find_CurrentStyle_buttonsize();if(_y){_y=parseInt(_y)|0;if(_y> -1){_w=_y;}else{_w=0;}}var _z=this.on_find_CurrentStyle_buttonalign();if(_z.halign!="left"){_c=_a-_w;_e=_h;_g=_w-_j;h=_x/2-1;this.spinupbutton.move(_c,_e,_g,h,null,null);_g=_w-_n;_e=_e+h+_l+1;h=_x/2-1-_o;this.spindownbutton.move(_c,_e,_g,h,null,null);if(this.type!="spinonly"){_c=_q;_e=_p;_g=_a-_w-_r-_i;h=_b-_o;this.spinedit.move(_c,_e,_g,h,_d,_f);}}else{_c=_i;_e=_h;_g=_w-_j;h=_x/2-1;this.spinupbutton.move(_c,_e,_g,h,null,null);_g=_w-_n;_e=_e+h+_k+_l+1;h=_x/2-1-_o;this.spindownbutton.move(_c,_e,_g,h,null,null);if(this.type!="spinonly"){_c=_c+_w+_q;_e=_p;_g=_a-_w-_r;h=_b-_s;this.spinedit.move(_c,_e,_g,h,null,null);}}}};_pSpin._updateButton=function(){if(this._control_element){var _a=this.spinupbutton;var _b=this.spindownbutton;var _c=this.spinedit;var _d=this.value;if(!this._isEnable()){_a._setEnable(false);_b._setEnable(false);_c._setEnable(false);}else{_c._setEnable(true);if(!this.circulation){if(_d==null||_d==undefined){_b._setEnable(false);_a._setEnable(true);return;}if(this.increment>=0){if(this.max>_d){_a._setEnable(true);}else{_a._setEnable(false);}if(this.min<_d){_b._setEnable(true);}else{_b._setEnable(false);}}else{if(this.max>_d){_b._setEnable(true);}else{_b._setEnable(false);}if(this.min<_d){_a._setEnable(true);}else{_a._setEnable(false);}}}else{_a._setEnable(true);_b._setEnable(true);}}}};_pSpin._updateToText=function(_a){var _b=this.value;if(_b===null||_b===undefined){this.value=undefined;this.text="";}else if(_b.date||_b.time||_b.blob||_b.datetime){_b=undefined;this.text="";}else{_b=this._commaStrToStr(this.value);}if(this.spinedit){if(!_a){this.spinedit.set_value(_b);this.text=this.spinedit.text;}this._setAccessibilityInfoValueCur(_b);}this._updateButton();};_pSpin._commaStrToStr=function(_a){var _b=nexacro._toString(_a);if(_a==undefined){_b="";}return _b.replace(/,/g,"");};_pSpin._getValidation=function(_a){_a=parseFloat(_a,10);if(isNaN(_a)){return undefined;}else if(this.min>_a){_a=this.min;}else if(this.max<_a){_a=this.max;}return _a;};_pSpin._valuechange=function(){if(!this._is_alive){return;}var _a=this.value;if(_a<=this.max&&_a>=this.min){this.value=_a;}else{this.value=this._getValidation(_a);}var _b=this.value;var _c=nexacro._toString(this.value);var _d=this._old_value;var _e=nexacro._toString(this._old_value);var _f=this.on_fire_canchange(this,_e,_d,_c,_b);if(_f===false){this.value=this._old_value;this._updateToText();}else{this._setValue(this.value);if(this.textchangebindflag){this.applyto_bindSource("value",this.value);this.textchangebindflag=false;}if(_d!=_b){this.on_fire_onchanged(this,_e,_d,_c,_b);}}};_pSpin._calcValue=function(_a,_b,_c){var _d=1;var _e=_a.toString();var _f=_b.toString();var _g=_e.indexOf(".");var _h=_f.indexOf(".");if(_g> -1||_h> -1){var _i=_g> -1?_e.substring(_g+1,_e.length):"";var _j=_h> -1?_f.substring(_h+1,_f.length):"";var _k=_i.length>=_j.length?_i.length:_j.length;_d=Math.pow(10,_k);_a=Math.round(_a*_d);_b=Math.round(_b*_d);}if(_c=="+"){return (_a+_b)/_d;}else{return (_a-_b)/_d;}};delete _pSpin;_pSpin=null;nexacro.SpinButtonCtrl=function(_a,_b,_c,_d,_e,_f,_g,_h,_i){nexacro.ImageButtonCtrl.call(this,_a,_b,_c,_d,_e,_f,_g,_h,_i);};var _pSpinButtonCtrl=nexacro.SpinButtonCtrl.prototype=nexacro._createPrototype(nexacro.ImageButtonCtrl,nexacro.SpinButtonCtrl);_pSpinButtonCtrl.on_apply_custom_setfocus=function(_a){var _b=this.parent;if(_b){var _c=_b.spinedit;if(_c&&_c.enable==true){if(!(nexacro.isTouchInteraction&&nexacro.SupportTouch)){_c.on_apply_custom_setfocus(_a);}else{nexacro.Component.prototype.on_apply_custom_setfocus.call(this,_a);}}}};delete _pSpinButtonCtrl;_pSpinButtonCtrl=null;nexacro.SpinEditCtrl=function(_a,_b,_c,_d,_e,_f,_g,_h,_i){nexacro.MaskEditCtrl.call(this,_a,_b,_c,_d,_e,_f,_g,_h,_i);this._accessibility_role="spin";};var _pSpinEditCtrl=nexacro.SpinEditCtrl.prototype=nexacro._createPrototype(nexacro.MaskEditCtrl,nexacro.SpinEditCtrl);_pSpinEditCtrl.on_find_CurrentStyle_align=function(_a){return this.parent._find_pseudo_obj("align",_a,"align")||this._find_ctrl_pseudo_obj("align",_a,"align")||nexacro.Component._default_align;};_pSpinEditCtrl.on_find_CurrentStyle_color=function(_a){return this._find_inherit_pseudo_obj("color",_a,"color")||nexacro.Component._default_color;};_pSpinEditCtrl.on_find_CurrentStyle_font=function(_a){return this._find_inherit_pseudo_obj("font",_a,"font")||nexacro.Component._default_font;};_pSpinEditCtrl.on_find_CurrentStyle_accessibility=function(_a){var _b=this._find_pseudo_obj("accessibility",_a,"accessibility");return _b?_b:this.parent.on_find_CurrentStyle_accessibility(_a);};_pSpinEditCtrl._getAccessibilityRole=function(_a){_a=this.parent.on_find_CurrentStyle_accessibility(this._pseudo);return this.parent._getAccessibilityRole(_a);};delete _pSpinEditCtrl;_pSpinEditCtrl=null;nexacro.SpinCtrl=function(_a,_b,_c,_d,_e,_f,_g,_h,_i){nexacro.Spin.call(this,_a,_b,_c,_d,_e,_f,_g,_h,_i);this._is_subcontrol=true;};var _pSpinCtrl=nexacro.SpinCtrl.prototype=nexacro._createPrototype(nexacro.Spin,nexacro.SpinCtrl);_pSpinCtrl._type_name="SpinControl";nexacro._setForControlStyleFinder(_pSpinCtrl);delete _pSpinCtrl;_pSpinCtrl=null;};