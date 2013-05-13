package org.molplexdrug.DAO;

import java.util.List;

import javax.ejb.Local;

import org.molplexdrug.EntityBean.Lab;


/**
 * @author Firdaus
 *
 */
@Local
public interface LabRequestDAO {

	public List<Lab> getAllAssay(Integer rtpId);

	public void save();

	
}
