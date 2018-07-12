package kh.nxcr.dao;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;
import javax.naming.Context;
import javax.naming.InitialContext;

public class MessagesDAO {
	
	private Connection getConnection() throws Exception {
		Context ctx = new InitialContext();
		DataSource ds = (DataSource) ctx.lookup("java:/comp/env/oracle");
		return ds.getConnection();
	}
	
	public int insertNewData(MessagesDTO mdto) throws Exception {
		Connection con = this.getConnection();
		String sql = "insert into messages values(messages_seq.nextval,?,?) ";
		 PreparedStatement pstat = con.prepareStatement(sql);
	      pstat.setString(1, mdto.getWriter());
	      pstat.setString(2, mdto.getContents());
	      int result = pstat.executeUpdate();  
	      con.commit();
	      pstat.close();
	      con.close();
	      return result;
	}
	
	
	public List<MessagesDTO> getAllData() throws Exception {
		Connection con = this.getConnection();
		String sql = "Select * from messages";
		PreparedStatement pstat = con.prepareStatement(sql);
		ResultSet rs = pstat.executeQuery();
		List<MessagesDTO> list = new ArrayList<>();
		while(rs.next()) {
			MessagesDTO mdto = new MessagesDTO();
			mdto.setSeq(rs.getInt(1));
			mdto.setWriter(rs.getString(2));
			mdto.setContents(rs.getString(3));
			list.add(mdto);
		}
		rs.close();
		pstat.close();
		con.close();
		
		return list;
	}
	
}
