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
import org.molplexdrug.DAO.ProjectDAO;
import org.molplexdrug.EntityBean.Messages;
import org.molplexdrug.EntityBean.Portfolio;
import org.molplexdrug.EntityBean.Project;
import org.molplexdrug.EntityBean.ProjectDetail;
import org.molplexdrug.EntityBean.TPP;
import org.richfaces.model.Filter;


/**
 * @author Jallilah
 *
 */
@Stateless
@Name("projectAction")
public class ProjectAction implements ProjectDAO{

	 @In(create = true, required = false)
		private Project project;
	 
	 @In(create=true, required = false)
		private ProjectDetail project_details;
	 
	 
	 @In(create = true, required = false)
		private Portfolio portfolio;
	 
	 @In(create = true, required = false)
		private TPP tpp;
	 
	 @In(create = true, required = false)
		private Messages messages;
	   
		   @PersistenceContext
		   private EntityManager em;
		   
		   @Logger
		   private static Log log;

		   private List<String> selectedTpp;
				   
		public List<String> getSelectedTpp() {
			return selectedTpp;
		}


		public void setSelectedTpp(List<String> selectedTpp) {
			this.selectedTpp = selectedTpp;
		}
        
		private boolean flag;
		

		

		public boolean isFlag() {
			return flag;
		}


		public void setFlag(boolean flag) {
			this.flag = flag;
		}

		public String currentFilterValue;
			
			

			
			public String getCurrentFilterValue() {
						return currentFilterValue;
					}

					public void setCurrentFilterValue(String currentFilterValue) {
						this.currentFilterValue = currentFilterValue;
					}
		/* (non-Javadoc)
		 * @see org.molplexdrug.DAO.ProjectDAO#addProject()
		 */
		public String addProject() {
		
			
			 try {
				 if(project!=null){
			//		 System.out.println("-selectedTpp---size----"+selectedTpp.size()+selectedTpp.toString());
					// for (int i = 0; i < selectedTpp.size(); i++) {
					//	  System.out.println("--------mmmmmmmm------"+selectedTpp.get(i));
					//	  project_details=new ProjectDetail();
						 tpp=em.find(TPP.class,tpp.getTpp_id()) ;
						 tpp.getProject_details().add(project_details);
						 project_details.setTpp(tpp);
						project.getProject_details().add(project_details);
						project_details.setProject(project);
						 
						 
					//  }
					 System.out.println("----------size of Project Details------"+project.getProject_details().size());
					 portfolio=em.find(Portfolio.class, portfolio.getPortfolio_id());
					 portfolio.getProject().add(project);
					 project.setPortfolio(portfolio);
					 em.merge(project);
					 
					
					 log.info("Added new project #{project.project_name}");
					 messages = em.find(Messages.class, messages.getMsg_id());
						if (messages != null) {
							return null;
						}
						messages = new Messages("Added new project "
								+ project.getProject_name());
						em.merge(messages);
					 FacesContext.getCurrentInstance().addMessage(null,
				                new FacesMessage(FacesMessage.SEVERITY_INFO, "Successfully created Project "+ project.getProject_name(), "Successfully created Project "+ project.getProject_name()));
					 flag=false;
				 }
				 else{
					 flag=true;
				 }
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
					FacesContext.getCurrentInstance().addMessage(null,
				               new FacesMessage(FacesMessage.SEVERITY_ERROR, "Project name "+project.getProject_name()+" already exists", "Project name "+project.getProject_name()+" already exists"));
					log.info("Project name "+project.getProject_name()+" already exists}");
				}
			
				 project.clear();
			 
				 
			    return null;
		}
		 
		
		/* (non-Javadoc)
		 * @see org.molplexdrug.DAO.ProjectDAO#getAllPortfolio()
		 */
		public List<Portfolio> getAllPortfolio(){
			CriteriaBuilder qb = em.getCriteriaBuilder();   		
	   		 CriteriaQuery<Portfolio> query = qb.createQuery(Portfolio.class);
	   		 Root<Portfolio> rootPortfolio = query.from(Portfolio.class);
	   		 query.select(rootPortfolio);
	   		 List<Portfolio> list = em.createQuery(query).getResultList();
	   		return list;
			
		}


