﻿if(!nexacro.ImageViewer){nexacro.ImageAlign=function(_a,_b,_c){nexacro.Object.call(this);this.align=new nexacro.Style_align(_a,_b);this.valign=this.align.valign;this.halign=this.align.halign;this._target=_c;};var _pImageAlign=nexacro.ImageAlign.prototype=nexacro._createPrototype(nexacro.Object,nexacro.ImageAlign);_pImageAlign._type_name="ImageAlign";_pImageAlign.set_halign=function(_a){if(this.align.set_halign(_a)){this.halign=this.align.halign;this._target.on_apply_imagealign(this.align);}};_pImageAlign.set_valign=function(_a){if(this.align.set_valign(_a)){this.valign=this.align.valign;this._target.on_apply_imagealign(this.align);}};_pImageAlign.destroy=function(){this.align=null;this.valign=null;this.halign=null;this._target=null;};delete _pImageAlign;nexacro.ImageViewer=function(_a,_b,_c,_d,_e,_f,_g,_h,_i){nexacro.Component.call(this,_a,_b,_c,_d,_e,_f,_g,_h,_i);this.text="";this.image="";this.imagealign=new nexacro.ImageAlign("middle","center",this);this.imagewidth=0;this.imageheight=0;this.stretch="none";this.repeatcount= -1;this.resampling=0;this._text_elem=null;this._img_elem=null;this._prewidth=0;this._preheight=0;this._img_type="url";this._accessibility_role="image";};var _pImageViewer=nexacro._createPrototype(nexacro.Component,nexacro.ImageViewer);nexacro.ImageViewer.prototype=_pImageViewer;_pImageViewer._type_name="ImageViewer";_pImageViewer.on_apply_custom_pseudo=function(_a){var _b=this.currentstyle;var _c=this.on_find_CurrentStyle_font(_a);if(_b.font!=_c){_b.font=_c;this.on_apply_style_font(_c);}var _d=this.on_find_CurrentStyle_letterspace(_a);if(_b.letterspace!=_d){_b.letterspace=_d;this.on_apply_style_letterspace(_d);}var _e=this.on_find_CurrentStyle_color(_a);if(_b.color!=_e){_b.color=_e;this.on_apply_style_color(_e);}var _f=this.on_find_CurrentStyle_align(_a);if(_b.align!=_f){_b.align=_f;this.on_apply_style_align(_f);}var _g=this.on_find_CurrentStyle_rtlimagemirroring(_a);if(_g!=_b.rtlimagemirroring){_b.rtlimagemirroring=_g;this.on_apply_style_rtlimagemirroring(_g);}};_pImageViewer.on_apply_style_color=function(_a){if(this._text_elem){this._text_elem.setElementColor(_a);}};_pImageViewer.on_apply_style_font=function(_a){if(this._text_elem){this._text_elem.setElementFont(_a);}};_pImageViewer.on_apply_style_align=function(_a){if(this._text_elem){var _b=_a.halign==""?"center":_a._halign;var _c=_a.valign==""?"middle":_a._valign;this._text_elem.setElementAlignXY(_b,_c);_b=_c=null;}};_pImageViewer.on_find_CurrentStyle_rtlimagemirroring=function(_a){var _b=this._find_pseudo_obj("rtlimagemirroring",_a,"rtlimagemirroring");return _b?_b:nexacro.Component._default_rtlimagemirroring;};_pImageViewer.on_update_style_rtlimagemirroring=function(){var _a=this.on_find_CurrentStyle_rtlimagemirroring(this._pseudo);this.on_apply_style_rtlimagemirroring(this.currentstyle.rtlimagemirroring=_a);};_pImageViewer.on_apply_style_rtlimagemirroring=function(_a){var _b=this._img_elem;if(_b&&_a){_b.setElementImageMirror(_a);}};_pImageViewer.on_apply_prop_rtldirection=function(){nexacro.Component.prototype.on_apply_prop_rtldirection.call(this);this.on_change_containerRect(this._client_width,this._client_height);var _a=this._img_elem;if(_a){_a.setElementImageMirror(this.currentstyle.rtlimagemirroring,true);}};_pImageViewer.on_create_contents=function(){var _a=this.getElement();if(_a){if(this.text){var _b=this._text_elem=new nexacro.TextBoxElement(_a);var _c=this.currentstyle.align.halign==""?"center":this.currentstyle.align._halign;var _d=this.currentstyle.align.valign==""?"middle":this.currentstyle.align._valign;_b.setElementSize(this._client_width,this._client_height);_b.setElementColor(this.currentstyle.color);_b.setElementFont(this.currentstyle.font);_b.setElementAlignXY(_c,_d);_b.setElementLetterSpace(this.currentstyle.letterspace);_b=_c=_d=null;}}_a=null;};_pImageViewer.on_destroy_contents=function(){if(this._text_elem){this._text_elem.destroy();this._text_elem=null;}if(this._img_elem){this._img_elem.destroy();this._img_elem=null;}if(this.imagealign){this.imagealign.destroy();this.imagealign=null;}};_pImageViewer.on_created_contents=function(){var _a=this._text_elem;this._load_image(this.image);var _b=this._img_elem;if(_a){var _c=this._client_width;var _d=this._client_height;_a.setElementSize(_c,_d);_a.create();}if(this.expr){this.on_apply_expr();}this.on_apply_prop_rtldirection();if(_b){var _e=this.on_find_CurrentStyle_rtlimagemirroring(this._pseudo);this.on_apply_style_rtlimagemirroring(_e);}_a=null;};_pImageViewer.on_fire_onsize=function(_a,_b){if(this._text_elem){var _c=this.currentstyle.align.halign==""?"center":this.currentstyle.align._halign;var _d=this.currentstyle.align.valign==""?"middle":this.currentstyle.align._valign;this._text_elem.setElementAlignXY(_c,_d);}this.on_apply_imagealign();return nexacro.Component.prototype.on_fire_onsize.call(this,_a,_b);};_pImageViewer.on_change_containerRect=function(_a,_b){var _c=this._text_elem;var _d=this._img_elem;if(_c){_c.setElementSize(_a,_b);if(_d){this._updateElementPositions();}}else if(_d){this._updateElementPositions();}var _e=this._pseudo;var _f=this.on_find_CurrentStyle_align(_e);this.on_apply_style_align(_f);_c=null;_d=null;};_pImageViewer.on_apply_text=function(){var _a=this.expr;if(_a&&_a.length>0){_a=_a.trim().split(":");var _b=_a.length;var _c=new nexacro.ExprParser();var _d,_e;var _f;if(_b==1){_f=_a[0];}else{if(_a[0].trim().toUpperCase()!="EXPR"){_f=_a.join(":");}else{_f=_a.slice(1).join(":");}}_d=_c.makeExpr(this,_f);_e=nexacro._createInlineFunc(_d,["comp"]);if(_e){try{var _g=nexacro._toString(_e.call(null,this));if(_g!=this.displaytext){this.displaytext=_g;}}catch(e){return;}}_c=null;}else{this.displaytext=this.text;}_a=null;if(!this._text_elem&&this.displaytext){var _h=this.getElement();if(_h){var _i=this._text_elem=new nexacro.TextBoxElement(_h);var _j=this.currentstyle.align.halign==""?"center":this.currentstyle.align._halign;var _k=this.currentstyle.align.valign==""?"middle":this.currentstyle.align._valign;_i.setElementSize(this._client_width,this._client_height);_i.setElementColor(this.currentstyle.color);_i.setElementFont(this.currentstyle.font);_i.setElementAlignXY(_j,_k);_i.setElementLetterSpace(this.currentstyle.letterspace);_i.create();_i=_j=_k=null;}_h=null;}if(this._text_elem){this._text_elem.setElementText(this.displaytext);}this._refreshAccessibilityValue();};_pImageViewer.on_apply_expr=function(){this.on_apply_text();};_pImageViewer.set_image=function(_a){if(_a){if(_a instanceof nexacro.Image){if((_a._handle_id)&&nexacro.Browser=="Runtime"&&(((typeof _a._handle_id)=="number")||(_a._handle_id instanceof nexacro.Decimal))){var _b=this.image;var _c=this.getElement();var _d=this._img_elem;var _e=_b._handle_id;if(_e&&((typeof _e)=="number")){_d.destroy(null,_e);}if(!_d){this._img_elem=_d=new nexacro.ImageElement(_c);}if(!_d._handle){_d.create();}_d.setElementHandleImageObject(_a._handle_id);this.image=_a;this._img_type="url";this._load_image(_a._handle_id);return true;}else{_a=_a._base64str;this._img_type="base64";}}else{_a=_a.toString();var _f=nexacro._checkBase64String(_a);if(_f){if(_a.substring(0,10).toLowerCase()=="data:image"){if(_a.substring(0,17).toLowerCase()!="data:image;base64"){var _g=_a.indexOf(",");if(_g> -1){var _h=_a.slice(_g+1,_a.legnth);_a="data:image;base64,"+_h;}}}else{_a="data:image;base64,"+_a;}this._img_type="base64";}else{this._img_type="url";}}}else{_a="";this._img_type="url";}if(this.image!=_a){this.image=_a;this.on_apply_image();}};_pImageViewer.on_apply_image=function(){this._load_image(this.image);};_pImageViewer.set_imagewidth=function(_a){};_pImageViewer.set_imageheight=function(_a){};_pImageViewer.set_stretch=function(_a){if(_a!=this.stretch){this.stretch=_a;this.on_apply_stretch();}};_pImageViewer.on_apply_stretch=function(){this._updateElementPositions();};_pImageViewer.set_repeatcount=function(_a){if(_a!=this.repeatcount){this.repeatcount=_a;}};_pImageViewer.set_imagealign=function(_a){if(this.imagealign.align.valueOf()!=_a){if(this.imagealign.align._setValue(_a)){this.imagealign.halign=this.imagealign.align.halign;this.imagealign.valign=this.imagealign.align.valign;this.on_apply_imagealign();}}};_pImageViewer.on_apply_imagealign=function(){if(this._img_elem){this._updateElementPositions();}};_pImageViewer.on_apply_repeatcount=function(){};_pImageViewer.set_resampling=function(_a){};_pImageViewer.repeatStart=function(_a){this.repeatcount=parseInt(_a)|0;};_pImageViewer.repeatStop=function(){return;};_pImageViewer.getImageCount=function(){var _a=this._img_elem;if(_a){return _a.getImageCount();}return 0;};_pImageViewer.setImageIndex=function(_a){var _b=this._img_elem;if(_b){_b.setImageIndex(parseInt(_a)|0);}};_pImageViewer._on_loadImg=function(_a,_b,_c){this.imagewidth=this._prewidth=_b;this.imageheight=this._preheight=_c;this._img_load_completed(_a);};_pImageViewer._img_load_completed=function(_a,_b){var _c=this._img_elem;var _d=this.image;if(_c){if(!_d){this._img_elem.setElementVisible(false);this._img_elem.setElementImageUrl("");this._updateElementPositions();this.imagewidth=0;this.imageheight=0;if(this._text_elem){var _e=this.currentstyle.align.halign==""?"center":this.currentstyle.align._halign;var _f=this.currentstyle.align.valign==""?"middle":this.currentstyle.align._valign;this._text_elem.setElementAlignXY(_e,_f);}}else{var _g=this._img_type;_d=_d.toString();if(_b==undefined){_b=true;}if(_g=="url"){if(_d.substring(0,4).toLowerCase()=="url("){_d=_d.substring(5,_d.length-2);}_d=nexacro._getImageLocation(_d,this._getRefFormBaseUrl());if(_d==_a){_c.setElementVisible(_b);_c.setElementImageUrl(_d);}else{nexacro._releaseImageUrl(_a);}}else{_c.setElementVisible(_b);_c.setElementImageBase64(_a);}this._updateElementPositions();}}_c=null;};_pImageViewer._load_image=function(_a){var _b=_a.toString();var _c=this.getElement();var _d=this.currentstyle;if(_b&&_c){var _e=this._img_elem;var _f=this._text_elem;var _g=this._img_type;if(_g=="url"){_b=nexacro._getURIValue(_b);_b=nexacro._getImageLocation(_b,this._getRefFormBaseUrl());}if(!_e){this._img_elem=_e=new nexacro.ImageElement(_c);}if(!_e._handle){_e.create();}var _h=nexacro._getImageSize(_b,this._on_loadImg,this,undefined,_a.toString());if(_h){this._prewidth=_h.width;this._preheight=_h.height;this._img_load_completed(_b);}if(_f){_c.moveToNextElement(_e,_f);}_e=null;_f=null;img_size=null;}else{if(this._img_elem){this._img_elem.setElementVisible(false);this._img_elem.setElementImageUrl("");this._updateElementPositions();this.imagewidth=0;this.imageheight=0;if(this._text_elem){var _i=_d.align.halign==""?"center":_d.align._halign;var _j=_d.align.valign==""?"middle":_d.align._valign;this._text_elem.setElementAlignXY(_i,_j);}}}_d=null;};_pImageViewer._updateElementPositions=function(){if(this.imagealign.align==null){return;}this._resizeImage();var _a=this._img_elem;if(_a){var _b=this.imagealign.align.halign;var _c=this.imagealign.align.valign;var _d=this._client_width;var _e=this._client_height;var _f,_g;var _h=this.imagewidth;var _i=this.imageheight;var _j;var _k,_l;switch(_b){case "left":_k=0;break;case "right":_j=_d-_h;_k=_j;break;default:_j=Math.floor((_d-_h)/2);_k=_j;break;}switch(_c){case "top":_l=0;textpos_y= -1;break;case "bottom":_j=_e-_i;_l=_j;break;default:_j=Math.floor((_e-_i)/2);_l=_j;break;}_k=this._convertLeftForRtlLayout(_k,_h);_a.setElementPosition(_k,_l);_a.setElementSize(_h,_i);}_a=null;};_pImageViewer._resizeImage=function(){var _a=this._img_elem;var _b=this.stretch;var _c=this.image;if(!_a||_b==null){return;}var _d=this._client_width;var _e=this._client_height;if(_b=="fit"||_c._handle_id){if(this._prewidth==0&&this._preheight==0){_a.image_width=this.imagewidth=0;_a.image_height=this.imageheight=0;}else{_a.image_width=this.imagewidth=_d;_a.image_height=this.imageheight=_e;}}else if(_b=="fixaspectratio"){var _f=0,_g=0;if(this.imagewidth==0&&this.imageheight==0){var _h=this._prewidth;var _i=this._preheight;}else{var _h=this.imagewidth=this._prewidth;var _i=this.imageheight=this._preheight;}var _j=_d/_h;var _k=_e/_i;if(_j<=_k){_f=_d;_g=Math.floor(_i*_j);}else{_f=Math.floor(_h*_k);_g=_e;}_a.image_width=this.imagewidth=_f;_a.image_height=this.imageheight=_g;}else{_a.image_width=this.imagewidth=this._prewidth;_a.image_height=this.imageheight=this._preheight;}_a.setElementSize(this.imagewidth,this.imageheight);this.stretch=_b;_b=null;_a=null;};delete _pImageViewer;_pImageViewer=null;nexacro.ImageViewerCtrl=function(_a,_b,_c,_d,_e,_f,_g,_h,_i){nexacro.ImageViewer.call(this,_a,_b,_c,_d,_e,_f,_g,_h,_i);this._is_subcontrol=true;};var _pImageViewerCtrl=nexacro.ImageViewerCtrl.prototype=nexacro._createPrototype(nexacro.ImageViewer,nexacro.ImageViewerCtrl);_pImageViewerCtrl._type_name="ImageViewerControl";nexacro._setForControlStyleFinder(_pImageViewerCtrl);delete _pImageViewerCtrl;_pImageViewerCtrl=null;}