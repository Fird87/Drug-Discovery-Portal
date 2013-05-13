package org.molplexdrug.EntityBean;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.jboss.seam.ScopeType;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Scope;

@Entity
@Name ("messages")
@Scope (ScopeType.SESSION)
@Table (name="messages")
public class Messages implements Serializable{
	
	private int msg_id;
	private String msg_detail;
	
	public Messages() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Messages(int msg_id, String msg_detail) {
		super();
		this.msg_id = msg_id;
		this.msg_detail = msg_detail;
		
	}
	
	
	
	public Messages(String msg_detail) {
		super();
		this.msg_detail = msg_detail;
	}
	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	@Column( name = "msg_id" )
	public int getMsg_id() {
		return msg_id;
	}
	public void setMsg_id(int msg_id) {
		this.msg_id = msg_id;
	}

	
	public String getMsg_detail() {
		return msg_detail;
	}
	public void setMsg_detail(String msg_detail) {
		this.msg_detail = msg_detail;
	}
	@Override
	public String toString() {
		return "msg_detail [msg_id=" + msg_id + ", msg_detail=" + msg_detail
				+  "]";
	}
	
	

}
