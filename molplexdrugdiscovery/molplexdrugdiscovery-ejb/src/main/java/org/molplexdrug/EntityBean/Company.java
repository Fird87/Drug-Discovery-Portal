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
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Scope;


@Entity                                                                               
@Name("company")                                                                            
@Scope(SESSION)                                                                        
@Table(name="company") 
public class Company implements Serializable {
 
	
	private Integer company_id;
	
	
	private String company_name;
	
	protected Set<ApprovedTherapy> aprTherapy=new HashSet<ApprovedTherapy>();
	
	protected Set<Tpp_Goal> tpp_Goal=new HashSet<Tpp_Goal>();
	
	public Company() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Company(Integer company_id, String company_name) {
		super();
		this.company_id = company_id;
		this.company_name = company_name;
	}
	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	 @Column( name = "company_id" )
	public Integer getCompany_id() {
		return company_id;
	}
	public void setCompany_id(Integer company_id) {
		this.company_id = company_id;
	}
	
	
	public String getCompany_name() {
		return company_name;
	}
	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}
	@OneToMany(mappedBy="company",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	public Set<ApprovedTherapy> getAprTherapy() {
		return aprTherapy;
	}
	public void setAprTherapy(Set<ApprovedTherapy> aprTherapy) {
		this.aprTherapy = aprTherapy;
	}
	
	@OneToMany(mappedBy = "company", cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
	public Set<Tpp_Goal> getTpp_Goal() {
		return tpp_Goal;
	}

	public void setTpp_Goal(Set<Tpp_Goal> tpp_Goal) {
		this.tpp_Goal = tpp_Goal;
	}
	
	
	@Override
	public String toString() {
		return "Company [company_id=" + company_id + ", company_name="
				+ company_name + "]";
	}
	
}
