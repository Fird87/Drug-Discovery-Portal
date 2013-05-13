package org.molplexdrug.Action;




import java.util.ArrayList;

import java.util.List;

import javax.ejb.Stateless;
import javax.faces.event.AjaxBehaviorEvent;



import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;



import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import org.jboss.seam.ScopeType;
import org.jboss.seam.annotations.In;
import org.jboss.seam.annotations.Logger;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Scope;
import org.jboss.seam.annotations.Transactional;
import org.jboss.seam.faces.FacesMessages;
import org.jboss.seam.log.Log;

import org.molplexdrug.DAO.MemberDAO;
import org.molplexdrug.EntityBean.Groups;
import org.molplexdrug.EntityBean.Members;
import org.molplexdrug.EntityBean.User;


/**
 * @author Gaithri Balakrishnan
 *
 */
@Stateless
@Scope(ScopeType.PAGE)
@Name("addNewMember")
public class MemberAction implements MemberDAO {

	 @In(create = true, required = false)
		private Members member;
	         
   
		@PersistenceContext
		   private EntityManager em;
		
		
		@Logger
		   private static Log log;
		   
	       static ArrayList<String> mList =new ArrayList<String>();
	 
		
	        private List<String>PickedUser;
	        
	        
	       
	        
	        public MemberAction() {
	        }
	        private List<String> selectedItems;
	        public List<String> getSelectedItems() {
	            return selectedItems;
	        }
	     
	        public void setSelectedItems(List<String> selectedItems) {
	            this.selectedItems = selectedItems;
	        }
	   

		/**
		 * @return the pickedUser
		 */
	    public List<String> getPickedUser() {
			return PickedUser;
		}

		/**
		 * @param pickedUser the pickedUser to set
		 */
		public void setPickedUser(List<String> pickedUser) {
			PickedUser=pickedUser;
		}

		public List<User> getAllUser() {
				
		   		 CriteriaBuilder qb = em.getCriteriaBuilder();
		   		 CriteriaQuery<User> query = qb.createQuery(User.class);
		   		 Root<User> rootUser = query.from(User.class);
		   		 query.select(rootUser);
		   		 List<User> userList = em.createQuery(query).getResultList();
		   		 return userList;
			}
		  

			@Transactional
			public String addNewMember(){
				   System.out.println("List : " + this.selectedItems);	
		          for( String m: selectedItems){
		        	  
		        	  	member.setMember_name(m);
						System.out.println("Member name: " + m);
						member.setMember_group_id(member.getMember_group_id());
						System.out.println("Group : " + member.getMember_group_id());
						em.merge(member);
		          }
		          log.info("Added new user #{member.member_name}");
			        FacesMessages.instance().add("Successfully added user #{member.member_name}");
				return null;
			}
          
		
          
          /*Get All Members*/
          public List<Groups> getAllGroup() {
      		// TODO Auto-generated method stub
      		CriteriaBuilder qB = em.getCriteriaBuilder();
      		CriteriaQuery<Groups> q = qB.createQuery(Groups.class);
      		Root<Groups> rootGroups = q.from(Groups.class);
      		q.select(rootGroups);
      		List<Groups> lstGroups = em.createQuery(q).getResultList();
      		return lstGroups;
      	}		    
			
          //Get Group Id
      	public Integer getGroupId(AjaxBehaviorEvent ev){
  		  Object obj=ev.getComponent().getAttributes().get("value");
  	       if(null!=obj){
  	    	 	member.setMember_group_id((Integer)obj);
  	    	 	System.out.println(member.getMember_group_id());
  	    }
  	            return member.getMember_group_id();
  	   	}
			

}
