package org.molplexdrug.Action;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.jboss.seam.ScopeType;
import org.jboss.seam.annotations.In;
import org.jboss.seam.annotations.Logger;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Scope;
import org.jboss.seam.log.Log;
import org.molplexdrug.DAO.IPipeLine;
import org.molplexdrug.EntityBean.DevelopmentPhase;
import org.molplexdrug.EntityBean.PipeLine;
import org.molplexdrug.EntityBean.Portfolio;
import org.molplexdrug.EntityBean.Project;
import org.molplexdrug.EntityBean.Rtp;
import org.molplexdrug.EntityBean.TPP;

@Stateless
@Scope(ScopeType.SESSION)
@Name("pipeline")
public class PipelineAction implements IPipeLine{
	
	
	  @In(create=true,required=false)
	   private TPP tpp;
	 @In(create = true,required=true)
	   private DevelopmentPhase developmentPhase;
	   
	   @In(create=true,required=false)
	   private Rtp rtp;
	   

       @In(create=true,required=false)
   private Project project;
       @In(create=true,required=false)
       private Portfolio portfolio;
   @PersistenceContext
   private EntityManager em;

   @Logger
   private static Log log;
   
   @SuppressWarnings("unchecked")
	public List<PipeLine> getAllPortfolio() {
	   
	 
		//System.out.println("----Inside getAllPortfolio of PipeLine Method----");
		//NEW METHOD
		List<PipeLine> lstPipeLine=new ArrayList<PipeLine>();
		PipeLine pipeLine=null;
		
		String query="Select r.project.portfolio.portfolio_name,r.project.portfolio.portfolio_id " +
				" from Rtp r  group by r.project.portfolio.portfolio_id"  ;
				Query q = em.createQuery(query);
				
				List<Object []> lstLogicalOperator = q.getResultList();
				for (Object[] objects : lstLogicalOperator) {
					pipeLine=new PipeLine();
					pipeLine.setPortfolioName((String) objects[0]);
					lstPipeLine.add(pipeLine);
				}
				return lstPipeLine;
		
	}
	@SuppressWarnings("unchecked")
	public List<PipeLine> getAllTpp(String portfolioName) {
		List<PipeLine> lstPipeLine=new ArrayList<PipeLine>();
		PipeLine pipeLine=null;
		int  project_id = 0;
		  String projectName= project.getProject_name();
	       if(null!=projectName){
	          String prjQuery="Select p.project_id from Project p where p.project_name=:projectName";
	          Query prjQueryObj=em.createQuery(prjQuery);
	          prjQueryObj.setParameter("projectName", projectName);
	          project_id=(Integer)prjQueryObj.getSingleResult();
	           project.setProject_id(project_id);
	       }
	//	System.out.println("---------------Pipline ProjectId----------"+project.getProject_id());
		String query="Select r.project.portfolio.portfolio_name,r.tpp.tpp_name,max(r.developmentPhase.development_phase_id) " +
				" from Rtp r,ProjectDetail pd " +
				" where r.project.portfolio.portfolio_name=:portfolioName" +
				"  and pd.project.project_id =:project_id " +
				" group by r.project.project_id,r.tpp.tpp_id"  ;
				Query q = em.createQuery(query);
				 q.setParameter("portfolioName", portfolioName);
				 q.setParameter("project_id", project_id);
				List<Object []> lstLogicalOperator = q.getResultList();
				System.out.println("----lstLogicalOperator size----"+lstLogicalOperator.size());
				for (Object[] objects : lstLogicalOperator) {
					portfolioName=(String)objects[0];
					String prevPortfolioName=null;
					pipeLine=new PipeLine();
					if(!(portfolioName.equals(prevPortfolioName))){
				pipeLine.setPortfolioName(portfolioName);
				prevPortfolioName=portfolioName;
					}
				pipeLine.setTppName((String)objects[1]);
				pipeLine.setPipeHeight(25);
				Integer hitCount=(Integer)objects[2];
				if(hitCount==5){
					pipeLine.setPipeWidth(400);
				}
				else if(hitCount==4){
					pipeLine.setPipeWidth(300);
				}
				else if(hitCount==3){
					pipeLine.setPipeWidth(200);	
								}
				else if(hitCount==2){
					pipeLine.setPipeWidth(100);
				}else{
					pipeLine.setPipeWidth(60);
				}
					lstPipeLine.add(pipeLine);
				}
				return lstPipeLine;
		}

}
