package org.molplexdrug.EntityBean;

import java.io.Serializable;
import java.util.List;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

/**
 * @author  Sajul Fitri
 *
 */
@ManagedBean
@SessionScoped
public class OrganisationBean implements Serializable{
	
	private List<Organisation> org;

	public OrganisationBean() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @return the org
	 */
	public List<Organisation> getOrg() {
		return org;
	}

	/**
	 * @param org the org to set
	 */
	public void setOrg(List<Organisation> org) {
		this.org = org;
	}


	
	

}
