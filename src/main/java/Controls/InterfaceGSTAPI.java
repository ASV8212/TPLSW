package Controls;

import java.io.IOException;
import java.io.InputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;

import java.net.URL;
import java.net.HttpURLConnection;
import java.util.concurrent.TimeUnit;
import java.util.zip.*;

import okhttp3.MultipartBody;

public class InterfaceGSTAPI {

	public static String InterfaceGSTCall(String APiURL, String JsonData, String contenttype, String signature) {

		String Status = null;
		String Message = null;

		try {

			okhttp3.OkHttpClient client = new okhttp3.OkHttpClient.Builder().connectTimeout(10, TimeUnit.SECONDS)
					.writeTimeout(180, TimeUnit.SECONDS).readTimeout(180, TimeUnit.SECONDS).build();
			okhttp3.MediaType mediaType = okhttp3.MediaType.parse(contenttype);
			okhttp3.RequestBody body = okhttp3.RequestBody.create(mediaType, JsonData);
			okhttp3.Request request = new okhttp3.Request.Builder().url(APiURL).post(body)
					.addHeader("content-type", contenttype).addHeader("signature", signature)
					.addHeader("cache-control", "no-cache").build();

			okhttp3.Response response = client.newCall(request).execute();

			System.out.println("InterfaceGSTCall Response Code " + response.code());

			if (response.code() == 200) {
				Status = "Success";
				Message = response.body().string();
			} else {
				Status = "Error";
				Message = response.body().string();
			}

		} catch (Exception e) {
			e.printStackTrace();
			Status = "Exception";
			Message = e.toString();
			System.out.println("Response: " + Status);
			return Status + "~" + Message;
		}

		return Status + "~" + Message;
	}

	public static String InterfaceGSTStatus(String APIURL) {
		String Status = null;
		String Message = null;
		try {
			okhttp3.OkHttpClient client = new okhttp3.OkHttpClient.Builder().connectTimeout(10, TimeUnit.SECONDS)
					.writeTimeout(180, TimeUnit.SECONDS).readTimeout(180, TimeUnit.SECONDS).build();
			okhttp3.Request request = new okhttp3.Request.Builder().url(APIURL).addHeader("cache-control", "no-cache")
					.get().build();

			okhttp3.Response response = client.newCall(request).execute();

			System.out.println("InterfaceGSTCall Response Code " + response.code());

			if (response.code() == 200) {
				Status = "Success";
				Message = response.body().string();
			} else {
				Status = "Error";
				Message = response.body().string();
			}

		} catch (Exception e) {
			e.printStackTrace();
			Status = "Exception";
			Message = e.toString();
			System.out.println("Response: " + Status);
			return Status + "~" + Message;
		}

		return Status + "~" + Message;
	}

	public static String InterfaceGSTRetrieve(String APiURL, String perfiostransactoinid, String location) {

		String Status = null;
		String Message = null;
		URL urlForGetRequest = null;
//		String location="C:\\Manoj Kumar\\TVS\\";
		try {
			urlForGetRequest = new URL(APiURL);
			HttpURLConnection conection = (HttpURLConnection) urlForGetRequest.openConnection();
			conection.setRequestMethod("GET");
			conection.setRequestProperty("perfiosTransactionId", perfiostransactoinid);
			conection.addRequestProperty("content-type", "application/json");
			int responseCode = conection.getResponseCode();
//            System.out.println(conection.getResponseMessage());
			System.out.println(responseCode);

			if (responseCode == HttpURLConnection.HTTP_OK) {
				String fileName = "";
				String disposition = conection.getHeaderField("Content-Disposition");
//                            String contentType = conection.getContentType();
//                            int contentLength = conection.getContentLength();
				if (disposition != null) {
					// extracts file name from header field
					int index = disposition.indexOf("filename=");
					if (index > 0)
						fileName = disposition.substring(index + 10, disposition.length() - 1);

				} else {
					// extracts file name from URL
					fileName = APiURL.substring(APiURL.lastIndexOf("/") + 1, APiURL.length());
				}

//                          System.out.println("Content-Type = " + contentType);
//                          System.out.println("Content-Length = " + contentLength);
				System.out.println("Content-Disposition = " + disposition);

				System.out.println("fileName = " + fileName);

				InputStream inputStream = conection.getInputStream();
				String saveFilePath = location + fileName;

				FileOutputStream outputStream = new FileOutputStream(saveFilePath);

				int bytesRead = -1;
				byte[] buffer = new byte[4096];
				while ((bytesRead = inputStream.read(buffer)) != -1) {
					outputStream.write(buffer, 0, bytesRead);
				}
				outputStream.close();
				inputStream.close();

				Status = unzipFile(saveFilePath, location + "Extract\\");

//                Status = "Success";
				Message = saveFilePath;
			} else {
				System.out.println("failed");
				Status = "Error";
				Message = "Internal server error: Perfios Call Failed";
			}
		} catch (IOException e) {
			e.printStackTrace();
			Status = "Exception";
			Message = e.toString();
			System.out.println("Response: " + Status);
			return Status + "~" + Message;

		} catch (Exception e) {
			e.printStackTrace();
			Status = "Exception";
			Message = e.toString();
			System.out.println("Response: " + Status);
			return Status + "~" + Message;
		}

		return Status + "~" + Message;
	}

