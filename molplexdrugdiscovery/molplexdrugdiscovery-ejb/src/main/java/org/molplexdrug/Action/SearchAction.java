package org.molplexdrug.Action;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.jboss.seam.annotations.In;
import org.jboss.seam.annotations.Logger;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.log.Log;
import org.molplexdrug.EntityBean.Compound_Properties;
import org.molplexdrug.EntityBean.Groups;
import org.molplexdrug.EntityBean.Portfolio;
import org.richfaces.model.Filter;

@Stateless 

@Name("searchAction")
public class SearchAction {
	
	@In(create = false, required = false)
	private Groups groups;
	
	@In(create = true, required = false)
	private Portfolio portfolio;
	
	@In(create = true, required = false)
	private Compound_Properties compound_properties;

	@PersistenceContext
	private EntityManager em;

	@Logger
	private static Log log;


	
	   private String currentNameFilterValue;
	   private String portfolioFilterValue;
	   private String cpFilterValue;
	   
	   public List<Portfolio> getAllPortfolio(){
			CriteriaBuilder qb = em.getCriteriaBuilder();   		
	   		 CriteriaQuery<Portfolio> query = qb.createQuery(Portfolio.class);
	   		 Root<Portfolio> rootPortfolio = query.from(Portfolio.class);
	   		 query.select(rootPortfolio);
	   		 List<Portfolio> list = em.createQuery(query).getResultList();
	   		return list;
			
		}
	   
	public List<Groups> getAllgroups() {
		// TODO Auto-generated method stub
		CriteriaBuilder qb = em.getCriteriaBuilder();
		CriteriaQuery<Groups> query = qb.createQuery(Groups.class);
		Root<Groups> rootgrp = query.from(Groups.class);
		query.select(rootgrp);
		List<Groups> list = em.createQuery(query).getResultList();
		return list;
	}
	
	public List<Compound_Properties> getAllCompoundProperties() {
		 CriteriaBuilder qb = em.getCriteriaBuilder();
		 CriteriaQuery<Compound_Properties> query = qb.createQuery(Compound_Properties.class);
		 Root<Compound_Properties> rootCompundProperties = query.from(Compound_Properties.class);
		 query.select(rootCompundProperties);
		 List<Compound_Properties> lstCompoundPropety = em.createQuery(query).getResultList();
		return lstCompoundPropety;
	}

	
	
	public Filter<?> getFilterGroup() {
        return new Filter<Groups>() {
            public boolean accept(Groups t) {
                String gname = getCurrentNameFilterValue();
                if (gname == null || gname.length() == 0 || gname.equals(t.getGroup_name())) {
                    return true;
                }
                return false;
            }
        };
    }
	  
	public Filter<?> getFilterCompoundProperties() {
        return new Filter<Compound_Properties>() {
            public boolean accept(Compound_Properties cp) {
                String cpname = getCurrentNameFilterValue();
                if (cpname == null || cpname.length() == 0 || cpname.equals(cp.getCompound_property_name())) {
                    return true;
                }
                return false;
            }
        };
    }
	
	public Filter<?> getFilterPortfolio() {
        return new Filter<Portfolio>() {
            public boolean accept(Portfolio p) {
                String pname = getCurrentNameFilterValue();
                if (pname == null || pname.length() == 0 || pname.equals(p.getPortfolio_name())) {
                    return true;
                }
                return false;
            }
        };
    }


	public String getCurrentNameFilterValue() {
		return currentNameFilterValue;
	}

	public void setCurrentNameFilterValue(String currentNameFilterValue) {
		this.currentNameFilterValue = currentNameFilterValue;
	}

	public String getPortfolioFilterValue() {
		return portfolioFilterValue;
	}

	public void setPortfolioFilterValue(String portfolioFilterValue) {
		this.portfolioFilterValue = portfolioFilterValue;
	}

	public String getCpFilterValue() {
		return cpFilterValue;
	}

	public void setCpFilterValue(String cpFilterValue) {
		this.cpFilterValue = cpFilterValue;
	}
	
	
	
}
