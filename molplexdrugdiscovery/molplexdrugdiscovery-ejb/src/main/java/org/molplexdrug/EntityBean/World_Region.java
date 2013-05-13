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
@Name("world_region")                                                                            
@Scope(SESSION)                                                                        
@Table(name="world_region") 
public class World_Region implements Serializable {

	
	
	private int world_region_id;
	private String world_region_name;
	protected Set<World_Regions> world_regions=new HashSet<World_Regions>();
	
	public World_Region() {
		super();
	}
	
	
	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	public int getWorld_region_id() {
		return world_region_id;
	}
	public void setWorld_region_id(int world_region_id) {
		this.world_region_id = world_region_id;
	}

	public String getWorld_region_name() {
		return world_region_name;
	}
	public void setWorld_region_name(String world_region_name) {
		this.world_region_name = world_region_name;
	}
	
	
	
	
	
	
	
	
	@OneToMany(mappedBy="world_region",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	public Set<World_Regions> getWorld_regions() {
		return world_regions;
	}


	public void setWorld_regions(Set<World_Regions> world_regions) {
		this.world_regions = world_regions;
	}


	@Override
	public String toString() {
		return "World_Region [world_region_id=" + world_region_id
				+ ", world_region_name=" + world_region_name + "]";
	}
	
	
	
}
