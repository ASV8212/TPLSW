package Integration;

import java.nio.file.Path;
import java.util.Iterator;
import java.util.List;
import org.apache.commons.fileupload.FileItemFactory;

import java.awt.AlphaComposite;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.RenderingHints;
import java.awt.Transparency;
import java.awt.image.BufferedImage;
import java.awt.image.DataBufferByte;
import java.awt.image.WritableRaster;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.attribute.FileAttribute;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.nio.file.Paths;
import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.File;
import org.apache.commons.fileupload.disk.DiskFileItem;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.mime.MultipartEntity;
import org.apache.http.entity.mime.content.ByteArrayBody;
import org.apache.http.entity.mime.content.StringBody;
import org.apache.http.impl.client.HttpClientBuilder;

import com.sun.org.apache.xerces.internal.impl.dv.util.Base64;

import CommonModel.DBConnection;
import Controls.Connections;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.ServletResponse;

import com.squareup.okhttp.*;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URL;
import java.net.URLConnection;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import com.sun.org.apache.xerces.internal.impl.dv.util.Base64;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.awt.image.BufferedImage;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.io.StringReader;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.imageio.IIOImage;
import javax.imageio.ImageIO;
import javax.imageio.ImageWriteParam;
import javax.imageio.ImageWriter;
import javax.imageio.stream.ImageOutputStream;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.mime.MultipartEntity;
//import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.entity.mime.content.ByteArrayBody;
import org.apache.http.entity.mime.content.StringBody;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicNameValuePair;

import org.w3c.dom.Document;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import com.sun.org.apache.xerces.internal.impl.dv.util.Base64;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.ws.rs.PathParam;

import java.nio.ByteBuffer;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Formatter;

public class DMS {
	private String PrcsID;
	private String FormName;
	private String names;
	private String descrptns;
	private String flsize;
	private String vrsnno;
	private String usrpwd;
	private String domain;
	private String DBSrc;
	private boolean isMultipartfn;
	private ServletResponse response;
	private String DocName;
	private String CusID;
	private String spname;
	private String RespFr;

	public void PrcsID(final String PrcsID) {
		this.PrcsID = PrcsID;
	}

	public void FormName(final String FormName) {
		this.FormName = FormName;
	}

	public void names(final String names) {
		this.names = names;
	}

	public void descrptns(final String descrptns) {
		this.descrptns = descrptns;
	}

	public void flsize(final String flsize) {
		this.flsize = flsize;
	}

	public void vrsnno(final String vrsnno) {
		this.vrsnno = vrsnno;
	}

	public void usrpwd(final String usrpwd) {
		this.usrpwd = usrpwd;
	}

	public void domain(final String domain) {
		this.domain = domain;
	}

	public void CusID(final String CusID) {
		this.CusID = CusID;
	}

	public void DocName(final String DocName) {
		this.DocName = DocName;
	}

	public void DBSrc(final String DBSrc) {
		this.DBSrc = DBSrc;
	}

	public void isMultipartfn(final boolean isMultipartfn) {
		this.isMultipartfn = isMultipartfn;
	}

