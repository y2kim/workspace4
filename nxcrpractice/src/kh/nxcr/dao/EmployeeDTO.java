package kh.nxcr.dao;

public class EmployeeDTO {
	
	private String DEPT_ID;
	private String DEPT_TITLE;
	private String LOCATION_ID;
	
	public EmployeeDTO() {
		super();
	}
	
	public EmployeeDTO(String dEPT_ID, String dEPT_TITLE, String lOCATION_ID) {
		DEPT_ID = dEPT_ID;
		DEPT_TITLE = dEPT_TITLE;
		LOCATION_ID = lOCATION_ID;
	}

	public String getDEPT_ID() {
		return DEPT_ID;
	}
	public void setDEPT_ID(String dEPT_ID) {
		DEPT_ID = dEPT_ID;
	}
	public String getDEPT_TITLE() {
		return DEPT_TITLE;
	}
	public void setDEPT_TITLE(String dEPT_TITLE) {
		DEPT_TITLE = dEPT_TITLE;
	}
	public String getLOCATION_ID() {
		return LOCATION_ID;
	}
	public void setLOCATION_ID(String lOCATION_ID) {
		LOCATION_ID = lOCATION_ID;
	}
	
	
	
}
