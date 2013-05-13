package org.molplexdrug.DAO;

import java.awt.event.ActionEvent;
import java.util.List;

import javax.ejb.Local;
import javax.faces.event.AjaxBehaviorEvent;

import org.molplexdrug.EntityBean.Assay;
import org.molplexdrug.EntityBean.Targets;

/**
 * @author Jallilah Jeffri
 *
 */
@Local
public interface AssayDAO {

	
	public String addAssay();
	public List<Assay> getAllAssay(ActionEvent event);
	public List<Assay> getAllAssay();
	public List<Assay> search();
	   public void getCompoundId();
	   
	   public List<Targets> getAllTarget();
	   public Integer getCompoundPropertyId(AjaxBehaviorEvent event);
}
