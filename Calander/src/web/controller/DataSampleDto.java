package web.controller;

import java.util.Date;

public class DataSampleDto {
	private Date starttime;
	private Date endtime;
	
	public DataSampleDto() {
		super();
	}

	public DataSampleDto(Date starttime, Date endtime) {
		this.starttime = starttime;
		this.endtime = endtime;
	}
	
	public Date getStarttime() {
		return starttime;
	}
	public void setStarttime(Date starttime) {
		this.starttime = starttime;
	}
	public Date getEndtime() {
		return endtime;
	}
	public void setEndtime(Date endtime) {
		this.endtime = endtime;
	}
	
}
