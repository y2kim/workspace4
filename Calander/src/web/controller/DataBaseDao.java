package web.controller;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;



public class DataBaseDao {
	
	public Connection dbConnect() throws Exception {
		Class.forName("oracle.jdbc.driver.OracleDriver");
		String DB_URL = "jdbc:oracle:thin:@127.0.0.1:1521:XE";
		String DB_USER = "kh";
		String DB_PASSWORD = "kh";
		return  DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
	}
	
	
	public int insertMember(Date date) throws Exception {
		Connection cons = dbConnect();
		String sql = "insert into sttable values(?)";
		PreparedStatement pst = cons.prepareStatement(sql);
		pst.setDate(1, new java.sql.Date(date.getTime()));
		int result = pst.executeUpdate();
		cons.commit();
		pst.close();
		cons.close();
		return result;
	}
	
	
	public int dinsertMember(Date date) throws Exception {
		Connection cons = dbConnect();
		String sql = "insert into detaletable values(?)";
		PreparedStatement pst = cons.prepareStatement(sql);
		pst.setDate(1, new java.sql.Date(date.getTime()));
		int result = pst.executeUpdate();
		cons.commit();
		pst.close();
		cons.close();
		return result;
	}
	
	
	public int insertTimetables(Date bigindate,Date endindate) throws Exception {
		Connection cons = dbConnect();
		String sql = "insert into timetables values(?,?)";
		PreparedStatement pst = cons.prepareStatement(sql);
		pst.setTimestamp(1, new java.sql.Timestamp(bigindate.getTime()));
		pst.setTimestamp(2, new java.sql.Timestamp(endindate.getTime()));
		int result = pst.executeUpdate();
		cons.commit();
		pst.close();
		cons.close();
		return result;
	}
	
	public int insertTimetablesList(DataSampleDto dsdto) throws Exception {
		Connection cons = dbConnect();
		String sql = "insert into timetables values(?,?)";
		PreparedStatement pst = cons.prepareStatement(sql);
		pst.setTimestamp(1, new java.sql.Timestamp(dsdto.getStarttime().getTime()));
		pst.setTimestamp(2, new java.sql.Timestamp(dsdto.getEndtime().getTime()));
		int result = pst.executeUpdate();
		cons.commit();
		pst.close();
		cons.close();
		return result;
	}
	
	
	public int insertTimetablesString(DataStringDto dsdto) throws Exception {
		Connection cons = dbConnect();
		String sql = "insert into timetables values(?,?)";
		PreparedStatement pst = cons.prepareStatement(sql);
		pst.setString(1, dsdto.getStarttime());
		pst.setString(2,dsdto.getEndtime());
		int result = pst.executeUpdate();
		cons.commit();
		pst.close();
		cons.close();
		return result;
	}
	
	public List<DataSampleDto> selectTimetables(Date bigindate) throws Exception {
		Connection cons = dbConnect();
		String sql = "select * from (select * from TIMETABLES where STARTTIME >= SYSDATE)"
				+ " where STARTTIME >= TO_char(?,'YYYYMMDD')  order by STARTTIME";
		PreparedStatement pst = cons.prepareStatement(sql);
		pst.setDate(1, new java.sql.Date(bigindate.getTime()));
		ResultSet rs = pst.executeQuery();
		List<DataSampleDto> list = new ArrayList<>();
		while (rs.next()) {
			DataSampleDto dsdto = new DataSampleDto();
			dsdto.setStarttime(rs.getDate(1));
			dsdto.setEndtime(rs.getDate(2));
			list.add(dsdto);
		}
		rs.close();
		pst.close();
		cons.close();
		return list;
	}
	
	public Connection meetdbConnect() throws Exception {
		Class.forName("oracle.jdbc.driver.OracleDriver");
		String DB_URL = "jdbc:oracle:thin:@127.0.0.1:1521:XE";
		String DB_USER = "meetnow";
		String DB_PASSWORD = "meetnow";
		return  DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
	}
	
	public List<ShowMeetingDTO> selectMeet(Date bigindate) throws Exception {
		Connection con = meetdbConnect();
		String sql = "select to_char(meeting_start_time,'yyyy\"년\"mm\"월\"dd\"일\" day'),to_char(meeting_start_time,'HH24:mi'),group_name,meeting_title ,meeting_location "
				+ "from (select * from MEETING where meeting_start_time >= SYSDATE) where meeting_start_time >= TO_char(?,'YYYYMMDD') order by meeting_start_time";
		System.out.println(sql);
		PreparedStatement pstat = con.prepareStatement(sql);
		pstat.setDate(1, new java.sql.Date(bigindate.getTime()));
		ResultSet rs = pstat.executeQuery();
		List<ShowMeetingDTO> list = new ArrayList<>();
		System.out.println("???");
		while(rs.next()) {
			ShowMeetingDTO smdto = new ShowMeetingDTO();
			smdto.setDat_month(rs.getString(1));
			smdto.setHour_minut(rs.getString(2));
			smdto.setGroup_name(rs.getString(3));
			smdto.setMeeting_title(rs.getString(4));
			smdto.setMeeting_location(rs.getString(5));
			
			list.add(smdto);
		}
		rs.close();
		pstat.close();
		con.close();
		
		return list;
	}
	
}
