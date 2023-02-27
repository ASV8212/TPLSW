package Integration;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Properties;
import java.util.Scanner;

import javax.net.ssl.HttpsURLConnection;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.json.simple.JSONObject;
//import org.apache.http.impl.client.HttpClientBuilder;
import org.json.simple.parser.JSONParser;

import CommonModel.DBConnection;
import CommonModel.SSLSkipSNIHostnameVerifier;
import Controls.GetDBData;
import Controls.InterfaceVideoKYC;

//import org.json.JSONException;

//import org.json.JSONObject;

import java.net.HttpURLConnection;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLConnection;

public class VideoKYC {
	public static String VKYCSrv(String SPNAME, String PARAM1, String PARAM2, String PARAM3, String PARAM4,
			String PARAM5) throws Exception {

		SPNAME = "LSW_SVKYCAPICREATE";
		String DBOUTPUT = "";
		String responseString = "";
		String outputString = "";
		String ErrorMsg = "";
		String Respheader = "";
		String CntntURL = "";
		String Strval = "";
		String uniqueid = "";
		String Type = "";
		String Key = "";
		String Token = "";

		String Result = "";
		String FnlVal = "";
		int status;

		try {

			ArrayList<String> Data = new ArrayList<String>();
			Data = GetDBData.Call(PARAM1, PARAM2, PARAM3, "Video KYC-Generate Session Token", PARAM5, SPNAME);
			Type = Data.get(0);
			CntntURL = Data.get(1);
			Key = Data.get(2);
			Strval = Data.get(3);
			uniqueid = Data.get(4);
			Result = InterfaceVideoKYC.GenerateSessionToken(Type, CntntURL, Key, Strval, uniqueid, Token);
			DBCONN(SPNAME + "_UPD", Result, PARAM2, PARAM3, PARAM4, uniqueid);

			if (Result.split("~")[1].equals("Success")) {
				Data.clear();
				Data = GetDBData.Call(PARAM1, PARAM2, PARAM3, "Video KYC-Add New Customer", uniqueid, SPNAME);
				Type = Data.get(0);
				CntntURL = Data.get(1);
				Key = Data.get(2);
				Strval = Data.get(3);
				uniqueid = Data.get(4);
				Result = InterfaceVideoKYC.AddNewCus(Type, CntntURL, Key, Strval, uniqueid, Token);
				DBCONN(SPNAME + "_UPD", Result, PARAM2, PARAM3, PARAM4, uniqueid);

				if (Result.split("~")[1].equals("Success")) {
					Data.clear();
					Data = GetDBData.Call(PARAM1, PARAM2, PARAM3, "Video KYC-Generate Customer Token", uniqueid, SPNAME);
					Type = Data.get(0);
					CntntURL = Data.get(1);
					Key = Data.get(2);
					Strval = Data.get(3);
					uniqueid = Data.get(4);
					Result = InterfaceVideoKYC.GenerateCusToken(Type, CntntURL, Key, Strval, uniqueid, Token);
					DBCONN(SPNAME + "_UPD", Result, PARAM2, PARAM3, PARAM4, uniqueid);

					if (Result.split("~")[1].equals("Success")) {
						Data.clear();
						Data = GetDBData.Call(PARAM1, PARAM2, PARAM3, "Video KYC-Generate Customer Web Link", uniqueid, SPNAME);
						Type = Data.get(0);
						CntntURL = Data.get(1);
						Key = Data.get(2);
						Strval = Data.get(3);
						uniqueid = Data.get(4);
						Result = InterfaceVideoKYC.GenerateCusToken(Type, CntntURL, Key, Strval, uniqueid, Token);
						DBCONN(SPNAME + "_UPD", Result, PARAM2, PARAM3, PARAM4, uniqueid);
					}
				}
			}
		} catch (Exception e) {
			ErrorMsg = e.toString();
			outputString = "{\"Status\":\"ERROR\",\"errors\":[{\"errorCode\":\"Manual\",\"errorMessage\":\"Split Issue from Procedure\"}]}";
			e.printStackTrace();
		}

		return Result;
	}

	public static String DBCONN(String SPNAME, String PARAM1, String PARAM2, String PARAM3, String PARAM4,
			String PARAM5) throws Exception {

		String Output = "";
		PreparedStatement proc_stmt1 = null;
		ResultSet rs1 = null;
		Connection con1 = DBConnection.getConnection(null);

		proc_stmt1 = con1.prepareStatement("{ call " + SPNAME + "(?,?,?,?,?) }");
		proc_stmt1.setString(1, PARAM1);
		proc_stmt1.setString(2, PARAM2);
		proc_stmt1.setString(3, PARAM3);
		proc_stmt1.setString(4, PARAM4);
		proc_stmt1.setString(5, PARAM5);

		rs1 = proc_stmt1.executeQuery();
		ResultSetMetaData rsmd1 = rs1.getMetaData();
		int val = 1;

		while (rs1.next()) {
			Output = Output + "|" + rs1.getString(val);
			val = val + 1;
		}

		DBConnection.closeConnection(con1, proc_stmt1, rs1);

		return Output;

	}
}
