package org.molplexdrug.Action;


import java.util.List;

import javax.ejb.Stateless;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.jboss.seam.annotations.In;
import org.jboss.seam.annotations.Logger;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.faces.FacesMessages;
import org.jboss.seam.log.Log;
import org.molplexdrug.DAO.CompoundPropertiesDAO;
import org.molplexdrug.EntityBean.Compound_Properties;
import org.molplexdrug.EntityBean.Messages;

/**
 * @author Gaithri Balakrishnan
 *
 */
@Stateless 

@Name("addproperties")
public class CompoundPropertiesAction implements CompoundPropertiesDAO{

	 @In(create = true, required = false)
	private Compound_Properties compound_properties;
	
		@In(create = true, required = false)
		private Messages messages;
	   
	   @PersistenceContext
	   private EntityManager em;
	   
	   @Logger
	   private static Log log;
	   
	 	 	   
	    //Get list of compound_properties
	   
    	/* (non-Javadoc)
    	 * @see org.molplexdrug.DAO.CompoundPropertiesDAO#getAllCompoundProperties()
    	 */
    	public List<Compound_Properties> getAllCompoundProperties() {
    		 CriteriaBuilder qb = em.getCriteriaBuilder();
    		 CriteriaQuery<Compound_Properties> query = qb.createQuery(Compound_Properties.class);
    		 Root<Compound_Properties> rootCompundProperties = query.from(Compound_Properties.class);
    		 query.select(rootCompundProperties);
    		 List<Compound_Properties> lstCompoundPropety = em.createQuery(query).getResultList();
    		return lstCompoundPropety;
    	}

    	
    	
    	
          
	//Add new compound properties method
    	
	/* (non-Javadoc)
	 * @see org.molplexdrug.DAO.CompoundPropertiesDAO#addProperties()
	 */
	public String addProperties(){
				  
		  try {
				em.merge(compound_properties);
				 messages =em.find(Messages.class, messages.getMsg_id());
				    if(messages!=null)
				    {
				        return null;
				    }
				 messages = new Messages("Added new properties "+ compound_properties.getCompound_property_name());
				 em.persist(messages);
				 log.info("Added new properties #{compound_properties.compound_property_name}");
				 FacesContext.getCurrentInstance().addMessage(null,
			                new FacesMessage(FacesMessage.SEVERITY_INFO, "Successfully added new properties " + compound_properties.getCompound_property_name(), "Successfully added new properties "));

				
			} catch (Exception e) {
				// TODO Auto-generated catch block
			
				FacesContext.getCurrentInstance().addMessage(null,
			               new FacesMessage(FacesMessage.SEVERITY_ERROR, "Compound properties "+compound_properties.getCompound_property_name()+ " already exists", "Compound properties already exists"));
					log.info("properties name #{compound_properties.compound_property_name} already exists");
			}
			 finally{
				 compound_properties.clear();
			 }
		       
		        
		         return null;
		
		
		    	  
	}
	
	
	


	


	
}
