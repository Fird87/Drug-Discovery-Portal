package org.molplexdrug.Action;

import java.sql.Blob;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.ejb.Stateless;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.faces.event.ActionEvent;
import javax.faces.event.AjaxBehaviorEvent;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.jboss.seam.annotations.In;
import org.jboss.seam.annotations.Logger;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.log.Log;
import org.molplexdrug.DAO.MolDAO;
import org.molplexdrug.EntityBean.Assay;
import org.molplexdrug.EntityBean.ChemistSynthesis;
import org.molplexdrug.EntityBean.DevelopmentPhase;
import org.molplexdrug.EntityBean.Lab;
import org.molplexdrug.EntityBean.LabRequest;
import org.molplexdrug.EntityBean.MolBean;
import org.molplexdrug.EntityBean.MolPojo;
import org.molplexdrug.EntityBean.Project;
import org.molplexdrug.EntityBean.Rating;
import org.molplexdrug.EntityBean.Rtp;
import org.molplexdrug.EntityBean.Messages;

@Stateless
@Name("molAction")
public class MolAction implements MolDAO {

	@In(create = false, required = false)
	private MolBean molBean;

	@In(create = true, required = true)
	private DevelopmentPhase developmentPhase;

	@In(create = true, required = false)
	private Project project;

	@In(create = true, required = false)
	private Rtp rtp;

	@In(create = true , required =false)
	private ChemistSynthesis chemistSynthesis;
	
	@In(create = true,required=false)
	private LabRequest lab_request;
	

	@In(create = true , required =false)
	private Assay assay;

	@In(create = true, required = false)
	private Rating rating;
	
	@In(create = true, required = false)
    private Messages messages;
	
	@PersistenceContext
	private EntityManager em;

	@Logger
	private static Log log;

	private boolean showRating = false;
	public boolean showlabRequest = false;
	public boolean render = false;
	public boolean renderCol = true;
	public boolean renderApp =true;
	public boolean savedlabRequest = false;
	public List<MolPojo> listmp = new ArrayList<MolPojo>();
    private List<Integer> selectedList=new ArrayList<Integer>(); 
    List<MolPojo> lstChemistSynth = new ArrayList<MolPojo>();
    HashMap<Integer,MolPojo> addedMap = new HashMap<Integer,MolPojo>(); 
    HashMap<Integer,String> addedMolNameMap = new HashMap<Integer,String>(); 
    HashMap<Integer,MolPojo> addedForApproval = new HashMap<Integer,MolPojo>();
    HashMap<Integer,ChemistSynthesis> addedForChemistSynthesis = new HashMap<Integer,ChemistSynthesis>();
public String chemistSynthesisOption=null;
HashMap<Integer,MolPojo> addedChemistMap = new HashMap<Integer,MolPojo>(); 
private MolPojo mPojo;

	public List<MolPojo> getListmp() {
		// TODO Auto-generated method stub
		//System.out.println("-----listmp.size()----" + listmp.size()+showlabRequest);
		 List<MolPojo> lstLabRequest = new ArrayList<MolPojo>();
		if (listmp.size() > 0) {
			showlabRequest = true;
			if(savedlabRequest==true){
				for (MolPojo molpojo : listmp) {
			//		System.out.println("-----addedMap------size----"+addedMap.size());
					 Iterator it = addedMap.entrySet().iterator();
					    while (it.hasNext()) {
					        Map.Entry pairs = (Map.Entry)it.next();
					      //  System.out.println("Saving into lab request"+pairs.getKey() + " = " + pairs.getValue());
					        MolPojo mPojo=(MolPojo)pairs.getValue();
					        Integer rtpId=mPojo.getRtp_id();
					        Integer assayId=mPojo.getAssayId();
					        if(molpojo.getRtp_id()==rtpId){
					        molpojo.setAssayId(assayId);
					        String query = "SELECT cs.lab_request.lab_request_id,cs.vendor_price,cs.manual_price,cs.vendor_time," +
					    			" cs.manual_time,cs.vendor_risk,cs.manual_risk,cs.vendor_mg,cs.manual_mg,cs.manager_approval,cs.chemist_synthesis_id " +
					    			" FROM ChemistSynthesis cs where cs.lab_request.rtp.rtp_id=:rtpId" +
					    			" and cs.lab_request.assay.assay_id=:assayId";
					    	Query q = em.createQuery(query);

					    	q.setParameter("rtpId", rtpId);
					    	q.setParameter("assayId", assayId);
					    	List<Object[]> list = q.getResultList();
					    	for (Object[] objects : list) {
					    		molpojo.setChemist_synthesis_id((Integer) objects[10]);
					    		molpojo.setLab_request_id((Integer) objects[0]);
					    		molpojo.setVendor_price((Double) objects[1]);
					    		molpojo.setManual_price((Double) objects[2]);
					    		molpojo.setVendor_time((Integer) objects[3]);
					    		molpojo.setManual_time((Integer) objects[4]);
					    		molpojo.setVendor_risk((Integer) objects[5]);
					    		molpojo.setManual_risk((Integer) objects[6]);
					    		molpojo.setVendor_mg((Integer) objects[7]);
					    		molpojo.setManual_mg((Integer) objects[8]);
					    		molpojo.setManager_approval((String) objects[9]);
					    	    }
					        break;
					        }
					    }
					    lstLabRequest.add(molpojo);
				}
				listmp=lstLabRequest;
			}
		}
		else{
			showlabRequest = false;
		}
		return listmp;
	}

