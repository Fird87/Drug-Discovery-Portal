package org.molplexdrug.EntityBean;

import static org.jboss.seam.ScopeType.SESSION;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Scope;


/**
 * @author Sajul Fitri
 *
 */
@Entity
@Name("targets")
@Scope(SESSION)
@Table(name="targets")
public class Targets implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int target_id;
	private String target_name;
	private int target_assay_id;
	
	public Targets() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	/**
	 * @param target_id
	 * @param target_name
	 * @param target_assay_id
	 */
	public Targets(int target_id, String target_name, int target_assay_id) {
		super();
		this.target_id = target_id;
		this.target_name = target_name;
		this.target_assay_id = target_assay_id;
	}


	/**
	 * @return the target_id
	 */
	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	@Column( name = "target_id" )
	public int getTarget_id() {
		return target_id;
	}
	/**
	 * @param target_id the target_id to set
	 */
	public void setTarget_id(int target_id) {
		this.target_id = target_id;
	}
	/**
	 * @return the target_name
	 */
	public String getTarget_name() {
		return target_name;
	}
	/**
	 * @param target_name the target_name to set
	 */
	public void setTarget_name(String target_name) {
		this.target_name = target_name;
	}
	/**
	 * @return the target_assay_id
	 */
	public int getTarget_assay_id() {
		return target_assay_id;
	}
	/**
	 * @param target_assay_id the target_assay_id to set
	 */
	public void setTarget_assay_id(int target_assay_id) {
		this.target_assay_id = target_assay_id;
	}


	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Targets [target_id=" + target_id + ", target_name="
				+ target_name + ", target_assay_id=" + target_assay_id + "]";
	}


	

}
