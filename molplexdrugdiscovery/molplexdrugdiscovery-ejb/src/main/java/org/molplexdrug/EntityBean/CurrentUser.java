package org.molplexdrug.EntityBean;



//import org.jboss.portletbridge.extension.seam.PortalIdentity;
import org.molplexdrug.DAO.PortalIdentity2;
import org.jboss.seam.annotations.Name;


@Name("currentUser")
public class CurrentUser {

  private String username;



  public String getUsername() {
	  try{
	 if(PortalIdentity2.instance().isLoggedIn()){
		 username = PortalIdentity2.instance().getPrincipal().getName();
	 }
	  }
	  catch(Exception e){
		  System.out.println("=======Check the getUserName in CureentUser Class====");
	  }
    return username;
  }
}
