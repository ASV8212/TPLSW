package Integration;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import CommonModel.DBConnection;


public class AtomAPI {

	/*public static void main(String a[]) throws Exception
	{
		
		try
		{
//			AtomAPI Aa= new AtomAPI();
//			System.out.println("Output: "+Aa.AtomAPIService("LSW_SATOMAPICREATE", "7001MS1000385_1", "", "91571_HomeEqutity_process"));
			AtomAES Ae= new AtomAES();
//			System.out.println("Output "+Ae.decrypt("7FFCC9695FA4C0141BACEF8BC4EBB2EB16E395FD3104F4BBD7D79329EF2F6AC46E62EBE542873DBE25373FC2385B74AFF5A7B59C6DF18626396BB7B61C266A60591BB384B1C2662724332FBCA8D8FFFD8D767494059D48BE8AAC7DACB3D976BFF7212113E43A17D8C47FD95AC21BB849A8F775606878362F21F619D258E3C6B74D748AF2707E7FE78A9A3847214882D82B62D22BF42D097774EE6F2537AC2C2F1AA5F090A9190CAA2F79B4BC06AD95621B8587C6A14C2AED6D74BF3D6AB603735F94927BBB84565B6F9A4CD52D83F774A14AF97EF3B3B5EEB82C3F26B266C949404E926E5D0403DE627081B5CE8DC857E7A2EF581DAD62DB15AD9C4F7F772EF1EAA06B07BD2D62CBAADB231C16830E661A1C35F10B25AA44BDB5EAAC9356C6247BC225FC4563CA999EE6E31FBC9978C4B7111D1320F7C57656E3D95FD50EE764A301F3C8BE2D9C7B9E602CE4DFFB295B719531F7C88996D22F81344F8B72C941DAB74E84EE59CD1BB966A36D36C48E41626E7A434E9A34281719A13CD4E6CE69871060D8C3C29F65C4F2DB2803245C93E037B700C7B4A901BB3B2653DA25B05233B623E4C6440DAFAF3A4F3DE9F92A58EB28462F3FFD73916F1E1FCF4F009E8058ACC99F73981287C1E4A61442EFA86EB3DE403AFAF15E12D9C0FF538A06064840D0061AFDD22590C398D475B08A8F74B248E8821E7200FAB8F9DD39BCF321BAE16CAFECE5A105321F83F6CBBFAFD90A8992B2BE36456732CD20280ED8388BED782211E974209A7E27B82EBB9E61D1222C7216FC76E172169B6600D30D2E31E9FBBC2D8B4CB67624EB3DF47B9E17AB694AC0CE46805AB834C256B8F563DC6ABB87E7F334CBC6FA7FAA8A6B50B0B73D66EE85A20B5DEF23C7C28C98A08100E5F69DE47CB80000AA693A34AEA16B2F16DE", "8E41C78439831010F81F61C344B7BFC7", "8E41C78439831010F81F61C344B7BFC7"));
			String Status="";
			String Message="";
			String Process="";
			String r[]=Ae.decrypt("7FFCC9695FA4C0141BACEF8BC4EBB2EB16E395FD3104F4BBD7D79329EF2F6AC46E62EBE542873DBE25373FC2385B74AFF5A7B59C6DF18626396BB7B61C266A60591BB384B1C2662724332FBCA8D8FFFD8D767494059D48BE8AAC7DACB3D976BFF7212113E43A17D8C47FD95AC21BB849A8F775606878362F21F619D258E3C6B74D748AF2707E7FE78A9A3847214882D82B62D22BF42D097774EE6F2537AC2C2F1AA5F090A9190CAA2F79B4BC06AD95621B8587C6A14C2AED6D74BF3D6AB603735F94927BBB84565B6F9A4CD52D83F774A14AF97EF3B3B5EEB82C3F26B266C949404E926E5D0403DE627081B5CE8DC857E7A2EF581DAD62DB15AD9C4F7F772EF1EAA06B07BD2D62CBAADB231C16830E661A1C35F10B25AA44BDB5EAAC9356C6247BC225FC4563CA999EE6E31FBC9978C4B7111D1320F7C57656E3D95FD50EE764A301F3C8BE2D9C7B9E602CE4DFFB295B719531F7C88996D22F81344F8B72C941DAB74E84EE59CD1BB966A36D36C48E41626E7A434E9A34281719A13CD4E6CE69871060D8C3C29F65C4F2DB2803245C93E037B700C7B4A901BB3B2653DA25B05233B623E4C6440DAFAF3A4F3DE9F92A58EB28462F3FFD73916F1E1FCF4F009E8058ACC99F73981287C1E4A61442EFA86EB3DE403AFAF15E12D9C0FF538A06064840D0061AFDD22590C398D475B08A8F74B248E8821E7200FAB8F9DD39BCF321BAE16CAFECE5A105321F83F6CBBFAFD90A8992B2BE36456732CD20280ED8388BED782211E974209A7E27B82EBB9E61D1222C7216FC76E172169B6600D30D2E31E9FBBC2D8B4CB67624EB3DF47B9E17AB694AC0CE46805AB834C256B8F563DC6ABB87E7F334CBC6FA7FAA8A6B50B0B73D66EE85A20B5DEF23C7C28C98A08100E5F69DE47CB80000AA693A34AEA16B2F16DE", "8E41C78439831010F81F61C344B7BFC7", "8E41C78439831010F81F61C344B7BFC7").split("&");
			for(String s:r){
				System.out.println("SDF "+s);
				if(s.contains("f_code="))
					Status=s.replace("f_code=","");
				if(s.contains("desc="))
					Message=s.replace("desc=","");
				if(s.contains("udf9="))
					Process=s.replace("udf9=","");
			}
			System.out.println("Status "+Status+" Message "+Message+" Refnum "+Process);
		}catch(Exception exd)
		{
			exd.printStackTrace();
		}
	}*/
	
//	@SuppressWarnings("unused")
	public String AtomAPIService(String spname1,String Input1,String Input2,String Processid) throws Exception
	{
		String Result="";
		Connection cons=null;
		PreparedStatement prs=null;
//		PreparedStatement prs1=null;
		ResultSet rs=null;
		String SignatureData="";
		String HashKey=null;
		String AESKey="";
		String EncryptionData=null;
		String salt="";
		String URL="";
		String signature="";
		String encData="";
		String Orderid="";
		try
		{
			if(cons==null)
			{
				cons=DBConnection.getConnection(null);
			}
			prs=cons.prepareStatement("{ call " + spname1+ "(?,?,?,?,?) }");
			prs.setString(1, Input1);
			prs.setString(2, Input2);
			prs.setString(3, "");
			prs.setString(4, "");
			prs.setString(5, Processid);
			rs = prs.executeQuery();
			
			ResultSetMetaData rsmd = rs.getMetaData();
			
			int colCount = rsmd.getColumnCount();

		      while (rs.next()) {
		    	
		    	URL = rs.getString(1);
		        SignatureData = rs.getString(2);
		        HashKey = rs.getString(3);
		        AESKey = rs.getString(4);
		        salt = rs.getString(5);
		        EncryptionData = rs.getString(6);
		        Orderid = rs.getString(7);
		        
		      } 
		      
		      if(colCount>=1)
		      signature=SignatureGenerate.getEncodedValueWithSha2(HashKey, SignatureData);
		      
		      System.out.println("InputDetails: "+SignatureData);
		      System.out.println("Generated Signature: " +signature);
		      
		      AtomAES AtAES=new AtomAES();
		      
		      encData=AtAES.encrypt(EncryptionData.replace("SIGTE",signature), AESKey, salt);
		      
		      System.out.println("Encrypted Data: "+ encData);
		      
		      
		      Result=URL+encData;
//		      if(APIType.equals("KYC OCR")||APIType.equals("FACE MATCHING")||APIType.equals("FACE LIVENESS"))
//		      ResMsg=InterfaceKarzaAPI.InterfaceMultipartCall(APiURL,JsonData,contenttype,karzakey,APIType);
//		      else
//		      ResMsg=InterfaceKarzaAPI.InterfaceKYCCall(APiURL,JsonData,contenttype,karzakey);
		      
//		      System.out.println("Response: " + Result);
//		      
//			  	String Status=null;
//			  	String Message=null;
//			  	
//			  	String [] resultSplit=Result.split("~");
//			  	
//			  	Status=resultSplit[0];
//			  	
//			  	Message=resultSplit[1];
//			  		  	
//			  	prs1=cons.prepareStatement("{ call " + spname1+"_UPD" + "(?,?,?,?,?) }");
//			  	
//			  	prs1.setString(1, Status);
//			  	prs1.setString(2, Message);
//			  	prs1.setString(3, "");
//			  	prs1.setString(4, "");
//			  	prs1.setString(5, Processid);
//				
//			  	prs1.executeQuery();  

		}catch(Exception AS)
		{
			AS.printStackTrace();
		}
		finally
		{
//			DBConnection.closeConnection(null, prs1, null);
			DBConnection.closeConnection(cons, prs, rs);
		}
		return Result;
	}
	
