package CommonModel;
import java.io.ByteArrayOutputStream;
import java.io.DataInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.URL;
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

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.mail.internet.MimeMultipart;
import javax.mail.util.ByteArrayDataSource;
 

public class MailSendWthRptAttch {
	public String Send(final String username, final String password, String recipientEmail,
			String ccEmail, String title, String Msg, String Prophost,String FleNme, String RptUrl) throws Exception 
	 {
		//final String username = "username@gmail.com";
		//final String password = "password";
		String MAIL_SERVER = "smtp";
	 
		String RecpEmail[] = recipientEmail.split("\\,");
		String CCEmail[] = ccEmail.split("\\,");
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

		Session session = Session.getInstance(props,
		  new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		  });
		  
	        // Create a default MimeMessage object.
	        MimeMessage message = new MimeMessage(session);
	 
	        try {
	        	MimeBodyPart textBodyPart = new MimeBodyPart();
	            textBodyPart.setText(Msg);
	       
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
	            message.setSubject(title.split(",")[0]);
	            
	            ByteArrayOutputStream outputStream = null;
	            URL u;
	            InputStream is = null;
	            int baLength;
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
	            MimeBodyPart pdfBodyPart = new MimeBodyPart();
	            pdfBodyPart.setDataHandler(new DataHandler(dataSource));
	            pdfBodyPart.setFileName(FleNme);
	          
	                         
	            
	            MimeMultipart mimeMultipart = new MimeMultipart();
	            mimeMultipart.addBodyPart(textBodyPart);
	            mimeMultipart.addBodyPart(pdfBodyPart);     
	            

	            message.setContent(Msg.split(",")[0],"text/html");  
	            message.setContent(mimeMultipart);
	            // Send message
	            Transport.send(message);
	            
	            
	            
	            
	            
	        }
	        catch (AddressException ae) {
	            ae.printStackTrace();
	        }
	        catch (MessagingException me) {
	            me.printStackTrace();
	        }
	        
	    	return "Success";
	    }

	
	
	 public void writePdf(OutputStream outputStream) throws Exception {
	        Document document = new Document();
	        PdfWriter.getInstance(document, outputStream);
	         
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