	public List<MolPojo> getChemisList(List<Integer> lstLabReqId) {
		// TODO Auto-generated method stub
		//System.out.println("-----listmp.size()----" + listmp.size()+showlabRequest);
		
		if (listmp.size() > 0) {
		//	System.out.println("------listmp.size()----"+listmp.size());
			showlabRequest = true;
			if(savedlabRequest==true){
				MolPojo molpojo=null;
				for (Integer labReqId : lstLabReqId) {
					
					        
					        String query = "SELECT cs.lab_request.lab_request_id,cs.vendor_price,cs.manual_price," +
					        		"cs.vendor_time," +
					    			" cs.manual_time,cs.vendor_risk,cs.manual_risk,cs.vendor_mg,cs.manual_mg," +
					    			"cs.manager_approval,cs.chemist_synthesis_id,cs.lab_request.lab_request_name, " +
					    			"  cs.lab_request.assay.assay_id" +
					    			" FROM ChemistSynthesis cs where cs.lab_request.lab_request_id=:labReqId";
					    	Query q = em.createQuery(query);

					    	q.setParameter("labReqId", labReqId);
					    	List<Object[]> list = q.getResultList();
					    	//molpojo=new MolPojo();
					    	for (Object[] objects : list) {
					    		molpojo=new MolPojo();
					    		molpojo.setAssayId((Integer)objects[12]);
					    		molpojo.setLab_request_name((String)objects[11]);
					    		molpojo.setChemist_synthesis_id((Integer) objects[10]);
					    		molpojo.setLab_request_id((Integer) objects[0]);
					    		molpojo.setVendor_price((Double) objects[1]);
					    		molpojo.setManual_price((Double) objects[2]);
					    		molpojo.setVendor_time((Integer) objects[3]);
					    		molpojo.setManual_time((Integer) objects[4]);
					    		molpojo.setVendor_risk((Integer) objects[5]);
					    		molpojo.setManual_risk((Integer) objects[6]);
					    		molpojo.setVendor_mg((Integer) objects[7]);
					    		molpojo.setManual_mg((Integer) objects[8]);
					    		molpojo.setManager_approval((String) objects[9]);
					    		
					    		
					    	    }
					    	lstChemistSynth.add(molpojo);
					  
					   
				}
				
			/*	for (MolPojo molpojo1 : lstChemistSynth) {
					System.out.println("-----lstLabrequest-----"+molpojo1.getRtp_id()+""+molpojo1.getLab_request_name());
				}*/
			//	System.out.println("----lstLabRequest---size--"+lstChemistSynth.size());
			
			}
		}
		else{
			showlabRequest = false;
		}
		return lstChemistSynth;
	}


	public void setListmp(List<MolPojo> listmp) {
		this.listmp = listmp;
	}

