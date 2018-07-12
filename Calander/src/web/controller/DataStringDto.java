package web.controller;

import java.util.Date;

public class DataStringDto {
	private String starttime;
	private String endtime;
	
	public DataStringDto() {
		super();
	}

	public DataStringDto(String starttime, String endtime) {
		this.starttime = starttime;
		this.endtime = endtime;
	}
	
	public String getStarttime() {
		return starttime;
	}
	public void setStarttime(String starttime) {
		this.starttime = starttime;
	}
	public String getEndtime() {
		return endtime;
	}
	public void setEndtime(String endtime) {
		this.endtime = endtime;
	}
	
	
}
