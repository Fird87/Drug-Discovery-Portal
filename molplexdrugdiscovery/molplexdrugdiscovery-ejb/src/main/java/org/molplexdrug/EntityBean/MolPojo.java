package org.molplexdrug.EntityBean;

import java.io.Serializable;

public class MolPojo implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 3372154310640273179L;
	
	private Integer molId;
	private Integer rtp_id;
	private String molFile;
	private String molFileName;
	private String molRating;
	private String users;
	private boolean checked;
	private Integer assayId;
	private String displayeName;
	
	private String lab_request_name;
	
	private boolean approve;
	private boolean notApprove;
	
	

	//ChemistSynthesis
	private Integer chemist_synthesis_id;
	private Integer lab_request_id;
	private Double vendor_price;
	private Double manual_price;
	private Integer vendor_time;
	private Integer manual_time;
	private Integer vendor_risk;
	private Integer manual_risk;
	private Integer vendor_mg;
	private Integer manual_mg;
	
	private String manager_approval;
	private int rating_id;

	public boolean isChecked() {
		return checked;
	}



	public void setChecked(boolean checked) {
		this.checked = checked;
	}



	public MolPojo() {
		super();
		// TODO Auto-generated constructor stub
	}



	public MolPojo(Integer molId, String molFile, String molFileName) {
		super();
		this.molId = molId;
		this.molFile = molFile;
		this.molFileName = molFileName;
	}



	public String getMolFile() {
		return molFile;
	}

	public void setMolFile(String molFile) {
		this.molFile = molFile;
	}

	public String getMolFileName() {
		return molFileName;
	}

	public void setMolFileName(String molFileName) {
		this.molFileName = molFileName;
	}

	public Integer getMolId() {
		return molId;
	}

	public void setMolId(Integer molId) {
		this.molId = molId;
	}



	public Integer getRtp_id() {
		return rtp_id;
	}



	public void setRtp_id(Integer rtp_id) {
		this.rtp_id = rtp_id;
	}



	public String getMolRating() {
		return molRating;
	}



	public void setMolRating(String molRating) {
		this.molRating = molRating;
	}



	public String getUsers() {
		return users;
	}



	public void setUsers(String users) {
		this.users = users;
	}
	public Integer getLab_request_id() {
		return lab_request_id;
	}



	public void setLab_request_id(Integer lab_request_id) {
		this.lab_request_id = lab_request_id;
	}



	public Double getVendor_price() {
		return vendor_price;
	}



	public void setVendor_price(Double vendor_price) {
		this.vendor_price = vendor_price;
	}



	public Double getManual_price() {
		return manual_price;
	}



	public void setManual_price(Double manual_price) {
		this.manual_price = manual_price;
	}



	public Integer getVendor_time() {
		return vendor_time;
	}



	public void setVendor_time(Integer vendor_time) {
		this.vendor_time = vendor_time;
	}



	public Integer getManual_time() {
		return manual_time;
	}



	public void setManual_time(Integer manual_time) {
		this.manual_time = manual_time;
	}



	public Integer getVendor_risk() {
		return vendor_risk;
	}



	public void setVendor_risk(Integer vendor_risk) {
		this.vendor_risk = vendor_risk;
	}



	public Integer getManual_risk() {
		return manual_risk;
	}



	public void setManual_risk(Integer manual_risk) {
		this.manual_risk = manual_risk;
	}



	public Integer getVendor_mg() {
		return vendor_mg;
	}



	public void setVendor_mg(Integer vendor_mg) {
		this.vendor_mg = vendor_mg;
	}



	public Integer getManual_mg() {
		return manual_mg;
	}



	public void setManual_mg(Integer manual_mg) {
		this.manual_mg = manual_mg;
	}



	public String getManager_approval() {
		return manager_approval;
	}



	public void setManager_approval(String manager_approval) {
		this.manager_approval = manager_approval;
	}

	public Integer getAssayId() {
		return assayId;
	}



	public void setAssayId(Integer assayId) {
		this.assayId = assayId;
	}



	public Integer getChemist_synthesis_id() {
		return chemist_synthesis_id;
	}



	public void setChemist_synthesis_id(Integer chemist_synthesis_id) {
		this.chemist_synthesis_id = chemist_synthesis_id;
	}

	public String getLab_request_name() {
		return lab_request_name;
	}



	public void setLab_request_name(String lab_request_name) {
		this.lab_request_name = lab_request_name;
	}



	public String getDisplayeName() {
		return displayeName;
	}



	public void setDisplayeName(String displayeName) {
		this.displayeName = displayeName;
	}



	public boolean isApprove() {
		return approve;
	}



	public void setApprove(boolean approve) {
		this.approve = approve;
	}



	public boolean isNotApprove() {
		return notApprove;
	}



	public void setNotApprove(boolean notApprove) {
		this.notApprove = notApprove;
	}

	public int getRating_id() {
		return rating_id;
	}



	public void setRating_id(int rating_id) {
		this.rating_id = rating_id;
	}



	@Override
	public String toString() {
		return "MolPojo [molId=" + molId + ", rtp_id=" + rtp_id + ", molFile="
				+ molFile + ", molFileName=" + molFileName + ", molRating="
				+ molRating + ", users=" + users + ", checked=" + checked
				+ ", assayId=" + assayId + ", displayeName=" + displayeName
				+ ", lab_request_name=" + lab_request_name + ", approve="
				+ approve + ", notApprove=" + notApprove
				+ ", chemist_synthesis_id=" + chemist_synthesis_id
				+ ", lab_request_id=" + lab_request_id + ", vendor_price="
				+ vendor_price + ", manual_price=" + manual_price
				+ ", vendor_time=" + vendor_time + ", manual_time="
				+ manual_time + ", vendor_risk=" + vendor_risk
				+ ", manual_risk=" + manual_risk + ", vendor_mg=" + vendor_mg
				+ ", manual_mg=" + manual_mg + ", manager_approval="
				+ manager_approval + ", rating_id=" + rating_id + "]";
	}

	



	
}
