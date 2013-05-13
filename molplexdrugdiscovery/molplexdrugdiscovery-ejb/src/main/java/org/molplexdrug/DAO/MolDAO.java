package org.molplexdrug.DAO;


import java.util.HashMap;
import java.util.HashSet;
import java.util.List;

import javax.faces.event.ActionEvent;
import javax.faces.event.AjaxBehaviorEvent;

import org.molplexdrug.EntityBean.ChemistSynthesis;
import org.molplexdrug.EntityBean.Lab;

import org.molplexdrug.EntityBean.MolPojo;

public interface MolDAO {

	public List<MolPojo> getAllMol();
	
	public List<MolPojo> getCheckedMol(Integer rtpId,boolean check);
	
	//public List<MolPojo> findRtp();
	
	public List<MolPojo> getListmp();
	
	public void setListmp(List<MolPojo> listmp);
	
	public String pageDevelopmentPhaseId(ActionEvent event);
	public boolean isShowlabRequest();
	public void setShowlabRequest(boolean showlabRequest);
	
	public void getShowLabRequestAssign();
	public void resetList();
//	public List<Lab> getAllAssay(Integer rtpId);
	public List<Integer> getSelectedList();
	public void setSelectedList(List<Integer> selectedList) ;
	
	public boolean isRender();
	public void setRender(boolean render);
	public String updateManagerApproval();
	public boolean isRenderCol();
	public void setRenderCol(boolean renderCol);
	public boolean isRenderApp();
	public void setRenderApp(boolean renderApp) ;
	public String testRender1();
	
	
	//Lab request
	public List<Lab> getAllAssay(Integer rtpId);
	public String saveLabRequest();
	public Integer getAssayId(AjaxBehaviorEvent event);
	//public List<Lab> getAssayList();
//	public void setAssayList(List<Lab> assayList);
	public void getAssayId(Integer molId,Integer rtp_id,Integer assayId,String molName);
	public HashMap<Integer, MolPojo> getAddedMap();
	public void setAddedMap(HashMap<Integer, MolPojo> addedMap);
	//public List<MolPojo> getAllChemistSynthesis();
	public boolean isSavedlabRequest();
	public void setSavedlabRequest(boolean savedlabRequest);
	public String getChemistSynthesisOption();
	public void setChemistSynthesisOption(String chemistSynthesisOption);
	public HashMap<Integer, MolPojo> getAddedChemistMap();
	public void setAddedChemistMap(HashMap<Integer, MolPojo> addedChemistMap);
	public String addChemistSynthesisIntoList(AjaxBehaviorEvent event);
	
	public void addChemistSynthesisIntoList(Integer labRequestId);
	public List<MolPojo> getChemisList(List<Integer> lstLabReqId);
	public HashMap<Integer, String> getAddedMolNameMap();
	public void setAddedMolNameMap(HashMap<Integer, String> addedMolNameMap);
	public void setLstChemistSynth(List<MolPojo> lstChemistSynth);
	public List<MolPojo> getLstChemistSynth();
	public MolPojo getmPojo();
	public void setmPojo(MolPojo mPojo);
	public String saveChemistSynthesis(Integer chemistSynthesisId,ChemistSynthesis cs);
	public void assignChemistSynthesisValuetoPopup(MolPojo mp);
	public List<MolPojo> getChemistSynthesisWaitingForApproval();
	public void addRecordToApprove(Integer chemistId,MolPojo mp);
	public HashMap<Integer, MolPojo> getAddedForApproval();
	public void setAddedForApproval(HashMap<Integer, MolPojo> addedForApproval);
	public HashMap<Integer, ChemistSynthesis> getAddedForChemistSynthesis();
	public void setAddedForChemistSynthesis(
    HashMap<Integer, ChemistSynthesis> addedForChemistSynthesis);
	
	public String pageRatingId(String event); 
	public boolean isShowRating();
	public void setShowRating(boolean showRating);
	public void getShowRatingAssign();
	public void resetRate();
}
