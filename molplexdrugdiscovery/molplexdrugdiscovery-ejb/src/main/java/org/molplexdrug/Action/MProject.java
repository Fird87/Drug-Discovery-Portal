package org.molplexdrug.Action;

public class MProject {

	public String project_name;
	public String portfolio_name;
	public String tppName;
	public int totalBudgetGdp;
	public String getProject_name() {
		return project_name;
	}
	public void setProject_name(String project_name) {
		this.project_name = project_name;
	}
	public String getPortfolio_name() {
		return portfolio_name;
	}
	public void setPortfolio_name(String portfolio_name) {
		this.portfolio_name = portfolio_name;
	}
	public String getTppName() {
		return tppName;
	}
	public void setTppName(String tppName) {
		this.tppName = tppName;
	}
	public int getTotalBudgetGdp() {
		return totalBudgetGdp;
	}
	public void setTotalBudgetGdp(int totalBudgetGdp) {
		this.totalBudgetGdp = totalBudgetGdp;
	}
	@Override
	public String toString() {
		return "MProject [project_name=" + project_name + ", portfolio_name="
				+ portfolio_name + ", tppName=" + tppName + ", totalBudgetGdp="
				+ totalBudgetGdp + "]";
	}
	
	
}
