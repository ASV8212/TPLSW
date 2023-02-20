package CommonModel;
import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.DataInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;

import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfDocument;
import com.itextpdf.text.pdf.PdfWriter;

import Controls.GetDBData;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.mail.internet.MimeMultipart;
import javax.mail.util.ByteArrayDataSource;
 

public class MailSendWthAttchRPTBdy {
	public String Send(final String username, final String password, String recipientEmail,
			String ccEmail,String bccEmail, String title, String Msg, String Prophost,String FleNme, String RptUrl) throws Exception 
	 {
		//final String username = "username@gmail.com";
		//final String password = "password";
		String MAIL_SERVER = "smtp";
		String URL="";
		String Data1="";
		String Data2="";
		StringBuilder content = new StringBuilder();
		
		Session session;
		
		
      
		
		  ArrayList<String> Data=new ArrayList<String>();
		
		 
		  
		String RecpEmail[] = recipientEmail.split("\\,");
		String CCEmail[] = ccEmail.split("\\,");
		String BCCEmail[] = bccEmail.split("\\,");
		String Title[] = title.split(",");
		String Mesg[] = Msg.split(",");
		
		String Prophosts = Prophost.split("\\|")[0];
		String portno = Prophost.split("\\|")[1];
		
		
		
		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", Prophosts);
		props.put("mail.smtp.port", portno);
		//props.put("mail.smtp.host", "smtp.encoretheme.com");
		//props.put("mail.smtp.port", "587");
		 
		 try {

		  if (!username.equals(""))
	        {
			
	       	 session = Session.getInstance(props,
	       		  new javax.mail.Authenticator() {
	       			protected PasswordAuthentication getPasswordAuthentication() {
	       				return new PasswordAuthentication(username, password);
	       			}
	       		  });
	        	
			
			
	        }
	        else
	        {
	        
	        	 session = Session.getDefaultInstance(props);
	        	
	        }
		
		
		  
	        // Create a default MimeMessage object.
	        MimeMessage message = new MimeMessage(session);
	 

	        	//MimeBodyPart textBodyPart = new MimeBodyPart();
	           
	            
	       
	            message.setFrom(new InternetAddress(username));
	           
	            
	            InternetAddress[] toAddress = new InternetAddress[recipientEmail.split("\\,").length];
	 
	            // To get the array of toaddresses
	            for( int i = 0; i < recipientEmail.split("\\,").length; i++ ) {
	                toAddress[i] = new InternetAddress(recipientEmail.split("\\,")[i]);
	            }
	            
	            // Set To: header field of the header.
	            for( int i = 0; i < toAddress.length; i++) {
	                message.addRecipient(Message.RecipientType.TO, toAddress[i]);
	            }
	            
	            if (!ccEmail.equals(""))
		        {
	            
	            InternetAddress[] ccAddress = new InternetAddress[ccEmail.split("\\,").length];
	            
	            // To get the array of ccaddresses
	            for( int i = 0; i < ccEmail.split("\\,").length; i++ ) {
	                ccAddress[i] = new InternetAddress(ccEmail.split("\\,")[i]);
	            }
	            
	            // Set cc: header field of the header.
	            for( int i = 0; i < ccAddress.length; i++) {
	                message.addRecipient(Message.RecipientType.CC, ccAddress[i]);
	            }
		        }
	            
	            
	            if (!bccEmail.equals(""))
		        {
	            InternetAddress[] bccAddress = new InternetAddress[bccEmail.split("\\,").length];
	            
	            // To get the array of bccaddresses
	            for( int i = 0; i < bccEmail.split("\\,").length; i++ ) {
	            	bccAddress[i] = new InternetAddress(bccEmail.split("\\,")[i]);
	            }
	            
	            // Set cc: header field of the header.
	            for( int i = 0; i < bccAddress.length; i++) {
	                message.addRecipient(Message.RecipientType.BCC, bccAddress[i]);
	            }
	            
		        }
	            // Set Subject: header field
	            message.setSubject(title.split(",")[0]);
	            
	            ByteArrayOutputStream outputStream = null;
	            URL u;
	            InputStream is = null;
	            int baLength;
	            
	            MimeBodyPart pdfBodyPart = new MimeBodyPart();
	            
	            if (!RptUrl.equals(""))
	            {
	            
	            u = new URL(RptUrl);
	           
	           
	            outputStream = new ByteArrayOutputStream();
	            byte[] bytes ;
	            is = u.openStream();
	            writePdf(outputStream);

	            ByteArrayOutputStream output = new ByteArrayOutputStream(1024);
	            while ((baLength = is.read()) != -1) {
	                output.write(baLength);
	            }
	            
	               output.flush();
		           output.close();
		           is.close();

	            bytes = output.toByteArray();
	            //construct the pdf body part
	            
	            DataSource dataSource = new ByteArrayDataSource(bytes, "application/pdf");
	          
	            pdfBodyPart.setDataHandler(new DataHandler(dataSource));
	            pdfBodyPart.setFileName(FleNme);
	          
	            }
	           
	            

	            URL url;
				 if(Data2.equals("")) 
			     {
			    	 url = new URL(Msg);
			     }
			     else
			     {
			    	 url = new URL(Msg);
			     }
			      
			      // create a urlconnection object
			      URLConnection urlConnection = url.openConnection();

			      // wrap the urlconnection in a bufferedreader
			      BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));

