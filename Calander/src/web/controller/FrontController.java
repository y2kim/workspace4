package web.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;

import com.google.gson.Gson;

import oracle.net.aso.d;


@WebServlet("*.do")
public class FrontController extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String requestURI = request.getRequestURI();
		String contextPath =request.getContextPath();
		String command= requestURI.substring(contextPath.length());

		response.setCharacterEncoding("utf8");
		PrintWriter out = response.getWriter();
		DataBaseDao dbdt = new DataBaseDao();
		DataSampleDto dsdt = new DataSampleDto();
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(
				"yyyyMMdd");

		SimpleDateFormat simpleFullDateFormat = new SimpleDateFormat(
				"yyyyMMddHHmm");
		
		SimpleDateFormat showDateFormat = new SimpleDateFormat(
				"yyyy년MM월dd일");
		
		boolean isRedirect =true;
		String dst = null;
		
		if(command.equals("/cals.do")) {
			String value = request.getParameter("val");
			out.println(value);
		}else if(command.equals("/newcal.do")) {

		}else if(command.equals("/insert.do")) {
			try {
				String value = request.getParameter("date");
				System.out.println(value);
				Date tempDate = simpleDateFormat.parse(value);
				System.out.println(tempDate);
				int result = dbdt.insertMember(tempDate);
				System.out.println(result);
				request.setAttribute("result", result);
				RequestDispatcher rd = request.getRequestDispatcher("result.jsp");
				rd.forward(request, response);
			}catch (Exception e) {
				e.getStackTrace();
			}
		}else if(command.equals("/detale.do")) {

		}else if(command.equals("/timeinto.do")) {
			try {
				String startcal = request.getParameter("startcal");
				String starttime = request.getParameter("starttime");
				String endcal = request.getParameter("endcal");
				String endtime = request.getParameter("endtime");
				String[] mob1 = startcal.split("/");
				String[] mob2 = starttime.split(":");
				String[] mob3 = endcal.split("/");
				String[] mob4 = endtime.split(":");
				String data01 = null;
				String data02 = null;
				for(int i=0;i<mob1.length;i++) {
					if(i==0) {
						data01 = mob1[i];
					}else {
						data01 += mob1[i];
					}
				}
				for(int i=0;i<mob2.length;i++) {
					data01 += mob2[i];
				}
				for(int i=0;i<mob3.length;i++) {
					if(i==0) {
						data02 = mob3[i];
					}else {
						data02 += mob3[i];
					}
				}
				for(int i=0;i<mob4.length;i++) {
					data02 += mob4[i];
				}
				System.out.println(data01);
				System.out.println(data02);
				Date sDate01 = simpleFullDateFormat.parse(data01);
				Date bDate02 = simpleFullDateFormat.parse(data02);
				System.out.println(sDate01);
				System.out.println(bDate02);
				System.out.println(sDate01.getTime());
				System.out.println(bDate02.getTime());
				//int result = dbdt.insertTimetables(sDate01, bDate02);
				DataSampleDto dsdto = new DataSampleDto();
				dsdto.setStarttime(sDate01);
				dsdto.setEndtime(bDate02);
				int result = dbdt.insertTimetablesList(dsdto);
				System.out.println(result);	
			}catch (Exception e) {
				e.printStackTrace();
			}
		}else if(command.equals("/datacall.do")) {
			try {
				JSONArray jarray =new JSONArray();
				response.setCharacterEncoding("utf8");
				response.setContentType("application/json");
				String value = request.getParameter("val");
				System.out.println(value);
				Date tempDate = simpleDateFormat.parse(value);
				System.out.println(tempDate);
				List<DataSampleDto> list = dbdt.selectTimetables(tempDate);
				java.text.SimpleDateFormat format1 = new java.text.SimpleDateFormat("yyyy년MM월dd일");
				String dateString = format1.format(tempDate);
				System.out.println(dateString);

				//request.setAttribute("list", list);
				System.out.println(list.size());
				int listLenth = list.size();
				String[] dataList1 = new String[listLenth];
				String[] dataList2 = new String[listLenth];
				//String[] dataList2 = list.toArray(new String[list.size()]);
				for(int i=0;i<list.size();i++) {
					 JSONObject json = new JSONObject();
					 json.put("start", list.get(i).getStarttime());
					 json.put("end", list.get(i).getEndtime());
					 dataList1[i] = format1.format(list.get(i).getStarttime());
					 dataList2[i] = format1.format(list.get(i).getEndtime());
					 json.put("showDate", dataList1[i]);
					 jarray.add(json);
				}
				System.out.println(jarray);
				//String dayList = showDateFormat.format(list);
				//out.println(list);
				System.out.println("결과:"+dataList1[0]);
				new Gson().toJson(jarray,response.getWriter());
				
				//response.getWriter().print(jarray);
				//response.getWriter().flush();
				//response.getWriter().close();
				
			}catch (Exception e) {
				e.printStackTrace();
			}
		}else if(command.equals("/timesector.do")) {
			try {
			String startcal = request.getParameter("start");
			String starttime = request.getParameter("end");
			String[] mob1 = startcal.split("/");
			String[] mob2 = starttime.split("/");
			String sdata01 = null;
			String edata02 = null;
			for(int i=0;i<mob1.length;i++) {
				if(i==0) {
					sdata01 = mob1[i];
				}else {
					sdata01 += mob1[i];
				}
			}
			for(int i=0;i<mob2.length;i++) {
				if(i==0) {
					edata02 = mob2[i];
				}else {
					edata02 += mob2[i];
				}
			}
			System.out.println(sdata01);
			System.out.println(edata02);
			
			Date sDate01 = simpleFullDateFormat.parse(sdata01);
			Date bDate02 = simpleFullDateFormat.parse(edata02);
			int result = dbdt.insertTimetables(sDate01, bDate02);
			System.out.println(result);	
			}catch (Exception e) {
				e.printStackTrace();
			}
		}else if(command.equals("/meetcal.do")) {
			try {
				JSONArray jarray =new JSONArray();
				String value = request.getParameter("val");
				response.setCharacterEncoding("utf8");
				response.setContentType("application/json");
				System.out.println(value);
				Date tempDate = simpleDateFormat.parse(value);
				System.out.println(tempDate);
				List<ShowMeetingDTO> list = dbdt.selectMeet(tempDate);
				//System.out.println(list.size());

				//out.println(list);
				for(int i=0;i<list.size();i++) {
					JSONObject json = new JSONObject();
					json.put("date", list.get(i).getDat_month());
					json.put("hour", list.get(i).getHour_minut());
					json.put("groupName", list.get(i).getGroup_name());
					json.put("groupTitle", list.get(i).getMeeting_title());
					json.put("Location", list.get(i).getMeeting_location());
					jarray.add(json);
				}
				System.out.println(jarray);
				new Gson().toJson(jarray,response.getWriter());
				
			} catch (Exception e) {
				e.printStackTrace();
			}
		}else if(command.equals("/form.do")) {
			String value = request.getParameter("date");
			System.out.println(value);
			System.out.println("성공");
		}
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
