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

public class UpMailSending61 {
	public String Send(final String username, final String password, String recipientEmail, String ccEmail,
			String title, String Msg, String Prophost) throws AddressException, MessagingException {
		// final String username = "username@gmail.com";
		// final String password = "password";

		String RecpEmail[] = recipientEmail.split("\\~");
		String Title[] = title.split("~");
		String Mesg[] = Msg.split("~");

		String Prophosts = Prophost.split("\\|")[0];
		String portno = Prophost.split("\\|")[1];

		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", Prophosts);
		props.put("mail.smtp.port", portno);
		// props.put("mail.smtp.host", "smtp.encoretheme.com");
		// props.put("mail.smtp.port", "587");

		Session session = Session.getInstance(props,
		         new javax.mail.Authenticator() {
		            protected PasswordAuthentication getPasswordAuthentication() {
		               return new PasswordAuthentication(username, password);
		            }
			});
		try {
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress(username));
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(recipientEmail));
			message.setRecipients(Message.RecipientType.CC, InternetAddress.parse(ccEmail));
			message.setSubject(title);
			//message.setText(Msg);
			message.setContent(Msg,"text/html");

			Transport.send(message);
			return "Success";
		}

		/*
		 * try {
		 * 
		 * 
		 * for (int i = 0; i < recipientEmail.split("\\~").length; i++) {
		 * if(RecpEmail[i].isEmpty()!=true) { Message message = new
		 * MimeMessage(session); message.setFrom(new InternetAddress(username));
		 * message.setRecipients(Message.RecipientType.TO,
		 * InternetAddress.parse(RecpEmail[i])); message.setSubject(Title[i]);
		 * message.setText(Mesg[i]);
		 * 
		 * Transport.send(message); } }
		 * 
		 * // System.out.println("Done"); return "Success";
		 * 
		 * }
		 */
		catch (MessagingException e) {
			throw new RuntimeException(e);
		}
	}
}