			      String line;

			      // read from the urlconnection via the bufferedreader
			      while ((line = bufferedReader.readLine()) != null)
			      {
			    	  //System.out.println(line);
			    	  //new String( res.getBytes(1), "UTF-8");
			    	  line = new String(line.getBytes(),"UTF-8");
			    	  //System.out.println(line);
			    	  if(line.contains("₹&#xa0;"))
			    	  {
			    		  line=line.replace("₹&#xa0;","&#x20B9;"); 
			    		  //System.out.println(line);
			    	  }
			    	  
			    	  if(line.contains("₹"))
			    	  {
			    		  line=line.replace("₹","&#x20B9;"); 
			    		  //System.out.println(line);
			    	  }
			    	 //System.out.println(line);
			    	  if(line.contains("</body>"))
			    	  {
			    		  content.append("<p style=\"font-family:sans-serif; font-size:10pt;\">*** This is an automatically generated email, please do not reply ***</p>");
			    	  }
			        content.append(line);
			      //System.out.println(content.toString());
			      }
			      //content.append("<p style=\"font-family:sans-serif; size:12pt;\">This is system generated mail, please don't reply...</p>");
			      bufferedReader.close();  

			      //textBodyPart.setContent("<p style=\"font-family:sans-serif; font-size:10pt;\">"+Mesg+"</p>"+content.toString(), "text/html; charset=utf-8");
	            
			      //htmlPart.setContent( html, "text/html; charset=utf-8" ); 
			      // Send message
			      
			      MimeBodyPart textBodyPart = new MimeBodyPart();
			      textBodyPart.setContent(content.toString(),"text/html");
			      
			      
			      MimeMultipart mimeMultipart = new MimeMultipart();
		          mimeMultipart.addBodyPart(textBodyPart);
		          if (!RptUrl.equals(""))
		            {
		          mimeMultipart.addBodyPart(pdfBodyPart);
		            }
		          message.setContent(mimeMultipart);
		          
		       

	            Transport.send(message);
 
	            
	          
				
Data	= GetDBData.Call(recipientEmail+"|"+ccEmail+"|"+title+"|"+Msg
 		+"|"+Prophost+"|"+FleNme+"|"+RptUrl+"|"+username +"|"+ password,"", "", "Success", "", "LSW_SEMAILLOG");		
	
 
	            
	        }
	        catch (AddressException ae) {
	            ae.printStackTrace();
Data	= GetDBData.Call(recipientEmail+"|"+ccEmail+"|"+title+"|"+Msg
	            		+"|"+Prophost+"|"+FleNme+"|"+RptUrl+"|"+username +"|"+ password
	            		,"", "", "Fail", ae.toString(), "LSW_SEMAILLOG");	
	            return "Fail";
	        }
	        catch (MessagingException me) {
Data	= GetDBData.Call(recipientEmail+"|"+ccEmail+"|"+title+"|"+Msg
		            		+"|"+Prophost+"|"+FleNme+"|"+RptUrl+"|"+username +"|"+ password,"", "", "Fail", 
		            		me.toString(), "LSW_SEMAILLOG");	
	            me.printStackTrace();
	            return "Fail";
	        }
	        catch (Exception ex) {
	        	Data	= GetDBData.Call(recipientEmail+"|"+ccEmail+"|"+title+"|"+Msg
	        			            		+"|"+Prophost+"|"+FleNme+"|"+RptUrl+"|"+username +"|"+ password,"", "", "Fail", 
	        			            		ex.toString(), "LSW_SEMAILLOG");	
	        	ex.printStackTrace();
	        		            return "Fail";
	        		        }
	        
	    	return "Success";
	    }

	
	
	 public void writePdf(OutputStream outputStream1) throws Exception {
	        Document document = new Document();
	        PdfWriter.getInstance(document, outputStream1);
	         
	        document.open();
	         
	        document.addTitle("Test PDF");
	        document.addSubject("Testing email PDF");
	        document.addKeywords("iText, email");
	        document.addAuthor("Jee Vang");
	        document.addCreator("Jee Vang");
	         
	        Paragraph paragraph = new Paragraph();
	        paragraph.add(new Chunk("hello!"));
	        document.add(paragraph);
	         
	        document.close(); 
	    }
}
