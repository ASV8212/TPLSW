package configuration;

import javax.servlet.Filter;

import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import CommonModel.ClickjackingPreventionFilter;
import CommonModel.CustomFilter;
import CommonModel.LoadSalt;
import CommonModel.ValidateSalt;

public class AppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

	@Override
	protected Class<?>[] getRootConfigClasses() {
		return new Class[] { AppConfig.class };
	}
 
	@Override
	protected Class<?>[] getServletConfigClasses() {
		return null;
	}
 
	@Override
	protected String[] getServletMappings() {
		return new String[] { "/" };
	}

	/*@Override
	protected Filter[] getServletFilters() {
		return new Filter[]{new LoadSalt(),new ValidateSalt(),new ClickjackingPreventionFilter()};
	}*/

}