package org.molplexdrug.EntityBean;

import java.io.Serializable;

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
@Name ("user")
@Scope (ScopeType.SESSION)
@Table (name="user")
public class User implements Serializable{

	private int user_id;
	private String user_name;
	private String last_name;
	private String email;
	private String address;
	private String phone;
	private String user_password;
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public User(int user_id, String user_name, String last_name, String email,
			String address, String phone, String user_password) {
		super();
		this.user_id = user_id;
		this.user_name = user_name;
		this.last_name = last_name;
		this.email = email;
		this.address = address;
		this.phone = phone;
		this.user_password = user_password;
	}
	
	@Id @NotNull
	@GeneratedValue( strategy = GenerationType.IDENTITY )
	@Column( name = "user_id" )
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getUser_password() {
		return user_password;
	}
	public void setUser_password(String user_password) {
		this.user_password = user_password;
	}
	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", user_name=" + user_name
				+ ", last_name=" + last_name + ", email=" + email
				+ ", address=" + address + ", phone=" + phone
				+ ", user_password=" + user_password + "]";
	}
	
	
	
	
}
