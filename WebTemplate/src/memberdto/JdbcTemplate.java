package memberdto;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class JdbcTemplate {
	
	
	public Connection getConnection() throws Exception{
		Class.forName("oracle.jdbc.driver.OracleDriver");
		String url = "jdbc:oracle:thin:@127.0.0.1:1521:XE";
		String user = "kh";
		String password = "kh";
		return DriverManager.getConnection(url, user, password);
	}
	
	public void rollback(Connection con){
		try {
			con.rollback();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public void commit(Connection con) {
		try {
			con.commit();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void close(Connection con) {
		try {
			if(con!=null && !con.isClosed()) {
				con.isClosed();
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
	
	public void close(Connection con , PreparedStatement pstat ) {
		try {
			if(con!=null && !con.isClosed()) {
				con.isClosed();
			}
			if(pstat!=null && !pstat.isClosed()) {
				pstat.isClosed();
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
	
	public void close(Connection con, PreparedStatement pstat, ResultSet rs) {
		try {
			if(con!=null && !con.isClosed()) {
				con.isClosed();
			}
			if(pstat!=null && !pstat.isClosed()) {
				pstat.isClosed();
			}
			if(rs!=null && !rs.isClosed()) {
				rs.isClosed();
			}
			
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
}
