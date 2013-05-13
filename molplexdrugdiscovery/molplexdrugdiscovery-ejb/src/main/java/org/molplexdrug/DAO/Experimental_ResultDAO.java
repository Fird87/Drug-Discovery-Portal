package org.molplexdrug.DAO;

import java.util.List;

import javax.faces.event.AjaxBehaviorEvent;

import org.molplexdrug.EntityBean.Assay;
import org.molplexdrug.EntityBean.Experimental_Result;
import org.richfaces.model.Filter;
/**
 * @author Jallilah Jeffri
 *
 */
public interface Experimental_ResultDAO {

	public String addExperimentalResult();
	public List<Experimental_Result> getAllExperimentalResult();
	 public  List<Experimental_Result>searchStructureDetail();
	 public int getExpAssayId();
	 public void setExpAssayId(int expAssayId);
	 public List<Experimental_Result> getExperimentalResultList();
	 public String getAssayId(AjaxBehaviorEvent event);
	 public List<Assay> getAllAssay();
	 public void resetFilter();
	 public Filter<?> getFilterAssay();
		
	 //getter
	
	 public String getCurrentStateFilterValue();
	 public void setCurrentStateFilterValue(String currentStateFilterValue);
}