	public String AtomAPIDecrypt(String spname,String Input1,String Input2,String Processid) throws Exception
	{
		Connection cond=null;
		PreparedStatement prs=null;
//		PreparedStatement prs1=null;
		ResultSet rs=null;
		String AESKey="";
		String salt="";
		String decrypt="";
		try
		{
			if(cond==null)
			{
				cond=DBConnection.getConnection(null);
			}
			prs=cond.prepareStatement("{ call " + spname+ "(?,?,?,?,?) }");
			prs.setString(1, Input1);
			prs.setString(2, Input2);
			prs.setString(3, "");
			prs.setString(4, "");
			prs.setString(5, Processid);
			rs = prs.executeQuery();
			
			ResultSetMetaData rsmd = rs.getMetaData();
			
			int colCount = rsmd.getColumnCount();

		      while (rs.next()) {
		        AESKey = rs.getString(1);
		        salt = rs.getString(2); 
		      } 
		      if(colCount>=1){
		    	  AtomAES ATMDEC=new AtomAES();
		    	  decrypt=ATMDEC.decrypt(Input1,AESKey, salt); 
		      }
		      
		   System.out.println("Decrypted value "+decrypt);
		   
		}catch(Exception exd)
		{
			exd.printStackTrace();
		}
		finally{
			DBConnection.closeConnection(cond, prs, rs);
		}
		return decrypt;
	}
}
