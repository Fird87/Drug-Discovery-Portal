package org.molplexdrug.EntityBean;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.jboss.seam.ScopeType;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Scope;


/**
 * @author Jallilah Jeffri
 *
 */
@Entity
@Name ("experimental_result")
@Scope (ScopeType.SESSION)
@Table (name="experimental_result")

public class Experimental_Result implements Serializable {

	private static final long serialVersionUID = 1L;
	private int Experimental_result_id;
	private int structure_id;
	public int assay_id;
	private Date result_time_stamp;
	private double value;
	
	
	/**
	 * 
	 */
	public Experimental_Result() {
		super();
		// TODO Auto-generated constructor stub
	}
	/**
	 * @param experimental_result_id
	 * @param structure_id
	 * @param assay_id
	 * @param result_time_stamp
	 * @param value
	 */
	public Experimental_Result(int experimental_result_id, int structure_id,
			int assay_id, Date result_time_stamp, double value) {
		super();
		Experimental_result_id = experimental_result_id;
		this.structure_id = structure_id;
		this.assay_id = assay_id;
		this.result_time_stamp = result_time_stamp;
		this.value = value;
	}
	/**
	 * @return the experimental_result_id
	 */
	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	@Column( name = "Experimental_result_id" )
	public int getExperimental_result_id() {
		return Experimental_result_id;
	}
	/**
	 * @param experimental_result_id the experimental_result_id to set
	 */
	public void setExperimental_result_id(int experimental_result_id) {
		Experimental_result_id = experimental_result_id;
	}
	/**
	 * @return the structure_id
	 */
	public int getStructure_id() {
		return structure_id;
	}
	/**
	 * @param structure_id the structure_id to set
	 */
	public void setStructure_id(int structure_id) {
		this.structure_id = structure_id;
	}
	/**
	 * @return the assay_id
	 */
	public int getAssay_id() {
		return assay_id;
	}
	/**
	 * @param assay_id the assay_id to set
	 */
	public void setAssay_id(int assay_id) {
		this.assay_id = assay_id;
	}
	/**
	 * @return the result_time_stamp
	 */
	public Date getResult_time_stamp() {
		return result_time_stamp;
	}
	/**
	 * @param result_time_stamp the result_time_stamp to set
	 */
	public void setResult_time_stamp(Date result_time_stamp) {
		this.result_time_stamp = result_time_stamp;
	}
	/**
	 * @return the value
	 */
	public double getValue() {
		return value;
	}
	/**
	 * @param value the value to set
	 */
	public void setValue(double value) {
		this.value = value;
	}
	
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Experimental_Result [Experimental_result_id="
				+ Experimental_result_id + ", structure_id=" + structure_id
				+ ", assay_id=" + assay_id + ", result_time_stamp="
				+ result_time_stamp + ", value=" + value + "]";
	}
	
    
	
}
