package org.molplexdrug.EntityBean;

import static org.jboss.seam.ScopeType.SESSION;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Scope;


/**
 * @author Jallilah Jeffri
 *
 */
@Entity                                                                                  
@Name("project")                                                                            
@Scope(SESSION)                                                                        
@Table(name="project") 
public class Project implements Serializable{

	private  int project_id;
	private String project_name;
	private String project_description;
	private int creator_id;
	private int total_budget_gbp;
	 protected  Portfolio portfolio;
	 protected Set<Rtp> rtp=new HashSet<Rtp>();
	 protected Set<ProjectDetail> project_details=new HashSet<ProjectDetail>();
	
        
	public Project() {
		super();
		// TODO Auto-generated constructor stub
		this.creator_id=1;
	}
	

	


	  






	/**
	 * @return the project_id
	 */

	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	 @Column( name = "project_id" )
	public int getProject_id() {
		return project_id;
	}


	 @OneToMany(mappedBy="project",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	public Set<ProjectDetail> getProject_details() {
		return project_details;
	}





	public void setProject_details(Set<ProjectDetail> project_details) {
		this.project_details = project_details;
	}





	/**
	 * @param project_id the project_id to set
	 */
	public void setProject_id(int project_id) {
		this.project_id = project_id;
	}



	/**
	 * @return the project_name
	 */
	public String getProject_name() {
		return project_name;
	}



	/**
	 * @param project_name the project_name to set
	 */
	public void setProject_name(String project_name) {
		this.project_name = project_name;
	}



	/**
	 * @return the project_description
	 */
	public String getProject_description() {
		return project_description;
	}



	/**
	 * @param project_description the project_description to set
	 */
	public void setProject_description(String project_description) {
		this.project_description = project_description;
	}



	/**
	 * @return the creator_id
	 */
	public int getCreator_id() {
		return creator_id;
	}



	/**
	 * @param creator_id the creator_id to set
	 */
	public void setCreator_id(int creator_id) {
		this.creator_id = creator_id;
	}


/*
	*//**
	 * @return the project_tpp_id
	 *//*
	public int getProject_tpp_id() {
		return project_tpp_id;
	}



	*//**
	 * @param project_tpp_id the project_tpp_id to set
	 *//*
	public void setProject_tpp_id(int project_tpp_id) {
		this.project_tpp_id = project_tpp_id;
	}


*/
	/**
	 * @return the total_budget_gbp
	 */
	public int getTotal_budget_gbp() {
		return total_budget_gbp;
	}






	/**
	 * @param total_budget_gbp the total_budget_gbp to set
	 */
	public void setTotal_budget_gbp(int total_budget_gbp) {
		this.total_budget_gbp = total_budget_gbp;
	}



	/**
	 * @return the portfolio_id
	 *//*
	public int getPortfolio_id() {
		return portfolio_id;
	}



	*//**
	 * @param portfolio_id the portfolio_id to set
	 *//*
	public void setPortfolio_id(int portfolio_id) {
		this.portfolio_id = portfolio_id;
	}*/


          @OneToMany(mappedBy="project",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
    public Set<Rtp> getRtp() {
        return rtp;
    }

    public void setRtp(Set<Rtp> rtp) {
        this.rtp = rtp;
    }
    
    
    
    
    
    
    @ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.MERGE)
  	@JoinColumn(name="portfolio_id",
  	referencedColumnName="portfolio_id")
        public Portfolio getPortfolio() {
		return portfolio;
	}



	public void setPortfolio(Portfolio portfolio) {
		this.portfolio = portfolio;
	}












	@Override
	public String toString() {
		return "Project [project_id=" + project_id + ", project_name="
				+ project_name + ", project_description=" + project_description
				+ ", creator_id=" + creator_id + ", total_budget_gbp="
				+ total_budget_gbp + ", portfolio=" + portfolio + ", rtp="
				+ rtp + ", project_details=" + project_details + "]";
	}


public void clear(){
	this.project_description="";
	this.project_name="";
	this.total_budget_gbp=0;
}
	 




	
	

}
