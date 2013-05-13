package org.molplexdrug.EntityBean;


public class PipeLine {
	
	public String portfolioName;
	public String tppName;
	public Integer pipeWidth;
	public Integer pipeHeight;
	public String projectName;
	
    public String getPortfolioName() {
        return portfolioName;
    }

    public String getTppName() {
        return tppName;
    }

    public Integer getPipeWidth() {
        return pipeWidth;
    }

    public Integer getPipeHeight() {
        return pipeHeight;
    }
	

    @Override
	public String toString() {
		return "PipeLine [portfolioName=" + portfolioName + ", tppName="
				+ tppName + ", pipeWidth=" + pipeWidth + ", pipeHeight="
				+ pipeHeight + "]";
	}

	public void setPortfolioName(String portfolioName) {
        this.portfolioName = portfolioName;
    }

    public void setTppName(String tppName) {
        this.tppName = tppName;
    }

    public void setPipeWidth(Integer pipeWidth) {
        this.pipeWidth = pipeWidth;
    }

    public void setPipeHeight(Integer pipeHeight) {
        this.pipeHeight = pipeHeight;
    }

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	

}
