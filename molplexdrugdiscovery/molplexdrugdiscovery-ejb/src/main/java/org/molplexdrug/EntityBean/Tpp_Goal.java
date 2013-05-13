package org.molplexdrug.EntityBean;



import static org.jboss.seam.ScopeType.SESSION;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Scope;


@Entity                                                                               
@Name("tpp_goal")                                                                            
@Scope(SESSION)                                                                        
@Table(name="tpp_goal") 
public class Tpp_Goal implements Serializable {

	private int tpp_goal_id;
	
	protected TPP tpp;
	protected Side_Effect_Tolerance side_effect_tolerance;
	protected Therapy_Administration therapy_administration;
	protected Company company;
	protected ApprovedTherapy approved_therapy;
	protected World_Regions world_regions;
	
	

	public Tpp_Goal() {
	
		// TODO Auto-generated constructor stub
	}
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "tpp_id",referencedColumnName="tpp_id")
	public TPP getTpp() {
		return tpp;
	}
	public void setTpp(TPP tpp) {
		this.tpp = tpp;
	}
	
	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	public int getTpp_goal_id() {
		return tpp_goal_id;
	}
	public void setTpp_goal_id(int tpp_goal_id) {
		this.tpp_goal_id = tpp_goal_id;
	}
	


	
	
	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.MERGE)
	@JoinColumn(name="side_effect_tolerance_id",
	referencedColumnName="side_effect_tolerance_id")
public Side_Effect_Tolerance getSide_effect_tolerance() {
	return side_effect_tolerance;
}

public void setSide_effect_tolerance(Side_Effect_Tolerance side_effect_tolerance) {
	this.side_effect_tolerance = side_effect_tolerance;
}

 @ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.MERGE)
	@JoinColumn(name="thearapy_administration_id",
	referencedColumnName="thearapy_administration_id")
public Therapy_Administration getTherapy_administration() {
	return therapy_administration;
}

public void setTherapy_administration(
		Therapy_Administration therapy_administration) {
	this.therapy_administration = therapy_administration;
}

 @ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.MERGE)
	@JoinColumn(name="competitors_id",
	referencedColumnName="company_id")
public Company getCompany() {
	return company;
}

public void setCompany(Company company) {
	this.company = company;
}

 @ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.MERGE)
	@JoinColumn(name="comparator_id",
	referencedColumnName="approved_therapy_id")
public ApprovedTherapy getApproved_therapy() {
	return approved_therapy;
}

public void setApproved_therapy(ApprovedTherapy approved_therapy) {
	this.approved_therapy = approved_therapy;
}

 @ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.MERGE)
	@JoinColumn(name="world_regions_id",
	referencedColumnName="world_regions_id")
public World_Regions getWorld_regions() {
	return world_regions;
}

public void setWorld_regions(World_Regions world_regions) {
	this.world_regions = world_regions;
}

	
	
	
}
