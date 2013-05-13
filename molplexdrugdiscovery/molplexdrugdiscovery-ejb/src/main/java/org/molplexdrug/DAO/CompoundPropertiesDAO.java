package org.molplexdrug.DAO;

import java.util.List;

import javax.ejb.Local;

import org.molplexdrug.EntityBean.Compound_Properties;


/**
 * @author  Gaithri Balakrishnan
 *
 */
@Local
public interface CompoundPropertiesDAO {

	 public String addProperties();
	 public List<Compound_Properties> getAllCompoundProperties();
}
