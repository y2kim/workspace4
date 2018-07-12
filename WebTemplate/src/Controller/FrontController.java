package Controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import memberdto.PersonDAO;

@WebServlet("*.do")
public class FrontController extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String requestURI = request.getRequestURI();
		String contextPath = request.getContextPath();
		String command = requestURI.substring(contextPath.length());

		boolean isRedirect = true;
		String whereTo = null;
		PersonDAO pdao = new PersonDAO();
		
		if(command.equals("/LoginContol.do")) {
			try {
			String name = request.getParameter("id");
			System.out.println(name);
			int howlong = pdao.longLogin(name);
			System.out.println(howlong);
			request.setAttribute("howlong", howlong);
			whereTo = "main.jsp";
			isRedirect = false;
			}catch (Exception e) {
				e.getStackTrace();
			}
		}
		
		if(isRedirect) {
			response.sendRedirect(whereTo);
		}else {
			RequestDispatcher rd = request.getRequestDispatcher(whereTo);
			rd.forward(request, response);
		}
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}
