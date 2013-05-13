package org.molplexdrug.DAO;

import java.util.ArrayList;
import java.util.List;

import javax.faces.event.AjaxBehaviorEvent;


import org.molplexdrug.EntityBean.Groups;
import org.molplexdrug.EntityBean.Members;
import org.molplexdrug.EntityBean.User;



/**
 * @author Gaithri
 *
 */
public interface MemberDAO {
	

	public String addNewMember();
  	public List<String> getPickedUser();
	public void setPickedUser(List<String> pickedUser);
	public List<User> getAllUser();
	//public void getUserList(ArrayList<String> ev);
	public List<Groups> getAllGroup();
	public Integer getGroupId(AjaxBehaviorEvent ev);
    public List<String> getSelectedItems();
    public void setSelectedItems(List<String> selectedItems);
    
}
