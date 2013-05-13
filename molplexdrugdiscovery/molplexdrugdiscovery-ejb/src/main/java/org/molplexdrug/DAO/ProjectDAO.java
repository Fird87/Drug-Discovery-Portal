package org.molplexdrug.DAO;

import java.util.List;

import javax.faces.event.AjaxBehaviorEvent;

import org.molplexdrug.Action.MProject;
import org.molplexdrug.EntityBean.Portfolio;
import org.molplexdrug.EntityBean.Project;
import org.molplexdrug.EntityBean.TPP;
import org.richfaces.model.Filter;
/**
 * @author Jallilah Jeffri
 *
 */
public interface ProjectDAO {

	public String addProject();
	public List<Portfolio> getAllPortfolio();
	 public Integer getPortfolioId(AjaxBehaviorEvent event);
	 public List<Project> getAllProject();
	 public List<TPP> getAllTPP();
	 public List<String> getSelectedTpp();
	 public void setSelectedTpp(List<String> selectedTpp);
	 public List<MProject> getProjectWithMultipleTpp(String projectName);
	 public List<MProject> getProjectOnly();
	 public Integer getTppId(AjaxBehaviorEvent event);
 public Filter<?> getFilterProject();
	 
	 //getter
	 public String getCurrentFilterValue();
	 public void setCurrentFilterValue(String currentFilterValue);
     public boolean isFlag(); 
     public void setFlag(boolean flag);

}
