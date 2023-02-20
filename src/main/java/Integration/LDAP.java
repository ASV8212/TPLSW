package Integration;

import CommonModel.*;
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.Properties;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;

/*import org.json.JSONException;
import org.json.JSONObject;


import oracle.jdbc.*;*/

import java.net.URISyntaxException;
import java.net.URL;


/*import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;*/
import java.util.Hashtable;

import javax.naming.AuthenticationException;
import javax.naming.AuthenticationNotSupportedException;
import javax.naming.Context;
import javax.naming.NamingEnumeration;
import javax.naming.NamingException;
/*import javax.naming.directory.Attribute;
import javax.naming.directory.Attributes;*/
import javax.naming.directory.SearchControls;
import javax.naming.directory.SearchResult;
/*import javax.naming.ldap.InitialLdapContext;
import javax.naming.ldap.LdapContext;*/
import javax.naming.directory.DirContext;
import javax.naming.directory.InitialDirContext;
import javax.naming.ldap.InitialLdapContext;
import javax.naming.ldap.LdapContext;

import java.util.Properties;


public class LDAP {

	public static String getLDAP(String userid,String pwd,String url,String ADSearch) {
		//String url = "ldap://10.9.57.73:389";
		//String username = "cha1240";
		//String domain = "10.9.57.73:389";
		String Status="";
		
		
		ADSearch= ADSearch.replace("xxUIDxx", userid); //"uid="+userid+",ou=people,dc=chola,dc=com";
		
		
		
		
		LdapContext ctx = null;  
		
		String Principal= "";

        try
        {  
            Hashtable env = new Hashtable();  
            env.put(Context.INITIAL_CONTEXT_FACTORY,  "com.sun.jndi.ldap.LdapCtxFactory");  
            env.put(Context.SECURITY_AUTHENTICATION, "simple");  
            //it can be <domain\\userid> something that you use for windows login  
            //it can also be            
            env.put(Context.SECURITY_PRINCIPAL, ADSearch); 
            env.put(Context.SECURITY_CREDENTIALS, pwd);  
            //in following property we specify ldap protocol and connection url.  
            //generally the port is 389  
            env.put(Context.PROVIDER_URL, url);
            ctx = new InitialLdapContext(env,null);
            System.out.println("Ldap Connection Successful for : "+userid);
            Status = "Success";
                   }
        catch(NamingException nex)
        {  
          //  System.out.println("LDAP Connection: FAILED");  
            nex.printStackTrace();
            Status = "Fail - " + nex.toString();
        }  
        return Status;

	
	}
}
