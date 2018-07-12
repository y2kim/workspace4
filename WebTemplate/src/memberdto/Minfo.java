package memberdto;

import java.util.Date;

public class Minfo {
	private int no;
	private String texter;
	private Date last_modify;
	
	public Minfo() {
		super();
	}
	
	public Minfo(int no, String texter, Date last_modify) {
		this.no = no;
		this.texter = texter;
		this.last_modify = last_modify;
	}
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public String getTexter() {
		return texter;
	}
	public void setTexter(String texter) {
		this.texter = texter;
	}
	public Date getLast_modify() {
		return last_modify;
	}
	public void setLast_modify(Date last_modify) {
		this.last_modify = last_modify;
	}
	
	
	
}
