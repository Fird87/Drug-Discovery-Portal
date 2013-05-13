package org.molplexdrug.EntityBean;

import static org.jboss.seam.ScopeType.SESSION;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Scope;

/**
 * @author Firdaus
 *
 */
@Entity
@Name("rtpGoal")
@Scope(SESSION)
@Table(name="rtp_goal")
public class RtpGoal implements Serializable{

   
	/**
	 * 
	 */
	protected static final long serialVersionUID = -3587148217609594997L;
	
	protected int rtp_goal_id;

   
	
	
	protected Rtp rtp;

  


	protected Compound_Properties compound_properties;

   
	
	
	protected LogicalOperator logical_operator;

	protected double rtp_goal_value;
	
	
        
        
        
        public RtpGoal() {}
	

	
	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY)
	@Column(name = "rtp_goal_id")
	public int getRtp_goal_id() {
		return rtp_goal_id;
	}
	public void setRtp_goal_id(int rtp_goal_id) {
		this.rtp_goal_id = rtp_goal_id;
	}
	
	public double getRtp_goal_value() {
		return rtp_goal_value;
	}
	public void setRtp_goal_value(double rtp_goal_value) {
		this.rtp_goal_value = rtp_goal_value;
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
	@JoinColumn(name="logical_operator_id",
	referencedColumnName="logical_operator_id")
    public LogicalOperator getLogical_operator() {
        return logical_operator;
    }

    public void setLogical_operator(LogicalOperator logical_operator) {
        this.logical_operator = logical_operator;
    }
	

       @ManyToOne(fetch=FetchType.LAZY,cascade=CascadeType.MERGE)
	@JoinColumn(name="compound_property_id",
	referencedColumnName="compound_property_id")
        public Compound_Properties getCompound_properties() {
               return compound_properties;
           }
	 public void setCompound_properties(Compound_Properties compound_properties) {
        this.compound_properties = compound_properties;
    }

	
	@Override
	public String toString() {
		return "RtpGoal [rtp_goal_id=" + rtp_goal_id + ", rtp=" + rtp
				+ ", compound_property=" + compound_properties
				+ ", logical_operator=" + logical_operator
				+ ", rtp_goal_value=" + rtp_goal_value + "]";
	}

public void clear(){
	this.rtp_goal_value=0.0;
	
}

}

	

	

	
	

