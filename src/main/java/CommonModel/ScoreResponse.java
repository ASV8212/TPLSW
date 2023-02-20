package CommonModel;


public class ScoreResponse {

	String outputstring;
	String score;
    boolean errorFlag;
    String errorMessage;
    String timestamp;
    String errorStatusCode;
    String cibilErrorstring;
    
	public String getCibilErrorstring() {
		return this.cibilErrorstring;
	}

	public void setCibilErrorstring(String CibilErrorstring) {
		this.cibilErrorstring = CibilErrorstring;
	}

	public String getErrorStatusCode() {
		return errorStatusCode;
	}

	public void setErrorStatusCode(String errorStatusCode) {
		this.errorStatusCode = errorStatusCode;
	}

	public String getTimestamp() {
		return this.timestamp;
	}

	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}

	public boolean getErrorFlag() {
		return this.errorFlag;
	}

	public void setErrorFlag(boolean errorFlag) {
		this.errorFlag = errorFlag;
	}

	public String getErrorMessage() {
		return this.errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public String getoutputstring() {
		return this.outputstring;
	}

	public void setoutputstring(String title) {
		this.outputstring = title;
	}

	public String getscore() {
		return score;
	}

	public void setscore(String singer) {
		this.score = singer;
	}

	@Override
	public String toString() {
		return "ScoreResponse [outputstring='" + outputstring + "', score='" + score + "', errorFlag='" + errorFlag+ "', errorMessage='" +errorMessage + "',timestamp='"+timestamp+"',errorStatusCode='"+errorStatusCode+"',cibilErrorstring='"+cibilErrorstring+"']";
	}

}

 


