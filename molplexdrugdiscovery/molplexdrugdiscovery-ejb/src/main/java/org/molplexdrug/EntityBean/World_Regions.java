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
@Name("world_regions")                                                                            
@Scope(SESSION)                                                                        
@Table(name="world_regions") 
public class World_Regions implements Serializable {

	private int world_regions_id;
	
	private World_Region world_region;
	protected Set<ApprovedTherapy> aprTherapy=new HashSet<ApprovedTherapy>();
	protected Set<Tpp_Goal> tpp_Goal=new HashSet<Tpp_Goal>();
	
	public World_Regions() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	public int getWorld_regions_id() {
		return world_regions_id;
	}
	public void setWorld_regions_id(int world_regions_id) {
		this.world_regions_id = world_regions_id;
	}
	

	@ManyToOne(fetch=FetchType.LAZY,cascade = CascadeType.MERGE)
    
	@JoinColumn(name="world_region_id",
		referencedColumnName="world_region_id")
	public World_Region getWorld_region() {
		return world_region;
	}

	public void setWorld_region(World_Region world_region) {
		this.world_region = world_region;
	}

	@OneToMany(mappedBy="world_regions",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	public Set<ApprovedTherapy> getAprTherapy() {
		return aprTherapy;
	}
	public void setAprTherapy(Set<ApprovedTherapy> aprTherapy) {
		this.aprTherapy = aprTherapy;
	}
	
	@OneToMany(mappedBy = "world_regions", cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
	public Set<Tpp_Goal> getTpp_Goal() {
		return tpp_Goal;
	}

	public void setTpp_Goal(Set<Tpp_Goal> tpp_Goal) {
		this.tpp_Goal = tpp_Goal;
	}
	
	
}
