package org.molplexdrug.Action;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.faces.event.AjaxBehaviorEvent;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.jboss.seam.annotations.In;
import org.jboss.seam.annotations.Logger;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.log.Log;
import org.molplexdrug.DAO.Experimental_ResultDAO;
import org.molplexdrug.EntityBean.Assay;
import org.molplexdrug.EntityBean.Experimental_Result;
import org.richfaces.model.Filter;


/**
 * @author  Jallilah Jeffri
 *
 */
@Stateless
@Name ("experimentalResultAction")
public class Eksperimental_ResultAction implements Experimental_ResultDAO {

	@In(create = false,required=false)
	private Experimental_Result experimental_result;

  
	@PersistenceContext
	   private EntityManager em;
	   
	   @Logger
	   private static Log log;
	   
	public int expAssayId;
	public List<Experimental_Result> experimentalResultList;
	private String currentStateFilterValue;
	
	public String getCurrentStateFilterValue() {
		return currentStateFilterValue;
	}

	public void setCurrentStateFilterValue(String currentStateFilterValue) {
		this.currentStateFilterValue = currentStateFilterValue;
	}
	
	
	/**
	 * @return the expAssayId
	 */
	public int getExpAssayId() {
		return expAssayId;
	}

	/**
	 * @param expAssayId the expAssayId to set
	 */
	public void setExpAssayId(int expAssayId) {
		this.expAssayId = expAssayId;
	}

	/**
	 * @return the experimentalResultList
	 */
	public List<Experimental_Result> getExperimentalResultList() {
		return experimentalResultList;
	}

	/**
	 * @param experimentalResultList the experimentalResultList to set
	 */
	public void setExperimentalResultList(
			List<Experimental_Result> experimentalResultList) {
		this.experimentalResultList = experimentalResultList;
	}

		
	/* (non-Javadoc)
	 * @see org.molplexdrug.DAO.Experimental_ResultDAO#addExperimentalResult()
	 */
	public String addExperimentalResult() {
		// TODO Auto-generated method stub
		if(experimental_result!=null)
			em.merge(experimental_result);
			return "/addExpResult.xhtml";
	}

		
	/* (non-Javadoc)
	 * @see org.molplexdrug.DAO.Experimental_ResultDAO#getAllExperimentalResult()
	 */
	public List<Experimental_Result> getAllExperimentalResult() {
		CriteriaBuilder qb = em.getCriteriaBuilder();
		 CriteriaQuery<Experimental_Result> query = qb.createQuery(Experimental_Result.class);
		 Root<Experimental_Result> rootEx = query.from(Experimental_Result.class);
		 query.select(rootEx);
		List<Experimental_Result> list = em.createQuery(query).getResultList();
		return list;
	}

		
	
	/* (non-Javadoc)
	 * @see org.molplexdrug.DAO.Experimental_ResultDAO#getAllAssay()
	 */
	public List<Assay> getAllAssay() {
		
		CriteriaBuilder qb = em.getCriteriaBuilder();
		 CriteriaQuery<Assay> query = qb.createQuery(Assay.class);
		 Root<Assay> root = query.from(Assay.class);
		 query.select(root);
		List<Assay> list = em.createQuery(query).getResultList();
		return list;
	}
	
		
	/* (non-Javadoc)
	 * @see org.molplexdrug.DAO.Experimental_ResultDAO#searchStructureDetail()
	 */
	public List<Experimental_Result> searchStructureDetail() {
     int eid=experimental_result.getAssay_id();
		 
		  Query query = em.createQuery("SELECT e FROM Experimental_Result e WHERE e.assay_id=:eid");
	      // query.setParameter("expAssayId",new Integer(expAssayId));
		   query.setParameter("eid",new Integer(eid));
	       experimentalResultList=(ArrayList<Experimental_Result>)query.getResultList();
	       return  experimentalResultList;
	}

		
	/* (non-Javadoc)
	 * @see org.molplexdrug.DAO.Experimental_ResultDAO#getAssayId(javax.faces.event.AjaxBehaviorEvent)
	 */
	public String getAssayId(AjaxBehaviorEvent event){
		 Object obj=event.getComponent().getAttributes().get("value");
        if(null!=obj){
       	
        	experimental_result.setAssay_id((Integer)obj);
        }
     //return experimental_result.getAssay_id();
        return "/experimentalResult.xhtml";
	}
	
	 public Filter<?> getFilterAssay() {
	        return new Filter<Assay>() {
	            public boolean accept(Assay a) {
	                String asname = getCurrentStateFilterValue();
	                if (asname == null || asname.length() == 0 || asname.equals(a.getAssay_name())) {
	                    return true;
	                }
	                return false;
	            }
	        };
	    }
	 public void resetFilter() {
	       
	        setCurrentStateFilterValue("");
	    }
	
}
