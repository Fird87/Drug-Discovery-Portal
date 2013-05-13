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
 * @author Gaithri Balakrishnan
 *
 */
@Entity
@Name("compound_properties")
@Scope(SESSION)
@Table(name="compound_property")

public class Compound_Properties implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int compound_property_id;
	private String compound_property_name;
	private String compound_property_units;
	private String compound_property_symbol;
	private Set<RtpGoal> rtpGoal=new HashSet<RtpGoal>();
	private Set<Assay> assay=new HashSet<Assay>();
	
	
	
	
	/**
	 * @param compound_property_id
	 * @param compound_property_name
	 * @param compound_property_units
	 * @param compound_property_symbol
	 */
	public Compound_Properties(int compound_property_id,
			String compound_property_name, String compound_property_units,
			String compound_property_symbol) {
		super();
		this.compound_property_id = compound_property_id;
		this.compound_property_name = compound_property_name;
		this.compound_property_units = compound_property_units;
		this.compound_property_symbol = compound_property_symbol;
	}


	public Compound_Properties() {}
		
		
	

	/**
	 * @return the compound_property_id
	 */
	@Id @NotNull @GeneratedValue(strategy =GenerationType.IDENTITY)
    @Column(name="compound_property_id")
	public int getCompound_property_id() {
		return compound_property_id;
	}


	/**
	 * @param compound_property_id the compound_property_id to set
	 */
	public void setCompound_property_id(int compound_property_id) {
		this.compound_property_id = compound_property_id;
	}


	/**
	 * @return the compound_property_name
	 */
	
	public String getCompound_property_name() {
		return compound_property_name;
	}


	/**
	 * @param compound_property_name the compound_property_name to set
	 */
	public void setCompound_property_name(String compound_property_name) {
		this.compound_property_name = compound_property_name;
	}


	/**
	 * @return the compound_property_units
	 */
	public String getCompound_property_units() {
		return compound_property_units;
	}


	/**
	 * @param compound_property_units the compound_property_units to set
	 */
	public void setCompound_property_units(String compound_property_units) {
		this.compound_property_units = compound_property_units;
	}


	/**
	 * @return the compound_property_symbol
	 */
	public String getCompound_property_symbol() {
		return compound_property_symbol;
	}


	/**
	 * @param compound_property_symbol the compound_property_symbol to set
	 */
	public void setCompound_property_symbol(String compound_property_symbol) {
		this.compound_property_symbol = compound_property_symbol;
	}
        
 public void setRtpGoal(Set<RtpGoal> rtpGoal) {
        this.rtpGoal = rtpGoal;
    }

    @OneToMany(mappedBy="compound_properties",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
    public Set<RtpGoal> getRtpGoal() {
        return rtpGoal;
    }

    public void setAssay(Set<Assay> assay) {
		this.assay = assay;
	}
    
    @OneToMany(mappedBy="compound_properties",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	public Set<Assay> getAssay() {
		return assay;
	}


	

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Compound_Properties [compound_property_id="
				+ compound_property_id + ", compound_property_name="
				+ compound_property_name + ", compound_property_units="
				+ compound_property_units + ", compound_property_symbol="
				+ compound_property_symbol + "]";
	}

	public void clear(){
		this.compound_property_name="";
		this.compound_property_symbol="";
		this.compound_property_units="";
	}
	
}
