package org.molplexdrug.EntityBean;


import javax.faces.bean.SessionScoped;

import javax.faces.event.ValueChangeEvent;
import org.jboss.seam.annotations.In;

import org.jboss.seam.annotations.Name;
/**
 * @author Sajul Fitri
 *
 */
@Name ("tabBean")
@SessionScoped
public class TabBean {
	private String tab="LeaderBoard"; 
	private String selectedTab="LeaderBoard"; 
	private String selectedTabInDengue="LeaderBoard";
	
	
	public String getSelectedTabInDengue() {
		this.project.setProject_name("Dengue");
		return selectedTabInDengue;
	}


	public void setSelectedTabInDengue(String selectedTabInDengue) {
		this.selectedTabInDengue = selectedTabInDengue;
	}


	public void changeTab(ValueChangeEvent event) { 
	selectedTab = (String)event.getNewValue(); 
	} 
	

	/**
	 * @return the tab
	 */
	public String getTab() {
		return tab;
	}


	/**
	 * @param tab the tab to set
	 */
	public void setTab(String tab) {
		this.tab = tab;
               
	}


	/**
	 * @return the selectedTab
	 */
	public String getSelectedTab() {
	//	System.out.println("select  claled---");
                 this.project.setProject_name("LTAS"); 
                 return selectedTab;
	}


	/**
	 * @param selectedTab the selectedTab to set
	 */
	public void setSelectedTab(String selectedTab) {
		this.selectedTab = selectedTab;
	}
	
	@In(create = true,required=false)
	   private Project project;
        
        public void setProject(Project project) {
           
        this.project.setProject_name("LTAS"); 
    }

    public Project getProject() {
        return project;
    }
}
