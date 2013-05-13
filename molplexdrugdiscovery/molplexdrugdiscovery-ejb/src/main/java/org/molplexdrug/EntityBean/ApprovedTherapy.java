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
@Name("approved_therapy")
@Scope(SESSION)
@Table(name ="approved_therapy")
public class ApprovedTherapy implements Serializable {

	private int approved_therapy_id;
	private String approved_therapy_name;
	
	private String synonyms;
	
	private String target_condition;
	
	private int global_incidence;
	
	private int global_prevalence;
	
	private int global_sales;
	
	private double economic_factor;
	
	//private int world_regions_id;
	
	private Company company;
	
	private World_Regions world_regions;
	
	protected Set<Tpp_Goal> tpp_Goal=new HashSet<Tpp_Goal>();
	
	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	@Column( name = "approved_therapy_id" )
	public int getApproved_therapy_id() {
		return approved_therapy_id;
	}

	public void setApproved_therapy_id(int approved_therapy_id) {
		this.approved_therapy_id = approved_therapy_id;
	}

	public String getApproved_therapy_name() {
		return approved_therapy_name;
	}

	public void setApproved_therapy_name(String approved_therapy_name) {
		this.approved_therapy_name = approved_therapy_name;
	}

	public String getSynonyms() {
		return synonyms;
	}

	public void setSynonyms(String synonyms) {
		this.synonyms = synonyms;
	}

	public String getTarget_condition() {
		return target_condition;
	}

	public void setTarget_condition(String target_condition) {
		this.target_condition = target_condition;
	}

	public int getGlobal_incidence() {
		return global_incidence;
	}

	public void setGlobal_incidence(int global_incidence) {
		this.global_incidence = global_incidence;
	}

	public int getGlobal_prevalence() {
		return global_prevalence;
	}

	public void setGlobal_prevalence(int global_prevalence) {
		this.global_prevalence = global_prevalence;
	}

	public int getGlobal_sales() {
		return global_sales;
	}

	public void setGlobal_sales(int global_sales) {
		this.global_sales = global_sales;
	}

	public double getEconomic_factor() {
		return economic_factor;
	}

	public void setEconomic_factor(double economic_factor) {
		this.economic_factor = economic_factor;
	}

	/*public int getWorld_regions_id() {
		return world_regions_id;
	}

	public void setWorld_regions_id(int world_regions_id) {
		this.world_regions_id = world_regions_id;
	}
*/
	
	@ManyToOne(fetch=FetchType.LAZY,cascade = CascadeType.MERGE)
    
	@JoinColumn(name="company_id",
		referencedColumnName="company_id")
	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}
	
	
	
	
@ManyToOne(fetch=FetchType.LAZY,cascade = CascadeType.MERGE)
    
	@JoinColumn(name="world_regions_id",
		referencedColumnName="world_regions_id")
	public World_Regions getWorld_regions() {
		return world_regions;
	}

	public void setWorld_regions(World_Regions world_regions) {
		this.world_regions = world_regions;
	}
	
	
	
	@OneToMany(mappedBy = "approved_therapy", cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
	public Set<Tpp_Goal> getTpp_Goal() {
		return tpp_Goal;
	}

	public void setTpp_Goal(Set<Tpp_Goal> tpp_Goal) {
		this.tpp_Goal = tpp_Goal;
	}

	@Override
	public String toString() {
		return "ApprovedTherapy [approved_therapy_id=" + approved_therapy_id
				+ ", approved_therapy_name=" + approved_therapy_name
				+ ", synonyms=" + synonyms + ", target_condition="
				+ target_condition + ", global_incidence=" + global_incidence
				+ ", global_prevalence=" + global_prevalence
				+ ", global_sales=" + global_sales + ", economic_factor="
				+ economic_factor + ", company=" + company + ", world_regions="
				+ world_regions + "]";
	}

	public void clear(){
		this.approved_therapy_name="";
		this.economic_factor=0.0;
		this.global_incidence=0;
		this.global_prevalence=0;
		this.global_sales=0;
		this.synonyms="";
		this.target_condition="";
	}


	

}
