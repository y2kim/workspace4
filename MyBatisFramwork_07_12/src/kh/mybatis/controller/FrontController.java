package kh.mybatis.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kh.mybatis.dao.MessagesDAO;
import kh.mybatis.dao.MessagesDAOimpl;
import kh.mybatis.dto.MessagesDTO;
import kh.mybatis.factory.MyBatisSqlSessionFactory;
import oracle.net.jdbc.nl.NetStrings;

@WebServlet("*.do")
public class FrontController extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String requestURI = request.getRequestURI();
		String contextPath = request.getContextPath();
		String command = requestURI.substring(contextPath.length());
		System.out.println(command);
		request.setCharacterEncoding("utf8");
		response.setCharacterEncoding("utf8");
		//response.sendRedirect("index.html");
		
		if(command.equals("/select.do")) {

			//MessagesDAO dao = new MessagesDAO();
			MessagesDAOimpl idao = new MessagesDAOimpl();
			
			List<MessagesDTO> result = idao.getAllData(MyBatisSqlSessionFactory.getSqlSession());
			
			for(MessagesDTO tmp : result) {
				System.out.println(tmp);
			}

		}else if(command.equals("/insert.do")) {
			String writer = request.getParameter("writer");
			String contents = request.getParameter("contents");
			System.out.println(writer);
			System.out.println(contents);
			
			MessagesDTO dto = new MessagesDTO(0,writer,contents);
			MessagesDAOimpl idao = new MessagesDAOimpl();
			//MessagesDAO dao = new MessagesDAO();
			int result = idao.insertNewData(MyBatisSqlSessionFactory.getSqlSession(), dto);
			
			String resultMessage = result >0 ? " 입력 성공" : "입력 실패";
			System.out.println(resultMessage);
			
			
		}else if(command.equals("/delete.do")) {
			String seq_no = request.getParameter("seq");
			int seq = Integer.parseInt(seq_no);
			
			MessagesDAOimpl idao = new MessagesDAOimpl();
			
			int result = idao.deleteData(MyBatisSqlSessionFactory.getSqlSession(), seq);
			
			String resultMessage = result >0 ? " 입력 성공" : "입력 실패";
			System.out.println(resultMessage);
			
		}else if(command.equals("/update.do")) {
			String seq_no = request.getParameter("seq");
			int seq = Integer.parseInt(seq_no);
			String writer = request.getParameter("writer");
			String contents = request.getParameter("contents");
			
			MessagesDTO dto = new MessagesDTO(seq,writer,contents);
			MessagesDAO dao = new MessagesDAO();
			
			int result = dao.updateData(MyBatisSqlSessionFactory.getSqlSession(), dto);
			
			String resultMessage = result >0 ? " 입력 성공" : "입력 실패";
			System.out.println(resultMessage);
		}else if(command.equals("/writerselect.do")) {
			String text = request.getParameter("textabout");
			MessagesDAO dao = new MessagesDAO();
			System.out.println(text);
			List<MessagesDTO> result = dao.selectWriter(MyBatisSqlSessionFactory.getSqlSession(), text);
			
			for(MessagesDTO tmp : result) {
				System.out.println(tmp);
			}
			
		}else if(command.equals("/contentselect.do")) {
			String text = request.getParameter("textabout");
			MessagesDAO dao = new MessagesDAO();
			
			List<MessagesDTO> result = dao.selectContent(MyBatisSqlSessionFactory.getSqlSession(), text);
			
			for(MessagesDTO tmp : result) {
				System.out.println(tmp);
			}
		}else if(command.equals("/detalesearch.do")) {
			String writer = request.getParameter("writer");
			String contents = request.getParameter("contents");
			
			MessagesDTO dto = new MessagesDTO(0,writer,contents);
			MessagesDAO dao = new MessagesDAO();
			
			List<MessagesDTO> result = dao.selectDetale(MyBatisSqlSessionFactory.getSqlSession(), dto);
			
			for(MessagesDTO tmp : result) {
				System.out.println(tmp);
			}
			
		}else if(command.equals("/search2.do")) {
			String writer = request.getParameter("writer");
			String contents = request.getParameter("contents");
			Map<String, String> condition = new HashMap<String,String>();
			
			condition.put("writer", writer);
			condition.put("contents", contents);
			
			//MessagesDTO dto = new MessagesDTO(0,writer,contents);
			MessagesDAO dao = new MessagesDAO();
			List<MessagesDTO> list  = dao.selectByComplecCondtion(MyBatisSqlSessionFactory.getSqlSession(),condition);
			//List<MessagesDTO> result = dao.selectDetale(MyBatisSqlSessionFactory.getSqlSession(), dto);
			
			for(MessagesDTO tmp : list) {
				System.out.println(tmp);
			}
			
		}else if(command.equals("/search3.do")) {
			String[] writers = request.getParameterValues("writer");
			// 체크박스 이니까  
			Map<String, String[]> condition = new HashMap<>();
			condition.put("writers", writers);
			
			MessagesDAOimpl idao = new MessagesDAOimpl();
			List<MessagesDTO> list  = idao.selectByWriterList(MyBatisSqlSessionFactory.getSqlSession(),condition);
			
			for(MessagesDTO tmp : list) {
				System.out.println(tmp);
			}
		}
		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		doGet(request, response);
	}

}
