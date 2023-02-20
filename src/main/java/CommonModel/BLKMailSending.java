package CommonModel;
import java.io.PrintWriter;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.swing.text.Document;

public class BLKMailSending {
	public String Send(final String username, final String password, String recipientEmail, String ccEmail, String title, String Msg, String Prophost) throws AddressException, MessagingException 
	 {
		//final String username = "username@gmail.com";
		//final String password = "password";
		String MAIL_SERVER = "smtp";
	 
		String RecpEmail[] = recipientEmail.split("\\,");
		String CCEmail[] = ccEmail.split("\\,");
		String Title[] = title.split("|");
		String Mesg[] = Msg.split("|");
		
		String Prophosts = Prophost.split("\\|")[0];
		String portno = Prophost.split("\\|")[1];
		
		
		
		/*Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", Prophosts);
		props.put("mail.smtp.port", portno);*/
		
		
		Properties props = new Properties();
	      props.put("mail.smtp.auth", "true");
	      props.put("mail.smtp.starttls.enable", "true");
	      props.put("mail.smtp.auth", "true");
	      props.put("mail.smtp.socketFactory.fallback", "false");
	      props.put("mail.smtp.host", Prophosts);
	      System.out.println("host is "+Prophosts);
	      props.put("mail.smtp.port", portno);
	      System.out.println("Port is "+portno);
	      props.put("mail.debug", "true");
		//props.put("mail.smtp.host", "smtp.encoretheme.com");
		//props.put("mail.smtp.port", "587");

		Session session = Session.getInstance(props,
		  new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		  });
		  
	        // Create a default MimeMessage object.
	        MimeMessage message = new MimeMessage(session);
	 
	        try {
	        	
	       
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
	            
	            InternetAddress[] ccAddress = new InternetAddress[ccEmail.split("\\,").length];
	            
	            // To get the array of ccaddresses
	            for( int i = 0; i < ccEmail.split("\\,").length; i++ ) {
	                ccAddress[i] = new InternetAddress(ccEmail.split("\\,")[i]);
	            }
	            
	            // Set cc: header field of the header.
	            for( int i = 0; i < ccAddress.length; i++) {
	                message.addRecipient(Message.RecipientType.CC, ccAddress[i]);
	            }
 
	            // Set Subject: header field
	            message.setSubject(title);
	                                  
	            // Now set the date to actual message
	          //  message.setSentDate(new Date());
	            
	            // Now set the actual message
	           
	            message.setContent(Msg,"text/html");         
	            // Send message
	            //Transport.send(message);
	            Transport.send(message, message.getAllRecipients());
	        }
	        catch (AddressException ae) {
	            ae.printStackTrace();
	        }
	        catch (MessagingException me) {
	            me.printStackTrace();
	        }
	        
	    	return "Success";
	    }

}
