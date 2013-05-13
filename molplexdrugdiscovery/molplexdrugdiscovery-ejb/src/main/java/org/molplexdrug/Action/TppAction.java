package org.molplexdrug.Action;


import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

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

import org.jboss.seam.annotations.In;
import org.jboss.seam.annotations.Logger;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.log.Log;
import org.molplexdrug.DAO.TppInterface;
import org.molplexdrug.EntityBean.ApprovedTherapy;
import org.molplexdrug.EntityBean.Company;
import org.molplexdrug.EntityBean.Messages;
import org.molplexdrug.EntityBean.Project;
import org.molplexdrug.EntityBean.Side_Effect_Tolerance;
import org.molplexdrug.EntityBean.TPP;
import org.molplexdrug.EntityBean.TabBean;
import org.molplexdrug.EntityBean.Therapy_Administration;
import org.molplexdrug.EntityBean.Tpp_Goal;
import org.molplexdrug.EntityBean.World_Region;
import org.molplexdrug.EntityBean.World_Regions;
@Stateless
@Name ("tppAction")
public class TppAction implements TppInterface {

	
	@In(create = false,required=false)
	private TPP tpp;
	
	@In(required=false)
	private Tpp_Goal tpp_goal;

	@In(create = false,required=false)
	private ApprovedTherapy approved_therapy;
	
	@In(create = false,required=false)
	private World_Regions world_regions;
	
	@In(create = false,required=false)
	private World_Region world_region;
	
	@In(create = false,required=false)
	private Therapy_Administration therapy_administration;
	
	@In(create = false,required=false)
	private Company company;
  
	@In(create = false,required=false)
	private Side_Effect_Tolerance side_effect_tolerance;
	
	@In(create = false,required=false)
	private Project project;
	
	@In(required=false)
	private TabBean tabBean;

	@In(create = true, required = false)
	private Messages messages;
	
	@PersistenceContext
	   private EntityManager em;
	
	@PersistenceContext
	   private EntityManager entity;
	   
	
	public TppAction() {
		 TppDetail tppDetail=new TppDetail();
		 
		 listOfObjects.add(tppDetail);
		
	}
	private static List<TppDetail> listOfObjects=new ArrayList<TppDetail>();
	public static List<TppDetail> listOfApprovedTherapy=new ArrayList<TppDetail>();
	   public List<TppDetail> getListOfApprovedTherapy() {
		return listOfApprovedTherapy;
	}


	@Logger
	   private static Log log;
	   
	   private List<SelectItem> selectItems; // +getter
	   

		public List<SelectItem> getSelectItems() {
				return selectItems;
			}

			public void setSelectItems(List<SelectItem> selectItems) {
				this.selectItems = selectItems;
			}
            //multiple selection list for world regions id
			public List<Integer> world_regionsList=new ArrayList<Integer>();

			

			public List<Integer> getWorld_regionsList() {
			return world_regionsList;
		}

		public List<Integer> wrList;
		
	

	public List<Integer> getWrList() {
			return wrList;
		}

		public void setWrList(List<Integer> wrList) {
			this.wrList = wrList;
		}

	public String addTpp() {
	 String message="";
	
	 try{
	

	 if(tpp!=null){
		 System.out.println("iiiiinside add Tpp not null------");
		 
		em.merge(tpp);
		 //FacesContext.getCurrentInstance().addMessage(null, new FacesMessage("Data successfully saved!"));
		 success=false;
		
		 
		 
		 message=null; log.info("Added new tpp #{tpp.tpp_name}");
		 messages = em.find(Messages.class, messages.getMsg_id());
			if (messages != null) {
				return null;
			}
			messages = new Messages("Added new tpp "
					+ tpp.getTpp_name());
			em.merge(messages);
		 FacesContext.getCurrentInstance().addMessage(null,
	                new FacesMessage(FacesMessage.SEVERITY_INFO, "Successfully created Tpp "+tpp.getTpp_name(), "Successfully created Tpp "+ tpp.getTpp_name()));
		
	 }
	}catch(Exception e){
		e.printStackTrace();
	//	FacesContext.getCurrentInstance().addMessage(null, new FacesMessage("Record already Exist"));
	}
		 //tpp.clear();
	 //tabBean.setSelectedTab("tpp");
			return message;
			
			
	}
	
