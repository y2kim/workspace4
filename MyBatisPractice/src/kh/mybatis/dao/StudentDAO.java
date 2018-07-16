package kh.mybatis.dao;

import java.util.List;
import java.util.Map;

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

		return list;
	}
	
	public List<StudentDTO> loginStudent(SqlSession session, Map<String, String> condition) {
		List<StudentDTO> list = null;
		try {
			list = session.selectList("Student.logincheck",condition);
			
		} finally {
			session.close();
		}
 
		return list;
	}
	
}
