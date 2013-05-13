package org.molplexdrug.DAO;

import java.util.List;

import javax.ejb.Local;
import javax.faces.event.AjaxBehaviorEvent;

import org.molplexdrug.Action.Approved_Therapy;
import org.molplexdrug.Action.WorldRegion;
import org.molplexdrug.EntityBean.Company;
import org.richfaces.model.Filter;
@Local
public interface IApprovedTherapy {
	  public String save();
	   public List<Company> getAllCompany();
	   public Integer getAppCompanyId(AjaxBehaviorEvent event);
	   public List<WorldRegion> getAllWorldRegions();
	   public Integer getWorldregionsId(AjaxBehaviorEvent event);
	   
	   public List<Approved_Therapy> getAllApprovedTherapy();
	   public Filter<?> getFilterApproved_Therapy();
	   //getter
		public String getCurrentFilterValue();
		public void setCurrentFilterValue(String currentFilterValue);
}
