//$Id: RegisterAction.java 10428 2009-04-15 21:54:38Z norman.richards@jboss.com $
package org.molplexdrug.Action;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.faces.event.ActionEvent;
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
import org.jboss.seam.faces.FacesMessages;
import org.jboss.seam.log.Log;
import org.molplexdrug.DAO.RTPDAO;
import org.molplexdrug.EntityBean.CompoundLogical;
import org.molplexdrug.EntityBean.Compound_Properties;
import org.molplexdrug.EntityBean.DevelopmentPhase;
import org.molplexdrug.EntityBean.LogicalOperator;
import org.molplexdrug.EntityBean.Messages;
import org.molplexdrug.EntityBean.Project;
import org.molplexdrug.EntityBean.Rtp;
import org.molplexdrug.EntityBean.RtpGoal;
import org.molplexdrug.EntityBean.TPP;
import org.molplexdrug.EntityBean.TabBean;
import org.richfaces.model.Filter;

/**
 * @author Firdaus
 *
 */
@Stateless
@Scope(ScopeType.SESSION)
@Name("rtpAction")
public class RTPAction implements RTPDAO
{


	  @In(create = true,required=false)
	   private Compound_Properties compound_properties;
	   
	   @In(create = true,required=true)
	   private LogicalOperator logicalOperator;
	   
	   @In(create = true,required=true)
	   private DevelopmentPhase developmentPhase;
	   
	   @In(create=true,required=false)
	   private Rtp rtp;
	   
	   @In(create=true,required=false)
	   private RtpGoal rtpGoal;
	   
           @In(create=true,required=false)
	   private Project project;
           
           @In(create = true, required = false)
       	private Messages messages;
           
           @In(create=true,required=false)
    	   private TPP tpp;
           
           @In(create=true,required=false)
       	private TabBean tabBean;
           
	   @PersistenceContext
	   private EntityManager em;
	   
	   @Logger
	   private static Log log;
	   
	   public String compundPropertyName;
	   public String compoundPropertyUnit;
	   public String register()
	   {
		
	      return null;
	   }

	public List<Compound_Properties> getAllCompoundProperties() {
		CriteriaBuilder qb = em.getCriteriaBuilder();
		 CriteriaQuery<Compound_Properties> query = qb.createQuery(Compound_Properties.class);
		 Root<Compound_Properties> rootCompundProperties = query.from(Compound_Properties.class);
		 query.select(rootCompundProperties);
		 List<Compound_Properties> lstCompoundPropety = em.createQuery(query).getResultList();
		return lstCompoundPropety;
	}

	public List<LogicalOperator> getAllLogicalOperator() {
		CriteriaBuilder qB = em.getCriteriaBuilder();
		CriteriaQuery<LogicalOperator> q = qB.createQuery(LogicalOperator.class);
		Root<LogicalOperator> rootLogicalOperator = q.from(LogicalOperator.class);
		q.select(rootLogicalOperator);
		List<LogicalOperator> lstLogicalOperator = em.createQuery(q).getResultList();
		return lstLogicalOperator;
	}
	
	public String save() {
		System.out.println("-----Inside Save-------");
         if(rtpGoal!=null){
			if(rtp.getRtpGoal()!=null){
	          System.out.println("inside saave");
	         
                        compound_properties=em.find(Compound_Properties.class, compound_properties.getCompound_property_id());
                        compound_properties.getRtpGoal().add(rtpGoal);
                        rtpGoal.setCompound_properties(compound_properties);
                        logicalOperator=em.find(LogicalOperator.class, logicalOperator.getLogical_operator_id());
                        logicalOperator.getRtpGoal().add(rtpGoal);
                         rtpGoal.setLogical_operator(logicalOperator);
                       
				
				Integer development_phase_id=developmentPhase.getDevelopment_phase_id();
				Integer  project_id=project.getProject_id();
				try{
				String devquery ="Select r.rtp_id from Rtp r where r.developmentPhase.development_phase_id=:development_phase_id" +
						"          and r.project.project_id=:project_id";
				Query rtpq = em.createQuery(devquery);
				rtpq.setParameter("development_phase_id",development_phase_id);
				rtpq.setParameter("project_id",project_id);
		   	Integer rtp_id = (Integer)rtpq.getSingleResult();
		  
		   		System.out.println("---1------");
		   		rtp=em.find(Rtp.class, rtp_id);
		   		rtp.getRtpGoal().add(rtpGoal);
				}
		   	catch(Exception e)
		   	{
		   		rtp.getRtpGoal().add(rtpGoal);
                                developmentPhase=em.find(DevelopmentPhase.class, development_phase_id);
                                developmentPhase.getRtp().add(rtp);
                                rtp.setDevelopmentPhase(developmentPhase);
                                project=em.find(Project.class, project_id);
                                project.getRtp().add(rtp);
                                System.out.println("---2---");
                                rtp.setProject(project);
		   	}
				rtpGoal.setRtp(rtp);
				
				messages = em.find(Messages.class, messages.getMsg_id());
				if (messages != null) {
					return null;
				}
				messages = new Messages("Added new RTP");
				em.persist(messages);
				tabBean.setSelectedTab("rtp");

			}
         }
		else{
		System.out.println("-----detached RtpGoal object--------");
		}
		
		
			String message=getExistMessage();
			
			System.out.println("---getExistMessage--");
			return message;

	}

