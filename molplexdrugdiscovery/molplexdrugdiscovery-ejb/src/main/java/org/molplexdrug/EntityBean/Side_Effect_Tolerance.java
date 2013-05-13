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
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Scope;


@Entity                                                                               
@Name("side_effect_tolerance")                                                                            
@Scope(SESSION)                                                                        
@Table(name="side_effect_tolerance") 
public class Side_Effect_Tolerance implements Serializable {

	
	private int side_effect_tolerance_id;
	private String side_effect_tolerance_name;
	
	protected Set<Tpp_Goal> tpp_Goal=new HashSet<Tpp_Goal>();
	
	public Side_Effect_Tolerance() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	public int getSide_effect_tolerance_id() {
		return side_effect_tolerance_id;
	}
	public void setSide_effect_tolerance_id(int side_effect_tolerance_id) {
		this.side_effect_tolerance_id = side_effect_tolerance_id;
	}
	@Column(name = "side_effect_tolerance_name" )
	public String getSide_effect_tolerance_name() {
		return side_effect_tolerance_name;
	}
	public void setSide_effect_tolerance_name(String side_effect_tolerance_name) {
		this.side_effect_tolerance_name = side_effect_tolerance_name;
	}
	
	
	@OneToMany(mappedBy = "side_effect_tolerance", cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
	public Set<Tpp_Goal> getTpp_Goal() {
		return tpp_Goal;
	}

	public void setTpp_Goal(Set<Tpp_Goal> tpp_Goal) {
		this.tpp_Goal = tpp_Goal;
	}


	
	
	

}
