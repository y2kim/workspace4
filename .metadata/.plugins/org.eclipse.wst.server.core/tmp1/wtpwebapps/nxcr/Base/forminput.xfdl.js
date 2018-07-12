(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("formtest");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,600,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRequest", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"INT\" size=\"4\"/><Column id=\"writer\" type=\"STRING\" size=\"256\"/><Column id=\"message\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsResponse", this);
            obj._setContents("<ColumnInfo><Column id=\"forward\" type=\"STRING\" size=\"256\"/><Column id=\"resultMessage\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("back", "absolute", "7%", "22", null, "90", "71.13%", null, this);
            obj.set_taborder("0");
            obj.set_text("돌아가기");
            this.addChild(obj.name, obj);

            obj = new Button("submit", "absolute", "9%", "293", null, "94", "67%", null, this);
            obj.set_taborder("1");
            obj.set_text("OK");
            this.addChild(obj.name, obj);

            obj = new Button("return", "absolute", "37.33%", "289", null, "95", "34.67%", null, this);
            obj.set_taborder("2");
            obj.set_text("BACK");
            this.addChild(obj.name, obj);

            obj = new Edit("writer", "absolute", "13.83%", "120", null, "77", "36.5%", null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("message", "absolute", "13.33%", "200", null, "69", "36.67%", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 600, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("forminput.xfdl", function(exports) {

        this.back_onclick = function(obj,e)
        {
        	this.go("Base::formmain.xfdl");
        	//Base ::  경로설정
        	//xfdl -- 확장자
        }

        this.submit_onclick = function(obj,e)
        {
        	var writer = this.writer.value;
        	var msg = this.message.value;

        	var row = this.dsRequest.addRow();
        	// 숫자를 리턴 
        	this.dsRequest.setColumn(row,"id",0);
        	this.dsRequest.setColumn(row,"writer",writer);
        	this.dsRequest.setColumn(row,"message",msg);
        	
        	
        	var id = "request";
        	var url = "../input.do";
        	var reqDs = "request=dsRequest";
        	var respDs = "dsResponse=resp";
        	var args = "" ;
        	var callback = "abc";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	
        }

        this.abc = function(id,code,msg){
        	alert(this.dsResponse.getColumn(0,"resultMessage"));
        	this.go("Base::formmain.xfdl");
        }

        this.return_onclick = function(obj,e)
        {
        	this.go("Base::formmain.xfdl");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.back.addEventHandler("onclick", this.back_onclick, this);
            this.submit.addEventHandler("onclick", this.submit_onclick, this);
            this.return.addEventHandler("onclick", this.return_onclick, this);

        };

        this.loadIncludeScript("forminput.xfdl", true);

       
    };
}
)();
