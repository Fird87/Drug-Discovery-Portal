package org.molplexdrug.Action;

import java.util.List;

import javax.ejb.Stateless;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.jboss.seam.annotations.In;
import org.jboss.seam.annotations.Logger;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.faces.FacesMessages;
import org.jboss.seam.log.Log;
import org.molplexdrug.DAO.GroupsDAO;
import org.molplexdrug.EntityBean.Groups;
import org.molplexdrug.EntityBean.Members;
import org.molplexdrug.EntityBean.Messages;
import org.molplexdrug.EntityBean.Organisation;
import org.molplexdrug.EntityBean.Therapy_Administration;

/**
 * @author Sajul Fitri
 * 
 */
@Stateless
@Name("groupsAction")
public class GroupsAction implements GroupsDAO {

	@In(create = false, required = false)
	private Groups groups;

	@In(create = false, required = false)
	private Organisation organisation;
	

	@In(create = true, required = false)
	private Messages messages;

	@PersistenceContext
	private EntityManager em;

	@Logger
	private static Log log;

	
	/*  private List<String> selectedItems;
      public List<String> getSelectedItems() {
          return selectedItems;
      }
   
      public void setSelectedItems(List<String> selectedItems) {
          this.selectedItems = selectedItems;
      }
 */
	/*
	 * (non-Javadoc)
	 * 
	 * @see org.molplexdrug.DAO.GroupsDAO#addGroups()
	 */
	public String addGroups() {
		// TODO Auto-generated method stub

		try {
			organisation=em.find(Organisation.class, organisation.getOrganisation_id());
			organisation.getGroup().add(groups);
			groups.setOrganisation(organisation);
			
			
			em.merge(groups);
			messages = em.find(Messages.class, messages.getMsg_id());
			if (messages != null) {
				return null;
			}
			messages = new Messages("Added new group " + groups.getGroup_name());
			em.persist(messages);
			FacesContext.getCurrentInstance().addMessage(
					null,
					new FacesMessage(FacesMessage.SEVERITY_INFO,
							"Successfull added groups "
									+ groups.getGroup_name(),
							"Successfull added groups "
									+ groups.getGroup_name()));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			FacesContext.getCurrentInstance().addMessage(
					null,
					new FacesMessage(FacesMessage.SEVERITY_ERROR,
							"Group name "+ groups.getGroup_name()+" already exists",
							"Group name "+ groups.getGroup_name()+" already exists"));
			log.info("Group name "+ groups.getGroup_name()+" already exists");
		}finally{
			groups.clear();
		}

		return null;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.molplexdrug.DAO.GroupsDAO#getAllOrg()
	 */
	public List<Organisation> getAllOrg() {
		// TODO Auto-generated method stub
		CriteriaBuilder qb = em.getCriteriaBuilder();
		CriteriaQuery<Organisation> query = qb.createQuery(Organisation.class);
		Root<Organisation> rootOrg = query.from(Organisation.class);
		query.select(rootOrg);
		List<Organisation> list = em.createQuery(query).getResultList();
		return list;
	}
	
	public List<Groups> getAllgroups() {
		// TODO Auto-generated method stub
		CriteriaBuilder qb = em.getCriteriaBuilder();
		CriteriaQuery<Groups> query = qb.createQuery(Groups.class);
		Root<Groups> rootgrp = query.from(Groups.class);
		query.select(rootgrp);
		List<Groups> list = em.createQuery(query).getResultList();
		return list;
	}

}
