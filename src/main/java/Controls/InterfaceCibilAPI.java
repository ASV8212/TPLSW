package Controls;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;

public class InterfaceCibilAPI {

	public static String InterfaceCibilService(String URL,String XML,String UNIQID,String SoapAction)
	{
		String result="Error";
		String resString="";
		String resMessage="";
		
		System.out.println(" Interface Start ");
		try
		{
			URL urlval= new URL(URL);
			URLConnection URLCon= urlval.openConnection();
			HttpURLConnection httpConn=(HttpURLConnection)URLCon;
			ByteArrayOutputStream Byteout=new ByteArrayOutputStream();
			
			byte[] buffer=new byte[XML.length()];
			buffer=XML.getBytes();
			Byteout.write(buffer);
			byte[] b= Byteout.toByteArray();
			
			httpConn.setRequestProperty("Content-Length", String.valueOf(b.length));
			httpConn.setRequestProperty("Content-Type", "text/xml; charset=utf-8");
			httpConn.setRequestProperty("SoapAction", SoapAction);
			httpConn.setRequestMethod("POST");
			httpConn.setDoOutput(true);
			httpConn.setDoInput(true);
			
			OutputStream out= httpConn.getOutputStream();
			
			out.write(b);
			out.flush();
			out.close();
			
			if(httpConn.getResponseCode() == 200)
			{
				InputStreamReader inputReader= new InputStreamReader(httpConn.getInputStream());
				BufferedReader in=new BufferedReader(inputReader);
				
				while( (resString = in.readLine())!=null)
				{
					resMessage=resMessage+resString;
				}
				result="Success";
			}
			else
			{
				InputStreamReader inputReader= new InputStreamReader(httpConn.getInputStream());
				BufferedReader in=new BufferedReader(inputReader);
				
				while( (resString = in.readLine())!=null)
				{
					resMessage="Error from Server with "+httpConn.getResponseCode()+" response code and error as "+resString;
				}
				result="Error";
				
			}
			
		}catch(Exception ex)
		{
			result="Exception";
			resMessage=ex.toString();
			ex.printStackTrace();
		}
		finally
		{
			
		}
		
		System.out.println(" Interface End ");
		
		return result+" ~ "+resMessage;
	}
}
