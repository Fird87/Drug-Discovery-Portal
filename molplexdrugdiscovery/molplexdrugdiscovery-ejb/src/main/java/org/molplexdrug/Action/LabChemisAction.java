package org.molplexdrug.Action;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.faces.application.FacesMessage;

import javax.faces.context.FacesContext;
import javax.faces.event.AjaxBehaviorEvent;



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
import org.jboss.seam.log.Log;
import org.molplexdrug.DAO.LabChemisDAO;
import org.molplexdrug.EntityBean.ApprovedTherapy;
import org.molplexdrug.EntityBean.Assay;
import org.molplexdrug.EntityBean.ChemistSynthesis;
import org.molplexdrug.EntityBean.Company;
import org.molplexdrug.EntityBean.Lab;
import org.molplexdrug.EntityBean.LabRequest;
import org.molplexdrug.EntityBean.Rtp;
import org.molplexdrug.EntityBean.Side_Effect_Tolerance;
import org.molplexdrug.EntityBean.Therapy_Administration;
import org.molplexdrug.EntityBean.Tpp_Goal;
import org.molplexdrug.EntityBean.World_Regions;

@Stateless
@Scope(ScopeType.SESSION)
@Name ("labChem")
public class LabChemisAction implements LabChemisDAO{
	
	@In(create = true , required =false)
	private ChemistSynthesis chemistSynthesis;
	
	@In(required=false)
	private LabRequest lab_request;
	
	@In(create = true , required =false)
	private Assay assay;
	
	@In(create = true ,required= false)
	private Rtp rtp;
	
	
	@PersistenceContext
	private EntityManager em;
	   
	@Logger
	private static Log log;
	
   
	private String select;
		
	
private List<Integer> selectedList=new ArrayList<Integer>(); 
  
public static List<Lab> listOfLabRequest=new ArrayList<Lab>();

	
	public List<Integer> getSelectedList() {
		return selectedList;
	}




	public void setSelectedList(List<Integer> selectedList) {
		this.selectedList = selectedList;
	}




	public String getSelect() {
		return select;
	}




	public void setSelect(String select) {
		this.select = select;
		if(select.equals("Yes")){
		chemistSynthesis.setManager_approval(select);
		}
		else
			chemistSynthesis.setManager_approval("No");
	}




	public List<LabRequest> getAllLabRequest() {
		CriteriaBuilder qb = em.getCriteriaBuilder();
		CriteriaQuery<LabRequest> query = qb.createQuery(LabRequest.class);
		Root<LabRequest> rootLabRequest = query.from(LabRequest.class);
		query.select(rootLabRequest);
		List<LabRequest> list = em.createQuery(query).getResultList();

		return list;
	}


	public List<Rtp> getAllRtp() {
		CriteriaBuilder qb = em.getCriteriaBuilder();
		 CriteriaQuery<Rtp> query = qb.createQuery(Rtp.class);
		 Root<Rtp> rootRtp = query.from(Rtp.class);
		 query.select(rootRtp);
		 List<Rtp> lstRtp = em.createQuery(query).getResultList();
		return lstRtp;
	}


	public String save() {
		
		String message="";
		try{
			
			System.out.println("Saving into lab request");
		  
				
			if(chemistSynthesis!=null){
				for(int i = 0; i <selectedList.size(); i++){	
				lab_request= new LabRequest();
				rtp.setRtp_id(238);
				Object obj =selectedList.get(i);
    			String objId=(String) obj.toString();
    			Integer asyId = Integer.parseInt(objId);
    			int intValue =asyId.intValue();
				System.out.println("assay.assay_id"+ intValue);
				assay=em.find(Assay.class, intValue);
				assay.getLab_request().add(lab_request);
				lab_request.setAssay(assay);
			
				rtp=em.find(Rtp.class, rtp.getRtp_id());
				rtp.getLab_request().add(lab_request);
				lab_request.setRtp(rtp);
								
			}
			
			lab_request.getChemistSynthesis().add(chemistSynthesis);
			chemistSynthesis.setLab_request(lab_request);
			}
			}catch(Exception e){
				
			}
		message=savelab();
	

		return message;
		
		
	}
	
