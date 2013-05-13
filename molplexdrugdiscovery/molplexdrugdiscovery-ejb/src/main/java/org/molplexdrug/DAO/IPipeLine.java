package org.molplexdrug.DAO;

import java.util.List;

import javax.ejb.Local;

import org.molplexdrug.EntityBean.PipeLine;

@Local
public interface IPipeLine {
	public List<PipeLine> getAllPortfolio(); 
	
	public List<PipeLine> getAllTpp(String pName); 
}
