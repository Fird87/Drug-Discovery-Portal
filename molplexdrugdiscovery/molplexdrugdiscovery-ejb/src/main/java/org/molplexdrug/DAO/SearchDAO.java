package org.molplexdrug.DAO;

import java.util.List;

import javax.ejb.Local;

import org.molplexdrug.EntityBean.Compound_Properties;
import org.molplexdrug.EntityBean.Groups;
import org.molplexdrug.EntityBean.Portfolio;
import org.richfaces.model.Filter;

@Local
public interface SearchDAO {

	public List<Groups> getAllgroups();
	public List<Portfolio> getAllPortfolio();
	public List<Compound_Properties> getAllCompoundProperties();
	 public boolean filterGroupName(Object current);
	 public Filter<?> getFilterPortfolio();
	 public Filter<?> getFilterCompoundProperties();
	 
}
