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
@Name("rtp")
@Scope(SESSION)
@Table(name="rtp")
public class Rtp implements Serializable {




	/**
	 * 
	 */
	protected static final long serialVersionUID = 967411762527461689L;
	protected int rtp_id;
	protected Set<RtpGoal> rtpGoal=new HashSet<RtpGoal>();
	protected DevelopmentPhase developmentPhase;
        protected  Project project;
      //  protected  TPP tpp;
        protected Set<MolBean> molBean = new HashSet<MolBean>();
    	protected Set<LabRequest> lab_request = new HashSet<LabRequest>();
	
	
	/*public Rtp() {
	this.rtp_project_id=rtp_project_id;
	this.rtp_development_phase_id=rtp_development_phase_id;
	
	}*/
	
   	 @OneToMany(mappedBy="rtp",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	public Set<LabRequest> getLab_request() {
			return lab_request;
		}


		public void setLab_request(Set<LabRequest> lab_request) {
			this.lab_request = lab_request;
		}


	public Rtp() {
	}


	@OneToMany(mappedBy="rtp",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	public Set<RtpGoal> getRtpGoal() {
		return rtpGoal;
	}


	public void setRtpGoal(Set<RtpGoal> rtpGoal) {
		this.rtpGoal = rtpGoal;
	}

	public Rtp(int rtp_id, int rtp_project_id, int rtp_development_phase_id) {
		super();
		this.rtp_id =rtp_id ;
		
		
		
	}
	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	@Column( name = "rtp_id" )
	public int getRtp_id() {
		return rtp_id;
	}


	public void setRtp_id(int rtp_id) {
		this.rtp_id = rtp_id;
	}


@ManyToOne(fetch=FetchType.LAZY,cascade = CascadeType.MERGE)
       
	@JoinColumn(name="rtp_development_phase_id",
		referencedColumnName="development_phase_id")
	public DevelopmentPhase getDevelopmentPhase(){
		return developmentPhase;
	}
	public void setDevelopmentPhase(DevelopmentPhase developmentPhase){
		this.developmentPhase=developmentPhase;
	} 
        
        
          @ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.MERGE)
	@JoinColumn(name="rtp_project_id",
	referencedColumnName="project_id")
    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

   /* @ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.MERGE)
   	@JoinColumn(name="tpp_id",
   	referencedColumnName="tpp_id")
	public TPP getTpp() {
		return tpp;
	}


	public void setTpp(TPP tpp) {
		this.tpp = tpp;
	}*/

	@OneToMany(mappedBy="rtp",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	public Set<MolBean> getMolBean() {
		return molBean;
	}


	public void setMolBean(Set<MolBean> molBean) {
		this.molBean = molBean;
	}
        
	



	

	
}
