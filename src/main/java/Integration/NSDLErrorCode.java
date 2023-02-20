package Integration;

public class NSDLErrorCode {
	
	public NSDLErrorCode(int value) {
		super();
		this.value = value;
	}

	int value;

	@Override
	public String toString() {
		switch (value) {
		case 1:
			return "Success";
		case 2:
			return "System Error";
		case 3:
			return "Authentication Failure";
		case 4:
			return "User not authorized";
		case 5:
			return "No PANs Entered";
		case 6:
			return "User validity has expired";
		case 7:
			return "Number of PANs exceeds the limit (5)";
		case 8:
			return "Not enough balance";
		case 9:
			return "Not an HTTPs request";
		case 10:
			return "POST method not used";
		case 11:
			return "SLAB_CHANGE_RUNNING";
		default:
			return "Success";
		}

	}
}