	@SuppressWarnings("unchecked")
	public List<CompoundLogical> getAll() {
		
					//NEW METHOD
		List<CompoundLogical> lstCompoundLogical=new ArrayList<CompoundLogical>();
                        Integer project_id=1;
                        CompoundLogical compoundLogical=null;
                        String projectName= project.getProject_name();
                        if(null!=projectName){
                           String prjQuery="Select p.project_id from Project p where p.project_name=:projectName";
                           Query prjQueryObj=em.createQuery(prjQuery);
                           prjQueryObj.setParameter("projectName", projectName);
                           project_id=(Integer)prjQueryObj.getSingleResult();
                            project.setProject_id(project_id);
                        }
                        
			if (developmentPhase.getDevelopment_phase_name()==null){
			developmentPhase.setDevelopment_phase_name("HIT");
                      //  developmentPhase.setDevelopment_phase_id(1);
			}
                     
			String development_phase_name=developmentPhase.getDevelopment_phase_name();
			String devquery ="Select d.development_phase_id from DevelopmentPhase d where d.development_phase_name=:development_phase_name";
			Query devq = em.createQuery(devquery);
			devq.setParameter("development_phase_name",development_phase_name);
	   	Integer development_phase_id = (Integer)devq.getSingleResult();
                
	             developmentPhase.setDevelopment_phase_id(development_phase_id);
			String query="Select r.compound_properties.compound_property_name,r.logical_operator.logical_operator_symbol," +
			"r.rtp_goal_value,r.compound_properties.compound_property_units from RtpGoal r where" +
			" r.rtp.developmentPhase.development_phase_id=:development_phase_id " +
                                "  and r.rtp.project.project_id=:project_id";
			Query q = em.createQuery(query);
			q.setParameter("development_phase_id",development_phase_id);
                        q.setParameter("project_id",project_id);
			List<Object []> lstLogicalOperator = q.getResultList();
			for (Object[] objects : lstLogicalOperator) {
			compoundLogical=new CompoundLogical();
			compoundLogical.setCompound_property_name((String)objects[0]);
			compoundLogical.setLogical_operator_symbol((String)objects[1]);
			compoundLogical.setRtp_goal_value((Double)objects[2]);
			compoundLogical.setCompound_property_units((String)objects[3]);
			lstCompoundLogical.add(compoundLogical);
			}
			//FacesMessages.instance().getCurrentGlobalMessages().clear();
			 FacesMessages.afterPhase();
			 FacesMessages.instance().clear();
					return lstCompoundLogical;
	}


	public String getExistMessage() {
		String msg=null;
try{
			em.merge(rtp);
			em.flush();
			compoundPropertyUnit="";
			compundPropertyName="";
				//FacesMessages.instance().add("Record Successfully saved");
				FacesContext.getCurrentInstance().addMessage(
						null,
						new FacesMessage(FacesMessage.SEVERITY_INFO,
								"Successfull added new RTP ",
								"Successfull added new RTP "));
					
				msg=null;
		}
catch(Exception e)
{   
	e.printStackTrace();
    FacesMessages.instance().add("Record Already Exist");
}finally{
	rtpGoal.clear();
	//tabBean.setSelectedTab("rtp");
}
		return msg;
	}



	public Integer getRtpCompoundProperyId(AjaxBehaviorEvent ev){
		  Object obj=ev.getComponent().getAttributes().get("value");
		  System.out.println("inside listener");
	    if(null!=obj){
	    	Integer cmp_id=(Integer)obj;
	    	compound_properties.setCompound_property_id(cmp_id);
	    	cpId=cmp_id;
	    	System.out.println("com id: "+compound_properties.getCompound_property_id());
	    	String query = "select c.compound_property_units,c.compound_property_name from Compound_Properties c where c.compound_property_id=:cmp_id";
	    	Query q = em.createQuery(query);
	    	 q.setParameter("cmp_id",cmp_id);
	    	 List<Object []> lstCompound = q.getResultList();
	    	 	for (Object[] objects : lstCompound) {
	    	 		compoundPropertyUnit=(String)objects[0];
	    	 		compundPropertyName=(String)objects[1];
	    	 	}
	    	
	     	System.out.println("com unit: "+compound_properties.getCompound_property_units());
	    
	    	
	    	 
	    }
	    return compound_properties.getCompound_property_id();

	}
	
