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
/*Designed by */


/**
 * @author Gaithri Balakrishnan
 *
 */
@Entity
@Name("portfolio")
@Scope(SESSION)
@Table(name="portfolios")

public class Portfolio implements Serializable{
	
	private int portfolio_id;
	private String portfolio_name;
	//private int portfolio_organisation_id;
	private String portfolio_desc;
	public Organisation organisation;
	 protected Set<Project> project=new HashSet<Project>();
	public Portfolio(){}
	
		
	/**
	 * @param portfolio_id
	 * @param portfolio_name
	 * @param portfolio_organisation_id
	 * @param portfolio_desc
	 */
	/*public Portfolio(int portfolio_id, String portfolio_name,
			int portfolio_organisation_id, String portfolio_desc) {
		super();
		this.portfolio_id = portfolio_id;
		this.portfolio_name = portfolio_name;
		this.portfolio_organisation_id = portfolio_organisation_id;
		this.portfolio_desc = portfolio_desc;
	}*/


	/**
	 * @return the portfolio_id
	 */
	@Id @NotNull @GeneratedValue(strategy =GenerationType.IDENTITY)
    @Column(name="portfolio_id")
	public int getPortfolio_id() {
		return portfolio_id;
	}


	/**
	 * @param portfolio_id the portfolio_id to set
	 */
	public void setPortfolio_id(int portfolio_id) {
		this.portfolio_id = portfolio_id;
	}


	/**
	 * @return the portfolio_name
	 */
	public String getPortfolio_name() {
		return portfolio_name;
	}


	/**
	 * @param portfolio_name the portfolio_name to set
	 */
	public void setPortfolio_name(String portfolio_name) {
		this.portfolio_name = portfolio_name;
	}


	/**
	 * @return the portfolio_organisation_id
	 */
	/*public int getPortfolio_organisation_id() {
		return portfolio_organisation_id;
	}


	*//**
	 * @param portfolio_organisation_id the portfolio_organisation_id to set
	 *//*
	public void setPortfolio_organisation_id(int portfolio_organisation_id) {
		this.portfolio_organisation_id = portfolio_organisation_id;
	}*/


	/**
	 * @return the portfolio_desc
	 */
	public String getPortfolio_desc() {
		return portfolio_desc;
	}

	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.MERGE)
	@JoinColumn(name="portfolio_organisation_id",
	referencedColumnName="organisation_id")
	public Organisation getOrganisation() {
		return organisation;
	}


	public void setOrganisation(Organisation organisation) {
		this.organisation = organisation;
	}


	/**
	 * @param portfolio_desc the portfolio_desc to set
	 */
	public void setPortfolio_desc(String portfolio_desc) {
		this.portfolio_desc = portfolio_desc;
	}


	
	
	
	
	
	
	  @OneToMany(mappedBy="portfolio",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	public Set<Project> getProject() {
		return project;
	}


	public void setProject(Set<Project> project) {
		this.project = project;
	}


	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	/*@Override
	public String toString() {
		return "Portfolio [portfolio_id=" + portfolio_id + ", portfolio_name="
				+ portfolio_name + ", portfolio_organisation_id="
				+ portfolio_organisation_id + ", portfolio_desc="
				+ portfolio_desc + "]";
	}*/


	public void clear(){
		
		this.portfolio_name="";
		this.portfolio_desc="";
		this.organisation=null;
		this.project=null;
				
	}
	
	

}
