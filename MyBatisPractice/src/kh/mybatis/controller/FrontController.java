package kh.mybatis.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kh.mybatis.dao.StudentDAO;
import kh.mybatis.dto.StudentDTO;
import ks.mybatis.factory.MyBatisSqlSessionFactory;



@WebServlet("*.do")
public class FrontController extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String requestURI = request.getRequestURI();
		String contextPath = request.getContextPath();
		String command = requestURI.substring(contextPath.length());
		System.out.println(command);
		request.setCharacterEncoding("utf8");
		response.setCharacterEncoding("utf8");
		
		if(command.equals("/select.do")) {
			
			StudentDAO sdao = new StudentDAO();
			
			List<StudentDTO> list = sdao.selcetStudent(MyBatisSqlSessionFactory.getSqlSession());
			
			for(StudentDTO tmp : list) {
				System.out.println(tmp);
			}
			
			request.setAttribute("list", list);
			RequestDispatcher rd = request.getRequestDispatcher("info.jsp");
			rd.forward(request, response);
			
		}else if(command.equals("/insert.do")) {
			String memberid = request.getParameter("memberid");
			String password = request.getParameter("password");
			String name = request.getParameter("name");
			String email = request.getParameter("email");
			
			StudentDTO sdto = new StudentDTO(0,memberid,password,name,email);
			StudentDAO sdao = new StudentDAO();
			
			int result = sdao.insertStudent(MyBatisSqlSessionFactory.getSqlSession(), sdto);
			String resultMessage = result >0 ? " 입력 성공" : "입력 실패";
			System.out.println(resultMessage);
			
			RequestDispatcher rd = request.getRequestDispatcher("index.jsp");
			rd.forward(request, response);
			
		}else if(command.equals("/login.do")) {
			String memberid = request.getParameter("memberid");
			String password = request.getParameter("password");
			System.out.println(memberid);
			System.out.println(password);
			Map<String, String> condition = new HashMap<String,String>();
			
			condition.put("memberid", memberid);
			condition.put("password", password);
			
			StudentDAO sdao = new StudentDAO();
			List<StudentDTO> list =
					sdao.loginStudent(MyBatisSqlSessionFactory.getSqlSession(), condition);
			
			request.setAttribute("list", list);
			RequestDispatcher rd = request.getRequestDispatcher("index.jsp");
			rd.forward(request, response);
		}
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
