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
@Name("project_details")                                                                            
@Scope(SESSION)                                                                        
@Table(name="project_details") 
public class ProjectDetail implements Serializable{

	private  int prj_detail_id;
	
	protected TPP tpp;
	protected Project project;  
	public ProjectDetail() {
		super();
		
	}
	

	
	/**
	 * @return the project_id
	 */

	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	 @Column( name = "prj_detail_id" )

	public int getPrj_detail_id() {
		return prj_detail_id;
	}






	public void setPrj_detail_id(int prj_detail_id) {
		this.prj_detail_id = prj_detail_id;
	}





    
    
    
    
  



	  @ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.MERGE)
	  	@JoinColumn(name="project_tpp_id",
	  	referencedColumnName="tpp_id")
	public TPP getTpp() {
		return tpp;
	}


	
	public void setTpp(TPP tpp) {
		this.tpp = tpp;
	}

	



	  
    @ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.MERGE)
  	@JoinColumn(name="project_id",
  	referencedColumnName="project_id")
    

	public Project getProject() {
		return project;
	}






	public void setProject(Project project) {
		this.project = project;
	}









	
	

}
