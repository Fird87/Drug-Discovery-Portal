package org.molplexdrug.DAO;

import java.util.List;

import org.molplexdrug.EntityBean.Organisation;
import org.molplexdrug.EntityBean.PipeLine;
import org.molplexdrug.EntityBean.Portfolio;

/**
 * @author  Gaithri Balakrishnan
 *
 */
public interface PortfolioDAO {
	
	 public String addportfolio();
	 public List<Organisation> getAllOrganisation();
	 public List<Portfolio> getAllPortfolio();
	 public List<PipeLine> getAllTpp(String portfolioName);
}
