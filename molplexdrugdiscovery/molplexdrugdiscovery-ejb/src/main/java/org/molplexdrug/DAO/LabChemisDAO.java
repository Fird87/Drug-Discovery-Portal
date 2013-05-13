package org.molplexdrug.DAO;

import java.util.List;

import javax.ejb.Local;
import javax.faces.event.AjaxBehaviorEvent;
import javax.faces.model.SelectItem;

import org.molplexdrug.EntityBean.Assay;
import org.molplexdrug.EntityBean.Lab;
import org.molplexdrug.EntityBean.LabRequest;
import org.molplexdrug.EntityBean.Rtp;

@Local
public interface LabChemisDAO  {
	

	public String update();
	public List<Assay> getAllAssay2();
	public List<Lab> getAllAssay();
	public String savelab();
	public String save();
	public List<LabRequest> getAllLabRequest() ;
   public Integer getAssayId(AjaxBehaviorEvent event);
	public String getSelect();
	public void setSelect(String select);
public List<Integer> getSelectedList();
	public void setSelectedList(List<Integer> selectedList);
		public List<Rtp> getAllRtp();
		public List<Lab> getAllAssay1();
		public String saveLabRequest();
	
}
