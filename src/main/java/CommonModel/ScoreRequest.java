
package CommonModel;

public class ScoreRequest {

	String inputstring;
	String server;
	String port;

	public String getinputstring() {
		return inputstring;
	}

	public void setinputstring(String title) {
		this.inputstring = title;
	}
	
	public String getport() {
		return port;
	}

	public void setport(String Port) {
		this.port = Port;
	}

	public String getserver() {
		return server;
	}

	public void setserver(String singer) {
		this.server = singer;
	}

	@Override
	public String toString() {
		return "Track [inputstring=" + inputstring + ", server=" + server + ", port=" + port + "]";
	}

}
