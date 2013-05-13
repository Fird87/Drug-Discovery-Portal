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

/**
 * @author Jallilah Jeffri
 * 
 */
@Entity
@Name("tpp")
@Scope(SESSION)
@Table(name ="tpp")
public class TPP implements Serializable {

	private int tpp_id;
	private String tpp_name;
	
	private String desired_effect;
	private String market_target_description;
	private int global_incidence;
	private int global_prevalence;
	private String target_condition;
	
	protected Set<Tpp_Goal> tpp_Goal = new HashSet<Tpp_Goal>();
	 protected Set<ProjectDetail> project_details=new HashSet<ProjectDetail>();
	 
	// protected Set<Rtp> rtp=new HashSet<Rtp>();

	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "tpp_id")
	public int getTpp_id() {
		return tpp_id;
	}
	
	public void setTpp_id(int tpp_id) {
		this.tpp_id = tpp_id;
	}
	
	
	public String getTpp_name() {
		return tpp_name;
	}


	public void setTpp_name(String tpp_name) {
		this.tpp_name = tpp_name;
	}


	public void clear() {
		this.tpp_name = "";
		this.desired_effect="";
		this.market_target_description="";
		this.target_condition="";
		this.global_incidence=0;
		this.global_prevalence=0;

	}

	
	@OneToMany(mappedBy = "tpp", cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
	public Set<Tpp_Goal> getTpp_Goal() {
		return tpp_Goal;
	}

	public void setTpp_Goal(Set<Tpp_Goal> tpp_Goal) {
		this.tpp_Goal = tpp_Goal;
	}

	 
	
	
	@Override
	public String toString() {
		return "TPP [tpp_id=" + tpp_id + ", tpp_name=" + tpp_name + "]";
	}

	 @OneToMany(mappedBy="tpp",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	public Set<ProjectDetail> getProject_details() {
		return project_details;
	}

	public void setProject_details(Set<ProjectDetail> project_details) {
		this.project_details = project_details;
	}

	/*@OneToMany(mappedBy="tpp",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	public Set<Rtp> getRtp() {
		return rtp;
	}

	public void setRtp(Set<Rtp> rtp) {
		this.rtp = rtp;
	}*/

	public String getDesired_effect() {
		return desired_effect;
	}

	public void setDesired_effect(String desired_effect) {
		this.desired_effect = desired_effect;
	}

	public String getMarket_target_description() {
		return market_target_description;
	}

	public void setMarket_target_description(String market_target_description) {
		this.market_target_description = market_target_description;
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

	public String getTarget_condition() {
		return target_condition;
	}

	public void setTarget_condition(String target_condition) {
		this.target_condition = target_condition;
	}

	
	
	
}