	public static String InterfaceGSTUpload(String APiURL, String Path, String contenttype, String vendorID)
			throws FileNotFoundException, Exception {

		String Status = null;
		String Message = null;
		File fileName = null;
		okhttp3.Response response = null;
		okhttp3.RequestBody requestBody = null;
		okhttp3.Request request = null;
		try {

//				byte [] bd = URLtoFile(Path);
			fileName = new File(Path);
			okhttp3.OkHttpClient client = new okhttp3.OkHttpClient();

			okhttp3.MediaType mediaType = okhttp3.MediaType.parse(contenttype);
			requestBody = new MultipartBody.Builder().setType(MultipartBody.FORM)
					.addFormDataPart("file", "image.jpeg/abc.pdf/ima.png/imag.jpg/test.pdf",
							okhttp3.RequestBody.create(mediaType, fileName))
					.addFormDataPart("vendorId", vendorID).build();

			request = new okhttp3.Request.Builder().url(APiURL).post(requestBody)
//					 .addHeader("vendorId", vendorID)
					.build();
			response = client.newCall(request).execute();

			System.out.println("InterfaceKYCCall Response Code " + response.code());

			if (response.code() == 200 || response.code() == 202) {
				Status = "Success";
				Message = response.body().string();
			} else {
				Status = "Error";
				Message = response.body().string();
			}
			System.out.println("Message Details " + Message);
		} catch (Exception e) {
			e.printStackTrace();
			Status = e.toString();
			Message = "Exception";
			System.out.println("Response: " + Status);
			return Status + "~" + Message;
		}

		return Status + "~" + Message;
	}

	public static String InterfaceGSTProcess(String APIURL,String contenttype) {
		String Status = null;
		String Message = null;
		try {
			okhttp3.OkHttpClient client = new okhttp3.OkHttpClient.Builder().connectTimeout(10, TimeUnit.SECONDS)
					.writeTimeout(180, TimeUnit.SECONDS).readTimeout(180, TimeUnit.SECONDS).build();
			okhttp3.RequestBody body = okhttp3.RequestBody.create(null, new byte[0]);
			okhttp3.Request request = new okhttp3.Request.Builder().url(APIURL).addHeader("cache-control", "no-cache")
					.addHeader("content-type", contenttype).post(body).build();

			okhttp3.Response response = client.newCall(request).execute();

			System.out.println("InterfaceGSTCall Response Code " + response.code());

			if (response.code() == 200) {
				Status = "Success";
				Message = response.body().string();
			} else {
				Status = "Error";
				Message = response.body().string();
			}

		} catch (Exception e) {
			e.printStackTrace();
			Status = "Exception";
			Message = e.toString();
			System.out.println("Response: " + Status);
			return Status + "~" + Message;
		}

		return Status + "~" + Message;
	}

	public static String unzipFile(String zipFilePath, String destDir) throws IOException {

		File dir = new File(destDir);
		// create output directory if it doesn't exist
		if (!dir.exists())
			dir.mkdirs();
		FileInputStream fis;
		// buffer for read and write data to file
		byte[] buffer = new byte[1024];
		try {
			fis = new FileInputStream(zipFilePath);
			ZipInputStream zis = new ZipInputStream(fis);
			ZipEntry ze = zis.getNextEntry();
			while (ze != null) {
				String fileName = ze.getName();
				File newFile = new File(destDir + File.separator + fileName);
				System.out.println("Unzipping to " + newFile.getAbsolutePath());
				// create directories for sub directories in zip
				new File(newFile.getParent()).mkdirs();
				FileOutputStream fos = new FileOutputStream(newFile);
				int len;
				while ((len = zis.read(buffer)) > 0) {
					fos.write(buffer, 0, len);
				}
				fos.close();
				// close this ZipEntry
				zis.closeEntry();
				ze = zis.getNextEntry();
			}
			// close last ZipEntry
			zis.closeEntry();
			zis.close();
			fis.close();
		} catch (Exception ex) {
			ex.printStackTrace();
			return "Failed";
		}
		return "Success";
	}
}
