package org.molplexdrug.DAO;

import java.util.List;

import org.molplexdrug.EntityBean.Messages;

public interface WallDAO {
	
	public List<Messages> wall_update();
	public String wall_insert();

}
