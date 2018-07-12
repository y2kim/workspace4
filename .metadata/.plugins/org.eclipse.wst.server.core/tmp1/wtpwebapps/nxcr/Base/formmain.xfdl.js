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
                this.set_name("formmain");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,600,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("tofrmTest", "absolute", "4%", "24", null, "113", "73.17%", null, this);
            obj.set_taborder("0");
            obj.set_text("formTest로 가기");
            this.addChild(obj.name, obj);

            obj = new Button("input", "absolute", "40.83%", "29", null, "107", "36.83%", null, this);
            obj.set_taborder("1");
            obj.set_text("toinput");
            this.addChild(obj.name, obj);

            obj = new Button("output", "absolute", "39.67%", "189", null, "125", "35.83%", null, this);
            obj.set_taborder("2");
            obj.set_text("tooutput");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "10%", "192", null, "106", "65%", null, this);
            obj.set_taborder("3");
            obj.set_text("message Exam");
            obj.style.set_border("1 solid #808080ff");
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
        this.registerScript("formmain.xfdl", function(exports) {

        this.tofrmTest_onclick = function(obj,e)
        {
        	this.go("Base::forminput.xfdl");
        	// this go 로 해야함 
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.go("Base::forminput.xfdl");
        }

        this.output_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.tofrmTest.addEventHandler("onclick", this.tofrmTest_onclick, this);
            this.input.addEventHandler("onclick", this.Button00_onclick, this);
            this.output.addEventHandler("onclick", this.output_onclick, this);

        };

        this.loadIncludeScript("formmain.xfdl", true);

       
    };
}
)();
