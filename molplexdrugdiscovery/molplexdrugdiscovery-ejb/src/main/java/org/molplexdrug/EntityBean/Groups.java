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
 * @author Sajul Fitri
 *
 */
@Entity
@Name ("groups")
@Scope (ScopeType.SESSION)
@Table (name="groups")
public class Groups implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private int group_id;
	private String group_name;
	private String group_desc;
	
	public int getGroup_member_id() {
		return group_member_id;
	}


	public void setGroup_member_id(int group_member_id) {
		this.group_member_id = group_member_id;
	}

	private int group_member_id;
	public Organisation organisation;
	
	
	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.MERGE)
	@JoinColumn(name="grp_organisation_id",
	referencedColumnName="organisation_id")
	public Organisation getOrganisation() {
		return organisation;
	}


	public void setOrganisation(Organisation organisation) {
		this.organisation = organisation;
	}


	public Groups() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	


	/**
	 * @return the group_id
	 */
	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	@Column( name = "group_id" )
		public int getGroup_id() {
		return group_id;
	}


	
	/**
	 * @param group_id the group_id to set
	 */
	public void setGroup_id(int group_id) {
		this.group_id = group_id;
	}


	/**
	 * @return the group_name
	 */
	public String getGroup_name() {
		return group_name;
	}


	/**
	 * @param group_name the group_name to set
	 */
	public void setGroup_name(String group_name) {
		this.group_name = group_name;
	}



	/**
	 * @return the group_desc
	 */
	public String getGroup_desc() {
		return group_desc;
	}


	/**
	 * @param group_desc the group_desc to set
	 */
	public void setGroup_desc(String group_desc) {
		this.group_desc = group_desc;
	}


public void clear(){
	this.group_name="";
	this.group_desc="";
	this.organisation=null;
}
	

}
