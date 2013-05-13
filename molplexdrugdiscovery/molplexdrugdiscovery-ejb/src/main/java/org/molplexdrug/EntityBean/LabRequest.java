package org.molplexdrug.EntityBean;

import static org.jboss.seam.ScopeType.SESSION;

import java.io.Serializable;
import java.util.HashSet;
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
import org.jboss.seam.annotations.Scope;


@Entity
@Name("lab_request")
@Scope(SESSION)
@Table(name="lab_request")
public class LabRequest implements Serializable{

	private static final long serialVersionUID = 1L;
	private int lab_request_id;
	
	private Assay assay;
	
	private Rtp rtp;
	
	private String lab_request_name;

	
	private Set<ChemistSynthesis> chemistSynthesis = new HashSet<ChemistSynthesis>();
	
	public LabRequest(){}

	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY)
	@Column(name = "lab_request_id")
	public int getLab_request_id() {
		return lab_request_id;
	}

	public void setLab_request_id(int lab_request_id) {
		this.lab_request_id = lab_request_id;
	}


	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.MERGE)
	@JoinColumn(name="assay_id",
	referencedColumnName="assay_id")
	public Assay getAssay() {
		return assay;
	}


	public void setAssay(Assay assay) {
		this.assay = assay;
	}
	
	@OneToMany(mappedBy="lab_request",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	public Set<ChemistSynthesis> getChemistSynthesis() {
		return chemistSynthesis;
	}

	public void setChemistSynthesis(Set<ChemistSynthesis> chemistSynthesis) {
		this.chemistSynthesis = chemistSynthesis;
	}

	
	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.MERGE)
	@JoinColumn(name="rtp_id",
	referencedColumnName="rtp_id")
	public Rtp getRtp() {
		return rtp;
	}
	
	public void setRtp(Rtp rtp) {
		this.rtp = rtp;
	}

	@Override
	public String toString() {
		return "LabRequest [lab_request_id=" + lab_request_id + ", assay="
				+ assay + ", rtp=" + rtp + ", lab_request_name="
				+ ", chemistSynthesis=" + chemistSynthesis
				+ "]";
	}

	
	
	public String getLab_request_name() {
		return lab_request_name;
	}

	public void setLab_request_name(String lab_request_name) {
		this.lab_request_name = lab_request_name;
	}

	
	
	
	

	

	
}
