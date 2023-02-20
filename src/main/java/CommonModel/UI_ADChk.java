package CommonModel;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Hashtable;

import javax.naming.AuthenticationException;
import javax.naming.AuthenticationNotSupportedException;
import javax.naming.Context;
import javax.naming.NamingEnumeration;
import javax.naming.NamingException;
import javax.naming.directory.Attribute;
import javax.naming.directory.Attributes;
import javax.naming.directory.SearchControls;
import javax.naming.directory.SearchResult;
import javax.naming.ldap.InitialLdapContext;
import javax.naming.ldap.LdapContext;
import javax.naming.directory.DirContext;
import javax.naming.directory.InitialDirContext;

import java.util.Properties;
import CommonModel.DBConnection;

public class UI_ADChk {

	private String userid;
	private String pwd;

	private String DBSrc;

	public void userid(String userid) {
		this.userid = userid;
	}

	public void pwd(String pwd) {
		this.pwd = pwd;
	}

	public void DBSrc(String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public static boolean UI_ADChk(String userid,String pwd) {

		String url = "ldap://10.10.100.10";
		//String username = "cha1240";
		//  String password = "chandra100";
		Hashtable env = new Hashtable();
		env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
		env.put(Context.PROVIDER_URL, url);
		env.put(Context.SECURITY_AUTHENTICATION, "simple");
		env.put(Context.SECURITY_PRINCIPAL, "rmfltool");
		env.put(Context.SECURITY_CREDENTIALS, "321@$$Rmfl");
		//env.put(Context.SECURITY_PROTOCOL, "ssl");
		


		try {
			DirContext ctx = new InitialDirContext(env);
			System.out.println("connected");
			System.out.println(ctx.getEnvironment());
			
			 String searchBase = "DC=rmfl,DC=mic";
		        String FILTER = "(&(objectClass=user)(objectCategory=person)((sAMAccountName=" + userid + ")))";
		        SearchControls ctls = new SearchControls();
		        ctls.setSearchScope(SearchControls.SUBTREE_SCOPE);
		        NamingEnumeration<SearchResult> answer = ctx.search(searchBase, FILTER, ctls);
		        SearchResult result = answer.next();
		        
		       String distinguishedName = result.getNameInNamespace();

	            // attempt another authentication, now with the user
	            Properties authEnv = new Properties();
	            authEnv.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
	            authEnv.put(Context.PROVIDER_URL, url);
	            authEnv.put(Context.SECURITY_PRINCIPAL, distinguishedName);
	            authEnv.put(Context.SECURITY_CREDENTIALS, pwd);
	            new InitialDirContext(authEnv);

	            System.out.println("Authentication successful");
	           

			ctx.close();
			 return true;

		} catch (AuthenticationNotSupportedException ex) {
			System.out.println("The authentication is not supported by the server");
		} catch (AuthenticationException ex) {
			System.out.println("incorrect password or username");
		} catch (NamingException ex) {
			System.out.println("error when trying to create the context");
		}
		 return false;

	}
		
	}