	public String save() {
		String message="";
		try{
			if(tpp_goal!=null){
				System.out.println("-------ssssindie -----save------tppgoal not null------");
				
				if(tpp.getTpp_Goal()!=null){
					
					therapy_administration=em.find(Therapy_Administration.class, therapy_administration.getThearapy_administration_id());
					therapy_administration.getTpp_Goal().add(tpp_goal);
					tpp_goal.setTherapy_administration(therapy_administration);
					System.out.println("------------In next tpp goal set th admin not null"+tpp_goal.getTherapy_administration());
					
					approved_therapy=em.find(ApprovedTherapy.class, approved_therapy.getApproved_therapy_id());
					approved_therapy.getTpp_Goal().add(tpp_goal);
					tpp_goal.setApproved_therapy(approved_therapy);
					System.out.println("------------In next tpp goal set app therapy not null"+tpp_goal.getApproved_therapy());
					
					company=em.find(Company.class, company.getCompany_id());
					company.getTpp_Goal().add(tpp_goal);
					tpp_goal.setCompany(company);
					System.out.println("------------In next tpp goal set company not null"+tpp_goal.getCompany());
					
					/*world_regions=em.find(World_Regions.class, world_regions.getWorld_regions_id());
					world_regions.getTpp_Goal().add(tpp_goal);
					tpp_goal.setWorld_regions(world_regions);*/
					
					side_effect_tolerance=em.find(Side_Effect_Tolerance.class, side_effect_tolerance.getSide_effect_tolerance_id());
					side_effect_tolerance.getTpp_Goal().add(tpp_goal);
					tpp_goal.setSide_effect_tolerance(side_effect_tolerance);
					System.out.println("------------In next tpp goal set side effect not null"+tpp_goal.getSide_effect_tolerance());
					
					if(world_regionsList != null){
						System.out.println("wrList not null" + world_regionsList.size());
					 for (int i = 0; i <world_regionsList.size(); i++) {
		        			System.out.println("-----------INSIDE LOOP-----------"+world_regionsList.get(i));
		        			Object obj =world_regionsList.get(i);
		        			String objId=(String) obj.toString();
		        			//System.out.println( "objId: "+objId.toString());
		        			Integer wrId = Integer.parseInt(objId);
		        		//	System.out.println("wrId: "+wrId);
		        			 int intValue = wrId.intValue();
		        			 //world_regions.setWorld_regions_id(intValue);
		        		     world_regions=em.find(World_Regions.class,intValue);
		        			
		        			world_regions.getTpp_Goal().add(tpp_goal);
		        			tpp_goal.setWorld_regions(world_regions);
		        			//System.out.println(world_regions.getTpp_Goal().toString());
						
							//tpp.getTpp_Goal().add(tpp_goal);
							//tpp_goal.setTpp(tpp);
							//System.out.println("Tpp goal world regions :"+tpp_goal.getWorld_regions());
							//em.merge(tpp_goal);
		        		}
					}
						tpp.getTpp_Goal().add(tpp_goal);
						
						
						
						tpp_goal.setTpp(tpp);
					
				
					
				}
			}
			
		}catch(NullPointerException n){
			n.printStackTrace();
			System.out.println("null pointer exception");
		}
		catch(Exception e){
			System.out.println("other exception");
		}
		message=addTpp();
		
		
			return message;
		}
	


	public List<ApprovedTherapy> getAllAppTherapy() {
		CriteriaBuilder qb = em.getCriteriaBuilder();
		 CriteriaQuery<ApprovedTherapy> query = qb.createQuery(ApprovedTherapy.class);
		 Root<ApprovedTherapy> root = query.from(ApprovedTherapy.class);
		 query.select(root);
		List<ApprovedTherapy> list = em.createQuery(query).getResultList();
		return list;
	}
	
