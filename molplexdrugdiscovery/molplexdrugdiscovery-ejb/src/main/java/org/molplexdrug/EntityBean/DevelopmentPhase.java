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


/**
 * @author Firdaus
 *
 */

@Entity
@Name("developmentPhase")
@Scope(SESSION)
@Table(name="development_phase")
public class DevelopmentPhase  implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	protected Integer development_phase_id;
	protected String development_phase_name;
        
        protected Set<Rtp> rtp=new HashSet<Rtp>();

   
	
	/**
	 * @return the development_phase_id
	 */
	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY)
	@Column(name = "development_phase_id")
	
	public Integer getDevelopment_phase_id() {
		return development_phase_id;
	}
	
	/**
	 * @param development_phase_id the development_phase_id to set
	 */
	public void setDevelopment_phase_id(Integer development_phase_id) {
		this.development_phase_id = development_phase_id;
	}
	
	/**
	 * @return the development_phase_name
	 */
	public String getDevelopment_phase_name() {
		return development_phase_name;
	}
	
	/**
	 * @param development_phase_name the development_phase_name to set
	 */
	public void setDevelopment_phase_name(String development_phase_name) {
		this.development_phase_name = development_phase_name;
	}

          @OneToMany(mappedBy="developmentPhase",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
    public Set<Rtp> getRtp() {
        return rtp;
    }

    public void setRtp(Set<Rtp> rtp) {
        this.rtp = rtp;
    }
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "DevelopmentPhase [development_phase_id=" + development_phase_id
				+ ", development_phase_name=" + development_phase_name + "]";
	}
	
	

}