	public String DMSPUSH(final HttpServletRequest request, final HttpServletResponse response) throws Exception {
		final long serialVersionUID = 1L;
		final boolean isMultipart = ServletFileUpload.isMultipartContent(request);
		final String root = request.getParameter("domain");
		final String PrcsID = request.getParameter("PrcsID");
		final String FormName = request.getParameter("FormName");
		final String AttchNames = request.getParameter("names");
		final String AttchDescrptns = request.getParameter("descrptns");
		final String Filesizes = request.getParameter("flsize");
		final String Versions = request.getParameter("vrsnno");
		final String Usrpwd = request.getParameter("usrpwd");
		final String Cusid = request.getParameter("CusID");
		final String DocName = request.getParameter("DocName");

		final String[] AryAttchNames = AttchNames.split(",");
		final String[] AryAttchDescrptns = AttchDescrptns.split(",");
		final String[] AryFilesize = Filesizes.split(",");
		final String[] AryVersion = Versions.split(",");
		String AttchName = "";
		String AttchDescrptn = "";
		String Filesize = "";
		String Version = "";
		final String AttchLstDirname = "";
		String OPAttchData = "";
		final String savepath = "";
		final BufferedImage image = null;
		final int width = 963;
		final int height = 50;
		String ResMsg = "";
		byte[] hash = new byte[20];
		String Checksum = "";
		
		Connection con = DBConnection.getConnection(DBSrc);
		PreparedStatement proc_stmt = null;
		ResultSet rs = null;

		try {

			if (isMultipart) {
				final FileItemFactory factory = (FileItemFactory) new DiskFileItemFactory();
				request.getQueryString();
				final ServletFileUpload upload = new ServletFileUpload(factory);
				@SuppressWarnings("unchecked")
				final List<FileItem> multiparts = (List<FileItem>) upload.parseRequest(request);
				int i = 0;
				for (final FileItem item : multiparts) {
					if (!item.isFormField()) {
						AttchName = AryAttchNames[i];
						AttchDescrptn = AryAttchDescrptns[i];
						Filesize = AryFilesize[i];
						Version = AryVersion[i];
						final String fileName = item.getName();
						final File file1 = ((DiskFileItem) item).getStoreLocation();
						((DiskFileItem) item).write(file1);
						final String uppath = file1.getAbsolutePath();
						final String userPassword = Usrpwd;
						final File sFile2 = new File(root + "/Attachments/" + PrcsID + "/" + FormName + "/" + AttchName
								+ "/" + Version + "/");
						final Path sFile2path = Paths.get(root + "/Attachments/" + PrcsID + "/" + FormName + "/"
								+ AttchName + "/" + Version + "/", new String[0]);
						// Files.createDirectories(sFile2path, (FileAttribute<?>[])new
						// FileAttribute[0]);
						// final File sFile3 = new File(sFile2 + "/" + fileName);
						// final FileOutputStream FileOutputStream = new FileOutputStream(sFile3);
						final FileInputStream fileInputStream = new FileInputStream(new File(uppath));
						final byte[] buf = new byte[16777216];
						int len;
						// while ((len = fileInputStream.read(buf)) > 0) {
						// FileOutputStream.write(buf, 0, len);
						// }
						OPAttchData = String.valueOf(OPAttchData) + AttchName + "~" + AttchDescrptn + "~"
								+ "\\Attachments" + "\\" + PrcsID + "\\" + FormName + "\\" + AttchName + "\\" + Version
								+ "\\" + fileName + "~" + Filesize + "~" + Version + "|";

						// FileOutputStream.close();

						ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
						
                         
						
							try {
								byte[] chunk = new byte[4096];
								int bytesRead;
								InputStream stream = fileInputStream;

								while ((bytesRead = stream.read(chunk)) > 0) {
									outputStream.write(chunk, 0, bytesRead);
								}

							} catch (IOException e) {
								e.printStackTrace();
								return null;
							}
							
							String resize="Y";
	                         
							if (resize.equals("Y")) 
							{
								byte[] chunk1 = new byte[4096];
								int bytesRead1;
								ByteArrayOutputStream outputStream1 = new ByteArrayOutputStream();
								InputStream is = fileInputStream;
								
								while ((bytesRead1 = is.read(chunk1)) > 0) {
									outputStream1.write(chunk1, 0, bytesRead1);
								}
								InputStream inStream = new ByteArrayInputStream( outputStream1.toByteArray() );
								byte[] compimg =  resize(uppath, OPAttchData, 100, 100,inStream);
								//ByteArrayOutputStream baos = new ByteArrayOutputStream(compimg.length);
								outputStream.write(compimg, 0, compimg.length);
							}
						
						String encoded = "";
						byte[] DocContent;
						Base64 codec = new Base64();

						DocContent = outputStream.toByteArray();
						encoded = codec.encode(DocContent);

						outputStream.close();

						fileInputStream.close();
						++i;

						MessageDigest md = MessageDigest.getInstance("SHA-1");

						hash = md.digest(DocContent);

						Formatter formatter = new Formatter();
						for (byte b : hash) {
							formatter.format("%02x", b);
						}

						Checksum = formatter.toString();

						/*
						 * proc_stmt = con.prepareStatement("{ call sam_sAttachmentDMS(?,?,?) }");
						 * 
						 * proc_stmt.setString(1, OPAttchData); proc_stmt.setString(2, CusID);
						 * proc_stmt.setString(3, DocName);
						 * 
						 * rs=proc_stmt.executeQuery();
						 * 
						 * 
						 * while (rs.next()) { System.out.println("Data Saved Suceessfully"); }
						 * 
						 * Connections.Call(proc_stmt,rs,con,"Commit");
						 */

						// START API

						String APiURL = "";
						String REQ = "";

						proc_stmt = con.prepareStatement("{ call SAM_SGETDMSREQ(?,?,?,?,?) }");

						proc_stmt.setString(1, OPAttchData);
						proc_stmt.setString(2, CusID);
						proc_stmt.setString(3, DocName);
						proc_stmt.setString(4, Checksum);
						proc_stmt.setString(5, "REQ-1");

						rs = proc_stmt.executeQuery();

						while (rs.next()) {
							APiURL = rs.getString(1);
							REQ = rs.getString(2);
							Version = rs.getString(3);

						}

						// jsonData=jsonData.replace("JSONREQCONTENT", encoded);

						Connections.Call(proc_stmt, rs, con, "Commit");

						HttpClient client = HttpClientBuilder.create().build();
						HttpPost post = new HttpPost(APiURL);
// final String USER_AGENT = "Mozilla/5.0";
//post.setHeader("x-karza-key", karzakey);
//File file = new File("File Path");
//File file = new File(url1.toString());
						MultipartEntity entity = new MultipartEntity();
						ByteArrayBody body = new ByteArrayBody(DocContent, "image/jpeg", fileName);
//ByteArrayBody body = new ByteArrayBody(readBytesFromFile("C:\\Users\\ETDU041\\Desktop\\BANK STATEMENT\\5448\\JULY18.pdf"),"application/pdf", Filename);
// ByteArrayBody body = new ByteArrayBody(DocContent,"application/pdf", "JULY18.pdf");
						entity.addPart("image", body);
						entity.addPart("consent", new StringBody("Y"));
						entity.addPart("data", new StringBody(REQ));

						post.setEntity(entity);
						HttpResponse response1 = client.execute(post);
						BufferedReader rd = new BufferedReader(
								new InputStreamReader(response1.getEntity().getContent()));
						StringBuffer result = new StringBuffer();
						String line = "";
						while ((line = rd.readLine()) != null) {
							result.append(line);

						}

						DocContent = null;
						rd.close();
//System.out.println(result);

						int StatusCode = response1.getStatusLine().getStatusCode();

						ResMsg = result.toString();

						// END API

						proc_stmt = con.prepareStatement("{ call SAM_SGETDMSREQ(?,?,?,?,?) }");

						proc_stmt.setString(1, OPAttchData);
						proc_stmt.setInt(2, StatusCode);
						proc_stmt.setString(3, Version);
						proc_stmt.setString(4, ResMsg);
						proc_stmt.setString(5, "REQ-2");

						rs = proc_stmt.executeQuery();

						while (rs.next()) {
							RespFr = rs.getString(1);
							// REQ = rs.getString(2);
							// Version = rs.getString(3);
						}

						if (RespFr.equals("Success")) {
							OPAttchData = AttchName + "~" + AttchDescrptn + "~" + ResMsg + "\\" + AttchName + "~"
									+ Filesize + "~" + Version + "|";
						} else {
							OPAttchData = RespFr;
						}

					}
				}
			}

		} catch (Exception e) {
			try {
				proc_stmt = con.prepareStatement("{ call SAM_SGETDMSREQ(?,?,?,?,?) }");
				proc_stmt.setString(1, "");
				proc_stmt.setString(2, "");
				proc_stmt.setString(3, Version);
				proc_stmt.setString(4, e.getMessage());
				proc_stmt.setString(5, "EXCEPTION");

				rs = proc_stmt.executeQuery();
				while (rs.next()) {
					RespFr = rs.getString(1);
				}
				OPAttchData = RespFr;

				Connections.Call(proc_stmt, rs, con, "Commit");
			} catch (Exception e1) {
				Connections.Call(proc_stmt, rs, con, "Rollback");
				OPAttchData = "Fail";
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
		}

		finally {
			Connections.Call(proc_stmt, rs, con, "Close");
		}
		return OPAttchData;

	}

	public static void removeDirectory(final File dir) {
		if (dir.isDirectory()) {
			final File[] files = dir.listFiles();
			if (files != null && files.length > 0) {
				File[] array;
				for (int length = (array = files).length, i = 0; i < length; ++i) {
					final File aFile = array[i];
					removeDirectory(aFile);
				}
			}
			dir.delete();
		} else {
			dir.delete();
		}
	}

	public static void cleanDirectory(final File dir) {
		if (dir.isDirectory()) {
			final File[] files = dir.listFiles();
			if (files != null && files.length > 0) {
				File[] array;
				for (int length = (array = files).length, i = 0; i < length; ++i) {
					final File aFile = array[i];
					removeDirectory(aFile);
				}
			}
		}
	}

	public static byte[] resize(String inputImagePath,

			String outputImagePath, int scaledWidth, int scaledHeight, InputStream file)

			throws IOException {
		 InputStream is = new BufferedInputStream(new FileInputStream(inputImagePath));
		    Image image = ImageIO.read(is);
		//Image image = ImageIO.read(file);
		BufferedImage bi = createResizedCopy(image, 180, 180, true);
		ByteArrayOutputStream baos = new ByteArrayOutputStream();
		ImageIO.write(bi, "pdf", baos);
		byte[] bytes = baos.toByteArray();
		return bytes; 
		
		/*
		 * // reads input image //inputImagePath =
		 * "C:\\Users\\TPTL0114\\Desktop\\RESIZE\\123.jpeg";
		 * 
		 * // outputImagePath="C:\\Users\\TPTL0114\\Desktop\\RESIZE\\1234.jpeg";
		 * 
		 * scaledWidth = 236;
		 * 
		 * scaledHeight = 305;
		 * 
		 * 
		 * 
		 * File inputFile = new File(inputImagePath);
		 * 
		 * BufferedImage inputImage = ImageIO.read(file);
		 * 
		 * // creates output image BufferedImage outputImage = new
		 * BufferedImage(scaledWidth,
		 * 
		 * scaledHeight, inputImage.getType()); // scales the input image to the output
		 * image
		 * 
		 * Graphics2D g2d = outputImage.createGraphics();
		 * 
		 * g2d.drawImage(inputImage, 0, 0, scaledWidth, scaledHeight, null);
		 * 
		 * g2d.dispose(); // extracts extension of output file
		 * 
		 * // String formatName = outputImagePath.substring(outputImagePath
		 * 
		 * // .lastIndexOf(".") + 1);
		 * 
		 * // writes to output file
		 * 
		 * // ImageIO.write(outputImage, formatName, new File(outputImagePath));
		 * 
		 * byte[] imageBytes = ((DataBufferByte)
		 * outputImage.getData().getDataBuffer()).getData();
		 * 
		 * return imageBytes;
		 */
		
		
		

	}
	
	public static BufferedImage createResizedCopy(Image originalImage, int scaledWidth, int scaledHeight, boolean preserveAlpha) {
	    int imageType = preserveAlpha ? BufferedImage.TYPE_INT_RGB : BufferedImage.TYPE_INT_ARGB;
	    BufferedImage scaledBI = new BufferedImage(scaledWidth, scaledHeight, imageType);
	    Graphics2D g = scaledBI.createGraphics();
	    if (preserveAlpha) {
	        g.setComposite(AlphaComposite.Src);
	    }
	    g.drawImage(originalImage, 0, 0, scaledWidth, scaledHeight, null);
	    g.dispose();
	    return scaledBI;
	}
	/*
	public static byte[] resize(String inputImagePath,

			String outputImagePath, int scaledWidth, int scaledHeight)

			throws IOException {
		
		    File input = new File(inputImagePath);
		    BufferedImage image = ImageIO.read(input);

		    File compressedImageFile = new File("compress.jpg");
		    OutputStream os = new FileOutputStream(compressedImageFile);

		    Iterator<ImageWriter> writers = ImageIO.getImageWritersByFormatName("jpg");
		    ImageWriter writer = (ImageWriter) writers.next();

		    ImageOutputStream ios = ImageIO.createImageOutputStream(os);
		    writer.setOutput(ios);

		    ImageWriteParam param = writer.getDefaultWriteParam();

		    param.setCompressionMode(ImageWriteParam.MODE_EXPLICIT);
		    param.setCompressionQuality(0.05f);  // Change the quality value you prefer
		    writer.write(null, new IIOImage(image, null, null), param);
		    
		    // get DataBufferBytes from Raster
		    WritableRaster raster = image.getRaster();
		    DataBufferByte data   = (DataBufferByte) raster.getDataBuffer();
		    
		    System.out.println(image);	 
		    System.out.println(writer);	  
		    
		   byte[] imageBytes = ((DataBufferByte) data).getData();
		    
		    System.out.println(data);	  
		    System.out.println(imageBytes);
		    
		    os.close();
		    ios.close();
		    writer.dispose();

			return data;
  
		//return null;
	}*/
}