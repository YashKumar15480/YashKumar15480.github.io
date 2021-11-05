

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Servlet1
 */
@WebServlet("/Servlet1")
public class Servlet1 extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out = response.getWriter();
		
		String fname = request.getParameter("Fname");
		String lname = request.getParameter("Lname");
		String age = request.getParameter("Age");
		String doj = request.getParameter("DOJ");
		String cs = request.getParameter("CS");
		String dept = request.getParameter("DEPT");
		String jt = request.getParameter("JobType");
		String idc = request.getParameter("IDcard");
		
		
		out.println("<h1>Welcome to servelt 1 "+fname+" "+lname+"</h1>");
		out.println("<h2> your age is : "+ age+"</h2>");
		out.println("<h2> your date of joining is : "+doj+"</h2>");
		out.println("<h2> your current salary is : "+cs+"</h2>");
		out.println("<h2> your department name is : "+dept+"</h2>");
		out.println("<h2> your Job Type is : "+jt+"</h2>");
		out.println("<h2> your ID CARD number is : "+idc+"</h2>");
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