	public String getRtpCompoundPropertyName(int cpid){
		
	    	
	    	String query = "select c.compound_property_name from Compound_Properties c where c.compound_property_id=:cpid";
	    	Query q = em.createQuery(query);
	    	 q.setParameter("cpid",cpid);
	    	String name = (String)q.getSingleResult();
	    	compound_properties.setCompound_property_name(name);
	    	compName =  compound_properties.getCompound_property_name();
	    
	    return compName;

	}

	public Integer getRtpLogicalOperatorId(AjaxBehaviorEvent event){
		  Object obj=event.getComponent().getAttributes().get("value");
		    if(null!=obj){
                        logicalOperator.setLogical_operator_id((Integer)obj);
                        //String cpUnit = compound_properties.getCompound_property_units();
		    }
		    return logicalOperator.getLogical_operator_id();
	}
	
	
	public String pageDevelopmentPhaseId(ActionEvent event) {
		Object obj=event.getComponent().getAttributes().get("id");
		String development_phase_name=(String)obj;
		if(null!=obj){
			developmentPhase.setDevelopment_phase_name(development_phase_name);
		}    
	
	return "/projects/rtp.xhtml";
	}

	public List<Compound_Properties> compoundList =  new ArrayList<Compound_Properties>();
	
	public List<Compound_Properties> getCompoundList() {
		return compoundList;
	}

	public void setCompoundList(List<Compound_Properties> compoundList) {
		this.compoundList = compoundList;
	}

	public List<Compound_Properties> getCompoundProperty(AjaxBehaviorEvent event){
		//compoundList = getAllCompoundProperties();
		Object obj=event.getComponent().getAttributes().get("value");
		
		if(null!=obj){
			String  cpname=(String)obj;
		System.out.println("inside getCompound");
		
			
                System.out.println("cpName: "+cpname);
		    	String query = "select c.compound_property_id,c.compound_property_name,c.compound_property_units,c.compound_property_symbol from Compound_Properties c where c.compound_property_name=:cpname";
		    	Query q = em.createQuery(query);
		    	 q.setParameter("cpname",cpname);
		    	
		    	List<Object []> lstLogicalOperator = q.getResultList();
		    	
		   	for (Object[] objects : lstLogicalOperator) {
		   		Compound_Properties compound = new Compound_Properties();
		   		    compound.setCompound_property_id((Integer)objects[0]);
					compound.setCompound_property_name((String)objects[1]);
					compound.setCompound_property_units((String)objects[2]);
					compound.setCompound_property_symbol((String)objects[3]);
				
					compoundList.add(compound);
					System.out.println(compound.toString());
				}
		}		
	    return compoundList;
	   
	}
	
	
	
	public String compName;


	public String getCompName() {
		return compName;
	}

	public void setCompName(String compName) {
		this.compName = compName;
	}
	
	public Integer cpId;
	
	public Integer getCpId() {
		return cpId;
	}

	public void setCpId(Integer cpId) {
		this.cpId = cpId;
	}


 

    
    //Filter
private String currentStateFilterValue;
	
	public String getCurrentStateFilterValue() {
		return currentStateFilterValue;
	}

	public void setCurrentStateFilterValue(String currentStateFilterValue) {
		this.currentStateFilterValue = currentStateFilterValue;
	}
    
    public Filter<?> getFilterCompound() {
        return new Filter<Compound_Properties>() {
            public boolean accept(Compound_Properties a) {
                String asname = getCurrentStateFilterValue();
                if (asname == null || asname.length() == 0 || asname.equals(a.getCompound_property_name())) {
                	
                	return true;
                   
                }
                return false;
            }
        };
    }
    
   
    @SuppressWarnings("unchecked")
	public List<CompoundLogical> getAllRtpCompound() {
		
					//NEW METHOD
		List<CompoundLogical> lstCompoundLogical=new ArrayList<CompoundLogical>();
                      
		String query = "select c.compound_property_id,c.compound_property_name,c.compound_property_units from Compound_Properties c";
    	Query q = em.createQuery(query);
    	
    	
    	List<Object []> lstLogicalOperator = q.getResultList();
    	
   	for (Object[] objects : lstLogicalOperator) {
   		CompoundLogical compound = new CompoundLogical();
   		    compound.setCompound_property_id((Integer)objects[0]);
			compound.setCompound_property_name((String)objects[1]);
			compound.setCompound_property_units((String)objects[2]);
		
			 lstCompoundLogical.add(compound);
		
		}
			
					return lstCompoundLogical;
	}

	
	public String getCompundPropertyName() {
		return compundPropertyName;
	}

	public void setCompundPropertyName(String compundPropertyName) {
		this.compundPropertyName = compundPropertyName;
	}

	public String getCompoundPropertyUnit() {
		return compoundPropertyUnit;
	}

	public void setCompoundPropertyUnit(String compoundPropertyUnit) {
		this.compoundPropertyUnit = compoundPropertyUnit;
	}

	public void tabBean(){
	}

}