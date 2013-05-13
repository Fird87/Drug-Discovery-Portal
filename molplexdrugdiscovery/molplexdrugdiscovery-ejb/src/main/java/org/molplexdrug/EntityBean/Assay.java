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
@Name("assay")                                                                            
@Scope(SESSION)                                                                        
@Table(name="assay") 
public class Assay implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private  int assay_id;
	private String assay_name;
	private String assay_description;
	private String assay_protocal;
	
	private int cost_per_compound_pence;
	private int target_id;
	
	private Compound_Properties compound_properties;

	 @OneToMany(mappedBy="assay",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	public Set<LabRequest> getLab_request() {
		return lab_request;
	}

	public void setLab_request(Set<LabRequest> lab_request) {
		this.lab_request = lab_request;
	}

	private Set<LabRequest> lab_request = new HashSet<LabRequest>();
	/**
	 * 
	 */
	public Assay() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	/**
	 * @param assay_id
	 * @param assay_name
	 * @param assay_description
	 * @param assay_protocal
	 * @param compound_property_id
	 * @param cost_per_compound_pence
	 * @param target_id
	 */
	

	/**
	 * @return the assay_id
	 */
	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	 @Column( name = "assay_id" )
	public int getAssay_id() {
		return assay_id;
	}

	

	/**
	 * @param assay_id the assay_id to set
	 */
	public void setAssay_id(int assay_id) {
		this.assay_id = assay_id;
	}

	/**
	 * @return the assay_name
	 */
	public String getAssay_name() {
		return assay_name;
	}

	/**
	 * @param assay_name the assay_name to set
	 */
	public void setAssay_name(String assay_name) {
		this.assay_name = assay_name;
	}

	/**
	 * @return the assay_description
	 */
	public String getAssay_description() {
		return assay_description;
	}

	/**
	 * @param assay_description the assay_description to set
	 */
	public void setAssay_description(String assay_description) {
		this.assay_description = assay_description;
	}

	/**
	 * @return the assay_protocal
	 */
	public String getAssay_protocal() {
		return assay_protocal;
	}

	/**
	 * @param assay_protocal the assay_protocal to set
	 */
	public void setAssay_protocal(String assay_protocal) {
		this.assay_protocal = assay_protocal;
	}

	
	

	/**
	 * @return the cost_per_compound_pence
	 */
	public int getCost_per_compound_pence() {
		return cost_per_compound_pence;
	}

	/**
	 * @param cost_per_compound_pence the cost_per_compound_pence to set
	 */
	public void setCost_per_compound_pence(int cost_per_compound_pence) {
		this.cost_per_compound_pence = cost_per_compound_pence;
	}

	/**
	 * @return the target_id
	 */
	public int getTarget_id() {
		return target_id;
	}

	/**
	 * @param target_id the target_id to set
	 */
	public void setTarget_id(int target_id) {
		this.target_id = target_id;
	}
	
	public void setCompound_properties(Compound_Properties compound_properties) {
		this.compound_properties = compound_properties;
	}
	
	 @ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.MERGE)
		@JoinColumn(name="compound_property_id",
		referencedColumnName="compound_property_id")
	public Compound_Properties getCompound_properties() {
		return compound_properties;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	 @Override
		public String toString() {
			return "Assay [assay_id=" + assay_id + ", assay_name=" + assay_name
					+ ", assay_description=" + assay_description
					+ ", assay_protocal=" + assay_protocal
					+ ", cost_per_compound_pence=" + cost_per_compound_pence
					+ ", target_id=" + target_id + "]";
		}

	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime
				* result
				+ ((assay_description == null) ? 0 : assay_description
						.hashCode());
		result = prime * result + assay_id;
		result = prime * result
				+ ((assay_name == null) ? 0 : assay_name.hashCode());
		result = prime * result
				+ ((assay_protocal == null) ? 0 : assay_protocal.hashCode());
		result = prime
				* result
				+ ((compound_properties == null) ? 0 : compound_properties
						.hashCode());
		result = prime * result + cost_per_compound_pence;
		result = prime * result
				+ ((lab_request == null) ? 0 : lab_request.hashCode());
		result = prime * result + target_id;
		return result;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Assay other = (Assay) obj;
		if (assay_description == null) {
			if (other.assay_description != null)
				return false;
		} else if (!assay_description.equals(other.assay_description))
			return false;
		if (assay_id != other.assay_id)
			return false;
		if (assay_name == null) {
			if (other.assay_name != null)
				return false;
		} else if (!assay_name.equals(other.assay_name))
			return false;
		if (assay_protocal == null) {
			if (other.assay_protocal != null)
				return false;
		} else if (!assay_protocal.equals(other.assay_protocal))
			return false;
		if (compound_properties == null) {
			if (other.compound_properties != null)
				return false;
		} else if (!compound_properties.equals(other.compound_properties))
			return false;
		if (cost_per_compound_pence != other.cost_per_compound_pence)
			return false;
		if (lab_request == null) {
			if (other.lab_request != null)
				return false;
		} else if (!lab_request.equals(other.lab_request))
			return false;
		if (target_id != other.target_id)
			return false;
		return true;
	}
	
	public void clear(){
		this.assay_name="";
		this.assay_description="";
		this.assay_protocal="";
		this.cost_per_compound_pence=0;
	}
   
	
	  
}