	@SuppressWarnings("unchecked")
	public List<Lab> getAllAssay() {
		System.out.println("==========LabRequest getAllAssay Method()============");
		List<Lab> lstLabrequest=new ArrayList<Lab>();
		Lab labRequest=null;	
		
		String qry="select a.assay_name,a.assay_id,rg.compound_properties.compound_property_id,rg.rtp.rtp_id from RtpGoal rg,Assay a " +
			   	" where rg.rtp.rtp_id=238";
		
		Query q = em.createQuery(qry);
		
		
		List<Object[]> lstLogicalOperator = q.getResultList();
		for(Object[] objects: lstLogicalOperator){
			labRequest= new Lab();
			labRequest.setAssay_name((String)objects[0]);
			labRequest.setAssay_id((Integer)objects[1]);
			lstLabrequest.add(labRequest);
		}
		//	return lstLabrequest
		return lstLabrequest;		
	}
	public List<Assay> getAllAssay2() {
		System.out.println("==========LabRequest getAllAssay Method()============");
		List<Assay> lstLabrequest=new ArrayList<Assay>();
		
		String qry="select a.assay_name,a.assay_id,rg.compound_properties.compound_property_id,rg.rtp.rtp_id from RtpGoal rg,Assay a " +
			   	" where rg.rtp.rtp_id=238";
		
		Query q = em.createQuery(qry);
		
		
		 lstLabrequest = q.getResultList();
		
		//	return lstLabrequest
		return lstLabrequest;		
	}

	@SuppressWarnings("unchecked")
	public List<Lab> getAllAssay1() {
		System.out.println("==========LabRequest getAllAssay1 Method()============");
		List<Lab> lstLabrequest=new ArrayList<Lab>();
		Lab labRequest=null;	
		
		String qry1 = "select a.assay_name,a.assay_id,rg.compound_properties.compound_property_id,rg.rtp.rtp_id from RtpGoal rg,Assay a " +
			         " where rg.rtp.rtp_id=243";
		
		Query q1 = em.createQuery(qry1);
		
				
		List<Object[]> lstrtp = q1.getResultList();
		for(Object[] objects: lstrtp){
			labRequest= new Lab();
			labRequest.setAssay_name((String)objects[0]);
			labRequest.setAssay_id((Integer)objects[1]);
			lstLabrequest.add(labRequest);
		}
		return lstLabrequest;		
	}
	
	public String savelab() {
		 String message="";
			if(lab_request!=null){
		 System.out.println("adding lab request");
		 em.merge(lab_request);
		 FacesContext.getCurrentInstance().addMessage(null, new FacesMessage("Data successfully saved!"));
		 
		 message=null;
		// chemistSynthesis.clear();
			}
	
		return message;
		 
		
	}
	
	public Integer getAssayId(AjaxBehaviorEvent event){
		 //Integer aId=0;
		  Object obj=event.getComponent().getAttributes().get("value");
		    if(null!=obj){
		    
		      assay.setAssay_id((Integer)obj);
	    	 // aId =assay.getAssay_id();
	    	  //selectItems.add(aId) ; 
		    }
		  
		   // System.out.println(selectItems);
			return assay.getAssay_id();
		   
	}
	
	public String getLabRequestName(){
		
		
		return select;
		
		
		
	}
	
	public String saveLabRequest(){
		String message="";
		try{

			System.out.println("Saving into lab request");
		  	for(int i = 0; i < selectedList.size(); i++){	
		    //lab_request= new LabRequest();
		   // assay = new Assay();
		    Object obj =selectedList.get(i);
			//System.out.println("obj" + obj);
		    String objId=(String)obj.toString();
		    Integer asyId = Integer.parseInt(objId);
		    int intValue =asyId.intValue();
			assay=em.find(Assay.class,intValue);
			//assay =em.find(Assay.class,assay.getAssay_id());
	   		assay.getLab_request().add(lab_request);
			lab_request.setAssay(assay);
			//rtp.setRtp_id(238);

			rtp=em.find(Rtp.class,238);
			rtp.getLab_request().add(lab_request);
			lab_request.setRtp(rtp);
		  	}
		  //  }
		
		}
		catch(Exception e){
			System.out.println("exception here");
		}
		message=savelab();
		return message;
		
	}
	
	
	
	public String saveChemistSynthesis(){
		return select;
		
	}

	public String update(){
		String message="";
	
		try{
			Lab lab=new Lab();
			lab.setAssay_id(assay.getAssay_id());
			lab.setRtp_id(238);
			 
			 listOfLabRequest.add(lab);	
			 
				 for(int j=0;j< listOfLabRequest.size();j++)
				 {
					 Lab tp=listOfLabRequest.get(j);
					
					 		assay=em.find(Assay.class, tp.getAssay_id());
					 		assay.getLab_request().add(lab_request);
					 		lab_request.setAssay(assay);
 			    
					 		rtp=em.find(Rtp.class,tp.getRtp_id());
							rtp.getLab_request().add(lab_request);
							lab_request.setRtp(rtp);
 			
			
			
 		}
		
		
		
		
	}catch(NullPointerException n){
		System.out.println("null pointer exception");
	}
	catch(Exception e){
		System.out.println("other exception");
	}
		message=savelab();
		
		return message;
	}



}
