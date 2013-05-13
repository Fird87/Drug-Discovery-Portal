package org.molplexdrug.DAO;


import java.util.List;

import javax.faces.event.AjaxBehaviorEvent;

import org.molplexdrug.Action.TppDetail;
import org.molplexdrug.Action.WorldRegion;
import org.molplexdrug.EntityBean.ApprovedTherapy;
import org.molplexdrug.EntityBean.Company;
import org.molplexdrug.EntityBean.Side_Effect_Tolerance;
import org.molplexdrug.EntityBean.Therapy_Administration;


public interface TppInterface {

	public String addTpp();
	public List<ApprovedTherapy> getAllAppTherapy();
	public List<Side_Effect_Tolerance> getAllTolerance() ;
	public List<Therapy_Administration> getAllTherapy_Adminstration();
	public List<WorldRegion> getAllWorldRegions();
	public List<Company> getAllCompany();
	 public String save();
	  public List<TppDetail> getAllTpp(String tppName); 
	  public List<TppDetail> getTppOnly();
	 
		 //getter
			public List<Integer> getWorld_regionsList();
			public void setWorld_regionsList(List<Integer> world_regionsList);
			public List<Integer> getWrList();
			public void setWrList(List<Integer> wrList);
	 
	 public Integer getTppWorldRegionsId(AjaxBehaviorEvent ev);
	 public Integer getTppSideEffectToleranceId(AjaxBehaviorEvent ev);
	 public Integer getTppTherapyAdminId(AjaxBehaviorEvent ev);
	 public Integer getTppApprovedTherapyId(AjaxBehaviorEvent ev);
     public Integer getCompanyId(AjaxBehaviorEvent ev);
	  public List<TppDetail> getListOfObjects();
	  public void add();
	  public void remove();
	  public String update();
	  public void showAddMessage();
	  
	  public boolean isSuccess();

}
