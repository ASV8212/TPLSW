package CommonModel;

import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;

import CommonModel.DBConnection.propV;

import java.io.FileInputStream;
import java.io.IOException;
import java.net.URL;
import java.security.SecureRandom;
import java.util.Properties;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;

import javax.naming.Context;
import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.RandomStringUtils;
 
public class LoadSalt implements Filter {
 
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
        throws IOException, ServletException {
 
        
    	String Res="";
		String Profile = "";
		String DBSource="";
		String isJNDIConn="";	
		Context ctx = null;
		String providerURL="";
		String contextPort="";
		String lookupName="";
    	
    	
    	// Assume its HTTP
        HttpServletRequest httpReq = (HttpServletRequest) request;
 
        // Check the user session for the salt cache, if none is present we create one
        Cache<String, Boolean> csrfPreventionSaltCache = (Cache<String, Boolean>)
            httpReq.getSession().getAttribute("csrfPreventionSaltCache");
        String ParamVal="";
        String ParamVal1="";
        
        FileInputStream fis = null;
        FileInputStream fis1 = null;
        
        String GETURL="";
        
        
 propV PropVal1 = new propV();
    	
		try {
			Res = PropVal1.getPropValues();
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		 
		String Reponse[] = Res.split("~");
		
		DBSource = Reponse[0];
		isJNDIConn = Reponse[1];
		providerURL = Reponse[2];
		contextPort = Reponse[3];
		lookupName = Reponse[4];
        
        try
        {
          Properties prop = new Properties();
          
        //  URL songPath = DBConnection.class.getResource("");
          //String[] pathArr = songPath.toString().split("file:/|/TPLSW");
         // String[] pathArr = songPath.toString().split("file:/|/.metadata");
          String Path = DBSource;
         
          
          fis = new FileInputStream(Path + "/wflow/app_datasource.properties");
          
          if (fis != null) {
            prop.load(fis);                
           
              GETURL = prop.getProperty("GETURL");
            		  
            		  
              
            fis.close();
          } else {
            throw new java.io.FileNotFoundException("property file '" + fis + 
              "' not found in the classpath");
          }
          

          
        }
        catch (Exception e) {
          e.printStackTrace();
        }        	
    	
        
        String[] MultiGet = GETURL.split(",");
        
    	if (httpReq.getRequestURI().split("/").length > 2)   
    	{
    		
    	 ParamVal =	httpReq.getRequestURI().split("/")[2];
        
    	 if (ParamVal.equals("GetNextNavAction") || ParamVal.equals("ThemeproLO"))
    	 {
    		 
    		 ParamVal1="ThemeproLO";
    	 }
    	 
    	 if(ArrayUtils.contains( MultiGet, ParamVal))
         {
    		 ParamVal1 = "ThemeproLO"; 	               
         }  
    	 
    	 
    	if(!ParamVal1.equals("ThemeproLO"))
    	{
    		
    		
    		
        if (csrfPreventionSaltCache == null){
            csrfPreventionSaltCache = CacheBuilder.newBuilder()
                .maximumSize(5000)
                .expireAfterWrite(300, TimeUnit.MINUTES)
                .build();
 
            httpReq.getSession().setAttribute("csrfPreventionSaltCache", csrfPreventionSaltCache);
        }
 
        // Generate the salt and store it in the users cache
        String salt = RandomStringUtils.random(20, 0, 0, true, true, null, new SecureRandom());
        csrfPreventionSaltCache.put(salt, Boolean.TRUE);
 
        // Add the salt to the current request so it can be used
        // by the page rendered in this request
        httpReq.setAttribute("Prvnt", salt);
       // System.out.println(salt);
 
        chain.doFilter(request, response);
    	}
    	else
    	{
    		chain.doFilter(request, response);	
    	}
    	}
    	else
    	{
    		 chain.doFilter(request, response);
    		
    	}
    }
 
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }
 
    @Override
    public void destroy() {
    }
}