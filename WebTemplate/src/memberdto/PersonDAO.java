package memberdto;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class PersonDAO {
	
	private JdbcTemplate jdbc = new JdbcTemplate();
	
	
	private int insertData() throws Exception {
		Connection cons = jdbc.getConnection();
		String sql = "insert into objdate values(?,?,sysdate)";
		PreparedStatement pst = cons.prepareStatement(sql);
		pst.setInt(1, 15);
		pst.setString(2,"abc");
		int result = pst.executeUpdate();
		jdbc.commit(cons);
		jdbc.close(cons, pst);
		return result;
	}
	
	private List<Minfo> selectData() throws Exception {
		Connection cons = jdbc.getConnection();
		String sql = "select * from objdate	";
		PreparedStatement pst = cons.prepareStatement(sql);
		ResultSet rs = pst.executeQuery();
		List<Minfo> list = new ArrayList<>();
		while (rs.next()) {
			Minfo minfo = new Minfo();
			minfo.setNo(rs.getInt("no"));
			minfo.setTexter(rs.getString("texter"));
			minfo.setLast_modify(rs.getDate("last_modify"));
			list.add(minfo);
		}
		jdbc.close(cons, pst, rs);
		return list;
	}
	
	public int longLogin(String texter) throws Exception{
		Connection cons = jdbc.getConnection();
		String sql = "SELECT TRUNC(sysdate) - TO_DATE(LAST_MODIFY) FROM objdate where texter = ?";
		PreparedStatement pst = cons.prepareStatement(sql);
		pst.setString(1,texter);
		ResultSet rs = pst.executeQuery();
		if(rs.next()) {
			int resultday = rs.getInt(1);
			jdbc.close(cons, pst, rs);
			System.out.println("결과값"+resultday);
			return resultday;
		}else {
			int resultday =0;
			jdbc.close(cons, pst, rs);
			return resultday;
		}
		
	}
	
	
}
