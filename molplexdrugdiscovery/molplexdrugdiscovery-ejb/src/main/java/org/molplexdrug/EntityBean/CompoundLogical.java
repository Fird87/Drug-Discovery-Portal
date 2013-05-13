package org.molplexdrug.EntityBean;

import java.io.Serializable;


/**
 * @author Firdaus
 *
 */
public class CompoundLogical implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	/**
	 * 
	 */
	public int compound_property_id;
	public int logical_operator_id;
	public String compound_property_name;
	public String logical_operator_symbol;
	public String compound_property_value;
	public double rtp_goal_value;
	public String compound_property_units;
	public String tpp_name;
	
		public String getTpp_name() {
		return tpp_name;
	}


	public void setTpp_name(String tpp_name) {
		this.tpp_name = tpp_name;
	}


		/**
	 * 
	 */
	public CompoundLogical() {
		super();
		// TODO Auto-generated constructor stub
	}




	/**
	 * @return the compound_property_id
	 */
	public int getCompound_property_id() {
		return compound_property_id;
	}


	/**
	 * @param compound_property_id the compound_property_id to set
	 */
	public void setCompound_property_id(int compound_property_id) {
		this.compound_property_id = compound_property_id;
	}


	/**
	 * @return the logical_operator_id
	 */
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
	 * @return the compound_property_name
	 */
	public String getCompound_property_name() {
		return compound_property_name;
	}


	/**
	 * @param compound_property_name the compound_property_name to set
	 */
	public void setCompound_property_name(String compound_property_name) {
		this.compound_property_name = compound_property_name;
	}



	/**
	 * @return the compound_property_value
	 */
	public String getCompound_property_value() {
		return compound_property_value;
	}


	/**
	 * @param compound_property_value the compound_property_value to set
	 */
	public void setCompound_property_value(String compound_property_value) {
		this.compound_property_value = compound_property_value;
	}


	/**
	 * @return the rtp_goal_value
	 */
	public double getRtp_goal_value() {
		return rtp_goal_value;
	}


	/**
	 * @param rtp_goal_value the rtp_goal_value to set
	 */
	public void setRtp_goal_value(double rtp_goal_value) {
		this.rtp_goal_value = rtp_goal_value;
	}


	/**
	 * @return the compound_property_units
	 */
	public String getCompound_property_units() {
		return compound_property_units;
	}


	/**
	 * @param compound_property_units the compound_property_units to set
	 */
	public void setCompound_property_units(String compound_property_units) {
		this.compound_property_units = compound_property_units;
	}


	public String getLogical_operator_symbol() {
		return logical_operator_symbol;
	}


	public void setLogical_operator_symbol(String logical_operator_symbol) {
		this.logical_operator_symbol = logical_operator_symbol;
	}


	@Override
	public String toString() {
		return "CompoundLogical [compound_property_id=" + compound_property_id
				+ ", logical_operator_id=" + logical_operator_id
				+ ", compound_property_name=" + compound_property_name
				+ ", logical_operator_symbol=" + logical_operator_symbol
				+ ", compound_property_value=" + compound_property_value
				+ ", rtp_goal_value=" + rtp_goal_value
				+ ", compound_property_units=" + compound_property_units
				+ ", tpp_name=" + tpp_name + "]";
	}


	

	

	


	
}