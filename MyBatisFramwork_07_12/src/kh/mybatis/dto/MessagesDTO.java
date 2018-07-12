package kh.mybatis.dto;

public class MessagesDTO {
	private int seq;
	private String writer;
	private String contents;
	
	public String toString() {
		return this.seq + " : " + writer + " : " + contents ;
	}
	
	public MessagesDTO() {
		super();
	}
	
	
	public MessagesDTO(int seq, String writer, String contents) {
		
		this.seq = seq;
		this.writer = writer;
		this.contents = contents;
	}



	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public String getWriter() {
		return writer;
	}
	public void setWriter(String writer) {
		this.writer = writer;
	}
	public String getContents() {
		return contents;
	}
	public void setContents(String contents) {
		this.contents = contents;
	}
	
	
}
