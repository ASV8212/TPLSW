package CommonModel;

import com.google.common.cache.Cache;

import CommonModel.DBConnection.propV;

import java.io.FileInputStream;
import java.io.IOException;
import java.net.URL;
import java.sql.Connection;
import java.util.Properties;

import javax.naming.Context;
import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.ArrayUtils;
 
public class ValidateSalt implements Filter  {
 
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
 String URL="";
       // httpReq.getHeaderNames()
        
     //   request.getParameter("csrfPreventionSalt");
       // request.getParameterValues("csrfPreventionSalt");
        
        //System.out.println("1"+request.getAttribute("javax.servlet.forward.request_uri"));
        
       // System.out.println(request.getParameter("csrfPreventionSalt"));
        //System.out.println(httpReq.getHeader("Origin"));
        
        // Get the salt sent with the request
        String salt = (String) httpReq.getParameter("Prvnt");
        
        // Validate that the salt is in the cache
        Cache<String, Boolean> csrfPreventionSaltCache = (Cache<String, Boolean>)
            httpReq.getSession().getAttribute("csrfPreventionSaltCache");
      
        String referer = httpReq.getHeader("Referer");
        String ProxyCon = httpReq.getHeader("Proxy-Connection");
        String Connection = httpReq.getHeader("Connection");
        
        String Origin = httpReq.getHeader("Origin");
        String referer1 = httpReq.getHeader("Referer");

        if (referer1 != null)
        {
    	String Reponse[] = referer1.split("\\/");
        
        if (Origin == null)
        {
        	
        	Origin = Reponse[0] + "//" + Reponse[2];
        	
        }
        }
        
        
        
     //   System.out.println(referer);
        
        String MultiOrgn1= httpReq.getHeader("Origin");
 
        String ParamVal="";
        String ParamVal1="";
        
    	Properties props = new Properties();
        FileInputStream fis = null;
        FileInputStream fis1 = null;
        Connection con = null;
       
        String POSTURL="";
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
          
         // URL songPath = DBConnection.class.getResource("");
         // String[] pathArr = songPath.toString().split("file:/|/TPLSW");
         // String[] pathArr = songPath.toString().split("file:/|/.metadata");
          String Path = DBSource;
         
          
          fis = new FileInputStream(Path + "/wflow/app_datasource.properties");
          
