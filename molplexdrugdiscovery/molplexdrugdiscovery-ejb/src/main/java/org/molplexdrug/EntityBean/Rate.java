package org.molplexdrug.EntityBean;

public class Rate {
	
	private String rating_name;
	private Integer rating_id;
	
	public String getRating_name() {
		return rating_name;
	}
	public void setRating_name(String rating_name) {
		this.rating_name = rating_name;
	}
	public Integer getRating_id() {
		return rating_id;
	}
	public void setRating_id(Integer rating_id) {
		this.rating_id = rating_id;
	}
	@Override
	public String toString() {
		return "Rate [rating_name=" + rating_name + ", rating_id=" + rating_id
				+ "]";
	}

	

	
}
