package org.molplexdrug.EntityBean;

import static org.jboss.seam.ScopeType.SESSION;

import java.io.Serializable;
import java.sql.Blob;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Scope;

@Entity
@Name("molBean")
@Scope(SESSION)
@Table(name = "mol_file")
public class MolBean implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int id;
	private Blob name;
	private String mol_name;
	
	private String user;
	private Rtp rtp;
	
	private Rating rating;
	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Blob getName() {
		return name;
	}

	public void setName(Blob name) {
		this.name = name;
	}

	public String getMol_name() {
		return mol_name;
	}

	public void setMol_name(String mol_name) {
		this.mol_name = mol_name;
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
	
	

	@ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.MERGE)
	@JoinColumn(name="rating_id",
	referencedColumnName="rating_id")
	public Rating getRating() {
		return rating;
	}
	
	 public void setRating(Rating rating) {
			this.rating = rating;
		}


	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public MolBean() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public MolBean(int id, Blob name, String mol_name) {
		super();
		this.id = id;
		this.name = name;
		this.mol_name = mol_name;
	}
	
	
	
}
