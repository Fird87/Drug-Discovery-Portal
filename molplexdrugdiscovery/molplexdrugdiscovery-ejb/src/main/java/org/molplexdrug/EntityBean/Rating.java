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
@Name("rating")
@Scope(SESSION)
@Table(name="rating")
public class Rating implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Integer rating_id;
	private String rating_name;
	protected Set<MolBean> molBean=new HashSet<MolBean>();

	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY)
	@Column(name = "rating_id")
	public Integer getRating_id() {
		return rating_id;
	}

	public void setRating_id(Integer rating_id) {
		this.rating_id = rating_id;
	}

	public String getRating_name() {
		return rating_name;
	}

	public void setRating_name(String rating_name) {
		this.rating_name = rating_name;
	}

	@OneToMany(mappedBy="rating",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	public Set<MolBean> getMolBean() {
		return molBean;
	}

	public void setMolBean(Set<MolBean> molBean) {
		this.molBean = molBean;
	}

	
	
	
}
