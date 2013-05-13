package org.molplexdrug.EntityBean;



import static org.jboss.seam.ScopeType.SESSION;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Scope;


@Entity                                                                               
@Name("therapy_administration")                                                                            
@Scope(SESSION)                                                                        
@Table(name="therapy_administration") 
public class Therapy_Administration {

	
	private int thearapy_administration_id;
	private String therapy_administration_name;
	
	protected Set<Tpp_Goal> tpp_Goal=new HashSet<Tpp_Goal>();
	
	
	
	
	public Therapy_Administration() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	public int getThearapy_administration_id() {
		return thearapy_administration_id;
	}
	public void setThearapy_administration_id(int thearapy_administration_id) {
		this.thearapy_administration_id = thearapy_administration_id;
	}
	@Column(name = "therapy_administration_name" )
	public String getTherapy_administration_name() {
		return therapy_administration_name;
	}
	public void setTherapy_administration_name(String therapy_administration_name) {
		this.therapy_administration_name = therapy_administration_name;
	}
	@OneToMany(mappedBy = "therapy_administration", cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
	public Set<Tpp_Goal> getTpp_Goal() {
		return tpp_Goal;
	}

	public void setTpp_Goal(Set<Tpp_Goal> tpp_Goal) {
		this.tpp_Goal = tpp_Goal;
	}
	
	@Override
	public String toString() {
		return "Therapy_Administration [thearapy_administration_id="
				+ thearapy_administration_id + ", therapy_administration_name="
				+ therapy_administration_name + "]";
	}
	
}
