package CommonModel;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

public class CS_Migrformdata {

	private String Fromfields;
	private String Tofields;
	private String Fromtable;
	private String Totable;
	private String ProcessID;
	private String DBSrc;

	public void Fromfields(String Fromfields) {
		this.Fromfields = Fromfields;
	}

	public void Tofields(String Tofields) {
		this.Tofields = Tofields;
	}

	public void Fromtable(String Fromtable) {
		this.Fromtable = Fromtable;
	}

	public void ProcessID(String ProcessID) {
		this.ProcessID = ProcessID;
	}

	public void Totable(String Totable) {
		this.Totable = Totable;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public String CS_Migrformdata() throws SQLException {

		Connection con = DBConnection.getConnection(DBSrc);
		// Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Connection con =
		// DriverManager.getConnection("jdbc:sqlserver:/192.168.1.200:1433;databaseName=ThemeProLO;user=sa;password=encore@123");

		CallableStatement ps = con
				.prepareCall("{ call Sam_SMigrformdataLoad(?,?,?,?,?) }");

		ps.setString(1, Fromfields);
		ps.setString(2, Tofields);
		ps.setString(3, Fromtable);
		ps.setString(4, Totable);
		ps.setString(5, ProcessID);

		ResultSet results = ps.executeQuery();

		ResultSetMetaData rsmd = results.getMetaData();
		int colCount = rsmd.getColumnCount();

		String xml = "<Resultset>";
		while (results.next()) {
			xml = xml + "<row>";
			for (int i = 1; i <= colCount; i++) {
				xml = xml + "<" + rsmd.getColumnName(i) + ">"
						+ results.getString(i) + "</" + rsmd.getColumnName(i)
						+ ">";

			}
			xml = xml + "</row>";
		}

		xml = xml + "</Resultset>";

		  con.close();
		return xml;

	}
}
