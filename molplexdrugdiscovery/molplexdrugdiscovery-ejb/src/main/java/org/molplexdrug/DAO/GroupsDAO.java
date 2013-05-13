package org.molplexdrug.DAO;

import java.util.List;

import javax.ejb.Local;

import org.molplexdrug.EntityBean.Groups;
import org.molplexdrug.EntityBean.Organisation;

/**
 * @author Sajul Fitri
 *
 */
@Local
public interface GroupsDAO {
	 
	public String addGroups();
	public List<Organisation> getAllOrg();
	public List<Groups> getAllgroups();
	
}
