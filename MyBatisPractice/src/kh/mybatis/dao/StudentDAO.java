package kh.mybatis.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;


import kh.mybatis.dto.StudentDTO;

public class StudentDAO {
	
	public int insertStudent(SqlSession session , StudentDTO sdto ) {
		int result = 0;
		try {
			result = session.insert("Student.insert",sdto);
		} finally {
			session.commit();
			session.close();
		}
		return result;
	}
	
	public List<StudentDTO> selcetStudent(SqlSession session) {
		List<StudentDTO> list = null;
		try {
			list = session.selectList("Student.select");
			
		} finally {
			session.close();
		}
		// 우리가 만들것  "Messages.selectAll"  <-- namespace
		// 세션은 닫히게 만들어야함 
		return list;
	}
	
}
