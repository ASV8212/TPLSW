package APIInterface;

import java.io.OutputStream;
import java.io.Reader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import com.google.gson.JsonObject;
import java.io.BufferedReader;
import java.sql.ResultSet;
import java.sql.PreparedStatement;
import java.sql.Connection;
import Controls.GetDBData;
import com.google.gson.JsonParser;
import org.apache.commons.codec.digest.DigestUtils;
import java.util.ArrayList;
import CommonModel.DBConnection;
import javax.servlet.http.HttpServletRequest;

public class CollectLeadData
{
    public static String dataHandler(final HttpServletRequest request) {
        String resp = "";
        String requestBody = "";
        final Connection con = DBConnection.getConnection(null);
        final Connection con2 = DBConnection.getConnection(null);
        final Connection conEx = DBConnection.getConnection(null);
        PreparedStatement procstmt = null;
        ResultSet rs = null;
        PreparedStatement procstmt2 = null;
        final ResultSet rs2 = null;
        PreparedStatement procstmtEx = null;
        ResultSet rsEx = null;
        final String procName = "LSW_SGETLEADDATA";
        final String exception = "EXCEPTION";
        String jogetresponse = "";
        ArrayList<String> data = new ArrayList<String>();
        try {
            final String referer = request.getHeader("access_token");
            final StringBuilder buffer = new StringBuilder();
            final BufferedReader reader = request.getReader();
            String line;
            while ((line = reader.readLine()) != null) {
                buffer.append(line);
                buffer.append(System.lineSeparator());
            }
            requestBody = buffer.toString();
            if (requestBody.equals("") || requestBody == null) {
                procstmtEx = conEx.prepareStatement("{ call " + procName + " (?,?,?) }");
                procstmtEx.setString(1, "<Data><row>" + requestBody + "</row></Data>");
                procstmtEx.setString(2, exception);
                procstmtEx.setString(3, "Request Body Missing");
                rsEx = procstmtEx.executeQuery();
                while (rsEx.next()) {
                    resp = rsEx.getString(1);
                }
                return resp;
            }
            final String sha256hex = DigestUtils.sha512Hex(requestBody);
            if (referer == null) {
                procstmtEx = conEx.prepareStatement("{ call " + procName + " (?,?,?) }");
                procstmtEx.setString(1, "<Data><row>" + requestBody + "</row></Data>");
                procstmtEx.setString(2, exception);
                procstmtEx.setString(3, "Access Token missing");
                rsEx = procstmtEx.executeQuery();
                while (rsEx.next()) {
                    resp = rsEx.getString(1);
                }
                return resp;
            }
            if (!referer.equals(sha256hex)) {
                procstmtEx = conEx.prepareStatement("{ call " + procName + " (?,?,?) }");
                procstmtEx.setString(1, "<Data><row>" + requestBody + "</row></Data>");
                procstmtEx.setString(2, exception);
                procstmtEx.setString(3, "Invalid Access Token");
                rsEx = procstmtEx.executeQuery();
                while (rsEx.next()) {
                    resp = rsEx.getString(1);
                }
                return resp;
            }
            procstmt = con.prepareStatement("{ call " + procName + " (?,?,?) }");
            procstmt.setString(1, "<Data><row>" + requestBody + "</row></Data>");
            procstmt.setString(2, "");
            procstmt.setString(3, "");
            rs = procstmt.executeQuery();
            while (rs.next()) {
                resp = rs.getString(1);
            }
            final JsonObject jsonObject = new JsonParser().parse(resp).getAsJsonObject();
            final JsonObject jsonObject2 = new JsonParser().parse(requestBody).getAsJsonObject();
            if (jsonObject.get("Code").getAsString().equals("200")) {
                data = (ArrayList<String>)GetDBData.Call(jsonObject2.get("LeadID").getAsString(), "", "", "", "", "LSW_SGETLEADDETAILS");
                if (!data.get(0).equals("SUCCESS")) {
                    procstmtEx = conEx.prepareStatement("{ call " + procName + " (?,?,?) }");
                    procstmtEx.setString(1, "<Data><row>" + requestBody + "</row></Data>");
                    procstmtEx.setString(2, exception);
                    procstmtEx.setString(3, "Process Validation -" + data.get(0));
                    rsEx = procstmtEx.executeQuery();
                    while (rsEx.next()) {
                        resp = rsEx.getString(1);
                    }
                    return resp;
                }
                data = (ArrayList<String>)GetDBData.Call(jsonObject2.get("LeadID").getAsString(), "", "", "", "", "LSW_SPUSHLEADDATA");
                jogetresponse = WFInit(data.get(0),jsonObject2.get("LeadCreator").getAsString());
                if (!jogetresponse.split("~")[0].contains("_")) {
                    procstmtEx = conEx.prepareStatement("{ call " + procName + " (?,?,?) }");
                    procstmtEx.setString(1, "<Data><row>" + requestBody + "</row></Data>");
                    procstmtEx.setString(2, exception);
                    procstmtEx.setString(3, "Flow Validation - Workflow Initiation Failed");
                    rsEx = procstmtEx.executeQuery();
                    while (rsEx.next()) {
                        resp = rsEx.getString(1);
                    }
                    return resp;
                }
                procstmt2 = con2.prepareStatement("{ call LSW_sInsLoanBaseInfo (?,?,?,?,?) }");
                procstmt2.setString(1, jogetresponse.split("~")[0]);
                procstmt2.setString(2, jogetresponse.split("~")[1]);
                procstmt2.setString(3, data.get(0));
                procstmt2.setString(4, "Lead");
                procstmt2.setString(5, "");
                procstmt2.executeQuery();
                data = (ArrayList<String>)GetDBData.Call(jogetresponse.split("~")[0], "", "", "", "", "LSW_SUPDATEAPPLNNOCUSID");
                resp = data.get(0);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
            try {
                if (rs != null) {
                    rs.close();
                }
                if (procstmt != null) {
                    procstmt.close();
                }
                if (con != null) {
                    con.close();
                }
                if (rsEx != null) {
                    rsEx.close();
                }
                if (procstmtEx != null) {
                    procstmtEx.close();
                }
                if (conEx != null) {
                    conEx.close();
                }
                if (rs2 != null) {
                    rs2.close();
                }
                if (procstmt2 != null) {
                    procstmt2.close();
                }
                if (con2 != null) {
                    con2.close();
                }
            }
            catch (Exception e2) {
                e2.printStackTrace();
            }
            return resp;
        }
        finally {
            try {
                if (rs != null) {
                    rs.close();
                }
                if (procstmt != null) {
                    procstmt.close();
                }
                if (con != null) {
                    con.close();
                }
                if (rsEx != null) {
                    rsEx.close();
                }
                if (procstmtEx != null) {
                    procstmtEx.close();
                }
                if (conEx != null) {
                    conEx.close();
                }
                if (rs2 != null) {
                    rs2.close();
                }
                if (procstmt2 != null) {
                    procstmt2.close();
                }
                if (con2 != null) {
                    con2.close();
                }
            }
            catch (Exception e2) {
                e2.printStackTrace();
            }
        }
        try {
            if (rs != null) {
                rs.close();
            }
            if (procstmt != null) {
                procstmt.close();
            }
            if (con != null) {
                con.close();
            }
            if (rsEx != null) {
                rsEx.close();
            }
            if (procstmtEx != null) {
                procstmtEx.close();
            }
            if (conEx != null) {
                conEx.close();
            }
            if (rs2 != null) {
                rs2.close();
            }
            if (procstmt2 != null) {
                procstmt2.close();
            }
            if (con2 != null) {
                con2.close();
            }
        }
        catch (Exception e2) {
            e2.printStackTrace();
        }
        return resp;
    }
    
    private static String WFInit(final String xml,String usr) {
        final String apiurl = "C002";
        final StringBuffer content = new StringBuffer();
        try {
            ArrayList<String> data = new ArrayList<String>();
            data = (ArrayList<String>)GetDBData.Call(apiurl, "", "", "", "", "LSW_SGETAPIHDRURL");
            final String applnurl = data.get(0);
            final URL url = new URL(String.valueOf(applnurl) + "/TPLSW/WFINITAPI_BODY?usrSession="+usr);
            final HttpURLConnection con = (HttpURLConnection)url.openConnection();
            con.setRequestMethod("POST");
            con.setRequestProperty("Accept", "application/xml");
            con.setRequestProperty("Content-Type", "application/xml");
            con.setDoOutput(true);
            final OutputStream outStream = con.getOutputStream();
            final OutputStreamWriter outStreamWriter = new OutputStreamWriter(outStream, "UTF-8");
            outStreamWriter.write(xml);
            outStreamWriter.flush();
            outStreamWriter.close();
            outStream.close();
            final int status = con.getResponseCode();
            final BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }
            in.close();
            con.disconnect();
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return content.toString();
    }
}