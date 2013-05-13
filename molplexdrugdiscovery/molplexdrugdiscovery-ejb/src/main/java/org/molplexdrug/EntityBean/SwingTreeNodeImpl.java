package org.molplexdrug.EntityBean;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

import javax.swing.tree.TreeNode;

import com.google.common.collect.Iterators;


public class SwingTreeNodeImpl implements TreeNode {
	private List<SwingTreeNodeImpl> childNodes;
	private String data;

	public SwingTreeNodeImpl(String data) {
		super();
		this.data = data;
	}

	public void addChild(SwingTreeNodeImpl child) {
		if (child != null) {
			if (childNodes == null) {
				childNodes = new ArrayList<SwingTreeNodeImpl>();
			}
			childNodes.add(child);
		}
	}


	public TreeNode getChildAt(int childIndex) {
		return (childNodes == null) ? null : childNodes.get(childIndex);
	}


	public int getChildCount() {
		return (childNodes == null) ? null : childNodes.size();
	}


	public TreeNode getParent() {
		return null;
	}

	public int getIndex(TreeNode node) {
		return (childNodes == null) ? null : childNodes.indexOf(node);
	}

	public boolean getAllowsChildren() {
		return true;
	}


	public boolean isLeaf() {
		return (childNodes == null);
	}


	public Enumeration<SwingTreeNodeImpl> children() {
		return Iterators.asEnumeration(childNodes.iterator());

	}
	
	

	public List<SwingTreeNodeImpl> getChildNodes() {
		return childNodes;
	}

	public void setChildNodes(List<SwingTreeNodeImpl> childNodes) {
		this.childNodes = childNodes;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	@Override
	public String toString() {
		return data;
	}
}