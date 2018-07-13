package kh.mybatis.imapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.session.SqlSession;

import kh.mybatis.dto.MessagesDTO;

public interface IMessgesDAO {
	//원래 2개 다 만들지는 않는다  impl
	@Select("select * from messages")
	public List<MessagesDTO> getAllData(SqlSession session);
	
	@Insert("insert into messages values (messages_seq.nextval,#{dto.writer},#{dto.contents})")
	public int insertNewData(SqlSession session , @Param("dto") MessagesDTO dto);
	// 그래 dto 는 분선 해야 한다고 해서 Param 이 필요 한다고 하자
	
	@Delete("delete messages where SEQ = #{seq}")
	public int deleteData(SqlSession session , @Param("seq") int seq);
	// 애는 왜 int 만 있는데 왜 Param 이 있어야 하는거지 ?
	
	@Select("<script>"
			+ "select * from messages"
			+ "<trim prefix='where writer in'>"
			+ "<if test='param.writers!=null'>"
			+ "<foreach collection='param.writers' item='writer' open='(' close=')' separator=','>"
			+ "#{writer}"
			+ "</foreach>"
			+ "	</if>"
			+ "</trim>"
			+ "</script>")
	 public List<MessagesDTO> selectByWriterList(SqlSession Session,@Param("param")  Map<String, String[]> condition);
}