	public List<Side_Effect_Tolerance> getAllTolerance() {
		CriteriaBuilder qb = em.getCriteriaBuilder();
		 CriteriaQuery<Side_Effect_Tolerance> query = qb.createQuery(Side_Effect_Tolerance.class);
		 Root<Side_Effect_Tolerance> root = query.from(Side_Effect_Tolerance.class);
		 query.select(root);
		List<Side_Effect_Tolerance> list = em.createQuery(query).getResultList();
		return list;
	}
	public List<Therapy_Administration> getAllTherapy_Adminstration() {
		CriteriaBuilder qb = em.getCriteriaBuilder();
		 CriteriaQuery<Therapy_Administration> query = qb.createQuery(Therapy_Administration.class);
		 Root<Therapy_Administration> root = query.from(Therapy_Administration.class);
		 query.select(root);
		List<Therapy_Administration> list = em.createQuery(query).getResultList();
		return list;
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
	 
	 public List<Company> getAllCompany() {
			CriteriaBuilder qb = em.getCriteriaBuilder();
			 CriteriaQuery<Company> query = qb.createQuery(Company.class);
			 Root<Company> root = query.from(Company.class);
			 query.select(root);
			List<Company> list = em.createQuery(query).getResultList();
			return list;
		}
	 
		public Integer getCompanyId(AjaxBehaviorEvent ev) {
			 Object obj=ev.getComponent().getAttributes().get("value");
			    if(null!=obj){
			    	company.setCompany_id((Integer)obj);
	                 
			    }
			    return company.getCompany_id();
		}
		

	public Integer getTppWorldRegionsId(AjaxBehaviorEvent ev) {
		System.out.println("---------Inside Tpp world---------");
		  Object obj=ev.getComponent().getAttributes().get("value");
		    if(null!=obj){
		    	world_regions.setWorld_regions_id((Integer)obj);
                      
		    }
		    return world_regions.getWorld_regions_id();
	}

	public Integer getTppSideEffectToleranceId(AjaxBehaviorEvent ev) {
		 Object obj=ev.getComponent().getAttributes().get("value");
		    if(null!=obj){
		    	side_effect_tolerance.setSide_effect_tolerance_id((Integer)obj);
                   
		    }
		    return side_effect_tolerance.getSide_effect_tolerance_id();
	}

	public Integer getTppTherapyAdminId(AjaxBehaviorEvent ev) {
		 Object obj=ev.getComponent().getAttributes().get("value");
		    if(null!=obj){
		    	therapy_administration.setThearapy_administration_id((Integer)obj);
                   
		    }
		    return therapy_administration.getThearapy_administration_id();
	}

	public Integer getTppApprovedTherapyId(AjaxBehaviorEvent ev) {
		 Object obj=ev.getComponent().getAttributes().get("value");
		    if(null!=obj){
		    	approved_therapy.setApproved_therapy_id((Integer)obj);
                   company.setCompany_id(new Integer(1));
                  
		    }
		    return approved_therapy.getApproved_therapy_id();
	}
	
	public List<TppDetail> getTppOnly() {
		 TppDetail tppDetail=null;
		   List<TppDetail> lstTppDetail=new ArrayList<TppDetail>(); 
		   String query="Select DISTINCT tg.tpp.tpp_name,tg.tpp.global_incidence from Tpp_Goal tg";
					Query q = em.createQuery(query);
					List<Object []> lstLogicalOperator = q.getResultList();
					for (Object[] objects : lstLogicalOperator) {
						tppDetail=new TppDetail();
						tppDetail.setTppName((String)objects[0]);
						lstTppDetail.add(tppDetail);
					}
	        return lstTppDetail;
	}

	public List<TppDetail> getAllTpp(String tppName) {
		 TppDetail tppDetail=null;
		
		// System.out.println("-----------Tpp name------"+tppName);
		   List<TppDetail> lstTppDetail=new ArrayList<TppDetail>(); 
		   String query="Select tg.tpp.tpp_name,tg.approved_therapy.approved_therapy_name," +
		   		" tg.world_regions.world_region.world_region_name,tg.company.company_name," +
		   		" tg.side_effect_tolerance.side_effect_tolerance_name,tg.therapy_administration.therapy_administration_name," +
		   		"  tg.tpp.target_condition,tg.tpp.global_incidence,tg.tpp.global_prevalence,tg.tpp.desired_effect," +
		   		"   tg.tpp.market_target_description from Tpp_Goal tg  where tg.tpp.tpp_name=:tppName";
					Query q = em.createQuery(query);
					 q.setParameter("tppName", tppName);
					List<Object []> lstLogicalOperator = q.getResultList();
					for (Object[] objects : lstLogicalOperator) {
						tppDetail=new TppDetail();
						tppDetail.setTppName((String)objects[0]);
						tppDetail.setAppName((String)objects[1]);
						tppDetail.setWorldRegionName((String)objects[2]);
						tppDetail.setCompanyName((String)objects[3]);
						tppDetail.setSideEffectName((String)objects[4]);
						tppDetail.setTherapyAdminName((String)objects[5]);
						tppDetail.setTargetCondition((String)objects[6]);
						tppDetail.setGlobalIncidence((Integer)objects[7]);
						tppDetail.setGlobalPrevalence((Integer)objects[8]);
						tppDetail.setDesiredEffect((String)objects[9]);
						tppDetail.setMarketTargetDescription((String)objects[10]);
						
						lstTppDetail.add(tppDetail);
					}
					
	        return lstTppDetail;
	}
	 


	
	public void add() {
		 
		 TppDetail tppDetail=new TppDetail();
		 tabBean.setSelectedTab("tpp");
		 listOfObjects.add(tppDetail);
		 tppDetail.setApproved_therapy_id(approved_therapy.getApproved_therapy_id());
		 tppDetail.setWorld_regionsList(world_regionsList);
		 System.out.println("------world_regionsListsize----"+world_regionsList.size());
		 listOfApprovedTherapy.add(tppDetail);
		 success=true;
		 System.out.println("------ApprovedTherapy -------"+approved_therapy.getApproved_therapy_id());
	}


	public List<TppDetail> getListOfObjects() {
		return listOfObjects;
	}

	public void remove() {
		 
		tabBean.setSelectedTab("tpp");
		listOfApprovedTherapy.remove(listOfApprovedTherapy.size()-1);
		 listOfObjects.remove(listOfObjects.size()-1);
		 System.out.println("---------size of the object------"+listOfObjects.size());
	}

	/*method adding tpp and tpp_goal*/
	public String update(){
		String message="";
	
		try{
			TppDetail tppDetail=new TppDetail();
			 tppDetail.setApproved_therapy_id(approved_therapy.getApproved_therapy_id());
			 tppDetail.setWorld_regionsList(world_regionsList);
			 System.out.println("------world_regionsList  in size---"+world_regionsList.size());
			 listOfApprovedTherapy.add(tppDetail);	
			 
			
		if(tpp!=null){
			System.out.println("-------ssssindie -----save------tppgoal not null------");
			if(tpp.getTpp_Goal()!=null){
				 for(int tppdetail1=0;tppdetail1<listOfApprovedTherapy.size();tppdetail1++)
				 {
					 TppDetail tp=listOfApprovedTherapy.get(tppdetail1);
					 System.out.println("-----toString-------"+tp.toString());
				 List<Integer> lstWorldregions=tp.getWorld_regionsList();	 
			System.out.println("------- listOfApprovedTherapy-----"+ listOfApprovedTherapy.size()+"------"+tp.getApproved_therapy_id());
		
		 for (int i = 0; i <lstWorldregions.size(); i++) {
			 System.out.println("-------world_regionsList----------"+lstWorldregions.size());
			 tpp_goal = new Tpp_Goal();
				
			
 			System.out.println(lstWorldregions.get(i));
 			Object obj =lstWorldregions.get(i);
 			String objId=(String) obj.toString();
 		//	System.out.println( "------objId: "+objId.toString());
 			Integer wrId = Integer.parseInt(objId);
 		//	System.out.println("---------wrId: "+wrId);
 			 int intValue = wrId.intValue();
 			 
 		     world_regions=em.find(World_Regions.class,intValue);
 		    world_regions.getTpp_Goal().add(tpp_goal);
 			tpp_goal.setWorld_regions(world_regions);
 			
 			System.out.println("--------------Tpp goal World Region list: "+tpp_goal.getWorld_regions().toString());
 			
 			approved_therapy=em.find(ApprovedTherapy.class, tp.getApproved_therapy_id());
			approved_therapy.getTpp_Goal().add(tpp_goal);
			tpp_goal.setApproved_therapy(approved_therapy);
 			
 			
 			therapy_administration=em.find(Therapy_Administration.class, therapy_administration.getThearapy_administration_id());
			therapy_administration.getTpp_Goal().add(tpp_goal);
			tpp_goal.setTherapy_administration(therapy_administration);
				
			company=em.find(Company.class, company.getCompany_id());
			company.getTpp_Goal().add(tpp_goal);
			tpp_goal.setCompany(company);
		
		
			
			side_effect_tolerance=em.find(Side_Effect_Tolerance.class, side_effect_tolerance.getSide_effect_tolerance_id());
			side_effect_tolerance.getTpp_Goal().add(tpp_goal);
			tpp_goal.setSide_effect_tolerance(side_effect_tolerance);
			
			  
				tpp.getTpp_Goal().add(tpp_goal);
			
				 tpp_goal.setTpp(tpp);
				System.out.println("---------------------tpp goal :"+tpp_goal.toString());
 		}
		}
		
		
			}
		}
		
	}catch(NullPointerException n){
		System.out.println("null pointer exception");
	}
	catch(Exception e){
		System.out.println("other exception");
	}
		message=addTpp();
		tpp.clear();
		tabBean.setSelectedTab("tpp");
		return message;
	}

	public void showAddMessage(){
		 FacesContext.getCurrentInstance().addMessage(null, new FacesMessage("Done!"));
	}
	public boolean success=false;
	public boolean isSuccess() {
	    return success;
	}

	public void setWorld_regionsList(List<Integer> world_regionsList) {
		this.world_regionsList=world_regionsList;
		
	}

}
