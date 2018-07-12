package kh.mybatis.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSession;

import kh.mybatis.dto.MessagesDTO;


public class MessagesDAO {
	//트랙젝션 처리 이슈 해결하기위한 이유
	public List<MessagesDTO> getAllData(SqlSession session) throws Exception {
		List<MessagesDTO> list = null;
		list = session.selectList("Messages.selectAll");
		// 우리가 만들것  "Messages.selectAll"  <-- namespace
		
		return list;
	}
	
	
	
//	public int insertNewData(MessagesDTO mdto) throws Exception {
//		Connection con = this.getConnection();
//		String sql = "insert into messages values(messages_seq.nextval,?,?) ";
//		PreparedStatement pstat = con.prepareStatement(sql);
//		pstat.setString(1, mdto.getWriter());
//		pstat.setString(2, mdto.getContents());
//		int result = pstat.executeUpdate();  
//		con.commit();
//		pstat.close();
//		con.close();
//		return result;
//	}
	
	
}