		public Integer getPortfolioId(AjaxBehaviorEvent event) {
			  Object obj=event.getComponent().getAttributes().get("value");
			    if(null!=obj){
			    	portfolio.setPortfolio_id((Integer)obj);
			    }
			    System.out.println("----portfolio.getPortfolioId-----"+portfolio.getPortfolio_id());
			    return portfolio.getPortfolio_id();
		}
		
		public List<Project> getAllProject(){
			CriteriaBuilder qb = em.getCriteriaBuilder();   		
	   		 CriteriaQuery<Project> query = qb.createQuery(Project.class);
	   		 Root<Project> rootProject = query.from(Project.class);
	   		 query.select(rootProject);
	   		 List<Project> list = em.createQuery(query).getResultList();
	   		return list;
			
		}
		
		public List<TPP> getAllTPP(){
			CriteriaBuilder qb = em.getCriteriaBuilder();   		
	   		 CriteriaQuery<TPP> query = qb.createQuery(TPP.class);
	   		 Root<TPP> rootPortfolio = query.from(TPP.class);
	   		 query.select(rootPortfolio);
	   		 List<TPP> list = em.createQuery(query).getResultList();
	   		return list;
			
		}
		
		
		public List<MProject> getProjectOnly() {
			System.out.println("-----Project Only---");
			MProject mProject=null;
			   List<MProject> lstProject=new ArrayList<MProject>(); 
			   String query="Select  pd.project.project_name,pd.project.project_id from ProjectDetail pd";
						Query q = em.createQuery(query);
						List<Object []> lstLogicalOperator = q.getResultList();
						for (Object[] objects : lstLogicalOperator) {
							mProject=new MProject();
							mProject.setProject_name((String)objects[0]);
							lstProject.add(mProject);
						}
		        return lstProject;
		}
		
		public List<MProject> getProjectWithMultipleTpp(String projectName) {
			MProject mProject=null;
			System.out.println("-----Project Only---"+projectName);
			   List<MProject> lstProject=new ArrayList<MProject>(); 
			   String query="Select  pd.project.project_name,pd.project.portfolio.portfolio_name,pd.tpp.tpp_name,pd.project.total_budget_gbp from ProjectDetail pd" +
			   		          "  where  pd.project.project_name=:projectName";
						Query q = em.createQuery(query);
						 q.setParameter("projectName", projectName);
						List<Object []> lstLogicalOperator = q.getResultList();
						for (Object[] objects : lstLogicalOperator) {
							mProject=new MProject();
							mProject.setProject_name((String)objects[0]);
							mProject.setPortfolio_name((String)objects[1]);
							mProject.setTppName((String)objects[2]);
							mProject.setTotalBudgetGdp((Integer)objects[3]);
							lstProject.add(mProject);
						}
		        return lstProject;
		}
		
		
		public Integer getTppId(AjaxBehaviorEvent event){
			  Object obj=event.getComponent().getAttributes().get("value");
			    if(null!=obj){
	                     tpp.setTpp_id((Integer)obj);
			    }
			    return tpp.getTpp_id();
		}
		
		
		/* public Filter<?> getFilterProject() {
		        return new Filter<Project>() {
		            public boolean accept(Project a) {
		                String asname = getCurrentFilterValue();
		                if (asname == null || asname.length() == 0 || asname.equals(a.getProject_name())) {
		                    return true;
		                }
		                return false;
		            }
		        };
		    }*/
		
		 public Filter<?> getFilterProject() {
		        return new Filter<Project>() {
		            public boolean accept(Project a) {
		                String asname = getCurrentFilterValue();
		                if (asname == null || asname.length() == 0 || asname.equalsIgnoreCase(asname)) {
		                    return true;
		                }
		                return false;
		            }
		        };
		    }
		 
}
