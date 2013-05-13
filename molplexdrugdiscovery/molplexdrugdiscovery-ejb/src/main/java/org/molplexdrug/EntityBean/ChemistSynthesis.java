package org.molplexdrug.EntityBean;

import static org.jboss.seam.ScopeType.SESSION;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Scope;

@Entity
@Name("chemistSynthesis")
@Scope(SESSION)
@Table(name="chemist_synthesis")
public class ChemistSynthesis implements Serializable {

	/**
	 * 
	 */
	
	
	private static final long serialVersionUID = 1L;
	private int chemist_synthesis_id;


	private LabRequest lab_request;
	private double vendor_price;
	private double manual_price;
	private int vendor_time;
	private int manual_time;
	private int vendor_risk;
	private int manual_risk;
	private int vendor_mg;
	private int manual_mg;
	private String manager_approval;
	private String show_manager;
	

	public ChemistSynthesis(){
	this.manager_approval="No";
	this.show_manager="NO";
	}
	
	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY)
	@Column(name = "chemist_synthesis_id")
	public int getChemist_synthesis_id() {
		return chemist_synthesis_id;
	}

	public void setChemist_synthesis_id(int chemist_synthesis_id) {
		this.chemist_synthesis_id = chemist_synthesis_id;
	}

	
	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.MERGE)
	@JoinColumn(name="lab_request_id",
	referencedColumnName="lab_request_id")
	public LabRequest getLab_request() {
		return lab_request;
	}

	public void setLab_request(LabRequest lab_request) {
		this.lab_request = lab_request;
	}

	
	public double getVendor_price() {
		return vendor_price;
	}

	public void setVendor_price(double vendor_price) {
		this.vendor_price = vendor_price;
	}

	public double getManual_price() {
		return manual_price;
	}

	public void setManual_price(double manual_price) {
		this.manual_price = manual_price;
	}

	public int getVendor_time() {
		return vendor_time;
	}

	public void setVendor_time(int vendor_time) {
		this.vendor_time = vendor_time;
	}

	public int getManual_time() {
		return manual_time;
	}

	public void setManual_time(int manual_time) {
		this.manual_time = manual_time;
	}

	public int getVendor_risk() {
		return vendor_risk;
	}

	public void setVendor_risk(int vendor_risk) {
		this.vendor_risk = vendor_risk;
	}

	public int getManual_risk() {
		return manual_risk;
	}

	public void setManual_risk(int manual_risk) {
		this.manual_risk = manual_risk;
	}

	public int getVendor_mg() {
		return vendor_mg;
	}

	public void setVendor_mg(int vendor_mg) {
		this.vendor_mg = vendor_mg;
	}

	public int getManual_mg() {
		return manual_mg;
	}

	public void setManual_mg(int manual_mg) {
		this.manual_mg = manual_mg;
	}

	public String getManager_approval() {
		return manager_approval;
	}

	public void setManager_approval(String manager_approval) {
		this.manager_approval = manager_approval;
	}


	
	public String getShow_manager() {
		return show_manager;
	}

	public void setShow_manager(String show_manager) {
		this.show_manager = show_manager;
	}

	public void clear(){
		this.vendor_price=0.0;
		this.manual_price=0.0;
		this.vendor_time=0;
		this.manual_time=0;
		this.vendor_risk=0;
		this.manual_risk=0;
		this.vendor_mg=0;
		this.manual_mg=0;
	}

	@Override
	public String toString() {
		return "ChemistSynthesis [chemist_synthesis_id=" + chemist_synthesis_id
				+ ", lab_request=" + lab_request + ", vendor_price="
				+ vendor_price + ", manual_price=" + manual_price
				+ ", vendor_time=" + vendor_time + ", manual_time="
				+ manual_time + ", vendor_risk=" + vendor_risk
				+ ", manual_risk=" + manual_risk + ", vendor_mg=" + vendor_mg
				+ ", manual_mg=" + manual_mg + ", manager_approval="
				+ manager_approval + ", show_manager=" + show_manager + "]";
	}
	
	

}
