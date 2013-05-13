package org.molplexdrug.Action;

public class Approved_Therapy {
	
	public String approvedTherapy;
	
	public String wolrdRegionName;
	
	public String company;
	
	public String targetCondition;
	public String synonym;
	public int globalIncidence;
	public int globalPrevalance;
	public int globalSales;
	public double economicFactor;
	public String getApprovedTherapy() {
		return approvedTherapy;
	}
	public void setApprovedTherapy(String approvedTherapy) {
		this.approvedTherapy = approvedTherapy;
	}
	public String getWolrdRegionName() {
		return wolrdRegionName;
	}
	public void setWolrdRegionName(String wolrdRegionName) {
		this.wolrdRegionName = wolrdRegionName;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public String getTargetCondition() {
		return targetCondition;
	}
	public void setTargetCondition(String targetCondition) {
		this.targetCondition = targetCondition;
	}
	public String getSynonym() {
		return synonym;
	}
	public void setSynonym(String synonym) {
		this.synonym = synonym;
	}
	public int getGlobalIncidence() {
		return globalIncidence;
	}
	public void setGlobalIncidence(int globalIncidence) {
		this.globalIncidence = globalIncidence;
	}
	public int getGlobalPrevalance() {
		return globalPrevalance;
	}
	public void setGlobalPrevalance(int globalPrevalance) {
		this.globalPrevalance = globalPrevalance;
	}
	public int getGlobalSales() {
		return globalSales;
	}
	public void setGlobalSales(int globalSales) {
		this.globalSales = globalSales;
	}
	public double getEconomicFactor() {
		return economicFactor;
	}
	public void setEconomicFactor(double economicFactor) {
		this.economicFactor = economicFactor;
	}
	@Override
	public String toString() {
		return "ApprovedTherapy [approvedTherapy=" + approvedTherapy
				+ ", wolrdRegionName=" + wolrdRegionName + ", company="
				+ company + ", targetCondition=" + targetCondition
				+ ", synonym=" + synonym + ", globalIncidence="
				+ globalIncidence + ", globalPrevalance=" + globalPrevalance
				+ ", globalSales=" + globalSales + ", economicFactor="
				+ economicFactor + "]";
	}
	

}
