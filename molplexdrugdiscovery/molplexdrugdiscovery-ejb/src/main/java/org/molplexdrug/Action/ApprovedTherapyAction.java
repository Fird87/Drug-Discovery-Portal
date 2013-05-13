package org.molplexdrug.Action;


import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.ejb.Stateless;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.faces.event.AjaxBehaviorEvent;
import javax.faces.model.SelectItem;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.jboss.seam.ScopeType;
import org.jboss.seam.annotations.In;
import org.jboss.seam.annotations.Logger;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Scope;
import org.jboss.seam.faces.FacesMessages;
import org.jboss.seam.log.Log;
import org.molplexdrug.DAO.IApprovedTherapy;
import org.molplexdrug.EntityBean.ApprovedTherapy;
import org.molplexdrug.EntityBean.Company;
import org.molplexdrug.EntityBean.Messages;
import org.molplexdrug.EntityBean.World_Region;
import org.molplexdrug.EntityBean.World_Regions;
import org.richfaces.model.Filter;

@Stateless
@Scope(ScopeType.SESSION)
@Name ("appAction")
public class ApprovedTherapyAction implements IApprovedTherapy {

	
	@In(create = true,required=false)
	private ApprovedTherapy approved_therapy;
	
	@In(create = true,required=false)
	private Company company;
	
	@In(create = true,required=false)
	private World_Regions world_regions;
	
	@In(create = true,required=false)
	private World_Region world_region ;
	
    @In(create = true, required = false)
   	private Messages messages;
	
	@PersistenceContext
	   private EntityManager em;
	

	   
	   @Logger
	   private static Log log;
	   
		public String currentFilterValue;
		
		

		
		public String getCurrentFilterValue() {
					return currentFilterValue;
				}

				public void setCurrentFilterValue(String currentFilterValue) {
					this.currentFilterValue = currentFilterValue;
				}
				
	   private List<SelectItem> selectItems; // +getter
	   

		public List<SelectItem> getSelectItems() {
				return selectItems;
			}

			public void setSelectItems(List<SelectItem> selectItems) {
				this.selectItems = selectItems;
			}


	
	public String save() {
		String message="";
	
		if(approved_therapy!=null){
			try{
	System.out.println("---------tpp tostring -:"+approved_therapy.toString());
	company=em.find(Company.class, company.getCompany_id());
	company.getAprTherapy().add(approved_therapy);
	approved_therapy.setCompany(company);
	
	world_regions=em.find(World_Regions.class, world_regions.getWorld_regions_id());
	world_regions.getAprTherapy().add(approved_therapy);
	approved_therapy.setWorld_regions(world_regions);
	
	em.merge(approved_therapy);
	
	messages = em.find(Messages.class, messages.getMsg_id());
	if (messages != null) {
		return null;
	}
	messages = new Messages("Added new Approve Therapy "+ approved_therapy.getApproved_therapy_name());
	em.persist(messages);
	
	FacesContext.getCurrentInstance().addMessage(
			null,
			new FacesMessage(FacesMessage.SEVERITY_INFO,
					"Successfull added new Approve Therapy "
							+ approved_therapy.getApproved_therapy_name(),
					"Successfull added new Approve Therapy "
							+ approved_therapy.getApproved_therapy_name()));
			}
			catch(Exception e){
				FacesContext.getCurrentInstance().addMessage(
						null,
						new FacesMessage(FacesMessage.SEVERITY_ERROR,
								"Approve Therapy name "+ approved_therapy.getApproved_therapy_name()+" already exists",
								"Approve Therapy name "+ approved_therapy.getApproved_therapy_name()+" already exists"));
			}
			finally{
				approved_therapy.clear();
			}
		}
		
	
	return message;
	
	
	}

	public List<Company> getAllCompany() {
		CriteriaBuilder qb = em.getCriteriaBuilder();
		 CriteriaQuery<Company> query = qb.createQuery(Company.class);
		 Root<Company> rootCompundProperties = query.from(Company.class);
		 query.select(rootCompundProperties);
		 List<Company> lstCompany= em.createQuery(query).getResultList();
		return lstCompany;
	}

	public Integer getAppCompanyId(AjaxBehaviorEvent event) {
		 Object obj=event.getComponent().getAttributes().get("value");
		    if(null!=obj){
                   company.setCompany_id((Integer)obj);
		    }
		    System.out.println("------approved_therapy.getCompany_id()----"+company.getCompany_id());
		    return company.getCompany_id();
	}

	 public List<WorldRegion> getAllWorldRegions() {
		   WorldRegion worldRegion=null;
		   List<WorldRegion> lstWorldRegions=new ArrayList<WorldRegion>(); 
		   String query="Select ws.world_regions_id,ws.world_region.world_region_name from World_Regions ws";
					Query q = em.createQuery(query);
					List<Object []> lstLogicalOperator = q.getResultList();
					for (Object[] objects : lstLogicalOperator) {
						worldRegion=new WorldRegion();
						worldRegion.setWorldRegionsId((Integer)objects[0]);
						worldRegion.setWorldRegionsName((String)objects[1]);
					lstWorldRegions.add(worldRegion);
					}
	        return lstWorldRegions;
	   }

	public Integer getWorldregionsId(AjaxBehaviorEvent event) {
		 Object obj=event.getComponent().getAttributes().get("value");
		    if(null!=obj){
               world_regions.setWorld_regions_id((Integer)obj);
		    }
		    System.out.println("------getWorldregionsId----"+world_regions.getWorld_regions_id());
		    return world_regions.getWorld_regions_id();
	}

	public List<Approved_Therapy> getAllApprovedTherapy() {
		Approved_Therapy approved_Therapy=null;
		 List<Approved_Therapy> lstApptherapy=new ArrayList<Approved_Therapy>(); 
		   String query="Select ap.approved_therapy_name,ap.world_regions.world_region.world_region_name,ap.synonyms,ap.target_condition,ap.global_incidence,ap.global_prevalence, " +
		   		"  ap.global_sales,ap.economic_factor,ap.company.company_name from ApprovedTherapy ap";
					Query q = em.createQuery(query);
					List<Object []> lstLogicalOperator = q.getResultList();
					for (Object[] objects : lstLogicalOperator) {
						approved_Therapy=new Approved_Therapy();
						approved_Therapy.setApprovedTherapy((String)objects[0]);
						approved_Therapy.setWolrdRegionName((String)objects[1]);
						approved_Therapy.setSynonym((String)objects[2]);
						approved_Therapy.setTargetCondition((String)objects[3]);
						approved_Therapy.setGlobalIncidence((Integer)objects[4]);
						approved_Therapy.setGlobalPrevalance((Integer)objects[5]);
						approved_Therapy.setGlobalSales((Integer)objects[6]);
						approved_Therapy.setEconomicFactor((Double)objects[7]);
						approved_Therapy.setCompany((String)objects[8]);
						lstApptherapy.add(approved_Therapy);
					}
					
				
	        return lstApptherapy;
	}

	 public Filter<?> getFilterApproved_Therapy() {
	        return new Filter<Approved_Therapy>() {
	            public boolean accept(Approved_Therapy a) {
	                String asname = getCurrentFilterValue();
	                if (asname == null || asname.length() == 0 || asname.equals(a.getApprovedTherapy())) {
	                    return true;
	                }
	                return false;
	            }
	        };
	    }

}
