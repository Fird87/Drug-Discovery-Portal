package org.molplexdrug.EntityBean;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
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

import org.jboss.seam.ScopeType;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Scope;


/**
 * @author  Gaithri Balakrishnan
 *
 */
@Entity
@Name ("organisation")
@Scope (ScopeType.SESSION)
@Table (name="organisation")
public class Organisation implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private int organisation_id;
	private String organisation_name;
	 protected List<Portfolio> portfolio=new ArrayList<Portfolio>();
	 protected List<Groups> group=new ArrayList<Groups>();
	
	public Organisation() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	  @OneToMany(mappedBy="organisation",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	public List<Portfolio> getPortfolio() {
		return portfolio;
	}


	public void setPortfolio(List<Portfolio> portfolio) {
		this.portfolio = portfolio;
	}

	  @OneToMany(mappedBy="organisation",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	  		public List<Groups> getGroup() {
		return group;
	}


	public void setGroup(List<Groups> group) {
		this.group = group;
	}


	/**
	 * @param organisation_id
	 * @param organisation_name
	 */
	public Organisation(int organisation_id, String organisation_name) {
		super();
		this.organisation_id = organisation_id;
		this.organisation_name = organisation_name;
	}


	/**
	 * @return the organisation_id
	 */
	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	@Column( name = "organisation_id" )
	public int getOrganisation_id() {
		return organisation_id;
	}


	/**
	 * @param organisation_id the organisation_id to set
	 */
	public void setOrganisation_id(int organisation_id) {
		this.organisation_id = organisation_id;
	}


	/**
	 * @return the organisation_name
	 */
	public String getOrganisation_name() {
		return organisation_name;
	}


	/**
	 * @param organisation_name the organisation_name to set
	 */
	public void setOrganisation_name(String organisation_name) {
		this.organisation_name = organisation_name;
	}


	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Organisation [organisation_id=" + organisation_id
				+ ", organisation_name=" + organisation_name + "]";
	}


	public void clear(){
		this.organisation_name="";
		this.portfolio=null;
	}
	

}
