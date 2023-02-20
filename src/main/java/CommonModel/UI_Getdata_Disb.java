package CommonModel;

import java.io.StringWriter;
import java.io.Writer;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.TransformerFactoryConfigurationError;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;

public class UI_Getdata_Disb {
	
	private String param1;
	private String param2;
	private String param3;
	private String param4;
	private String param5;
	private String DBSrc;
	private String spname;

	public void param1(String param1) {
		this.param1 = param1;
	}

	public void param2(String param2) {
		this.param2 = param2;
	}

	public void param3(String param3) {
		this.param3 = param3;
	}

	public void param4(String param4) {
		this.param4 = param4;
	}

	public void param5(String param5) {
		this.param5 = param5;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public void spname(String spname) {
		this.spname = spname;
	}
	
	public String UI_Getdata_Disb1() throws SQLException {
		
		Connection con = DBConnection.getConnection(DBSrc);
		
		String str = null;
		ResultSet rs = null;
		PreparedStatement proc_stmt = null;
		String xml = "";
		StringWriter writer = new StringWriter();
		StringBuffer sb = new StringBuffer("beginnersbook");
		StringBuffer fxml = new StringBuffer("<Resultset>");
		try {
		
		proc_stmt = con.prepareStatement("{ call " + "LSW_SGETTRNCHDISBCHKLST2" + "(?,?,?,?,?) }");

		proc_stmt.setString(1, param1);
		proc_stmt.setString(2, param2);
		proc_stmt.setString(3, param3);
		proc_stmt.setString(4, param4);
		proc_stmt.setString(5, param5);

		rs = proc_stmt.executeQuery();
		// rs.
		ResultSetMetaData rsmd = rs.getMetaData();
		
		 DocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();
		  DocumentBuilder docBuilder = null;
		try {
			docBuilder = docFactory.newDocumentBuilder();
		} catch (ParserConfigurationException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} 
		 
		//  Document doc = docBuilder.newDocument();
		  
			/*
			 * Element Resultset = doc.createElement("Resultset"); Element a =
			 * doc.createElement("a"); Element XMLLRGResult =
			 * doc.createElement("XMLLRGResult"); Element root =
			 * doc.createElement("asetLRGDAta"); doc.appendChild(Resultset);
			 * Resultset.appendChild(a); a.appendChild(XMLLRGResult);
			 * XMLLRGResult.appendChild(root);
			 */
		Map<String, Document> xmlDocMap = new HashMap<String, Document>();
		  
		
		while (rs.next()) {
			int numberOfColumns =rsmd.getColumnCount();
			String srNumber = rs.getString("SR__NO");
			System.out.println("SR__NO " + srNumber);
			Document doc = xmlDocMap.get(srNumber.charAt(0) + "");
			Node root = null;
			if (doc == null) {
				doc = docBuilder.newDocument();
				root = doc.createElement("asetroot");
				doc.appendChild(root);
			} else {
				root = doc.getFirstChild();
			}
			Element row = doc.createElement("asetLRGDAta");
			for (int j = 1; j <= numberOfColumns; j++) {
				String columnName = rsmd.getColumnName(j);
				System.out.println("column  :"+columnName);
				Element column = doc.createElement(columnName);
				column.appendChild(doc.createTextNode(rs.getString(columnName)));
				row.appendChild(column);

			}
			Transformer tf = null;
			try {
				tf = TransformerFactory.newInstance().newTransformer();
			} catch (TransformerConfigurationException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (TransformerFactoryConfigurationError e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			tf.setOutputProperty(OutputKeys.ENCODING, "UTF-8");
			tf.setOutputProperty(OutputKeys.INDENT, "yes");
			Writer stringWriter = new StringWriter();
			try {
				tf.transform(new DOMSource(doc), new StreamResult(stringWriter));
			} catch (TransformerException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			String docXMLString = stringWriter.toString();
			System.out.println("Document "+docXMLString);
			
			root.appendChild(row);
			xmlDocMap.put(srNumber.charAt(0) + "", doc);	

	  
	 }
	 
	 //StringBuffer fxml = new StringBuffer("<Resultset>");
		fxml.append("<a>");
		fxml.append("<XMLLRGResult>");
		for (String key : xmlDocMap.keySet()) {
			Transformer tf = null;
			try {
				tf = TransformerFactory.newInstance().newTransformer();
			} catch (TransformerConfigurationException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (TransformerFactoryConfigurationError e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			tf.setOutputProperty(OutputKeys.ENCODING, "UTF-8");
			tf.setOutputProperty(OutputKeys.INDENT, "yes");
			Document document = xmlDocMap.get(key);
			Writer stringWriter = new StringWriter();
			try {
				tf.transform(new DOMSource(document), new StreamResult(stringWriter));
			} catch (TransformerException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			String docXMLString = stringWriter.toString();
			docXMLString = docXMLString.replaceAll("\\<\\?xml(.+?)\\?\\>", "").trim();
			docXMLString = docXMLString.replaceAll("</asetroot>", "").replaceAll("<asetroot>", "").trim();
			fxml.append(docXMLString).append("|");
		}
		fxml.deleteCharAt(fxml.length()-1);
		
		fxml.append("</XMLLRGResult>");
		fxml.append("</a>");
		fxml.append("</Resultset>");	
		
		
System.out.println("fxml" +fxml.toString());
final long endTime = System.currentTimeMillis();

//System.out.println("Total execution time: " + (endTime - startTime));
} catch (SQLException sqlee) {
	sqlee.printStackTrace();
}
	
	return fxml.toString();
	}
}
