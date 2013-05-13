package org.molplexdrug.EntityBean;

import static org.jboss.seam.ScopeType.SESSION;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Out;
import org.jboss.seam.annotations.Scope;


/**
 * @author Gaithri
 *
 */
@Entity
@Name("member")
@Scope(SESSION)
@Table(name="members")
public class Members implements Serializable{
	
	private int member_id;
	private String member_name;
	private int member_group_id;	
	
	// protected List<Groups> group=new ArrayList<Groups>();
		
	public Members() {
		super();
		// TODO Auto-generated constructor stub
	
	}
	
	
/*
	 @OneToMany(mappedBy="member",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	public List<Groups> getGroup() {
		return group;
	}




	public void setGroup(List<Groups> group) {
		this.group = group;
	}
*/



	/**
	 * @param member_id
	 * @param member_name
	 * @param member_group_id
	 */
	public Members(int member_id, String member_name, int member_group_id) {
		super();
		this.member_id = member_id;
		this.member_name = member_name;
		this.member_group_id = member_group_id;
	}




	/**
	 * @return the member_id
	 */
	@Id @NotNull @GeneratedValue(strategy =GenerationType.IDENTITY)
    @Column(name="member_id")
	public int getMember_id() {
		return member_id;
	}


	/**
	 * @param member_id the member_id to set
	 */
	public void setMember_id(int member_id) {
		this.member_id = member_id;
	}



	/**
	 * @return the member_group_id
	 */
	public int getMember_group_id() {
		return member_group_id;
	}





	/**
	 * @return the member_name
	 */
	public String getMember_name() {
		return member_name;
	}









	/**
	 * @param member_name the member_name to set
	 */
	public void setMember_name(String member_name) {
		this.member_name = member_name;
	}









	/**
	 * @param member_group_id the member_group_id to set
	 */
	public void setMember_group_id(int member_group_id) {
		this.member_group_id = member_group_id;
		//this.member_group_id = 1;
	}





	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Members [member_id=" + member_id + ", member_name="
				+ member_name + ", member_group_id=" + member_group_id + "]";
	}




	public void clear(){
		this.member_name="";
		this.member_group_id=0;
	}



	
	
	

	
}
