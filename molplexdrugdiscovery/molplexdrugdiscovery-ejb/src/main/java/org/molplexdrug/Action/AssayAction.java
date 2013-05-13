package org.molplexdrug.Action;

import java.awt.event.ActionEvent;
import java.util.List;

import javax.ejb.Stateless;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.faces.event.AjaxBehaviorEvent;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.jboss.seam.annotations.In;
import org.jboss.seam.annotations.Logger;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.web.RequestParameter;
import org.jboss.seam.faces.FacesMessages;
import org.jboss.seam.log.Log;
import org.molplexdrug.DAO.AssayDAO;
import org.molplexdrug.EntityBean.Assay;
import org.molplexdrug.EntityBean.Compound_Properties;
import org.molplexdrug.EntityBean.Messages;
import org.molplexdrug.EntityBean.Targets;

/**
 * @author Jallilah Jeffri & Sajul Fitri
 * 
 */

@Stateless
@Name("assayAction")
public class AssayAction implements AssayDAO {

	@In(create = true, required = false)
	private Assay assay;
	
	@In(create = true, required = false)
	private Compound_Properties compound_properties;
	
	@In(create = true, required = false)
	private Messages messages;

	@PersistenceContext
	private EntityManager em;

	@Logger
	private static Log log;

	@RequestParameter("aId")
	private Integer aId;

	/**
	 * @return the aId
	 */
	public Integer getaId() {
		return aId;
	}

	/**
	 * @param aId
	 *            the aId to set
	 */
	public void setaId(Integer aId) {
		this.aId = aId;
	}

	public Assay selectedAssay;

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.molplexdrug.DAO.AssayDAO#addAssay()
	 */
	public String addAssay() {
		try {
			
			if(assay!=null){
				compound_properties=em.find(Compound_Properties.class, compound_properties.getCompound_property_id());
				compound_properties.getAssay().add(assay);
				assay.setCompound_properties(compound_properties);
			em.merge(assay);
			log.info("Added new assay name #{assay.assay_name}");
			
			 messages =em.find(Messages.class, messages.getMsg_id());
			    if(messages!=null)
			    {
			        return null;
			    }
			 messages = new Messages("Added new assay name "+ assay.getAssay_name());
			 em.persist(messages);
			FacesContext.getCurrentInstance().addMessage(
					null,
					new FacesMessage(FacesMessage.SEVERITY_INFO,
							"Successfully added assay ",
							"Successfully added assay "));
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			// FacesMessages.instance().add("Assay name #{assay.assay_name} already exists");
			// facesMessage = new
			// FacesMessage(FacesMessage.SEVERITY_ERROR,"Assay name #{assay.assay_name} already exists","Assay name #{assay.assay_name} already exists");
			FacesContext.getCurrentInstance().addMessage(
					null,
					new FacesMessage(FacesMessage.SEVERITY_ERROR,
							"Assay name "+ assay.getAssay_name()+" already exists",
							"Assay name already exists"));
			log.info("Assay name #{assay.assay_name} already exists");

		}
		
		finally{
			assay.clear();
		}
		

		return null;

	}

	/*
	 * 
	 * 
	 * 
	 * (non-Javadoc)
	 * 
	 * @see org.molplexdrug.DAO.AssayDAO#getCompoundId()
	 */
	public void getCompoundId() {
		// TODO Auto-generated method stub

	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.molplexdrug.DAO.AssayDAO#getAllAssay(java.awt.event.ActionEvent)
	 */
	public List<Assay> getAllAssay(ActionEvent event) {
		// TODO Auto-generated method stub
		CriteriaBuilder qb = em.getCriteriaBuilder();
		CriteriaQuery<Assay> query = qb.createQuery(Assay.class);
		Root<Assay> rootAssay = query.from(Assay.class);
		query.select(rootAssay);
		List<Assay> list = em.createQuery(query).getResultList();

		return list;
	}

	public List<Assay> compoundList;

	/**
	 * @return the compoundList
	 */
	public List<Assay> getCompoundList() {
		return compoundList;
	}

	/**
	 * @param compoundList
	 *            the compoundList to set
	 */
	public void setCompoundList(List<Assay> compoundList) {
		this.compoundList = compoundList;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.molplexdrug.DAO.AssayDAO#search()
	 */
	public List<Assay> search() {
		Assay a = new Assay();
		CriteriaBuilder qb = em.getCriteriaBuilder();
		CriteriaQuery<Assay> query = qb.createQuery(Assay.class);
		Root<Assay> roots = query.from(Assay.class);

		Integer id = new Integer(a.getAssay_id());
		String field = id.toString();
		Predicate condition = qb.equal(roots.get(field), aId);
		query.where(condition);
		// Integer cid = new Integer(a.getCompound_property_id());
		// String com = cid.toString();
		// query.select(roots);
		compoundList = em.createQuery(query).getResultList();

		return compoundList;

	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.molplexdrug.DAO.AssayDAO#getAllTarget()
	 */
	public List<Targets> getAllTarget() {
		// TODO Auto-generated method stub
		CriteriaBuilder qb = em.getCriteriaBuilder();
		CriteriaQuery<Targets> query = qb.createQuery(Targets.class);
		Root<Targets> rootOrg = query.from(Targets.class);
		query.select(rootOrg);
		List<Targets> list = em.createQuery(query).getResultList();
		return list;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.molplexdrug.DAO.AssayDAO#getAllAssay()
	 */
	public List<Assay> getAllAssay() {
		// TODO Auto-generated method stub
		CriteriaBuilder qb = em.getCriteriaBuilder();
		CriteriaQuery<Assay> query = qb.createQuery(Assay.class);
		Root<Assay> rootAssay = query.from(Assay.class);
		query.select(rootAssay);
		List<Assay> list = em.createQuery(query).getResultList();

		return list;
	}
	
	
	public Integer getCompoundPropertyId(AjaxBehaviorEvent event){
		  Object obj=event.getComponent().getAttributes().get("value");
		    if(null!=obj){
                     compound_properties.setCompound_property_id((Integer)obj);
		    }
		    return compound_properties.getCompound_property_id();
	}
	

}