	@SuppressWarnings("unchecked")
	public List<MolPojo> getAllMol() {
		//showlabRequest = false;
		if (developmentPhase.getDevelopment_phase_name() == null) {
			developmentPhase.setDevelopment_phase_name("HIT");
		}
		String development_phase_name = developmentPhase
				.getDevelopment_phase_name();
		List<MolPojo> pojo = new ArrayList<MolPojo>();
		MolPojo mol = null;
		String query = "SELECT m.id, m.name, m.mol_name,m.rtp.rtp_id FROM MolBean m where m.rtp.developmentPhase.development_phase_name=:development_phase_name";
		Query q = em.createQuery(query);

		// Need to bring project related molfile in futue.
		q.setParameter("development_phase_name", development_phase_name);
		List<Object[]> list = q.getResultList();
		for (Object[] objects : list) {
			try {
				molBean = new MolBean();
				mol = new MolPojo();
				int molId=(Integer) objects[0];
				mol.setMolId(molId);

				Blob bl = (Blob) (objects[1]);
				byte[] bdata = bl.getBytes(1, (int) bl.length());
				String empSummary = new String(bdata);

				int i = empSummary.indexOf(">");
				StringBuffer sb1 = new StringBuffer(empSummary);
				sb1 = sb1.delete(i, empSummary.length());
				empSummary = sb1.toString();
				empSummary = empSummary.replace("\r\n", "<br/>");
				mol.setMolFile("[NO NAME]" + empSummary);
				mol.setMolFileName((String) objects[2]);
				mol.setRtp_id((Integer) objects[3]);
				if(listmp.size()>0){
					int checkedMolIds;
					for (MolPojo chkedObjects : listmp){
						checkedMolIds=chkedObjects.getMolId();
						
						if(molId==checkedMolIds){
							mol.setChecked(chkedObjects.isChecked());
						}
					}
				}
				else{
					mol.setChecked(false);
				}
				pojo.add(mol);

			} catch (SQLException e) {
				e.printStackTrace();
			}

		}
		return pojo;
	}

	public String pageDevelopmentPhaseId(ActionEvent event) {
		Object obj = event.getComponent().getAttributes().get("id");
		String development_phase_name = (String) obj;
		if (null != obj) {
			developmentPhase.setDevelopment_phase_name(development_phase_name);
		}
		listmp = new ArrayList<MolPojo>();
		showlabRequest = false;
		return "/chemvector/demo.xhtml";
	}

	@SuppressWarnings("unchecked")
	public List<MolPojo> getCheckedMol(Integer molId,boolean check) {
		MolPojo molp = null;
	//	System.out.println("-----Inside getChecked-----" + rtpId
	//			+ "isChecked ---" + check);
		if (check) {
			String query = "SELECT m.id, m.rtp.rtp_id, m.name, m.mol_name FROM MolBean m where m.id=:molId";
			Query q = em.createQuery(query);
			q.setParameter("molId", molId);
			List<Object[]> list = q.getResultList();
			for (Object[] objects : list) {
				try {
					molp = new MolPojo();
					String strMolName=((String) objects[3]);
				//	System.out.println("----Molname-----"+strMolName);
					String[] dispName=strMolName.split("\\.");
				//	System.out.println("--after split----"+dispName.length);
					
					molp.setMolId((Integer) objects[0]);
					molp.setRtp_id((Integer) objects[1]);

					Blob bl = (Blob) (objects[2]);
					byte[] bdata = bl.getBytes(1, (int) bl.length());
					String empSummary = new String(bdata);

					int i = empSummary.indexOf(">");
					StringBuffer sb1 = new StringBuffer(empSummary);
					sb1 = sb1.delete(i, empSummary.length());
					empSummary = sb1.toString();

					empSummary = empSummary.replace("\r\n", "<br/>");
					molp.setMolFile("[NO NAME]" + empSummary);
					molp.setMolFileName((String) objects[3]);
					molp.setChecked(check);
					molp.setAssayId(0);
					molp.setDisplayeName(dispName[0]);
					listmp.add(molp);

				} catch (SQLException e) {
					e.printStackTrace();
				}

			}
		}
		//System.out.println(" listmp size -------"+listmp.size());
		return listmp;
	}



	public void getShowLabRequestAssign() {
		
	//	System.out.println("called methodddddd"+listmp.size());
		if (listmp.size() > 0) {
			showlabRequest = true;
			savedlabRequest=false;
			render=false;
			renderCol=true;
			renderApp=true;
		}
		else{
		//	System.out.println("inside else");
			FacesContext.getCurrentInstance().addMessage(
					null,
					new FacesMessage(FacesMessage.SEVERITY_INFO,
							"Please Select atleast one Molecule ",
							"Please Select atleast one Molecule "));
		}
	}
	
