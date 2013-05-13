package org.molplexdrug.Action;

import java.util.List;

public class TppDetail {
	
	public String tppName;
	public String appName;
	public String worldRegionName;
	public String companyName;
	public String sideEffectName;
	public String therapyAdminName;
	public String targetCondition;
	public int globalIncidence;
	public int globalPrevalence;
	public String desiredEffect;
	public String marketTargetDescription;
	public int approved_therapy_id;
	
	public List<Integer> world_regionsList;
	
	
	@Override
	public String toString() {
		return "TppDetail [tppName=" + tppName + ", appName=" + appName
				+ ", worldRegionName=" + worldRegionName + ", companyName="
				+ companyName + ", sideEffectName=" + sideEffectName
				+ ", therapyAdminName=" + therapyAdminName
				+ ", targetCondition=" + targetCondition + ", globalIncidence="
				+ globalIncidence + ", globalPrevalence=" + globalPrevalence
				+ ", desiredEffect=" + desiredEffect
				+ ", marketTargetDescription=" + marketTargetDescription
				+ ", approved_therapy_id=" + approved_therapy_id
				+ ", world_regionsList=" + world_regionsList + "]";
	}
	public int getApproved_therapy_id() {
		return approved_therapy_id;
	}
	public void setApproved_therapy_id(int approved_therapy_id) {
		this.approved_therapy_id = approved_therapy_id;
	}
	public List<Integer> getWorld_regionsList() {
		return world_regionsList;
	}
	public void setWorld_regionsList(List<Integer> world_regionsList) {
		this.world_regionsList = world_regionsList;
	}
	public String getTppName() {
		return tppName;
	}
	public void setTppName(String tppName) {
		this.tppName = tppName;
	}
	public String getAppName() {
		return appName;
	}
	public void setAppName(String appName) {
		this.appName = appName;
	}
	public String getWorldRegionName() {
		return worldRegionName;
	}
	public void setWorldRegionName(String worldRegionName) {
		this.worldRegionName = worldRegionName;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getSideEffectName() {
		return sideEffectName;
	}
	public void setSideEffectName(String sideEffectName) {
		this.sideEffectName = sideEffectName;
	}
	public String getTherapyAdminName() {
		return therapyAdminName;
	}
	public void setTherapyAdminName(String therapyAdminName) {
		this.therapyAdminName = therapyAdminName;
	}
	public String getTargetCondition() {
		return targetCondition;
	}
	public void setTargetCondition(String targetCondition) {
		this.targetCondition = targetCondition;
	}
	public int getGlobalIncidence() {
		return globalIncidence;
	}
	public void setGlobalIncidence(int globalIncidence) {
		this.globalIncidence = globalIncidence;
	}
	public int getGlobalPrevalence() {
		return globalPrevalence;
	}
	public void setGlobalPrevalence(int globalPrevalence) {
		this.globalPrevalence = globalPrevalence;
	}
	public String getDesiredEffect() {
		return desiredEffect;
	}
	public void setDesiredEffect(String desiredEffect) {
		this.desiredEffect = desiredEffect;
	}
	public String getMarketTargetDescription() {
		return marketTargetDescription;
	}
	public void setMarketTargetDescription(String marketTargetDescription) {
		this.marketTargetDescription = marketTargetDescription;
	}
	

}