          if (fis != null) {
            prop.load(fis);                
              Profile = prop.getProperty("Origin");
              POSTURL = prop.getProperty("POSTURL");
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
    	
        String[] MultiPost = POSTURL.split(",");
        String[] MultiGet = GETURL.split(",");
        //String[] MultiOrgn1 = Profile.split(",");
      //  System.out.println(MultiOrgn);
        /* if ( ArrayUtils.contains( MultiOrgn, httpReq.getHeader("Origin") ) ) {
        	System.out.println("Exsists");
        }*/
       
        
    
        
       // System.out.println(ProxyCon);
      //  System.out.println(Connection);
       
        	//System.out.println(ProxyCon);
        	// System.out.println(Connection);
        	//System.out.println(Connection);
    	
        	 
if (httpReq.getRequestURI().split("/").length > 2)   
{
	
	 ParamVal =	httpReq.getRequestURI().split("/")[2];
     
	 if (ParamVal.equals("GetNextNavAction") || ParamVal.equals("ThemeproLO"))
	 {		 
		 ParamVal1="ThemeproLO";
	 }
	
	// System.out.println(httpReq.getRequestURI()); 
	// System.out.println(ParamVal1);
    	if(!ParamVal1.equals("ThemeproLO"))
    	{
    		
    		// System.out.println(ParamVal1);
    		
       
        if(httpReq.getMethod().equals("POST"))
        {
            String Data = "";
            
            String Req= httpReq.getRequestURI().split("/")[2];
            
           // if(Req.equals("UI_LoginGetData") || Req.equals("BatchUpdate"))
           if(ArrayUtils.contains( MultiPost, Req))
            {
         	   Data = "UI_LoginGetData"; 	               
            }  
        	
        	 //String Req= httpReq.getRequestURI().split("/")[2];
        	 if(!Data.equals("UI_LoginGetData"))
             {
        if (csrfPreventionSaltCache != null &&
                salt != null &&
                csrfPreventionSaltCache.getIfPresent(salt) != null){
 
        
        	
            
            
            String[] MultiOrgn = Profile.split(",");
            //String[] MultiOrgn1 = Profile.split(",");
          //  System.out.println(MultiOrgn);
            /* if ( ArrayUtils.contains( MultiOrgn, httpReq.getHeader("Origin") ) ) {
            	System.out.println("Exsists");
            }*/
           
            
         if ( ArrayUtils.contains( MultiOrgn, Origin ) )   
       // if(httpReq.getHeader("Origin").equals(Profile))	
        {
        
        	 chain.doFilter(request, response);
        }
        else
        {
        	 throw new ServletException("Potential CSRF detected!! Unknown INIT. Contact IT Support.");	
        	
        }
            // If the salt is in the cache, we move on
        //    chain.doFilter(request, response);
        } else { throw new ServletException("Potential CSRF detected!! Contact IT Support.");}
            // Otherwise we throw an exception aborting the request flow
             }
             else
             {
             	 chain.doFilter(request, response);
             }   
        }
        
       
        else
        {
        	
        	////
        	
String Data = "";
            
            String Req= httpReq.getRequestURI().split("/")[2];
            
           // if(Req.equals("UI_LoginGetData") || Req.equals("BatchUpdate"))
           if(ArrayUtils.contains( MultiGet, Req))
            {
         	   Data = "UI_LoginGetData"; 	               
            }  
        	
        	 //String Req= httpReq.getRequestURI().split("/")[2];
        	 if(Data.equals("UI_LoginGetData"))
             {
        		 
        		  chain.doFilter(request, response);
   
             }
             else
             {
             	// chain.doFilter(request, response);
            // }  
        	
        	
        	////
        	
        	
        	
        	
        	
        	
        	
        	//httpReq.
        	if (httpReq.getRequestURI().split("/").length > 2)   
                // if(httpReq.getHeader("Origin").equals(Profile))	
                 {
        		
        		String Req1= httpReq.getRequestURI().split("/")[2];
        		if(!Req1.equals("LGS"))
        		{
        		if(!Req1.equals("Logout"))
        		{
        		
        			 if (ProxyCon == null && Connection.equals("keep-alive"))
        		        {
        			
            	 if(referer==null )
            	 {
          
            		 URL = httpReq.getRequestURI() +
                     (httpReq.getQueryString() != null ? "?" + httpReq.getQueryString() : "");
            	
            		// System.out.println("1"); 
            		 
              		// System.out.println(URL);
              		
              	//	System.out.println(httpReq.getSession().getAttribute("CURL"));
              		 
            		 
            if 	(!URL.equals(httpReq.getSession().getAttribute("CURL")))	
            {
            		 httpReq.getSession().removeAttribute("LogSession");
            		 httpReq.getSession().removeAttribute("csrfPreventionSaltCache");
            		 httpReq.getSession().removeAttribute("User");
            		 httpReq.getSession().removeAttribute("CPM");
            		 httpReq.getSession().setAttribute("UNA", "UnAccess");
            		 httpReq.getSession().removeAttribute("CURL");
            		 chain.doFilter(request, response);
            	 }
            else
            {
            	//System.out.println("2");
            	
         		 //System.out.println(URL);
         		 
         		 //System.out.println( httpReq.getRequestURI() +
          	           // (httpReq.getQueryString() != null ? "?" + httpReq.getQueryString() : ""));
            	
            	 httpReq.getSession().removeAttribute("CURL");
        		 
            	    httpReq.getSession().setAttribute("CURL", httpReq.getRequestURI() +
            	            (httpReq.getQueryString() != null ? "?" + httpReq.getQueryString() : ""));	
            	    
            	 chain.doFilter(request, response);
            
            }
            
                       
            		 //throw new ServletException("un-authorized Access...");	
            	 }
            	 else
            	 {
            		
            		 httpReq.getSession().removeAttribute("CURL");
            
            		// System.out.println("3");
            		 
 //System.out.println( httpReq.getRequestURI() +
  // (httpReq.getQueryString() != null ? "?" + httpReq.getQueryString() : ""));
            		 
    httpReq.getSession().setAttribute("CURL", httpReq.getRequestURI() +
            (httpReq.getQueryString() != null ? "?" + httpReq.getQueryString() : ""));	 
            		 
            	 chain.doFilter(request, response);
            	 }
        		        }
        			 else
        			    {
        			    
        			//	  System.out.println(ProxyCon);
        			    //    System.out.println(Connection);
        				 
        			     httpReq.getSession().removeAttribute("LogSession");
        					 httpReq.getSession().removeAttribute("csrfPreventionSaltCache");
        					 httpReq.getSession().removeAttribute("User");
        					 httpReq.getSession().removeAttribute("CPM");
        					 httpReq.getSession().setAttribute("UNA", "UnAccess");
        					 httpReq.getSession().removeAttribute("CURL");
        					 chain.doFilter(request, response);
        			    	
        			    }
        			 //////// Here
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
                 
                 else
                 {
                	 chain.doFilter(request, response);
                 }
             }
        	
        	
        	// chain.doFilter(request, response);
        }
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