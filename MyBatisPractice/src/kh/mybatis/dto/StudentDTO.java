package kh.mybatis.dto;

public class StudentDTO {
	private int seq;
	private String memberid;
	private String password;
	private String name;
	private String email;
	
	public StudentDTO() {
		super();
	}

	public StudentDTO(int seq, String memberid, String password, String name, String email) {
		super();
		this.seq = seq;
		this.memberid = memberid;
		this.password = password;
		this.name = name;
		this.email = email;
	}
	
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public String getMemberid() {
		return memberid;
	}
	public void setMemberid(String memberid) {
		this.memberid = memberid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
}
