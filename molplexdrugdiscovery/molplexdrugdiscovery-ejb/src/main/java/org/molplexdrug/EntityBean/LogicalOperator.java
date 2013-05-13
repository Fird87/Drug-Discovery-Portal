package org.molplexdrug.EntityBean;

import static org.jboss.seam.ScopeType.SESSION;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Scope;


/**
 * @author Firdaus
 *
 */
@Entity
@Name("logicalOperator")
@Scope(SESSION)
@Table(name="logical_operators")
public class LogicalOperator implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int logical_operator_id;
	private String logical_operator_name;
	private String logical_operator_symbol;
	private Set<RtpGoal> rtpGoal=new HashSet<RtpGoal>();
	
	
	/**
	 * 
	 */
	public LogicalOperator() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	/**
	 * @param logical_operator_id
	 * @param logical_operator_name
	 * @param logical_operator_symbol
	 */
	public LogicalOperator(int logical_operator_id,
			String logical_operator_name, String logical_operator_symbol) {
		super();
		this.logical_operator_id = logical_operator_id;
		this.logical_operator_name = logical_operator_name;
		this.logical_operator_symbol = logical_operator_symbol;
	}



	/**
	 * @return the logical_operator_id
	 */
	@Id @NotNull
	public int getLogical_operator_id() {
		return logical_operator_id;
	}
	/**
	 * @param logical_operator_id the logical_operator_id to set
	 */
	public void setLogical_operator_id(int logical_operator_id) {
		this.logical_operator_id = logical_operator_id;
	}
	/**
	 * @return the logical_operator_name
	 */
	public String getLogical_operator_name() {
		return logical_operator_name;
	}
	/**
	 * @param logical_operator_name the logical_operator_name to set
	 */
	public void setLogical_operator_name(String logical_operator_name) {
		this.logical_operator_name = logical_operator_name;
	}
	/**
	 * @return the logical_operator_symbol
	 */
	public String getLogical_operator_symbol() {
		return logical_operator_symbol;
	}
	/**
	 * @param logical_operator_symbol the logical_operator_symbol to set
	 */
	public void setLogical_operator_symbol(String logical_operator_symbol) {
		this.logical_operator_symbol = logical_operator_symbol;
	}

 public void setRtpGoal(Set<RtpGoal> rtpGoal) {
        this.rtpGoal = rtpGoal;
    }

    @OneToMany(mappedBy="logical_operator",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
    public Set<RtpGoal> getRtpGoal() {
        return rtpGoal;
    }


	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "LogicalOperator [logical_operator_id=" + logical_operator_id
				+ ", logical_operator_name=" + logical_operator_name
				+ ", logical_operator_symbol=" + logical_operator_symbol + "]";
	}
	
	
	
}
