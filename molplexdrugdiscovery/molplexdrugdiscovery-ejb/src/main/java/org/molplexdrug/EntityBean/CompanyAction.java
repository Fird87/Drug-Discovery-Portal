package org.molplexdrug.EntityBean;



import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.jboss.seam.annotations.In;
import org.jboss.seam.annotations.Logger;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.log.Log;
import org.molplexdrug.DAO.CompanyInterface;

@Stateless
@Name("companyAction")
public class CompanyAction implements CompanyInterface{

	@In
	private Company company;
  
   
	   @PersistenceContext
	   private EntityManager em;
	   
	   @Logger
	   private static Log log;


	public String addCompany() {
	
		
		  em.merge(company);
	         return "/projects/approved.xhtml";
	}
}
