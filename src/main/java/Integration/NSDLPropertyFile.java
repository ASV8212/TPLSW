package Integration;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class NSDLPropertyFile {
	String signature;
	String jfsfilename;
	String password;
	String certiname;
	String username;
	String url;
	String version;
	
	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getSignature() {
		return signature;
	}

	public void setSignature(String signature) {
		this.signature = signature;
	}

	public String getJfsfilename() {
		return jfsfilename;
	}

	public void setJfsfilename(String jfsfilename) {
		this.jfsfilename = jfsfilename;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCertiname() {
		return certiname;
	}

	public void setCertiname(String certiname) {
		this.certiname = certiname;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}
	
public NSDLPropertyFile getProperty() {
		
		try {
			String propFileName = "APIProp.properties";
			InputStream inputStream = null;
			Properties prop = new Properties();

			String fileName = "";
			fileName = System.getProperty("catalina.base");
			fileName = String.valueOf(fileName) + "/conf/" + propFileName;
			inputStream = new FileInputStream(fileName);
			if (inputStream != null) {
				prop.load(inputStream);
			}
			
			prop.load(inputStream);
			this.setJfsfilename(prop.getProperty("jksname"));
			this.setPassword(prop.getProperty("password"));
			this.setUsername(prop.getProperty("username"));
			this.setCertiname(prop.getProperty("certname"));
			this.setUrl(prop.getProperty("url"));
			this.setVersion(prop.getProperty("version"));
			return this;
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return this;
	}
}