	public void resetList(){
		
		listmp=new ArrayList<MolPojo>();
	}
	
	
	
	
	

@SuppressWarnings("unchecked")
	public List<Lab> getAllAssay(Integer rtpId) {
	//	System.out.println("==========LabRequest getAllAssay Method()============"+rtpId);
		List<Lab> lstLabrequest=new ArrayList<Lab>();
		Lab labRequest=null;	
		
		String qry="select a.assay_name,a.assay_id,rg.compound_properties.compound_property_id,rg.rtp.rtp_id from RtpGoal rg,Assay a " +
				" where  rg.compound_properties.compound_property_id=a.compound_properties.compound_property_id " +
				" and  rg.rtp.rtp_id=:rtpId";
		
		Query q = em.createQuery(qry);
		q.setParameter("rtpId", rtpId);
		List<Object[]> lstLogicalOperator = q.getResultList();
		for(Object[] objects: lstLogicalOperator){
			labRequest= new Lab();
			labRequest.setAssay_name((String)objects[0]);
			labRequest.setAssay_id((Integer)objects[1]);
			lstLabrequest.add(labRequest);
		}
		return lstLabrequest;		
	}

	public String updateManagerApproval(){
		String msg="testing";
		render=true;
		renderCol=false;
		renderApp=true;
		StringBuffer sfManagerApproval=new StringBuffer();
		sfManagerApproval.append("--");
		try{
		Iterator it = addedForApproval.entrySet().iterator();
	    while (it.hasNext()) {
	        Map.Entry pairs = (Map.Entry)it.next();
	   Integer chemistId=(Integer)pairs.getKey();
	   MolPojo status=(MolPojo)pairs.getValue();
	chemistSynthesis =em.find(ChemistSynthesis.class,chemistId);
	if(status.isApprove()==true){
	chemistSynthesis.setManager_approval("YES");
	sfManagerApproval.append(chemistSynthesis.getLab_request().getLab_request_name());
	sfManagerApproval.append(",");
	}
	if(status.isNotApprove()==true)
	{
		chemistSynthesis.setManager_approval("NO");	
	}
	
	em.merge(chemistSynthesis);
	    }
	    messages =em.find(Messages.class, messages.getMsg_id());
	    if(messages!=null)
	    {
	        return null;
	    }
	 messages = new Messages("Manager Approved the following  ChemistSynthesis "+ sfManagerApproval);
	 em.merge(messages);
	
	    FacesContext.getCurrentInstance().addMessage(null, new FacesMessage("Manager Decision Updated succesfully"));
		}
		catch(Exception e){
			e.printStackTrace();
		}
		//System.out.println(msg);
		return msg;
	}

	public String testRender1(){
		String msg="testing";
		render=true;
		renderCol=true;
		renderApp=false;
		try{
		 Iterator it = addedForChemistSynthesis.entrySet().iterator();
		    while (it.hasNext()) {
		        Map.Entry pairs = (Map.Entry)it.next();
		   Integer chemistSynthesisId=(Integer)pairs.getKey();
		   chemistSynthesis=(ChemistSynthesis)pairs.getValue();
		  // System.out.println("-----cs in testrender1-------"+chemistSynthesisId+"---"+pairs.getValue().toString());
		 // em.merge(chemistSynthesis);
		    }
		    messages =em.find(Messages.class, messages.getMsg_id());
		    if(messages!=null)
		    {
		        return null;
		    }
		 messages = new Messages("Chemist Synthesis for the following  Lab Requests Has been created");
		 em.merge(messages);
		    FacesContext.getCurrentInstance().addMessage(null, new FacesMessage("Chemist Synthesis Created Succesfully"));
		//    listmp = new ArrayList<MolPojo>();
		}
		catch(Exception e){
			
			System.out.println(" Error in TestRender1() of MolAction");
			e.printStackTrace();
		}
		return msg;
	}




	// Lab Request Methods
	
