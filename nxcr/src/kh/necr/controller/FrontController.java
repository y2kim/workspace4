package kh.necr.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.datatype.DataType;
import com.nexacro.xapi.tx.HttpPlatformRequest;
import com.nexacro.xapi.tx.HttpPlatformResponse;
import com.nexacro.xapi.tx.PlatformException;
import com.nexacro.xapi.tx.PlatformType;

import kh.nxcr.dao.MessagesDAO;
import kh.nxcr.dao.MessagesDTO;


@WebServlet("*.do")
public class FrontController extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String requestURI = request.getRequestURI();
		String contextPath = request.getContextPath();
		String command = requestURI.substring(contextPath.length());
		System.out.println(command);
		
		//System.out.println("요청 확인");   
		try {
			
			if(command.equals("/input.do")) {
			
			HttpPlatformRequest req = new HttpPlatformRequest(request);
			req.receiveData();
			PlatformData inputData = req.getData();
			DataSet ds = inputData.getDataSet("request");
			String writer = ds.getString(0, "writer");
			String message = ds.getString(0, "message");
			
			//DAO
			MessagesDAO dao = new MessagesDAO();
			int result = dao.insertNewData(new MessagesDTO(0, writer, message));
			
			String resultMessage = result > 0 ? "입력에 성공": "입력 실패"; // 왼쪽 성공 오른쪽 실패 
			//System.out.println(writer +" : "+ message);
			
			// 되돌렬 보낼 데이터 구조 생성
			PlatformData outputData = new PlatformData();
			// 되도렬 보낸 데이터 추가할 데이터 셋 추가
			DataSet respDs = new DataSet("resp");
			// 해당 데이터 셋에 컬럼 추가
			respDs.addColumn("forward",DataTypes.STRING, 256);
			respDs.addColumn("resultMessage",DataTypes.STRING, 256);
			// 해당 데이터 셋에 새 행을 생성하고 데이터 추가
			int row = respDs.newRow();
			respDs.set(row, "forward", "Base::formmain.xfdl");
			System.out.println(respDs);
			respDs.set(row, "resultMessage", resultMessage);
			// 데이터셋을 플랫폼을 데이터에 추가 
			outputData.addDataSet(respDs);
			
			HttpPlatformResponse respData = 
					new HttpPlatformResponse(response,PlatformType.CONTENT_TYPE_XML,"UTF-8");
			
			respData.setData(outputData);
			respData.sendData();
			
			}else if(command.equals("/output.do")){
				
				MessagesDAO dao = new MessagesDAO();
				List<MessagesDTO> result = dao.getAllData();
				
				PlatformData outputData = new PlatformData();
				
				DataSet ds = new DataSet("respDs");
				ds.addColumn("seq",DataTypes.INT, 4);
				ds.addColumn("writer",DataTypes.STRING, 256);
				ds.addColumn("contents",DataTypes.STRING, 256);
				
				for(MessagesDTO tmp:result) {
					int row = ds.newRow();
					ds.set(row, "seq", tmp.getSeq());
					ds.set(row, "writer", tmp.getWriter());
					ds.set(row, "contents", tmp.getContents());
				}
				
				outputData.addDataSet(ds);
				HttpPlatformResponse resp 
					= new HttpPlatformResponse(response,PlatformType.CONTENT_TYPE_XML,"UTF-8");
				resp.setData(outputData);
				resp.sendData();
				
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}
