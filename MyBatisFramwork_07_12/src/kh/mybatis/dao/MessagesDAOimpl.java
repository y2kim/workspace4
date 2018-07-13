package kh.mybatis.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import kh.mybatis.dto.MessagesDTO;
import kh.mybatis.imapper.IMessgesDAO;

public class MessagesDAOimpl implements IMessgesDAO {

	@Override
	public List<MessagesDTO> getAllData(SqlSession session) {
		// 비슷한 구조
		List<MessagesDTO> list = null;
		try {
			// 여기서 하나가 달라짐  mapper 파일이 없음 
			list = session.getMapper(IMessgesDAO.class).getAllData(session);
			
		} finally {
			session.close();
		}
		
		return list;
	}

	@Override
	public int insertNewData(SqlSession session, MessagesDTO mdto) {
		int result = 0;
		try {
			result = session.getMapper(IMessgesDAO.class).insertNewData(session, mdto);
		} finally {
			session.commit();
			session.close();
		}
		return result;
	}

	@Override
	public int deleteData(SqlSession session, int seq) {
		int result = 0;
		try {
			result = session.getMapper(IMessgesDAO.class).deleteData(session, seq);
		} finally {
			session.commit();
			session.close();
		}
		return result;
	}

	@Override
	public List<MessagesDTO> selectByWriterList(SqlSession Session, Map<String, String[]> condition) {
List<MessagesDTO> list = null;
		
		try {
			list = Session.getMapper(IMessgesDAO.class).selectByWriterList(Session, condition);
			
		} finally {
			Session.close();
		}
		
		return list;
	}
	
	

}
