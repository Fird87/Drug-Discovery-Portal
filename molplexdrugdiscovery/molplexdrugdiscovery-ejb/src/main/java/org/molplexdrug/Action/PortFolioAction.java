package org.molplexdrug.Action;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.jboss.seam.annotations.In;
import org.jboss.seam.annotations.Logger;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.faces.FacesMessages;
import org.jboss.seam.log.Log;
import org.molplexdrug.DAO.PortfolioDAO;
import org.molplexdrug.EntityBean.Messages;
import org.molplexdrug.EntityBean.Organisation;
import org.molplexdrug.EntityBean.PipeLine;
import org.molplexdrug.EntityBean.Portfolio;
import org.molplexdrug.EntityBean.ProjectDetail;

/**
 * @author Gaithri Balakrishnan
 * 
 */
@Stateless
@Name("addportfolio")
public class PortFolioAction implements PortfolioDAO {

	@In(create = true, required = false)
	private Portfolio portfolio;

	@In(create = true, required = false)
	private Organisation organisation;
	
	@In(create = true, required = false)
	private Messages messages;
	
	@In(create = true, required = false)
	private ProjectDetail project_details;

	@PersistenceContext
	private EntityManager em;

	@Logger
	private static Log log;

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.molplexdrug.DAO.PortfolioDAO#addportfolio()
	 */
	public String addportfolio() {
		try {
			
			organisation=em.find(Organisation.class, organisation.getOrganisation_id());
			organisation.getPortfolio().add(portfolio);
			portfolio.setOrganisation(organisation);
			em.merge(portfolio);
			messages = em.find(Messages.class, messages.getMsg_id());
			if (messages != null) {
				return null;
			}
			messages = new Messages("Added new portfolio "
					+ portfolio.getPortfolio_name());
			em.persist(messages);
			FacesContext.getCurrentInstance().addMessage(
					null,
					new FacesMessage(FacesMessage.SEVERITY_INFO,
							"Successfull added portfolio "
									+ portfolio.getPortfolio_name(),
							"Successfull added portfolio "
									+ portfolio.getPortfolio_name()));
		
		} catch (Exception e) {
			// TODO Auto-generated catch block
			FacesContext.getCurrentInstance().addMessage(
					null,
					new FacesMessage(FacesMessage.SEVERITY_ERROR,
							"Portfolio name "+ portfolio.getPortfolio_name()+" already exists",
							"Portfolio name "+ portfolio.getPortfolio_name()+" already exists"));
			log.info("Portfolio name "+ portfolio.getPortfolio_name()+" already exists");
		}finally{
			portfolio.clear();
		}
		return null;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.molplexdrug.DAO.PortfolioDAO#getAllOrganisation()
	 */
	public List<Organisation> getAllOrganisation() {
		CriteriaBuilder qb = em.getCriteriaBuilder();
		CriteriaQuery<Organisation> query = qb.createQuery(Organisation.class);
		Root<Organisation> rootOrganisation = query.from(Organisation.class);
		query.select(rootOrganisation);
		List<Organisation> lstOrganisation = em.createQuery(query)
				.getResultList();
		return lstOrganisation;

	}
	
	public List<Portfolio> getAllPortfolio(){
		CriteriaBuilder qb = em.getCriteriaBuilder();   		
   		 CriteriaQuery<Portfolio> query = qb.createQuery(Portfolio.class);
   		 Root<Portfolio> rootPortfolio = query.from(Portfolio.class);
   		 query.select(rootPortfolio);
   		 List<Portfolio> list = em.createQuery(query).getResultList();
   		return list;
		
	}
	
	public List<Portfolio> getAllProjectPortfolio(){
		CriteriaBuilder qb = em.getCriteriaBuilder();   		
   		 CriteriaQuery<Portfolio> query = qb.createQuery(Portfolio.class);
   		 Root<Portfolio> rootPortfolio = query.from(Portfolio.class);
   		 query.select(rootPortfolio);
   		 List<Portfolio> list = em.createQuery(query).getResultList();
   		return list;
		
	}
	
	@SuppressWarnings("unchecked")
	public List<PipeLine> getAllTpp(String portfolioName) {
		List<PipeLine> lstPipeLine=new ArrayList<PipeLine>();
		PipeLine pipeLine=null;
		String query="Select r.project.portfolio.portfolio_name,r.project.project_name,max(r.developmentPhase.development_phase_id) " +
				",pd.tpp.tpp_name  from Rtp r,ProjectDetail pd  " +
				" where r.project.portfolio.portfolio_name=:portfolioName" +
				" and pd.project.portfolio.portfolio_name=:portfolioName" +
				" group by r.project.project_id"  ;
				Query q = em.createQuery(query);
				 q.setParameter("portfolioName", portfolioName);
				 List<Object []> lstLogicalOperator = q.getResultList();
					for (Object[] objects : lstLogicalOperator) {
						portfolioName=(String)objects[0];
						
						pipeLine=new PipeLine();
					pipeLine.setProjectName((String)objects[1]);
					pipeLine.setTppName((String)objects[3]);
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
