package org.molplexdrug.Action;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.jboss.seam.annotations.In;
import org.jboss.seam.annotations.Logger;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.log.Log;
import org.molplexdrug.DAO.WallDAO;
import org.molplexdrug.EntityBean.Compound_Properties;
import org.molplexdrug.EntityBean.LogicalOperator;
import org.molplexdrug.EntityBean.Messages;
import org.molplexdrug.EntityBean.Organisation;
import org.molplexdrug.EntityBean.User;

@Stateless
@Name("wallAction")
public class WallAction implements WallDAO {

	@In(create = true, required = false)
	private Messages messages;
	
	@In(create = true, required = false)
	private User user;
	
	 @PersistenceContext
	   private EntityManager em;
	   
	   @Logger
	   private static Log log;

	public List<Messages> wall_update() {
		// TODO Auto-generated method stub
		
	
		/*CriteriaBuilder qb = em.getCriteriaBuilder();
		 CriteriaQuery<Messages> query = qb.createQuery(Messages.class);
		 Root<Messages> rootCompundProperties = query.from(Messages.class);
		 query.select(rootCompundProperties);
		 List<Messages> list = em.createQuery(query).getResultList();
		*/
		List<Messages> lstMessages=new ArrayList<Messages>();
		Messages messages=null;
		String q= "SELECT M.msg_id, M.msg_detail FROM Messages M ORDER BY M.msg_id DESC";
		Query query = em.createQuery(q);
		List<Object[]> list = query.getResultList();
		for (Object[] objects : list) {
			messages=new Messages();
			messages.setMsg_detail((String)objects[1]);
			lstMessages.add(messages);
		}
		return lstMessages;
	}
	
	public String wall_insert(){
		em.merge(messages);
		 log.info("Added new message: #{messages.msg_detail}");
		
		return null;
		
	}

}
