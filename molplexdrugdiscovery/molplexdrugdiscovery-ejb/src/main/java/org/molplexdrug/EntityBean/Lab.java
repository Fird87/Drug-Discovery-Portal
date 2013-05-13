package org.molplexdrug.EntityBean;

public class Lab {
	
	private String assay_name;
	private Integer assay_id;
	private Integer rtp_id;
	//private boolean checked;
	
	public String getAssay_name() {
		return assay_name;
	}
	public void setAssay_name(String assay_name) {
		this.assay_name = assay_name;
	}
	public Integer getAssay_id() {
		return assay_id;
	}
	public void setAssay_id(Integer assay_id) {
		this.assay_id = assay_id;
	}
	public Integer getRtp_id() {
		return rtp_id;
	}
	public void setRtp_id(Integer rtp_id) {
		this.rtp_id = rtp_id;
	}
	@Override
	public String toString() {
		return "Lab [assay_name=" + assay_name + ", assay_id=" + assay_id
				+ ", rtp_id=" + rtp_id + "]";
	}
/*	public boolean isChecked() {
		return checked;
	}
	public void setChecked(boolean checked) {
		this.checked = checked;
	}
	*/
	
}
