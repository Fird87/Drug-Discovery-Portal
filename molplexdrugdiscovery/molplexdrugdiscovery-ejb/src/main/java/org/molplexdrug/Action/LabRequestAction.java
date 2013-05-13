package org.molplexdrug.Action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;

import javax.ejb.Stateless;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.jboss.seam.ScopeType;
import org.jboss.seam.annotations.In;
import org.jboss.seam.annotations.Logger;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Scope;
import org.jboss.seam.log.Log;
import org.molplexdrug.DAO.LabRequestDAO;
import org.molplexdrug.EntityBean.Assay;
import org.molplexdrug.EntityBean.Compound_Properties;
import org.molplexdrug.EntityBean.Lab;
import org.molplexdrug.EntityBean.LabRequest;
import org.molplexdrug.EntityBean.Rtp;



@Stateless
@Scope(ScopeType.SESSION)
@Name("labAction")
public class LabRequestAction implements LabRequestDAO{

	
	@In(create = true,required = false)
	private LabRequest lab_request;
	
	@In(create = true , required =false)
	private Assay assay;
	
	@In(create = true, required= false)
	private Rtp rtp;
	
	@PersistenceContext
	private EntityManager em;
	   
	@Logger
	private static Log log;
	
	@SuppressWarnings("unchecked")
	public List<Lab> getAllAssay(Integer rtpId) {
		System.out.println("==========LabRequest getAllAssay Method()============"+rtpId);
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

	
	
	public void save() {
		try{
		if(assay!=null){
			rtp.setRtp_id(238);
			System.out.println("assay.assay_id"+ assay.getAssay_id());
			assay=em.find(Assay.class, assay.getAssay_id());
			assay.getLab_request().add(lab_request);
			lab_request.setAssay(assay);
			rtp=em.find(Rtp.class, rtp.getRtp_id());
			rtp.getLab_request().add(lab_request);
			lab_request.setRtp(rtp);
			em.merge(lab_request);
			
		}
		}catch(Exception e){
			
		}
	}
}
				
			


	
