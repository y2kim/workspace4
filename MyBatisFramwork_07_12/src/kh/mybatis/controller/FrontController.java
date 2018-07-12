package kh.mybatis.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kh.mybatis.dao.MessagesDAO;
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
		
		//response.sendRedirect("index.html");
		
		if(command.equals("/select.do")) {
			try {
			MessagesDAO dao = new MessagesDAO();
			List<MessagesDTO> result = dao.getAllData(MyBatisSqlSessionFactory.getSqlSession());
			
			for(MessagesDTO tmp : result) {
				System.out.println(tmp.getSeq() + ":" + tmp.getWriter() + ":" + tmp.getContents());
			}
			}catch (Exception e) {
				
			}
		}else if(command.equals("/f.do")) {
			
		}
		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		doGet(request, response);
	}

}
