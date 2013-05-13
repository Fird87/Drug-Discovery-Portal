//$Id: Register.java 2056 2006-09-28 00:36:56Z gavin $
package org.molplexdrug.DAO;

import java.util.List;

import javax.ejb.Local;
import javax.faces.component.html.HtmlDataTable;
import javax.faces.event.ActionEvent;
import javax.faces.event.AjaxBehaviorEvent;
import javax.faces.event.ValueChangeEvent;
import javax.persistence.Query;

import org.molplexdrug.Action.RTPAction;
import org.molplexdrug.EntityBean.CompoundLogical;
import org.molplexdrug.EntityBean.Compound_Properties;
import org.molplexdrug.EntityBean.LogicalOperator;
import org.molplexdrug.EntityBean.TPP;
import org.richfaces.model.Filter;

/**
 * @author Firdaus
 *
 */
@Local
public interface RTPDAO
{

	   public String register();
	   
	   public List<Compound_Properties>  getAllCompoundProperties();
	   
	   public List<LogicalOperator> getAllLogicalOperator();
	   
	   public String save();
	   
	   public List<CompoundLogical> getAll(); 
	   
	   public String getExistMessage();
		public List<CompoundLogical> getAllRtpCompound();
	   
	   public List<Compound_Properties> getCompoundProperty(AjaxBehaviorEvent event);
	   
	   public Integer getRtpCompoundProperyId(AjaxBehaviorEvent ev);
	   
	   public Integer getRtpLogicalOperatorId(AjaxBehaviorEvent event);
	
	   public String pageDevelopmentPhaseId(ActionEvent event);
	   
	   //getter/setter
	   public List<Compound_Properties> getCompoundList();

		public void setCompoundList(List<Compound_Properties> compoundList);
		
		public String getCompName();

		public void setCompName(String compName);
		
		public Integer getCpId();

		public void setCpId(Integer cpId);

		public void tabBean();	 
	 
	    
	    //Filter var
	    public String getCurrentStateFilterValue();

		public void setCurrentStateFilterValue(String currentStateFilterValue);
	    
	    public Filter<?> getFilterCompound();
	    
	    public String getCompundPropertyName();
	    public void setCompundPropertyName(String compundPropertyName) ;
	    public String getCompoundPropertyUnit();
	    public void setCompoundPropertyUnit(String compoundPropertyUnit);
}