	public Integer getAssayId(AjaxBehaviorEvent event){
	//	System.out.println("----called GetAssayId-----");
		Integer aId=0;
		  Object obj=event.getComponent().getAttributes().get("value");
		    if(null!=obj){
		    
		    assay.setAssay_id((Integer)obj);
	    	aId =assay.getAssay_id();
	    	selectedList.add(aId) ; 
		    }
		  
		 //   System.out.println(selectedList);
			return assay.getAssay_id();
		   
	}
	
	public void getAssayId(Integer molId,Integer rtp_id,Integer assayId,String molName){
	//	System.out.println("----called GeRtpId-----"+rtp_id+"-----assayId-----"+assayId);
		if(assayId!=0 && rtp_id!=0){
			MolPojo molpojo=new MolPojo();
			molpojo.setAssayId(assayId);
			molpojo.setRtp_id(rtp_id);
		  addedMap.put(molId,molpojo);
		  addedMolNameMap.put(molId, molName);
		}
	//	  System.out.println("------addedmap--------"+addedMap);
	}
	
	public String saveLabRequest(){
		String message="";
		Integer labRequestId=null;
		List<Integer> lstAddedLabRequestId=new ArrayList<Integer>();
		StringBuffer sfLabRequest=new StringBuffer();
		sfLabRequest.append("--");
		try{
		//	  System.out.println("----size of added Map-----"+addedMap.size());
			 Iterator it = addedMap.entrySet().iterator();
			    while (it.hasNext()) {
			        Map.Entry pairs = (Map.Entry)it.next();
			     
			     // avoids a ConcurrentModificationException
			   Integer molId=(Integer)pairs.getKey();
			   MolPojo mPojo=(MolPojo)pairs.getValue();
		//	System.out.println("Saving into lab request");
	    	assay =em.find(Assay.class,mPojo.getAssayId());
	   // 	System.out.println(" molname with assayName---"+addedMolNameMap.get(molId)+"_"+assay.getAssay_name());
	   		assay.getLab_request().add(lab_request);
			lab_request.setAssay(assay);
			lab_request.setLab_request_name(addedMolNameMap.get(molId)+"_"+assay.getAssay_name());
			rtp=em.find(Rtp.class,mPojo.getRtp_id());
			rtp.getLab_request().add(lab_request);
			lab_request.setRtp(rtp);
			lab_request.getChemistSynthesis().add(chemistSynthesis);
			chemistSynthesis.setLab_request(lab_request);
			labRequestId=savelab();
			lstAddedLabRequestId.add(labRequestId);
			sfLabRequest.append(lab_request.getLab_request_name());
			sfLabRequest.append(",");
		  	}
			    messages =em.find(Messages.class, messages.getMsg_id());
			    if(messages!=null)
			    {
			        return null;
			    }
			 messages = new Messages("The following LabRequest Has been created "+ sfLabRequest);
			 em.merge(messages);
			    FacesContext.getCurrentInstance().addMessage(null, new FacesMessage("Lab Request Created Succesfully"));
			 //   FacesContext.getCurrentInstance().addMessage(null, new FacesMessage("Lab Request Created Succesfully"));
			    savedlabRequest=true;
			    lstChemistSynth=getChemisList(lstAddedLabRequestId);
		}
		catch(Exception e){
			System.out.println("exception here");
			e.printStackTrace();
		}
	
		return message;
		
	}

public Integer savelab() {
	 List<Integer> lstLabReqId=new ArrayList<Integer>();
	    render=true;
		renderCol=false;
		renderApp=true;
		int labId = 0;
 	 if(lab_request!=null){
	// System.out.println("adding lab request");
 		labId= em.merge(lab_request).getLab_request_id();
//System.out.println("lab Id in SaveLab ()---"+labId);
	
		}

	return labId;
	 
	
}

public String saveChemistSynthesis(Integer chemistSynthesisId,ChemistSynthesis cs){
	String message="";
	//System.out.println("------Chemist Synthesis Id-----"+chemistSynthesisId);
	//System.out.println("  cs object  ");
	chemistSynthesis=em.find(ChemistSynthesis.class, chemistSynthesisId);
	chemistSynthesis.setVendor_price(cs.getVendor_price());
	chemistSynthesis.setManual_price(cs.getManual_price());
	chemistSynthesis.setVendor_time(cs.getVendor_time());
	chemistSynthesis.setManual_time(cs.getManual_time());
	chemistSynthesis.setVendor_risk(cs.getVendor_risk());
	chemistSynthesis.setManual_risk(cs.getManual_risk());
	chemistSynthesis.setVendor_mg(cs.getVendor_mg());
	chemistSynthesis.setManual_mg(cs.getManual_mg());
	chemistSynthesis.setShow_manager("YES");
	if(chemistSynthesis!=null){
		 em.merge(chemistSynthesis);
		//System.out.println("--cs in popupstore------"+chemistSynthesis.toString());
		 addedForChemistSynthesis.put(chemistSynthesis.getChemist_synthesis_id(), chemistSynthesis);
		 for (MolPojo molpojo : lstChemistSynth) {
			 if(molpojo.getChemist_synthesis_id().equals(chemistSynthesisId)){
				 molpojo.setVendor_price(chemistSynthesis.getVendor_price()) ;
				 molpojo.setManual_price(chemistSynthesis.getManual_price()); 
				 molpojo.setVendor_risk(chemistSynthesis.getVendor_risk());
				 molpojo.setManual_risk(chemistSynthesis.getManual_risk());
				 molpojo.setVendor_time(chemistSynthesis.getVendor_time());
				 molpojo.setManual_time(chemistSynthesis.getManual_time());
				 molpojo.setVendor_mg(chemistSynthesis.getVendor_mg());
				 molpojo.setManual_mg(chemistSynthesis.getManual_mg());
			 }
			 
		 }
		// chemistSynthesis.clear();
		
		// FacesContext.getCurrentInstance().addMessage(null, new FacesMessage("Data successfully saved!"));
	}
	return message;
}


public void assignChemistSynthesisValuetoPopup(MolPojo mp){
	chemistSynthesis.setVendor_price(mp.getVendor_price());
	chemistSynthesis.setManual_price(mp.getManual_price());
	chemistSynthesis.setVendor_time(mp.getVendor_time());
	chemistSynthesis.setManual_time(mp.getManual_time());
	chemistSynthesis.setVendor_risk(mp.getVendor_risk());
	chemistSynthesis.setManual_risk(mp.getManual_risk());
	chemistSynthesis.setVendor_mg(mp.getVendor_mg());
	chemistSynthesis.setManual_mg(mp.getManual_mg());
}

public void addRecordToApprove(Integer chemistId,MolPojo mp){
	
	addedForApproval.put(chemistId, mp);
}


/*@SuppressWarnings("unchecked")
public List<MolPojo> getAllChemistSynthesis() {
	List<MolPojo> lstChemistSynthesis = new ArrayList<MolPojo>();
	MolPojo molChemistSynthesis = null;
	Integer rtpId;
	Integer assayId;
	Iterator it = addedMap.entrySet().iterator();
    while (it.hasNext()) {
        Map.Entry pairs = (Map.Entry)it.next();
        System.out.println("getAllChemistSynthesis----"+pairs.getKey() + " = " + pairs.getValue());
        it.remove(); 
        rtpId=(Integer)pairs.getKey();
        assayId=(Integer)pairs.getValue();
	String query = "SELECT cs.lab_request.lab_request_id,cs.vendor_price,cs.manual_price,cs.vendor_time," +
			" cs.manual_time,cs.vendor_risk,cs.manual_risk,cs.vendor_mg,cs.manual_mg,cs.manager_approval" +
			" FROM ChemistSynthesis cs where cs.lab_request.rtp.rtp_id=:rtpId" +
			" and cs.lab_request.assay.assay_id=:assayId";
	Query q = em.createQuery(query);

	q.setParameter("rtpId", rtpId);
	q.setParameter("assayId", assayId);
	List<Object[]> list = q.getResultList();
	for (Object[] objects : list) {
		molChemistSynthesis = new MolPojo();
		molChemistSynthesis.setLab_request_id((Integer) objects[0]);
		molChemistSynthesis.setVendor_price((Double) objects[1]);
		molChemistSynthesis.setManual_price((Double) objects[2]);
		molChemistSynthesis.setVendor_time((Integer) objects[3]);
		molChemistSynthesis.setManual_time((Integer) objects[4]);
		molChemistSynthesis.setVendor_risk((Integer) objects[5]);
		molChemistSynthesis.setManual_risk((Integer) objects[6]);
		molChemistSynthesis.setVendor_mg((Integer) objects[7]);
		molChemistSynthesis.setManual_mg((Integer) objects[8]);
		molChemistSynthesis.setManager_approval((String) objects[9]);

		lstChemistSynthesis.add(molChemistSynthesis);
		lstChemistSynthesis1.add(molChemistSynthesis);
	    }
	}
    System.out.println("  size of lstChemistSynthesis in getCheStyn---"+lstChemistSynthesis.size());
	return lstChemistSynthesis;
}
*/


public String addChemistSynthesisIntoList(AjaxBehaviorEvent event){
//	System.out.println("-----Inside Chemist Synthesis------");
	Object obj=event.getComponent().getAttributes().get("value");
	  if(null!=obj){
		    
		chemistSynthesisOption=(String)obj;
		    }
		  //  System.out.println("-----Option chossedn ----"+chemistSynthesisOption);
			return chemistSynthesisOption;
}

public void addChemistSynthesisIntoList(Integer labRequestId){
	//	    System.out.println("-----LabReqId inside addChemistSynthesisIntoList ");
	//	    System.out.println("-----LabReqId inside addChemistSynthesisIntoList "+labRequestId);
		    if(labRequestId!=0){
		    	MolPojo chemistSyn=new MolPojo();
		    	addedChemistMap.put(labRequestId, chemistSyn);
		    }
}


public List<MolPojo> getChemistSynthesisWaitingForApproval(){
//	System.out.println("-----Inside chemist synthesis approval----");
	List<MolPojo> lstWaitingForApproval=new ArrayList<MolPojo>();
	MolPojo molpojo=null;
	  String query = "SELECT cs.lab_request.lab_request_id,cs.vendor_price,cs.manual_price,cs.vendor_time," +
  			" cs.manual_time,cs.vendor_risk,cs.manual_risk,cs.vendor_mg,cs.manual_mg,cs.manager_approval,cs.chemist_synthesis_id,cs.lab_request.lab_request_name " +
  			" FROM ChemistSynthesis cs where cs.manager_approval='NO' " +
  			" and cs.show_manager='YES'";
  	Query q = em.createQuery(query);

  	List<Object[]> list = q.getResultList();
  	for (Object[] objects : list) {
  		molpojo=new MolPojo();
  		molpojo.setChemist_synthesis_id((Integer) objects[10]);
  		molpojo.setLab_request_id((Integer) objects[0]);
  		molpojo.setVendor_price((Double) objects[1]);
  		molpojo.setManual_price((Double) objects[2]);
  		molpojo.setVendor_time((Integer) objects[3]);
  		molpojo.setManual_time((Integer) objects[4]);
  		molpojo.setVendor_risk((Integer) objects[5]);
  		molpojo.setManual_risk((Integer) objects[6]);
  		molpojo.setVendor_mg((Integer) objects[7]);
  		molpojo.setManual_mg((Integer) objects[8]);
  		molpojo.setManager_approval((String) objects[9]);
  		molpojo.setLab_request_name((String) objects[11]);
  		lstWaitingForApproval.add(molpojo);
  	    }
  //    System.out.println("-----size of list in approval----"+lstWaitingForApproval.size());
	return lstWaitingForApproval;
}


public boolean isSavedlabRequest() {
	return savedlabRequest;
}


public void setSavedlabRequest(boolean savedlabRequest) {
	this.savedlabRequest = savedlabRequest;
}

public boolean isRenderCol() {
	return renderCol;
}


public void setRenderCol(boolean renderCol) {
	this.renderCol = renderCol;
}


public boolean isRenderApp() {
	return renderApp;
}


public void setRenderApp(boolean renderApp) {
	this.renderApp = renderApp;
}

public List<Integer> getSelectedList() {
	return selectedList;
}

public void setSelectedList(List<Integer> selectedList) {
	this.selectedList = selectedList;
}

public boolean isShowlabRequest() {
	return showlabRequest;
}

public void setShowlabRequest(boolean showlabRequest) {
	this.showlabRequest = showlabRequest;
}
public boolean isRender() {
	return render;
}


public void setRender(boolean render) {
	this.render=render;
	
}
public HashMap<Integer, MolPojo> getAddedMap() {
	return addedMap;
}


public void setAddedMap(HashMap<Integer, MolPojo> addedMap) {
	this.addedMap = addedMap;
}




public HashMap<Integer, String> getAddedMolNameMap() {
	return addedMolNameMap;
}

public void setAddedMolNameMap(HashMap<Integer, String> addedMolNameMap) {
	this.addedMolNameMap = addedMolNameMap;
}

public String getChemistSynthesisOption() {
	return chemistSynthesisOption;
}




public void setChemistSynthesisOption(String chemistSynthesisOption) {
	this.chemistSynthesisOption = chemistSynthesisOption;
}




public HashMap<Integer, MolPojo> getAddedChemistMap() {
	return addedChemistMap;
}




public void setAddedChemistMap(HashMap<Integer, MolPojo> addedChemistMap) {
	this.addedChemistMap = addedChemistMap;
}

public List<MolPojo> getLstChemistSynth() {
	return lstChemistSynth;
}

public void setLstChemistSynth(List<MolPojo> lstChemistSynth) {
	this.lstChemistSynth = lstChemistSynth;
}

public MolPojo getmPojo() {
	return mPojo;
}

public void setmPojo(MolPojo mPojo) {
	this.mPojo = mPojo;
}

public HashMap<Integer, MolPojo> getAddedForApproval() {
	return addedForApproval;
}

public void setAddedForApproval(HashMap<Integer, MolPojo> addedForApproval) {
	this.addedForApproval = addedForApproval;
}

public HashMap<Integer, ChemistSynthesis> getAddedForChemistSynthesis() {
	return addedForChemistSynthesis;
}

public void setAddedForChemistSynthesis(
		HashMap<Integer, ChemistSynthesis> addedForChemistSynthesis) {
	this.addedForChemistSynthesis = addedForChemistSynthesis;
}

public String pageRatingId(String ratingName){
	
	//Object obj = event.getComponent().getAttributes().get("id");
	StringBuffer sfMolNames=new StringBuffer();
	sfMolNames.append("--");
	if(null != ratingName) {
//	    System.out.println("===set rating name====="+ratingName);
	    for (MolPojo molpojo : listmp) {
	    	Integer molId=molpojo.getMolId() ;
		if(molId!= null){
	//		System.out.println("molId"+ molId);
			molBean=em.find(MolBean.class, molId);
		
			String query = "select r.rating_id from Rating r where r.rating_name=:ratingName";
	    	Query q = em.createQuery(query);
	    	 q.setParameter("ratingName",ratingName);
	    	Integer ratingId = (Integer)q.getSingleResult();
	   // 	System.out.println("----rating Id----"+ratingId);
				rating = em.find(Rating.class,ratingId);
				
				rating.getMolBean().add(molBean);
                  
                   
                   molBean.setRating(rating);
                 
             //      System.out.println("setMolbean"); 
                	  em.merge(molBean);
               
                	  sfMolNames.append(molpojo.getDisplayeName());
                	  sfMolNames.append(",");
			
			}else{
				System.out.println("Errrorrrr...");
	
		}
	    }
	    
	    messages =em.find(Messages.class, messages.getMsg_id());
	    if(messages!=null)
	    {
	        return null;
	    }
	 messages = new Messages("Rated the following Molecules "+ sfMolNames+" with this rating :"+rating.getRating_name());
	 em.persist(messages);
	 showRating=false;
	 log.info("Rated #{rating.rating_name}");
	 FacesContext.getCurrentInstance().addMessage(null,
                new FacesMessage(FacesMessage.SEVERITY_INFO, "Successfully rated " + rating.getRating_name(), "Successfully rated "));
	 listmp = new ArrayList<MolPojo>();
		return null;
	}

	return "/chemvector/demo.xhtml";
}

public boolean isShowRating() {
	return showRating;
}

public void setShowRating(boolean showRating) {
	this.showRating = showRating;
}

public void getShowRatingAssign() {
	
	//	System.out.println("called methodddddd"+listmp.size());
		if (listmp.size() > 0) {
			showRating = true;
		}
		else{
		//	System.out.println("inside else");
			FacesContext.getCurrentInstance().addMessage(
					null,
					new FacesMessage(FacesMessage.SEVERITY_INFO,
							"Please select molecule to rate",
							"Please select molecule to rate "));
		}
	}

public void resetRate(){
//	System.out.println("---show rating false---");
	//listmp = new ArrayList<MolPojo>();
	showRating=false;
}

}
